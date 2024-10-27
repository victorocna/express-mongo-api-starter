import * as yup from 'yup';
import safeSchema from './safe-schema';

const loginSchema = safeSchema({
  email: yup.string().lowercase().trim().required(),
  password: yup.string().trim().required(),
});

export default loginSchema;
