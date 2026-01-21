import * as yup from 'yup';
import safeSchema from './safe-schema';

const signupSchema = safeSchema({
  name: yup.string().lowercase().trim().required(),
  email: yup.string().lowercase().trim().required(),
  password: yup.string().trim().required(),
  confirmed: yup.boolean().notRequired(),
});

export default signupSchema;
