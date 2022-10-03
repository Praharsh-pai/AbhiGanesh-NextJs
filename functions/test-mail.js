const mail = require("./mail");

exports.handler = async (event, context, callback)=> {
try {
  let transporter = await mail.configure("smtp.example.com", "dementor1901@gmail.com", "pAi199119#");
  let response = await mail.sendMail(transporter, "dementor1901@gmail.com", "itzn637@gmail.com", "test mail", "hello");
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
body: "Server error"
  });
}
}
