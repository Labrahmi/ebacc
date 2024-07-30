"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
        Contact Us
      </h1>
      <div className="py-8"></div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="grid gap-6">
          <ContactCard
            href="https://maps.app.goo.gl/D95UqUnZNwDQ9RDx5"
            iconPath="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
            title="Address"
            content="London Academy, Casablanca"
          />
          <ContactCard
            href="tel:+212684290290"
            iconPath="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            title="Phone number"
            content={
              <>
                <div className="text-gray-500">During working hours only</div>
                <div className="font-semibold">+212 684 290 290</div>
              </>
            }
          />
          <ContactCard
            href="mailto:contact@ebacc.ma"
            iconPath="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            title="Email"
            content="contact@ebacc.ma"
          />
          <ContactCard
            href="#"
            iconPath="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            title="Schedules"
            content={
              <>
                <div>Monday - Saturday</div>
                <div className="font-semibold">8:00 AM - 17:00 PM</div>
              </>
            }
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 shadow-xl rounded-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Contact Us!</h2>
          <p className="text-gray-600 mb-6">
            Fill up the form below to send us a message
          </p>
          <form className="space-y-4" action="#" method="POST">
            <input
              required
              type="text"
              name="name"
              id="name"
              className="w-full p-3 border-b border-gray-300 focus:border-gray-700 rounded focus:outline-none transition"
              placeholder="Full Name*"
            />
            <input
              required
              type="email"
              name="email"
              id="email"
              className="w-full p-3 border-b border-gray-300 focus:border-gray-700 rounded focus:outline-none transition"
              placeholder="Email Address*"
            />
            <input
              required
              type="tel"
              name="tel"
              id="tel"
              className="w-full p-3 border-b border-gray-300 focus:border-gray-700 rounded focus:outline-none transition"
              placeholder="Phone Number*"
            />
            <textarea
              required
              rows={5}
              name="message"
              id="message"
              className="w-full p-3 border-b border-gray-300 focus:border-gray-700 rounded focus:outline-none transition"
              placeholder="Type your message here..."
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white p-3 rounded hover:bg-gray-700 transition"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  href: string;
  iconPath: string;
  title: string;
  content: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({
  href,
  iconPath,
  title,
  content,
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 shadow-xl rounded-lg flex flex-col items-start hover:shadow-2xl transition"
  >
    <div className="flex items-center mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6 mr-2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
      </svg>
      <div className="text-lg font-bold">{title}</div>
    </div>
    <div className="text-gray-600">{content}</div>
  </motion.a>
);

export default Contact;
