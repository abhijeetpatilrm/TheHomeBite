const generateToken = (res, statusCode, user, isUser) => {
  try {
    const token = user.generateJwtToken();
    const data = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };

    if (isUser) {
      data.userToken = token;
    } else {
      data.address = user.address;
      data.rating = user.rating;
      data.isAuthorized = user.isAuthorized;
      data.providerToken = token;
    }

    return res.status(statusCode).json({
      success: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = generateToken;
