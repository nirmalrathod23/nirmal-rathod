import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export const ContactEmailTemplate = ({
  name,
  email,
  company,
  service,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New Portfolio Inquiry from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={heading}>New Project Inquiry</Heading>
        </Section>
        
        <Section style={body}>
          <Text style={text}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${email}`} style={link}>
              {email}
            </a>
          </Text>
          {company && (
            <Text style={text}>
              <strong>Company:</strong> {company}
            </Text>
          )}
          <Text style={text}>
            <strong>Service of Interest:</strong> {service}
          </Text>
          
          <Hr style={hr} />
          
          <Text style={text}>
            <strong>Project Details:</strong>
          </Text>
          <Text style={messageBox}>{message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmailTemplate;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#111827",
  padding: "24px 48px",
};

const heading = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
};

const body = {
  padding: "24px 48px",
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "12px 0",
};

const link = {
  color: "#3b82f6",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const messageBox = {
  backgroundColor: "#f9fafb",
  padding: "16px",
  borderRadius: "8px",
  color: "#1f2937",
  fontSize: "16px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
  border: "1px solid #f3f4f6",
};
