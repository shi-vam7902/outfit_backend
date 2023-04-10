const mailer = require('nodemailer')

const sendMail = async (to, otp) => {
    // var otp = otp;
    // console.log(otp);
    const transporter = mailer.createTransport({

        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: "amit.royal223344@gmail.com",
            pass: "hpdmoifqrmzyoaox"
        }
    })
    const options = {
        from: 'amit.royal223344@gmail.com',
        to: to,
        subject: 'Welcome to RentalOutfit.com',
        html: '<p>Welcome to <h1>RentalOutfit.com</h1> We are delighted to have you as a customer and we cant wait to help you discover the perfect outfits to express your unique style. Our team at [RentalOutfit.com]is passionate about fashion and we strive to provide our customers with the latest trends and styles at affordable prices.Whether you are looking for casual wear, work attire, or a special occasion outfit, we have got you covered.We take pride in our excellent customer service and we are committed to ensuring that your shopping experience with us is enjoyable and stress- free.Our website is user-friendly, and we have a wide selection of outfits that you can browse at your convenience.If you need any assistance, our customer service team is always ready to help you.To help you get started, we are pleased to offer you a special discount on your first purchase.Use the code[MOJE DARIYA] at checkout to receive[50]% off your order.Thank you for choosing RentalOutfit.com as your go - to fashion destination.We are excited to have you as a customer and we look forward to helping you express your unique style with our outfits. <br><h1>Best regards,Amit Thakkar <br> RentalOutfit.com</h1></p><br><br> <img src="https://i.pinimg.com/originals/c8/79/18/c87918932b6ff007791e231b0aefce54.jpg" alt="LOGO" height="100px"/>',
    }

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}
const sendOtp = async (to, otp) => {
    var otp = otp;
    console.log(otp);
    const transporter2 = mailer.createTransport({

        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: "amit.royal223344@gmail.com",
            pass: "hpdmoifqrmzyoaox"
        }
    })
    const options = {
        from: 'amit.royal223344@gmail.com',
        to: to,
        subject: 'Your OTP for verification',
        html: `Your OTP for verification is <b>${otp}</b>.`
    }

    transporter2.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}
// const sendAttachments = async (to,name) => {

//     const transporter = mailer.createTransport({

//         service: 'gmail',
//         port: 465,
//         secure: true,
//         auth: {
//             user: "amit.royal223344@gmail.com",
//             pass: "hpdmoifqrmzyoaox"
//         }
//     })
//     const options = {
//         from: 'amit.royal223344@gmail.com',
//         to: to,
//         subject: 'OTP',
//         // html: '<h3>Welcome ' + name +'</h3><br><br><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtnk1kE-rNHQ1Z7o_pEvfWfjcB7A3ZY8icA&usqp=CAU"/>',
//         // attachments:[{
//         //     filename:'shiv.jpg',
//         //     path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Jw2cJRnIjTQwOVpryhFuBsc1WmqjSi2IqA&usqp=CAU'
//         // }]

//     }
//     transporter.sendMail(options, (err, info) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(info);
//         }
//     })
// }

module.exports = { sendOtp, sendMail }