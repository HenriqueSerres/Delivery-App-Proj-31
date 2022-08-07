const Joi = require('joi');

const REGISTER = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

const registerIsValid = (req, _res, next) => {
  const { error } = REGISTER.validate(req.body);

  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};

module.exports = registerIsValid;
