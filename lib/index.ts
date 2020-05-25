import { Type, Static } from '@sinclair/typebox';

export const optionalString = Type.Optional(Type.String());
export const instance: Static<typeof optionalString> = undefined;
