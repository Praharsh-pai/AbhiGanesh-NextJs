const mail = require("./mail");

exports.handler = async (event, context, callback)=> {
try {
  let data = JSON.parse(event.body);
  let transporter = await mail.configure("sh024.webhostingservices.com", "inquiry@abhiganesh.com", "@bhiganesh@123");
  let response2 = await mail.sendMail(transporter,
    "inquiry@abhiganesh.com",
    data.email,
     "Investor questionnaire results",
     data.message
      );

  let response1 = await mail.sendMail(transporter,
     "inquiry@abhiganesh.com",
     "inquiry@abhiganesh.com",
      "Investor questionnaire results",
       `Hi!
       The following person has answered the questionnaire.
       Name: ${data.name}
       Email: ${data.email}
       Score: ${data.score}
       Thanks
       `
       );


  if(response1 && response2) {
    console.log("Response: ", response);
    callback(null, {
statusCode: response2.status,
body: response2.message
    });
}
} catch(err) {
  callback(null, {
statusCode: 500,
body: "Server error"
  });
}
}
