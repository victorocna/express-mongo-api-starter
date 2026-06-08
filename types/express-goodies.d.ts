// Ambient declarations for express-goodies, which ships no type definitions.
declare module 'express-goodies/functions/coffee' {
  const coffee: (...args: any[]) => any;
  export default coffee;
}

declare module 'express-goodies/functions/error' {
  const error: (...args: any[]) => any;
  export default error;
}

declare module 'express-goodies/functions/falsy' {
  const falsy: (value: unknown) => boolean;
  export default falsy;
}

declare module 'express-goodies/functions/safe-number' {
  const safeNumber: (value: unknown) => number;
  export default safeNumber;
}

declare module 'express-goodies/functions/safe-string' {
  const safeString: (value: unknown) => string;
  export default safeString;
}

declare module 'express-goodies/mongoose' {
  import type { Schema, SchemaDefinitionProperty } from 'mongoose';

  export const formatEmail: (schema: Schema) => void;
  export const hashPasswords: (schema: Schema) => void;
  export const paginate: (schema: Schema) => void;
  export const validate: (schema: Schema) => void;
  export const reference: SchemaDefinitionProperty;
}
