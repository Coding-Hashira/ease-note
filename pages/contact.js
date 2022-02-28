import React from "react";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | EaseNote</title>
      </Head>

      <div className="">
        <Navbar />
        <div className="">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default contact;
