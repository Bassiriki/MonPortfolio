import React from "react";
import Footer from "./Footer";
// Composant Card avec animations et effets
const Card = ({ children }) => {
  return (
    <div className="max-w-4xl p-6 mx-auto mt-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105">
      {children}
    </div>
  );
};

const About = () => {
  return (
    <>
    <section id="about" className="py-20 text-gray-800 bg-gradient-to-b bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
      <div className="container px-6 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-blue-600">À propos de moi</h2>

        {/* Carte avec la description de toi */}
        <Card>
          <p className="text-lg text-gray-700">
            Je suis Bassiriki Mangane, ingénieur en génie logiciel passionné par l'innovation 
            et le développement de solutions logicielles performantes. Avec une expertise 
            approfondie dans la conception et le développement de logiciels, j'ai acquis une 
            solide expérience en gestion de projets informatiques et en développement d'applications 
            web et mobiles. 
            <br /><br />
            Je me spécialise dans les technologies modernes telles que JavaScript (React, Node.js), 
            Java (Spring Boot), et Python, avec une forte compréhension des architectures de systèmes 
            distribués et des bonnes pratiques de développement. Mon parcours m'a permis de travailler 
            sur des projets variés, allant de la gestion de bases de données à la création d'applications 
            robustes et sécurisées pour des clients de divers secteurs.
          </p>
        </Card>
        
        <h3 className="mt-10 text-2xl font-semibold text-blue-600">Compétences techniques</h3>
        
        <Card>JavaScript (React, Node.js)</Card>
        <Card> Java (Spring Boot)</Card>
        <Card>Python (Django)</Card>
        <Card>PHP (Laravel)</Card>
          <Card>Conception et développement de logiciels</Card>
          <Card>IA (R, Python)</Card>
          <Card>Architectures de systèmes distribués</Card>
          <Card>Développement d'applications web et mobiles</Card>
          <Card>Gestion de bases de données (MySQL, MongoDB)</Card>
          <Card>Sécurité et protection des données (Keycloak, JWT)</Card>
        
        
   
        </div>
      
    </section>
    <Footer/>
    </>
    
  );
};

export default About;
