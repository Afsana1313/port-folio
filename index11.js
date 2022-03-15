var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
//afsana2013nipa@gmail.com
var transport = {
    service: 'gmail',
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log("there is a lot of error");
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message
  var content = `name: ${name} \nemail: ${email} \nSubject: ${subject} \nmessage: ${message} `

  var mail = {
    from: name,
    to: 'afsana2013nipa@gmail.com',  // Change to email address that you want to receive messages on
    subject: subject,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
         status: 'success'
      })
  
      transporter.sendMail({
        from: "afsana2013nipa@gmail.com",
        to: email,
        subject: "Submission was successful",
        text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
      }, function(error, info){
        if(error) {
          console.log(error);
        } else{
          console.log('Message sent: ' + info.response);
        }
      });
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)