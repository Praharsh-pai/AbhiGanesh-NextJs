const mail = require("./mail");

exports.handler = async (event, context, callback)=> {
try {
  let data = JSON.parse(event.body);
  let transporter = await mail.configure("smtp.example.com", "dementor1901@gmail.com", "pAi199119#");
  let response2 = await mail.sendMail(transporter,
    "inquiry@abhiganesh.com",
    data.email,
     "Investor questionnaire results",
     data.message
      );

  let response1 = await mail.sendMail(transporter,
     "dementor1901@gmail.com",
     "dementor1901@gmail.com",
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
