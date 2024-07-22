import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home - Uniladder Consultancy",
  description:
    "Uni Ladder Consultancy is a London based international students recruitment agency.",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
