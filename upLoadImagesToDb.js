import { readFileSync } from 'fs';

const img = readFileSync('images/1140982.jpg');
const b64 = Buffer.from(img).toString('base64');

console.log(b64);