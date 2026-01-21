import * as yup from 'yup';
import safeSchema from './safe-schema';

const signupSchema = safeSchema({
  name: yup.string().trim().required(),
  email: yup.string().lowercase().trim().required(),
  password: yup.string().trim().min(8).required(),
});

export default signupSchema;
