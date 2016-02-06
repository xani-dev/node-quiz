const sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

const test = require('./output.json');
const lint = require('./lint.txt');

sendgrid.send({
  to: 'petridw@gmail.com',
  from: 'hello@codesmith.io',
  subject: 'Hack Hour Result',
  html: '<html><body><p>' + test + '</p><p>' + lint + '</p></body></html>'
});
