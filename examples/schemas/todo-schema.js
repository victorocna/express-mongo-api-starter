import { boolean, object, string } from 'yup';

export default object()
  .shape({
    name: string().trim().required(),
    done: boolean(),
  })
  // removes unwanted or unknown fields
  .noUnknown(true);
