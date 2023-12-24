import nodemailer from "nodemailer"


export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kunalriggroup@gmail.com",
    pass : "effwjlztpqraapry",
  },
});