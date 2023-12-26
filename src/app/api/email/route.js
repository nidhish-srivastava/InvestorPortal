import { transporter } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request){
    const {projectName,investmentAmount,phoneNumber,email} = await request.json()
    try {
        // const response = await transporter.sendMail({
        //     from : "kunalriggroup@gmail.com",
        //     to : email,
        //     subject : "Investment Interest Received Successfully",
        //     html : `<h2>We have successfully received your investment interest in our ${projectName} project for an amount of INR ${investmentAmount}</h2>
        //     <p>We will contact you shortly. Get in contact with this project lead  ${phoneNumber}</p>
        //     `
        // })
        await new Promise((resolve, reject) => {
            // verify connection configuration
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });
        const mailData = {
            from : "kunalriggroup@gmail.com",
                to : email,
                subject : "Investment Interest Received Successfully",
                html : `<h2>We have successfully received your investment interest in our ${projectName} project for an amount of INR ${investmentAmount}</h2>
                <p>We will contact you shortly. Get in contact with this project lead  ${phoneNumber}</p>
                `
        }
        
        const response = await new Promise((resolve,reject)=>{
            transporter.sendMail(mailData,(err,info)=>{
                if(err){
                    console.log(err);
                    reject(err)
                }
                else{
                    console.log(info);
                    resolve(info)
                }
            })
        })
        console.log(response);
        return NextResponse.json(response)
    } catch (error) {
        
    }
}