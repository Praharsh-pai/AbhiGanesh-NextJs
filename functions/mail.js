const mailer = require("nodemailer");

exports.configure = async (host, email, password)=> {
  return mailer.createTransport({
    host: host,
    port: 465,
    secure: true,
    auth: {
      user: email,
        pass: password
    },
    tls: {
      rejectUnauthorized: false
    }
});
};

exports.sendMail = async (transporter, from, to, subject, message)=> {
  console.log("Sending mail...");
  try {
  let response = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: message
});
if(response) {
  return {status: 200, message: "Mail sent"};
}
  } catch(err) {
    console.log(err)
    return {status: 400, message: "Mail not sent"};
  }
};
