const path = require('path')
const { transporter, mailOptionsReceiving, mailOptionsSending } = require('../config/nodemailer')
const ejs = require('ejs')

const templateSender = (data, fileName) => {
    let htmlTemp
    ejs.renderFile(path.join(__dirname, '..', 'views', fileName), data, (err, html) => {
        if(err){
            console.log(`Error Rendering EJS File`)
            return;
        }
        htmlTemp = html
    })
    return htmlTemp
}

const sendMailToUser = (data) => {
    const htmlStr = templateSender(data, 'mailContentUser.ejs')
    transporter.sendMail({
        ...mailOptionsSending,
        to: data.email,
        html: htmlStr
    })
    console.log("sendMailToUser done")
}

const sendMailToClub = (data) => {
    const htmlStr = templateSender(data, 'mailContentWeb.ejs')
    transporter.sendMail({
        ...mailOptionsReceiving,
        from: data.email,
        html: htmlStr
    })
    console.log("sendMailToClub done")
}

exports.sendMail = async(req, res) => {
    try{
        const data = req.body
        console.log(data)
        sendMailToUser(data)
        sendMailToClub(data)
        res.status(200).json({message: "Success"})
    } catch(error){
        res.status(500).json({message: "Mail Server Error"})
    }
}