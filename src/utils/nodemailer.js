import nodemailer from "nodemailer"

const email = "kunalriggroup@gmail.com";
const pass = "RigGroup123";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};