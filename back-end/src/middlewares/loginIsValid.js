const Joi = require('joi');

const LOGIN = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginIsValid = (req, _res, next) => {
  const { error } = LOGIN.validate(req.body);
  
  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};

module.exports = loginIsValid;