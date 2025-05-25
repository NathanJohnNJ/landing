'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND);
export async function sendEmail(details){
    resend.emails.send({
      from: 'update@landing.njtd.xyz',
      to: 'nj@njtd.xyz',
      subject: 'New contact form enquiry',
      plainText: `Please find the deails below of the new contact enquiry - 
      Name: ${details.name}, 
      ${ !details.anyTime ? `Best Time: ${details.bestTime}` : `Any Time: ${details.anyTime}` },
      Phone: ${details.phone}, 
      ${details.email && `Email: ${details.email}` }, 
      Query: ${details.query}, 
      Query Time: ${details.queryTime}`,
      html: `Please find the deails below of the new contact enquiry - <br/>
      Name: ${details.name} <br/>
      ${ !details.anyTime ? `Best Time: ${details.bestTime}<br/>` : `Any Time: ${details.anyTime}<br/>` }
      Phone: ${details.phone} <br/>
      ${details.email && `Email: ${details.email}<br/>` } 
      Query: ${details.query} <br/>
      Query Time: ${details.queryTime}`,
    });
  }