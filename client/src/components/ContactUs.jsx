import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "./Navbar";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Footer from "./Footer";
import img1 from "../images/contactus.jpg";
import "../index.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const gool = process.env.REACT_APP_GOOGLE;
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/reach/contact",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Message sent successfully!");
        setIsSubmitted(true);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("mail Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      reset();
      setIsSubmitted(false);
    }
  }, [isSubmitted, reset]);

  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Visit Our Location
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We are eagerly waiting to welcome you. Please visit us again and
              again.
            </p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2 rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${gool}&q=Hostel+K,NIT+Jamshedpur,+Jharkhand,+India`}
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-3">
                <section className="text-gray-600 body-font relative">
                  <div className="container mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Contact Us
                      </h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="md:w-1/2 lg:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label
                                htmlFor="name"
                                className="leading-7 text-sm text-gray-600"
                              >
                                Name:
                              </label>
                              <input
                                {...register("name", { required: true })}
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              />
                              {errors.name && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                              >
                                Email:
                              </label>
                              <input
                                {...register("email", { required: true })}
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              />
                              {errors.email && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="p-2 w-full">
                            <div className="relative">
                              <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-600"
                              >
                                Message
                              </label>
                              <textarea
                                {...register("message", { required: true })}
                                id="message"
                                name="message"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                              ></textarea>
                              {errors.message && (
                                <span className="text-red-500">
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="p-2 w-full">
                            <input
                              type="submit"
                              value="Send"
                              className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
