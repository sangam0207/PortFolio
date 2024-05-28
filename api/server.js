const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors=require("cors");
const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

// Middleware to parse JSON request body
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hello I am from backend")
})
app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Create a transporter for sending emails
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        // Send email with provided details
        let info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Hello Sangam Shukla",
            html: `<html>
                <body>
    
                    <h2>My name is ${name}</h2>
                    <p>${message}</p>
                    <p>Please connect with me</p>
                    <a>${email}</a>
                </body>
            </html>`,
        });

        if (info.messageId) {
            return res.status(200).json({ success: true, message: "Message sent" });
        } else {
            return res.status(500).json({ success: false, message: "Server error" });
        }
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});
