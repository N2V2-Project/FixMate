const Joi = require("joi");

module.exports.issueJoiSchema = Joi.object({
  name: Joi.string().trim().required().label("Name"),
  branch: Joi.string().trim().required().label("Branch"),
  section: Joi.string().trim().required().label("Section"),
  usn: Joi.string()
    .trim()
    .uppercase()
    .pattern(/^U\d{2}[A-Z]{2}\d{2}[A-Z]{1}\d{6}$/)
    .required()
    .label("USN")
    .messages({
      "string.pattern.base": "USN must be in the format U25UV22T043099",
    }),
  email: Joi.string().email().trim().lowercase().required().label("Email"),
  title: Joi.string().trim().required().label("Title"),
  issue: Joi.string().trim().required().label("Issue Description"),
  photo: Joi.string().uri().optional().allow("").label("Photo Link"),
  status: Joi.string()
    .valid("Pending", "In Progress", "Resolved")
    .optional()
    .label("Status"),
});
