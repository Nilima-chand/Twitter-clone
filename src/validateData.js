// src/validateData.js
import ajv from './ajvSetup';

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string', exampleKeyword: 'Mr.' },
  },
};

const validate = ajv.compile(schema);

const data = { name: 'Mr. Smith' };

const valid = validate(data);
if (!valid) {
  console.log(validate.errors);
} else {  console.log('Data is valid!');
}
