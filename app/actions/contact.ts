"use server";

import { Resend } from "resend";
import { ContactEmailTemplate } from "@/components/email/email-template";
import { render } from "@react-email/render";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your project"),
});

export type ContactState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    // Validate the form data
    const validatedData = contactSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.flatten().fieldErrors,
      };
    }

    const { name, email, company, service, message } = validatedData.data;

    // Render email template to HTML string manually to avoid React 19 peer-dependency issues
    const emailHtml = await render(
      ContactEmailTemplate({ name, email, company, service, message })
    );

    // Send the email using Resend
    const { error } = await resend.emails.send({
      from: "Portfolio Inquiry <onboarding@resend.dev>", // Resend's default test sender
      to: "nirmal23rathod@gmail.com",
      subject: `New Project Inquiry from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        success: false,
        message: "Failed to send your message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Message sent successfully! I will get back to you soon.",
    };
  } catch (error: any) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: error?.message || "An unexpected error occurred. Please try again.",
    };
  }
}
