const { contactUsEmail } = require("../mail/templates/contactFormRes")
const mailSender = require("../utils/mailSender")

exports.contactUsController = async (req, res) => {
  const { email, name, message } = req.body

  try {
    const emailRes = await mailSender(
      email,
      "We've Received Your Message Successfully",
      contactUsEmail(email, name, message)
    )
   
    return res.json({
      success: true,
      message: "Email send successfully",
    })
  } catch (error) {

   
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}