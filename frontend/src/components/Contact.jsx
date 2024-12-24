import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      // Success response
      toast.success(response.data.message || "Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      // Error response
      const errorMessage = error.response?.data?.message || "Failed to send message!";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="contact container">
        {/* Banner Section */}
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Anywhere, Any City, 4521</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>+630-50-68-227</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>zk@gmail.com</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.23355645912!2d67.01519255!3d24.8441321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1709099958323!5m2!1sen!2s"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>

          {/* Contact Form */}
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>Contact Us</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
