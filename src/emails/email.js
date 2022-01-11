const SgMail = require('@sendgrid/mail')

SgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendwelcomeemail = (email, name) => {
    SgMail.send({
        to: email,
        from: 'jegadesan@e2infosystems.com',
        subject: 'this is my first creation!',
        text: `welcome to Task App ${name}, let me know you get along with the app`
    })
    console.log('welcome mail sent')
}

const Deleteemail = (email, name) => {
    SgMail.send({
        to: email,
        from: 'jegadesan@e2infosystems.com',
        subject: 'this is my first creation!',
        text: `welcome to Task App ${name}, let me know you get along with the app`
    })
    console.log('welcome mail removed')
}
module.exports = {
    sendwelcomeemail,
    Deleteemail
}

