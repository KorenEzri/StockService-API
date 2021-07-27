import Joi from 'joi';
import { validGenders } from '../consts';

export const studentSchema = Joi.object({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().allow(null, ''),
  address: Joi.object(
    {
      value: Joi.string().required(),
      longitude: Joi.number().required(),
      latitude: Joi.number().required(),
    },
  ).allow(null, {}),
  language: Joi.string().default('he'),
  gender: Joi.string().valid(...validGenders).required(),
  dateOfBirth: Joi.date().required(),
});
