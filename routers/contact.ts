import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.DOMAIN,
    pass: process.env.PASS,
  },
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { receiver, subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.DOMAIN, // sender address
      to: receiver, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
    });
    return res.status(200).json("Email sent sucessfully");
  } catch (error) {
    console.log(error);
  }
});

export default router;
