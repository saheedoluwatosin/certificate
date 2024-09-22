
const nodemailer = require("nodemailer")
const { Cert } = require("./pdf")
const dotenv = require("dotenv").config()

const senduserEmail = async(email,name)=>{

    const filepath = Cert(name)
   
    const mailTransporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:`${process.env.USER}`,
            pass:`${process.env.PASS}`

        }
    })


const detailtosend = {
    from:`${process.env.USER}`,
    to: email,
    subject :"Certificate Of Completion",
    html: "<h1>Congrulation on completing the course</h1>",
    attachments: [
        {
          filename: `${name}_certificate.pdf`,
          path: filepath,
        },
      ],
}




try {
    const result = await mailTransporter.sendMail(detailtosend)
    console.log("Email sent successfully")
} catch (error) {
    
}
}




module.exports = {
    senduserEmail
}
