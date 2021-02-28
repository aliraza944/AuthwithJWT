const joi = require("Joi");

// validation
const registerValidation = (data) => {
  const joi = require("Joi");
  const schema = joi.object().keys({
    name: joi.string().min(6).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  });
  //  date validation
  return schema.validate(data);
};

const loginValidation = (data) => {
  const joi = require("Joi");
  const schema = joi.object().keys({
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  });
  //  date validation
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
