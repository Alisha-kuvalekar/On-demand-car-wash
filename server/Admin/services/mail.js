const nodemailer = require('nodemailer');


const mailToWasher = function(email){
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
           auth: {
                user: 'carwash0798@gmail.com',
                pass: 'wash01234',
             },
        secure: true,
    });
    
    
    const mailData = {
          from: 'carwash0798@gmail.com',  // sender address
          to: email,   // reciever
          subject: 'ACCOUNT DECLINED',
          text: 'Hey, sorry to inform you, but your registration as washer is declined by the Admin. Good luck for future endeavours!'   
    };
    
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    });
}


module.exports = { mailToWasher };