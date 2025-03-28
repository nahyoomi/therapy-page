'use client';
import { useState } from "react";
import { BannerCarrousel } from "@/components/BannerCarrousel";
import TextSection from "@/components/TextSection";
import ImageSection from "@/components/ImageSection";

export default function Services() {
  const [images, setImages] = useState([
    {image_url:"/posti.jpg", description: "Descripción de la imagen 1", id: "1"},
    {image_url:"/diversion.jpg", description: "Descripción de la imagen 2", id: "2"},
    {image_url:"/susurrar.jpg", description: "Descripción de la imagen 3", id: "3"} 
  ]);
  const [BannerHomeLoading, setBannerHomeLoading] = useState(false);
  const sections = [
    {
      title: "Intervención Psicológica adultos",
      content: "Tienes las fortalezas necesarias para conseguir tus metas. Quizás requieras apoyo para descubrirlas y poder avanzar. Puedes contar conmigo para ayudarte. Trabajamos en distintas áreas para mejorar los síntomas, sentirte mejor contigo mismo(a), con los demás y poder afrontar tu día a día.",
      image: "/intervencion.jpg",
      alt: "Descripción de la imagen 1"
    },
    {
      title: "Terapia niños y adolescentes",
      content: "Con juegos, cuentos, comics, vídeos, historias, dibujos…. los niños(as) y adolescentes practican habilidades nuevas que les ayudan a mejorar el autocontrol, la atención, las funciones ejecutivas y la gestión de la impulsividad. También trabajan para mejorar las habilidades sociales, regular las emociones, manejar la frustración y el estrés. Así, pueden enfrentar mejor los retos académicos y personales, reforzando su autoestima.",
      image: "/grupo.jpg",
      alt: "Descripción de la imagen 2"
    },
    {
      title: "Entrenamiento padres",
      content: "Aprendemos técnicas y principios para fomentar la disciplina constructiva, establecer límites claros y promover la comunicación efectiva. Los padres aprenden a manejar comportamientos desafiantes con paciencia y consistencia, reforzando el autocontrol y la autoestima en sus hijos. Además, se les brindan herramientas para crear un entorno familiar de apoyo que favorezca el desarrollo emocional y académico del niño.",
      image: "/entrenamiento.jpg",
      alt: "Descripción de la imagen 3"
    },
    {
      title: "Reeducación pedagógica para niños y adolescentes",
      content: (
        <>
          <p>Entrenamos las funciones ejecutivas (organización, planificación, manejo del tiempo y memoria de trabajo) con los contenidos y tareas escolares. También técnicas de estudio, estrategias para regular la atención a la hora de hacer sus deberes.</p>
          <p>Los niños y adolescentes mejoran su desempeño fortaleciendo la autoestima académica y gestionan la frustración ante los deberes, las evaluaciones y resultados; así como las habilidades sociales y resolución de conflictos en el contexto escolar.</p>
          <p>Para este tipo de tratamiento existen becas del Ministerio de Educación, que puedo orientaros para su solicitud. Becas y ayudas para alumnado con necesidad de apoyo educativo. <a  className='font-bold' href="https://www.educacionfpydeportes.gob.es/servicios-al-ciudadano/catalogo/estudiantes/becas-ayudas/para-estudiar/deportivas/necesidad-especifica-apoyo-educativo.html">(Becas y ayudas para alumnos con necesidad específica de apoyo educativo)</a></p>
        </>
      ),
      image: "/reeducacion.jpg",
      alt: "Descripción de la imagen 4"
    },
    {
      title:"Talleres",
      content: (
        <>
        <div>
          <h3 className="font-bold">Conferencias, talleres y grupos para el bienestar psicoemocional</h3>
         
          <ul className="list-disc list-inside">
            <li>Psicoeducación</li>
            <li>Autoestima</li>
            <li>Regulación emocional y otras funciones ejecutivas</li>
            <li>Control de la impulsividad.</li>
            <li>Habilidades sociales y de comunicación.</li>
            <li>Resolución de problemas.</li>
          </ul>
        </div>
    
        </>
      ),
      image: "/talleres.jpg",
    },
    {
      title: "Evaluación",
      content: (
        <>
          <p>Mediante la utilización de algunas pruebas específicas (tanto en papel como a través de Realidad Virtual) se busca identificar de manera precisa los síntomas característicos del trastorno.</p>
          <p>Así como aportar información a los especialistas para diferenciar el TDAH de otras condiciones que puedan presentar síntomas similares, con el objetivo de determinar un diagnóstico más preciso.</p>
          <p>La evaluación también proporciona una base para un seguimiento del tratamiento y ayuda a desarrollar estrategias de apoyo individualizadas.</p>
        </>
      ),
      image: "/evaluacion.jpg",
      alt: "Descripción de la imagen 5"
    }
  ];

  return (
    <>
      <BannerCarrousel 
        BannerHomeLoading={BannerHomeLoading}
      />
      <div className="p-5 bg-gray-100">
        {sections.map((section, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <TextSection title={section.title} content={section.content} />
            <ImageSection src={section.image} alt={section.alt} />
          </div>
        ))}
      </div>
    </>
  );
}