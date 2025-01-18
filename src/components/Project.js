import { Images } from "lucide-react";
import React from "react";
import Footer from "./Footer";
const Projects = () => {
  const projects = [
    { id: 1, 
      title: "Plateforme E-recrutement",
      description: "Une application pour simplifier le processus de recrutement.",
      images: "/images/visiteur1.png" },
    { id: 2, 
      title: "Portfolio", 
      description: "Mon propre portfolio créé avec React.js et Tailwind CSS.",
      images:"/images/portfolio.png" },
   
    
    { id: 4,
      title: "Gestion de Stock pour Cheffin", 
      description: "Un outil pour Suivre les entrees et sorties des Produits d'un Magasin",
      images: "/images/GS.png"},
  ];

  return (
    <>
    <section id="projects" className="py-20 text-gray-800 bg-gradient-to-b bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
      <div className="container px-6 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-white">Mes Projets</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <img className="object-cover w-full h-60" 
              src={project.images}
              alt={project.title} 
              
              />  
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
</div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Projects;

