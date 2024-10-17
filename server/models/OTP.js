const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/emailVerificationTemplate");

const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    otp: {
        type:String,
        required:true,
    },
    createdAt: {
        type:Date,
        default:Date.now(),
        expires: 5*60,
	},
});


//a function -> to send emails
async function sendVerificationEmail(email, otp) {
    // Create a transporter to send emails

	// Define the email options

	// Send the email
    try{
        const mailResponse = await mailSender(email, "Verification Email from StudyNotion", emailTemplate(otp));
        console.log("Email sent Successfully: ", mailResponse.response);
    }
    catch(error) {
        console.log("error occured while sending mails: ", error);
        throw error;
    }
}

// Define a post-save hook to send email after the document has been saved
OTPSchema.pre("save", async function(next) {
   // Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
}) 



module.exports = mongoose.model("OTP", OTPSchema);

