import chalk from "chalk";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_CLIENT_CALLBACK_URL
);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

const gmail = google.gmail({
  version: "v1",
  auth: oAuth2Client,
});

export async function otpVerificationMail(name, email, otp) {
  const mail = {
    from: process.env.ORGANIZATION_EMAIL_ID,
    to: email,
    subject: `${name}, here's your OTP to verify your email address with tyeb`,
    text: `Hey ${name}, please enter following OTP : ${otp}`,
  };
  const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: process.env.ORGANIZATION_EMAIL_ID,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN,
    },
  });
  await transport.sendMail(mail);
  console.log(`email send to : ${chalk.blue(email)}`);
}
