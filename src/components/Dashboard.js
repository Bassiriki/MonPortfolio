import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      {/* Section principale */}
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen text-gray-800 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900"
      >
        {/* Titre animé */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-6xl">
            Bienvenue à <br />
            <span className="text-5xl text-blue-400 sm:text-7xl">
              MR. Bassiriki Mangane!
            </span>
          </h1>
        </motion.div>

        {/* Carte personnelle */}
        <motion.div
          className="relative flex items-center max-w-4xl p-6 space-x-8 transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Image à droite */}
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 border-4 border-white rounded-full shadow-md sm:w-40 sm:h-40"
              src="/images/tic.jpg"
              alt="Profil"
            />
          </div>

          {/* Texte à gauche */}
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-semibold text-gray-800">
              Développeur Full Stack
            </h2>
            <p className="mt-2 text-gray-600">
              Je suis Bassiriki Mangane, ingénieur en génie logiciel passionné par
              l'innovation et le développement de solutions logicielles
              performantes.
            </p>
            <button 
            className="px-6 py-2 mt-4 text-sm font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
            Link to="/contac">
              En savoir plus
            </button>
          </div>
        </motion.div>

        {/* Bouton vers projets */}
        <motion.a
          href="/projects"
          className="px-6 py-3 mt-8 font-semibold text-white transition-all duration-300 transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Découvrez mes projets
        </motion.a>
      </section>

      <Footer />
    </>
  );
};

export default Home;
