"use client";

import { useState, useEffect } from 'react'
import NavBar from './componets/Navbar';
import HomePage from './componets/Home';
import Products from './componets/Products';
import Advantages from './componets/Advantages';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Testimonial from './componets/Testimonial';
import Footer from './componets/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  const menuOptions = [
    { name: '#home', title: 'Início', status: 'ativo', submenu: false },
    { name: '#products', title: 'Como funciona', status: 'ativo', submenu: false },
    { name: '#advantages', title: 'Vantagens', status: 'ativo', submenu: false },
    { name: '#projects', title: 'Projetos', status: 'ativo', submenu: false },
    // Adicione mais opções de menu conforme necessário
  ];

  const [activeSection, setActiveSection] = useState('home');

  const ativa = 'home';

  const onScroll = () => {
    const sections = ['home', 'products', 'advantages', 'projects'];
    // Adicione mais opções de menu conforme necessário

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div>
      <NavBar menuOptions={menuOptions} ativa={activeSection} />
      <HomePage id="home" />
      <Products id="products" />
      <Advantages id="advantages" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Testimonial />
      <Footer />
      <ToastContainer />

    </div>
  );
}
