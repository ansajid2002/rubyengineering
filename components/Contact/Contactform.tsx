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

            try {
                const response = await fetch('https://rubyeng.demo-web.live/wp-json/contact_form/v1/submit', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    contact:`${phone}`,
                    message,
                  }),
                });
          
                if (!response.ok) {
                  setSubmitting(false);
                  throw new Error('Network response was not ok');
                }
          
                const responseData = await response.json();
        
               
              } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
              }

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
            <section className={`relative z-10 overflow-hidden  dark:bg-dark px-5 py-10 lg:p-20 lg:pt-0`}>
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
                                <div class="relative p-3 border-t-4 border-b-4 border-primary rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
                   <form onSubmit={handleContactSubmit}>
                  <div class="mb-6">
                    <input
                      type="text"
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      class=" border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-md shadow-md border py-3 px-[14px] text-base outline-none"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="email"
                      required
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      class="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-md shadow-md border py-3 px-[14px] text-base outline-none"
                    />
                  </div>
                  <div className="mb-6 flex gap-2 w-full">
                 
                    <input
                      type="number"
                      required
                      name="phone"
                      value={phone}
                      placeholder="9876543210"
                      onChange={(e) => setPhone(e.target.value)}
                      className="dark:border-dark-3 border-gray-300 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-md shadow-md  border py-3 px-[14px] text-base outline-none"
                    />
                  </div>
                  <div class="mb-6">
                    <textarea
                      rows="6"
                      required
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      class="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded-md shadow-md border py-3 px-[14px] text-base outline-none"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="w-full text-base text-white p-3 transition border shadow-lg rounded-md bg-primary hover:bg-opacity-60"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
                </div>
           
                            </div>
                        </div>
                        <div class="w-[90%] md:w-full mx-auto my-12 md:my-2 rounded-lg    bg-blue-200 sm:p-12 lg:w-[40%]">
                            <div class="mb-12 max-w-[570px] lg:mb-0">
                                <span class="block  text-xl font-semibold text-primary">
                                    Find Us
                                </span>
                                <h2 class="text-dark  font-[antonio] font-title -mt-2 mb-6 text-[25px] font-bold uppercase sm:text-[40px] lg:text-[44px] xl:text-[50px]">
                                    In The Real World
                                </h2>
                                <p class="text-lg  text-gray-700 text-body-color dark:text-dark-6 mb-6">
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
                  Ruby Engineering Works
                  175 Memni building dimtimkar Road Nagpada near Darul Muadda Tower MUMBAI 400008
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={25} color="#00008b" />
                  <a href="tel:+919152709243" className="text-base">+91 97685 88108</a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon size={25} color="#00008b" />
                  <a href="mailto:ruby.e.works@gmail.com" className="text-base">
                  ruby.e.works@gmail.com
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
