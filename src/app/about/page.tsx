"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaBrain,
  FaChild,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { BsPersonHeart } from "react-icons/bs";
import { RiUserHeartFill } from "react-icons/ri";
import { SiCrowdsource } from "react-icons/si";
import { MdLocalLibrary } from "react-icons/md";
import { IoIosHappy } from "react-icons/io";
import Link from "next/link";
import ExperienceTable from "@/components/experienceTable";

interface SpecializationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TimelineItemProps {
  year: string;
  description: string;
}


const SpecializationCard: React.FC<SpecializationCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <div className="text-3xl mb-2">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ year, description }) => (
  <div className="flex items-center mb-4">
    <div className="bg-[#46617e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
      {year}
    </div>
    <p>{description}</p>
  </div>
);

const About = () => {
  const [content, setContent] = useState("");

  const renderContent = () => {
    switch (content) {
      case "about":
        return (
          <div
            className="font-sans text-gray-800 p-6 bg-cover bg-center"
            style={{ backgroundImage: "url(/blueBg.jpg)" }}
          >
            <section className="py-10">
              <h2 className="text-3xl font-bold text-center mb-6">
                Áreas de intervención en el TDAH
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SpecializationCard
                  icon={<BsPersonHeart />}
                  title="Regulación y gestión emocional"
                  description="Aprender técnicas para identificar, 
                  comprender y manejar las emociones de manera más efectiva; 
                  reducir la reactividad emocional, mejorar la tolerancia a 
                  la frustración y responder de forma adecuada en situaciones 
                  difíciles. Lograremos un mayor control sobre las emociones 
                  y reacciones impulsivas."
                />
                <SpecializationCard
                  icon={<FaBrain />}
                  title="Entrenamiento en funciones ejecutivas"
                  description="Fortalecer la atención, la memoria 
                  y la planificación. Aprender estrategias para frenar 
                  respuestas automáticas. Mejorar la organización, el 
                  control de impulsos y la toma de decisiones. Conseguiremos 
                  optimizar el procesamiento mental y la capacidad para 
                  manejar tareas complejas y estructuradas."
                />
                <SpecializationCard
                  icon={<RiUserHeartFill />}
                  title="Autoestima"
                  description="Ayudar a reconocer fortalezas y logros, 
                  contrarrestando las creencias negativas sobre sí mismo. 
                  Promover una autoimagen positiva mediante el desarrollo 
                  de habilidades sociales y emocionales; y el establecimiento
                  de metas realistas, para fortalecer la confianza y fomentar 
                  una visión más equilibrada y saludable de uno mismo."
                />
                <SpecializationCard
                  icon={<SiCrowdsource />}
                  title="Entrenamiento para padres"
                  description="Implementar técnicas de disciplina positiva y 
                  establecer rutinas claras que fomenten la organización y el 
                  autocontrol. Mejorar la comunicación, la comprensión de los 
                  síntomas, el manejo de conductas desafiantes, reforzar la 
                  autoestima y promover un ambiente familiar de apoyo y paciencia."
                />
                <SpecializationCard
                  icon={<MdLocalLibrary />}
                  title="Problemas escolares"
                  description="Desarrollo de habilidades de organización, 
                  planificación y manejo del tiempo; técnicas de estudio 
                  adaptadas a sus necesidades, así como estrategias para 
                  mantener la atención y reducir la distracción. Fortalecer 
                  su autoestima académica y gestionar la frustración ante los 
                  desafíos escolares."
                />
                <SpecializationCard
                  icon={<IoIosHappy />}
                  title="Bienestar psicoemocional"
                  description="Asesoramiento psicológico adaptado a las necesidades 
                  de los adultos y de las empresas para fomentar la salud mental 
                  y prevenir y gestionar el estrés. Mejora de las relaciones 
                  interpersonales, desarrollo de estrategias para el equilibrio 
                  emocional y una mayor resiliencia ante los desafíos diarios."
                />
              </div>
            </section>

            <div>
      <section className="py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-6">
          Experiencia en Terapia Psicológica
        </h2>
        <div className="bg-white flex flex-col md:flex-row w-full  items-center justify-center mb-6 p-8 ">
            <ExperienceTable />   
          <div className="w-[40%] md:w-2/2 p-4 hidden lg:flex justify-center">
            <img
              src="/whiteProfile.jpeg"
              alt="Profile"
              className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <p className="text-center max-w-2xl">
          Mi amplia trayectoria me permite ofrecer una intervención integral y efectiva adaptada a las necesidades de cada individuo.
        </p>
      </section>
    </div>
            

            <section className="py-10">
              <h2 className="text-3xl font-bold text-center mb-6">
                Enfoque personalizado y desarrollo de la terapia
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">
                    Enfoque Personalizado
                  </h3>
                  <p>
                  Mi enfoque se basa en una conexión sencilla con cada 
                  persona y una convicción profunda en el poder curativo 
                  que reside en cada uno.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">
                    Desarrollo de Terapia
                  </h3>
                  <p>
                  Con cada persona descubrimos las estrategias para 
                  cada situación, para dar nuevos significados a las 
                  dificultades y lograr transformaciones.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-10 bg-gray-100 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Cómo Saber si Soy la Psicóloga Adecuada
              </h2>
              <p className="mb-4">
              Puede reservar una sesión de consulta inicial para 
              discutir sus necesidades y expectativas y así, determinar 
              si soy la persona adecuada para apoyarle en su proceso.
              </p>
              <Link href="/contact">
              <button className="bg-[#46617e] text-white py-2 px-4 rounded-lg hover:bg-[#3B8BAE] transition-colors">
                Agendar Cita
              </button>
              </Link>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-gray-200 text-center">
              <p className="mb-2">
                Colegiada en Colegio de Psicología de Castilla-La Mancha,
                CM02285
              </p>
              <p className="mb-2">
                Doctora en Criminología y Delincuencia Juvenil
              </p>
              <p className="mb-2">
                Licenciada en psicología – especializada en Clínica y Educativa
              </p>
              <p className="mb-2">Máster en Psicología Clínica y de la Salud</p>
              <p className="mb-2">Máster en Terapia Cognitivo – Conductual</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaPhone />
                </a>
                <a
                  href="mailto:email@example.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <FaEnvelope />
                </a>
              </div>
            </footer>
          </div>
        );
      case "contact":
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 mt-6">
            <h2 className="text-2xl font-bold mb-4">
              Primeros pasos para terapia
            </h2>
            <p>
            Si cree que puedo ser la profesional que necesita, 
            me encantaría saber de usted. Juntos, evaluaremos 
            si soy la persona adecuada para ayudarle.
            </p>
            <p>
            Puede reservar una sesión de consulta inicial para discutir sus necesidades y expectativas.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-sans text-gray-800 p-6 bg-cover bg-center">
      {/* Header Section */}
      <header
        className="text-center py-6"
        style={{ backgroundImage: "url(/blueBg.jpg)" }}
      >
        <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-4">
          <Image
            src="/whiteProfile.jpeg"
            alt="Dra. Esmeralda Conde"
            width={500}
            height={500}
          />
        </div>
        <h1 className="text-3xl font-bold text-[#46617e]">
          Dra. Esmeralda Conde
        </h1>
        <h2 className="text-[#46617e]">Psicóloga Clinica y Educativa</h2>
      </header>

      <section className="text-center py-10 bg-white shadow-lg rounded-lg mx-6 mt-6">
        <h1 className="text-4xl font-extrabold text-[#46617e] mb-4">
          Bienvenidos
        </h1>
        <p className="text-lg font-medium text-gray-800 mb-2">
          Soy la{" "}
          <span className="text-[#46617e] font-semibold">
            Dra. Esmeralda Conde
          </span>
          , Psicóloga y Doctora en Criminología y Delincuencia Juvenil.
        </p>
        <p className="text-base text-gray-800">
          Ayudo a los{" "}
          <span className="text-[#3B8BAE] font-bold"> adultos, adolescentes y niños</span>{" "}
          con{" "}
          dificultades a descubrir sus fortalezas para alcanzar sus metas.
        </p>
        <div className="mt-6">
          <button
            onClick={() => setContent("about")}
            className="bg-[#DDAD7A] text-white py-2 px-4 rounded-lg mr-2 hover:bg-[#f9dabade] transition-colors"
          >
            Acerca de Dra. Esmeralda Conde
          </button>
          <button
            onClick={() => setContent("contact")}
            className="bg-[#DDAD7A] text-white py-2 px-4 rounded-lg hover:bg-[#f9dabade] transition-colors"
          >
            Primeros pasos para terapia
          </button>
        
        </div>
        </section>
        {renderContent()}
      
    </div>
  );
};

export default About;
