const loginService = require('../services/loginService');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;    
    const result = await loginService.loginUser(email, password);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
};