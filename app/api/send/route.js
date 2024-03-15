// import { EmailTemplate } from "@/app/(components)/email-template";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function sendLoginNotification(user) {
//   const { data, error } = await resend.emails.send({
//     from: "Acme <onboarding@resend.dev>",
//     // to: ["delivered@resend.dev"],
//     to: user.email,
//     subject: "Welcome Mail",
//     react: EmailTemplate({ firstName: user.name }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// }


import { LoginEmail } from "@/components/emails/Login";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// FIXME Need to refactor this code
export default async function sendLoginNotification({user}) {
  // console.log(user);
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["souravb.1998@gmail.com", "delivered@resend.dev"],
    subject: "Welcome Mail",
    react: LoginEmail({ firstName: user.name,email:user.email }),
  });

  // Handle any error occurred during email sending
  if (error) {
    throw new Error("Error sending email: " + error.message);
  }

  // Return the data in case it's needed
  return data;
}
