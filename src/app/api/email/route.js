import { transporter } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request){
    const {projectName,investmentAmount,phoneNumber,email} = await request.json()
    try {
        const response = await  transporter.sendMail({
            from : "kunalriggroup@gmail.com",
            to : email,
            subject : "Investment Interest Received Successfully",
            html : `<h2>We have successfully received your investment interest in our ${projectName} project for an amount of INR ${investmentAmount}</h2>
            <p>We will contact you shortly. Get in contact with this project lead  ${phoneNumber}</p>
            `
        })
        return NextResponse.json(response)
    } catch (error) {
        
    }
}