"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

import { Dialog } from "@headlessui/react";


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "React Portfolio Website using React Library",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://nikal25.github.io/portfolio-react/",
    previewUrl: "https://github.com/NikaL25/portfolio-react",
    stack: "HTML, CSS, JS, REACT", 
  },
 
  {
    id: 2,
    title: "E-commerce Application Next.js",
    description: "E-commerce Application using Next js SSR Framework for React",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://e-commerce-two-rust.vercel.app/",
    previewUrl: "https://github.com/NikaL25/next-e-commerce",
    stack: "HTML, CSS, JS, React, Next.js",
  },
  {
    id: 3,
    title: "Blog Full-Stack App",
    description: "Blog Full-Stack App using Next js and MERN Stack, in website you can authenticate with OAuth and add Blog Posts",
    image: "/images/projects/3.png",
    tag: ["All", "WEB"],
    gitUrl: "https://github.com/NikaL25/blog-nextjs",
    previewUrl: "https://github.com/NikaL25/blog-nextjs",
    stack: "HTML, CSS, JS, React, Next.js, MongoDB, Node/Express",
  },
  {
    id: 4,
    title: "E-Commerce Full Stack Application Django",
    description: "E-Commerce Full Stack Application Using Django,funtionality: JWT authentication with Gmail Activation, Role Based Admin or Similar User , Adding, Filter products and Paypal Integration",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "http://nikalomiashvili.pythonanywhere.com",
    previewUrl: "https://github.com/NikaL25/e-commerce_tech_shop/tree/master/shop",
    stack:  "HTML, CSS, JS, JQUERY, Django, SQL/Lite"
  },
  {
    id: 5,
    title: "E-Commerce Application React",
    description: "E-Commerce Application React using React Library,functionality is Search Filter and Add to Cart",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://nikal25.github.io/e-commerce_shop/",
    previewUrl: "https://github.com/NikaL25/e-commerce_shop",
    stack:  "HTML, CSS, JS, React"
  },
  {
    id: 6,
    title: "Fitness-UI Mobile Application React-Native",
    description: "Fitness-UI Application using React-Native",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://expo.dev/accounts/nikalomiashvili/projects/fitness-app/updates/68e7baba-6a0e-46aa-8eaf-e945639ab9d5",
    previewUrl: "https://github.com/NikaL25/react-native-fitness-ui",
    stack:  "HTML, CSS, JS, React-Native"
  },
  {
    id: 7,
    title: "Travel-UI Mobile Application React-Native",
    description: "Travel-UI Application using React-Native",
    image: "/images/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://expo.dev/accounts/nikalomiashvili/projects/travel-ui-app/updates/c647263c-ab78-4576-9a69-2705d393b46d",
    previewUrl: "https://github.com/NikaL25/react-native-travel-ui",
    stack:  "HTML, CSS, JS, React-Native"
  },
  {
    id: 8,
    title: "CarRent-UI Mobile Application React-Native",
    description: "CarRent-UI Mobile-Application using React-Native",
    image: "/images/projects/8.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://expo.dev/accounts/nikalomiashvili/projects/rent-a-car/updates/cbf8be94-ed3d-4943-b538-893f08c99b2a",
    previewUrl: "https://github.com/NikaL25/react-native-car-rent-ui",
    stack:  "HTML, CSS, JS, React-Native"
  },
  {
    id: 9,
    title: "Movie-UI App Mobile Application React-Native",
    description: "Movie and Todo UI App Mobile Application using React-Native",
    image: "/images/projects/9.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://expo.dev/accounts/nikalomiashvili/projects/todo-movie/updates/33dd44c7-58d5-4569-a671-3a28aab3d65d",
    previewUrl: "https://github.com/NikaL25/react-native-todo-movie",
    stack:  "HTML, CSS, JS, React-Native" 
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            onClick={() => handleProjectClick(project)}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
             
            />
          </motion.li>
        ))}
      </ul>
      {selectedProject && (
        <Dialog
          open={true}
          onClose={() => setSelectedProject(null)}
          className="relative z-50 "
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10" >
                <div className="flex gap-x-8 h-96">
                <div className="relative w-72 h-full hidden md:inline">
                  <img src={selectedProject.image} alt={selectedProject.title} className="absolute  w-full h-full object-cover rounded-lg" />
                </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex-1">
                      <h4 className="font-semibold">{selectedProject.title}</h4>
                      <p className="font-medium text-sm">{selectedProject.price}</p>
                      <p className="line-clamp-5 text-sm">{selectedProject.description}</p>
                    </div>
                    <div className="flex justify-center space-x-4 mt-4 py-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        <a href={selectedProject.gitUrl} className="block">View Project</a>
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        <a href={selectedProject.previewUrl} className="block">Github Link</a>
                      </button>
                    </div>
                    <div className="space-y-3 text-sm">
                      <button
                        className="button w-full bg-red-600 p-2 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black"
                        onClick={() => setSelectedProject(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </section>
  );
};

export default ProjectsSection;