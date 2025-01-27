import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createcontactUs } from "@/sendData";

function ContactForm() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company_name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));

    if (errors[id as keyof typeof errors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      full_name: formData.full_name ? "" : t("nameRequired"),
      email: formData.email ? "" : t("emailRequired"),
      phone: formData.phone ? "" : t("phoneRequired"),
    };
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(t("formValidationError"));
      return;
    }

    setLoading(true);

    try {
      await createcontactUs(formData);

      setFormData({
        full_name: "",
        email: "",
        company_name: "",
        phone: "",
        message: "",
      });

      toast.success(t("formSubmittedSuccess"));
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(t("formSubmitError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-8 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-3/5 bg-slate-50 rounded-lg p-6 md:p-8 text-slate-700 font-bold shadow-md border border-primary-50">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="full_name"
                className="text-right font-medium mb-2"
              >
                {t("name")}
              </label>
              <input
                dir="rtl"
                type="text"
                id="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder={t("name")}
                className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.full_name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.full_name && (
                <p className="text-red-500 text-sm">{errors.full_name}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-right font-medium mb-2">
                {t("email")}
              </label>
              <input
                dir="rtl"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("email")}
                className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="company_name"
                className="text-right font-medium mb-2"
              >
                {t("companyName")}
              </label>
              <input
                dir="rtl"
                type="text"
                id="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder={t("companyName")}
                className="p-3 border rounded-md focus:outline-none focus:ring-2 border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-right font-medium mb-2">
                {t("phone")}
              </label>
              <input
                dir="rtl"
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("phone")}
                className={`p-3 border rounded-md focus:outline-none focus:ring-2 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-right font-medium mb-2">
              {t("yourMessage")}
            </label>
            <textarea
              dir="rtl"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("yourMessage")}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 border-gray-300 h-32 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-30 text-white py-2 px-4 rounded-full hover:bg-blue-900"
            disabled={loading}
          >
            {loading ? t("submitting") : t("submit")}
          </button>
        </form>
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-center md:justify-start items-center md:items-end space-y-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-primary-30 mb-6">
          {t("contactUs")}
        </h2>
        <div className="space-y-6">
          <div className="flex flex-col items-center md:items-end rtl:space-y-reverse mb-11 space-y-1">
            <div className="flex flex-col md:flex-row items-center gap-2 space-x-2 mb-2 rtl:space-x-reverse">
              <h3 className="text-3xl font-semibold text-primary-20 order-2 md:order-1">
                {t("phoneNumber")}
              </h3>
              <div className="bg-primary-20 rounded-full h-8 w-8 flex justify-center items-center order-1 md:order-2">
                <FaPhone className="text-primary-10 text-1xl" />
              </div>
            </div>
            <p className="text-gray-700 text-xl">+966920031014</p>
          </div>

          <div className="flex flex-col items-center md:items-end rtl:space-y-reverse mb-11 space-y-1">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-2 space-x-2 rtl:space-x-reverse">
              <h3 className="text-3xl font-semibold text-primary-20 order-2 md:order-1">
                {t("email")}
              </h3>
              <div className="bg-primary-20 rounded-full h-8 w-8 flex justify-center items-center order-1 md:order-2">
                <FaEnvelope className="text-primary-10 text-1xl" />
              </div>
            </div>
            <p className="text-gray-700 text-xl">sales@mycash.sa</p>
          </div>

          <div className="flex flex-col items-center md:items-end rtl:space-y-reverse mb-11 space-y-1">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-2 space-x-2 rtl:space-x-reverse">
              <h3 className="text-3xl font-semibold text-primary-20 order-2 md:order-1">
                {t("address")}
              </h3>
              <div className="bg-primary-20 rounded-full h-8 w-8 flex justify-center items-center order-1 md:order-2">
                <FaMapMarkerAlt className="text-primary-10 text-1xl" />
              </div>
            </div>
            <p className="text-gray-700 text-xl text-center md:text-end">
              {t("addressDetails")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default ContactForm;
