import React, { useState } from 'react';
import { motion } from 'framer-motion';  // Importation de framer-motion pour les animations

// Composant Card pour styliser la section de contact
const Card = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-md p-6 mx-auto transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
    >
      {children}
    </motion.div>
  );
};

const Conta = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-200 to-blue-300">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-blue-600">Contactez-moi</h2>

        {/* Carte d'Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-10 text-lg text-gray-700"
        >
          <p>
            Si vous avez des questions ou souhaitez en savoir plus sur mes projets et mes services, n'hésitez pas à me contacter. Je serai ravi de vous répondre.
          </p>
        </motion.div>

        {/* Formulaire de Contact */}
        <Card>
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="Entrez votre nom"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="Entrez votre email"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-4"
            >
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 border rounded-lg"
                placeholder="Entrez votre message"
                rows="4"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-4 py-3 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              Envoyer
            </motion.button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Conta;
