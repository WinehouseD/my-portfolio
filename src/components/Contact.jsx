import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../email-form";

const Contact = () => {
  const validationSchema = Yup.object({
    user_name: Yup.string().required("Name is required"),
    user_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const formElement = document.getElementById("yourFormId");

      try {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formElement,
          PUBLIC_KEY
        );

        resetForm();
        window.alert("Message sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
  });

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#11161f] text-gray-300 flex justify-center items-center p-4"
    >
      <form
        id="yourFormId"
        onSubmit={formik.handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="sm:text-right pb-8 pl-4 bg-[#11161f] flex justify-center">
          <p className="text-2xl font-bold inline border-b-2 border-[#f00] text-gray-300">
            CONTACT
          </p>
        </div>

        <input
          type="text"
          name="user_name"
          className="bg-gray-600 p-2 mt-2"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_name}
        />
        {formik.touched.user_name && formik.errors.user_name ? (
          <div className="text-red-500">{formik.errors.user_name}</div>
        ) : null}

        <input
          type="email"
          name="user_email"
          className="mt-2 p-2 bg-gray-600"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_email}
        />
        {formik.touched.user_email && formik.errors.user_email ? (
          <div className="text-red-500 flex">{formik.errors.user_email}</div>
        ) : null}

        <textarea
          name="message"
          className="bg-gray-600 p-2 mt-2"
          rows="10"
          placeholder="Message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500">{formik.errors.message}</div>
        ) : null}

        <button
          type="submit"
          className="text-gray-300 border-2 px-4 py-3 my-8 mx-auto flex items-center transition duration-500 ease-in-out hover:border-[#f00]"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
