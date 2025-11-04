import { motion } from "framer-motion";
import { contactData } from "../utils/contactData";
import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEamil] = useState("");
  const [message,setMessage] = useState("");


  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    to_email: "princeindia619@gmail.com",
    to_name: "Superman(Admin)",
};

    const publickey = "ERR0Nd90hYFXvfuiP";
    const serviceId =  "service_206n11w";
    const templateId = "template_1efi1wj";

    emailjs
      // .sendForm(serviceId, templateId, form.current, {
      //   publicKey: publickey,
      // })

      // with useState
      .send(serviceId, templateId, templateParams, {
        publicKey: publickey,
      })

      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message, try again.");
          console.error(error);
        }
      );
};

  return (
    <section id="contact" className="min-h-screen py-24 bg-gradient-to-r from-gray-800 to-gray-800">
      <div className="container max-w-[1100px] mx-auto px-6">

        {/* Section Heading */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <p className="text-green-400 font-extrabold text-lg mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8 p-6 bg-gray-900 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              {contactData.title}
            </h3>
            <p className="text-gray-300 mb-6">{contactData.description}</p>
            <ul className="text-gray-300 space-y-3 text-md">
              {contactData.info.map((item, index) => (
                <li key={index}><strong>{item.icon}{item.label}:</strong>{" "}{item.value}</li>
              ))}
            </ul>

            {/* <div className="mt-6">
              <iframe src={contactData.mapSrc} width="100%" height="300" style={{ border: 0 }} allowFullScreen=""
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl shadow-xl">
                </iframe>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          {/* <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 bg-gray-900 p-10 rounded-xl shadow-2xl" ref={form} onSubmit={sendEmail}
          > */}

          {/* with useState */}
          <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 bg-gray-900 p-10 rounded-xl shadow-2xl" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">

              {/* {["First Name", "Last Name"].map((placeholder, index) => (
              <input key={index} type="text" name="from_name" placeholder={placeholder} required className="w-full p-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"/>
              ))} */}

              {["First Name"].map((placeholder, index) => (
              <input key={index} type="text" name="from_name" placeholder={placeholder} required onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"
              />
              ))}
            </div>

            <input type="email" placeholder="Enter Your Email" name="from_email" required onChange={(e) => setEamil(e.target.value)} className="w-full p-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 
                focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300"/>

            <textarea
              placeholder="Tell us what we can help you with" name="message" required onChange={(e) => setMessage(e.target.value)} className="w-full p-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 
                focus:border-green-500 focus:ring-1 focus:ring-green-500 h-32 transition-all duration-300"
            ></textarea>

            {/* <div className="flex items-start mt-4">
              <input type="checkbox" className="h-6 w-6 mt-1 text-green-500" id="newsletter"/>
              <label htmlFor="newsletter" className="ml-2 text-gray-400 text-sm">
                I'd like to receive more information about the company. I
                understand and agree to the{" "}
                <a href="#" className="text-green-500 underline">
                  Privacy Policy.
                </a>
              </label>
            </div> */}

            <button type="submit" className="w-full px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-500 hover:scale-105 transition-all duration-300 flex justify-center">
              Send Message <IoIosSend className="w-7 h-7"/>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact