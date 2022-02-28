import React, { useState } from "react";
import Button from "@material-tailwind/react/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../utils/firebase";
import image from "../public/Email.svg";
import Image from "next/image";
import Success from "./Success";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);

  const check = (inputField, name) => {
    if (inputField === "") {
      toast.error(`${name} is Required!!`);
      setIsError(true);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    check(name, "Name");
    check(email, "Email");
    check(message, "Message");

    if (!isError) {
      let dateSent = new Date();
      setLoading(true);
      await db
        .collection("contactForms")
        .add({
          name,
          email,
          message,
          dateSent,
        })
        .then((data) => {
          setSuccess(true);
          setLoading(false);
          setInterval(() => {
            router.push("/");
            setSuccess(false);
          }, 4000);
        })
        .catch((e) => console.log(e));
    }
  };

  return loading ? (
    <div className="calc-h flex justify-center items-center">
      <CircularProgress />
    </div>
  ) : success ? (
    <Success />
  ) : (
    <div className="flex items-center justify-between px-40 py-5">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl mb-1">Contact EaseNote Team</h1>
        <span className="text-xs">
          Feel Free To Contact Us. We're Always Open For Suggestions And
          Reviews.
        </span>
        <form action="/" className="w-full  space-y-6 py-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full focus:border p-2 outline-none focus:shadow-sky-500 neon duration-300 rounded-md focus:border-sky-500 transition-all border-gray-800 placeholder-shown:text-gray-800 text-gray-800 placeholder:text-gray-800 focus:outline-none border"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full focus:border p-2 outline-none focus:shadow-sky-500 neon duration-300 rounded-md focus:border-sky-500 transition-all border-gray-800 placeholder-shown:text-gray-800 text-gray-800 placeholder:text-gray-800 focus:outline-none border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            cols={5}
            rows={5}
            className="w-full resize-none focus:border p-2 outline-none focus:shadow-sky-500 neon duration-300 rounded-md focus:border-sky-500 transition-all border-gray-800 placeholder-shown:text-gray-800 text-gray-800 placeholder:text-gray-800 focus:outline-none border"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            color="blue"
            size="lg"
            block="true"
            ripple="light"
            onClick={submitForm}
            className="flex items-center rounded-3px-imp"
          >
            Submit
          </Button>
        </form>
        <ToastContainer
          theme="colored"
          position="top-right"
          pauseOnFocusLoss={false}
        />
      </div>
      <Image
        src={image}
        quality={100}
        height={500}
        objectFit="contain"
        className="mx-10"
        alt=""
      />
    </div>
  );
};

export default ContactForm;
