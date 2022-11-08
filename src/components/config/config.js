// const contentful = require('contentful');
import { createClient } from 'contentful';
const accessToken = import.meta.env.VITE_TOKEN;
const space = import.meta.env.VITE_SPACE_ID;

export const client = createClient({
  space,
  accessToken
});
