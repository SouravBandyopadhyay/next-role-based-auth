import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface LoginEmailProps {
  firstName: string;
  email: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const LoginEmail: React.FC<LoginEmailProps> = ({ firstName, email }) => {
  return (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/koala-logo.png`}
            width="170"
            height="50"
            alt="Next-Auth"
            style={logo}
          />
          <Text style={paragraph}>Hi {firstName},</Text>
          <Text style={paragraph}>
            Welcome to Next-Auth-Project, we`&apos;`re glad to have you back. Your email is{" "}
            {email}
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="#">
              Get started
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            The Sourav-Team
          </Text>
          <Hr style={hr} />
          <Text style={footer}>Remote</Text>
        </Container>
      </Body>
    </Html>
  );
};

LoginEmail.defaultProps = {
  firstName: "Sourav Bandyopadhyay", // Default first name for preview
};

export default LoginEmail;

const main: React.CSSProperties = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container: React.CSSProperties = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo: React.CSSProperties = {
  margin: "0 auto",
};

const paragraph: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer: React.CSSProperties = {
  textAlign: "center",
};

const button: React.CSSProperties = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr: React.CSSProperties = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer: React.CSSProperties = {
  color: "#8898aa",
  fontSize: "12px",
};
