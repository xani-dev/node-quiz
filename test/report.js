const sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
const fs = require('fs');

const test = require('./output.json');
const lint = fs.readFileSync('./lint.txt', 'utf8');

sendgrid.send({
  to: 'petridw@gmail.com',
  from: 'hello@codesmith.io',
  subject: 'Hack Hour Result',
  html: '<html><body><p>' + test + '</p><p>' + lint + '</p></body></html>'
});
