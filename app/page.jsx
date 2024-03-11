import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="hero-section bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 px-8 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to NextJS Auth Starter Template
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Get started quickly with authentication in your Next.js projects.
        </p>
        <Button
          asChild
          variant="link"
          className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-full shadow-lg font-semibold transition duration-300"
        >
          <Link href="/Public"> Get Started </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
