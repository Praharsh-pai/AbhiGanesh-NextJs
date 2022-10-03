const mail = require("./mail");

exports.handler = async (event, context, callback)=> {
try {
  let data = JSON.parse(event.body);
  let transporter = await mail.configure("smtp.example.com", "dementor1901@gmail.com", "pAi199119#");
  let response = await mail.sendMail(transporter,
     "dementor1901@gmail.com",
     "dementor1901@gmail.com",
      "Message from website",
       `Hi!
       The following person has sent a message.
       Name: ${data.name}
       Email: ${data.email}
       Message: ${data.message}
       Thanks
       `
       );
  if(response) {
    console.log("Response: ", response);
    callback(null, {
statusCode: response.status,
body: response.message
    });
}
} catch(err) {
  callback(null, {
statusCode: 500,
body: `Server error: ${err}`
  });
}
}
