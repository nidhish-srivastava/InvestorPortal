import nodemailer from "nodemailer"


export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kunalriggroup@gmail.com",
    pass : process.env.NEXT_PUBLIC_NODEMAILER_PASS,
  },
});