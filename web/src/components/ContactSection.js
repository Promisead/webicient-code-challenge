import React, { useState } from "react";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/promise_duke/server/wp-json/promise/v1/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("Form submitted successfully!");
      // Optionally, reset form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.contactForm}>
        <p className={styles.caption}>Any question?</p>
        <h1 className={styles.title}>Let's Talk Today</h1>
        <form className={styles.wrapper} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className={styles.textarea}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
