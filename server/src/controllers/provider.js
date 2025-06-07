const bcrypt = require("bcrypt");
const providerModel = require("../models/provider");
const userModel = require("../models/user");
const generateToken = require("../utils/generateToken");
const uploads = require("../utils/cloudinaryUpload");
// const { sendEmail } = require('../utils/sendEmail');

exports.registerProvider = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, address } = req.body;

    const providerExists = await providerModel.findOne({ email });
    if (providerExists)
      return res
        .status(400)
        .json({ success: false, message: "Provider already exists" });

    const isUser = await userModel.findOne({ email });
    if (isUser)
      return res
        .status(400)
        .json({
          success: false,
          message: "Invalid email! Email exists as user",
        });

    let providerLogo = "";
    if (req.file) {
      const location = req.file.buffer;
      const result = await uploads(location);
      providerLogo = result.url;
    }

    const data = { name, email, password, phoneNumber, address, providerLogo };
    const provider = await providerModel.create(data);

    // You can enable email verification later if needed
    // await sendEmail({ email: ..., subject: ..., html: ... });

    generateToken(res, 201, provider, false);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.loginProvider = async (req, res) => {
  try {
    const { email, password } = req.body;

    const provider = await providerModel.findOne({ email });
    if (!provider)
      return res
        .status(404)
        .json({ success: false, message: "Invalid email or password" });

    const passwordMatch = await bcrypt.compare(password, provider.password);
    if (!passwordMatch)
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });

    if (!provider.isAuthorized)
      return res
        .status(403)
        .json({ success: false, message: "You are not authorized" });

    generateToken(res, 200, provider, false);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProviderDetails = async (req, res) => {
  try {
    if (!req?.provider)
      return res
        .status(404)
        .json({ success: false, message: "No provider found" });

    const provider = await providerModel
      .findById(req.provider._id)
      .select("-password");
    if (!provider)
      return res
        .status(404)
        .json({ success: false, message: "No provider found" });

    return res.status(200).json({ success: true, data: provider });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllProviders = async (req, res) => {
  try {
    const allProviders = await providerModel.find().select("-password");

    if (allProviders.length === 0)
      return res
        .status(404)
        .json({ success: false, message: "No providers found" });

    return res.status(200).json({ success: true, data: allProviders });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getProviderById = async (req, res) => {
  try {
    const { _id } = req.params;

    const provider = await providerModel.findById(_id).select("-password");
    if (!provider)
      return res
        .status(404)
        .json({ success: false, message: "Provider not found" });

    return res.status(200).json({ success: true, data: provider });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
