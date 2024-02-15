"use client"
import Next from "../../../public/next.svg";
import Vercel from "../../../public/vercel.svg";
import Link from 'next/link'
import Image from 'next/image';
import { useState } from "react"
// import axios from "axios";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const EmailSection = () => {
  const formRef = useRef();

  const [error , setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lkyexgd', 'template_ug2b3s8', formRef.current, 'THuhGqdV7u_bLO13X')
      .then((result) => {
          console.log(result.text);
          setError(false)
      }, (error) => {
          console.log(error.text);
          setError(true)
      });
  };


  // const [emailSubmitted, setEmailSubmitted] = useState(false);



  // const [emailData, setEmailData] = useState({
  //   email: '',
  //   subject: '',
  //   message: ''
  // });
  
  // const handleChange = (e) => {
  //   setEmailData({ ...emailData, [e.target.name]: e.target.value });
  // };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('/api/send/sendEmail', {
  //       sender: emailData.email, // Используем значение из поля email
  //       subject: emailData.subject,
  //       message: emailData.message
  //     });
  //     alert('Email sent successfully!');
  //     setEmailSubmitted(true);
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert('Error sending email. Please try again later.');
  //   }
  // };




  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          {/* <Link href="github.com">
            <Image src={Next} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={Vercel} alt="Linkedin Icon" />
          </Link> */}
        </div>
      </div>
      <div>
     
      
     
        <form className="flex flex-col"
        ref={formRef}
        onSubmit={sendEmail}>

              <label className="text-white block mb-2 text-sm font-medium">Name</label>
              <input
                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"

               type="text" name="name" />

              <label className="text-white block text-sm mb-2 font-medium">Email</label>
              <input
               className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
               type="email" name="email" />

              <label
              className="text-white block text-sm mb-2 font-medium"

              >Message</label> 
              <textarea
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              name="message"
                 />
              
          <input
           className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            type="submit" value="Send" />
        
          {/* <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
             
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
             
            
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div> */}
          {/* <button
            // type="submit"
            // className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button> */}
          
        </form>
      
    </div>  
    </section>
  );
};

export default EmailSection