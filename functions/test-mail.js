const mail = require("./mail");

exports.handler = async (event, context, callback)=> {
try {
  let transporter = await mail.configure("sh024.webhostingservices.com", "inquiry@abhiganesh.com", "@bhiganesh@123");
  let response = await mail.sendMail(transporter, "inquiry@abhiganesh.com", "aksp89@gmail.com", "test mail", "hello");
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
