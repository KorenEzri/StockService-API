import nodemailer, { SendMailOptions } from 'nodemailer';
import Logger from '../logger/logger';

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendMail = async (options: SendMailOptions) => {
  try {
    await transporter.sendMail(options);
    return true;
  } catch ({ message }) {
    Logger.error(message);
    return false;
  }
};

export default transporter;
