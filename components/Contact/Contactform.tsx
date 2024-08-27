"use client";
import { sendContactForm } from "@/lib/ContactForm";
import { ArrowRight, MailIcon, MapPin, PhoneCall } from "lucide-react";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneCode, setPhoneCode] = useState(null);
    const [phone, setPhone] = useState(null);
    const [message, setMessage] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const emailSent = await sendContactForm(
            name,
            email,
            phoneCode,
            phone,
            message
        );

        if (emailSent) {
            // Set submitting to false and clear form fields
            setSubmitting(false);
            setName("");
            setEmail("");
            setPhoneCode("");
            setPhone("");
            setMessage("");

            // Notify success with Swal
            Swal.fire({
                title: "Success!",
                text: "Our team will reach you soon! Thanks",
                icon: "success",
            });



        } else {
            // Set submitting to false and notify failure
            setSubmitting(false);
            Swal.fire({
                title: "Failed!",
                text: "Form Submission Failed!",
                icon: "error",
            });
        }
    };

    return (
        <>
            <section className={`relative z-10 overflow-hidden  dark:bg-dark px-5 py-10 lg:p-20`}>
                <div class="container mx-auto">
                    <div class="flex flex-wrap -mx-4 lg:justify-center">

                        <div class="w-full  px-4 lg:w-1/2">
                            <div class="relative px-3  dark:bg-dark-2 sm:px-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg ">
                                <span class="block  text-xl font-semibold text-primary">
                                    Contact Us
                                </span>
                                <h2 class="text-dark  font-[antonio] font-title -mt-2 mb-6 text-[25px] font-bold uppercase sm:text-[40px] lg:text-[44px] xl:text-[50px]">
                                    GET IN TOUCH
                                </h2>
                                <form onSubmit={handleContactSubmit}>
                                    <div class="mb-4">
                                        <input
                                            type="text"
                                            required
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Name"
                                            class=" border-gray-300  text-body-color focus:border-primary w-full shadow-md border py-3 px-[14px] text-lg outline-none bg-gray-200 placeholder:text-gray-400 placeholder:font-[200]"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <input
                                            type="email"
                                            required
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            class=" border-gray-300  text-body-color focus:border-primary w-full shadow-md border py-3 px-[14px] text-lg outline-none bg-gray-200 placeholder:text-gray-400 placeholder:font-[200]"
                                        />
                                    </div>
                                    <div className="mb-4 flex gap-2 w-full">
                                        <input
                                            type="text"
                                            required
                                            name="phone_code"
                                            value={phoneCode}
                                            onChange={(e) => setPhoneCode(e.target.value)}
                                            placeholder="+91"
                                            class=" border-gray-300  text-body-color focus:border-primary w-[20%] shadow-md border py-3 px-[14px] text-lg outline-none bg-gray-200 placeholder:text-gray-400 placeholder:font-[200]"
                                        />
                                        <input
                                            type="number"
                                            required
                                            name="phone"
                                            value={phone}
                                            placeholder="9876543210"
                                            onChange={(e) => setPhone(e.target.value)}
                                            class=" border-gray-300  text-body-color focus:border-primary w-full shadow-md border py-3 px-[14px] text-lg outline-none bg-gray-200 placeholder:text-gray-400 placeholder:font-[200]"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <textarea
                                            rows="6"
                                            required
                                            name="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Your Message"
                                            class=" border-gray-300  text-body-color focus:border-primary w-full shadow-md border py-3 px-[14px] text-lg outline-none bg-gray-200 placeholder:text-gray-400 placeholder:font-[200]"

                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-[200px] text-base text-white p-3 transition border shadow-sm bg-primary hover:bg-opacity-60"
                                        >
                                            {submitting ? "Sending..." : (
                                                <>
                                                Send Message
                                                    <ArrowRight color="white" size={20} className="inline-block ml-1.5 " /> 
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="w-[90%] md:w-full mx-auto my-12 md:my-2    bg-blue-200 sm:p-12 lg:w-[40%]">
                            <div class="mb-12 max-w-[570px] lg:mb-0">
                                <span class="block  text-xl font-semibold text-primary">
                                    Find Us
                                </span>
                                <h2 class="text-dark  font-[antonio] font-title -mt-2 mb-6 text-[25px] font-bold uppercase sm:text-[40px] lg:text-[44px] xl:text-[50px]">
                                    In The Real World
                                </h2>
                                <p class="text-lg  text-gray-600 text-body-color dark:text-dark-6 mb-6">
                                    Thank you for exploring our website! We're excited to connect
                                    with you. If you have any questions, inquiries, or just want
                                    to say hello, feel free to reach out to us. We value your
                                    feedback and are here to assist you.
                                </p>
                                <div className="space-y-4 mt-8 text-sm">
                <div className="flex  items-center gap-2">
                  <div>
                    <MapPin  size={25} color="#00008b" />
                  </div>
                  <h2 className="text-base">
                  Gr floor Bhagyashree apartment Gupte chowk kalyan west,  Maharashtra 421301.
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={25} color="#00008b" />
                  <a href="tel:+919152709243" className="text-base">+91 97685 88108</a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon size={25} color="#00008b" />
                  <a href="mailto:Info@vcare.centre" className="text-base">
                    Info@vrubyengineering
                  </a>
                </div>
              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;
