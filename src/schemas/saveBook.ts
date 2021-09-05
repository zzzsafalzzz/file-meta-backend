import Joi from 'joi';

const saveBookSchema = Joi.object({
  fileName: Joi.string().required(),
  fileSize: Joi.number().required(),
  fileType: Joi.string().required(),
  lastModified: Joi.string().required()
});

export default saveBookSchema;
