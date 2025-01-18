import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_9j57opf",   // Remplacez par votre Service ID
        "template_ids3iki",  // Remplacez par votre Template ID
        formData,
        "Q3FzwpGmmF7q4VxFE"          // Remplacez par votre User ID
      )
      .then(
        (response) => {
          console.log("E-mail envoyé avec succès :", response.status, response.text);
          alert("Votre message a été envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'e-mail :", error);
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Contactez-moi</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="5"
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md transition duration-300 ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-600"}`}
          >
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
    
    <Footer/>
    </>
  );
};

export default Contact;