const nodemailer = require("nodemailer");
const env = require("dotenv");
env.config();

const mailSender = async (email, title, body) => {
  if (!email) {
    console.error("No recipients defined");
    return;
  }

  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587, // Add port if not already specified
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "THE HomeBite || by ABHIJEET PATIL",
      to: email,
      subject: title,
      html: body,
    });

    return info;
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

module.exports = mailSender;
