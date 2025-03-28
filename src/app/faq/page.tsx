"use client";

import { useState } from "react";
import { StaticBanner } from "@/components/StaticBanner";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué es el TDAH?",
      answer: (
        <div className="p-4 space-y-4">
          <p>
            Según Russell A. Barkley, el trastorno por Déficit de Atención e
            Hiperactividad (TDAH) es un trastorno del desarrollo de la habilidad
            para regular el propio comportamiento y para prever el futuro.
          </p>
          <p>
            Afecta a millones de niños y a menudo continúa en la edad adulta.
          </p>
          <p>
            Para Barkley, es un trastorno del desarrollo del autocontrol,
            englobando los problemas para mantener la atención y para controlar
            los impulsos y el nivel de actividad. Estos problemas se reflejarán
            en el deterioro de la voluntad, en el control de la conducta a lo
            largo del tiempo y para mantener en la memoria sus metas y sus
            consecuencias futuras.
          </p>
          <p>
            Este trastorno no se debe a un fracaso de los padres en la crianza
            de su hijo(a), pero unos padres que conocen el trastorno, lo aceptan
            y aprenden nuevas dinámicas familiares, pueden hacer que el
            trastorno no genere complicaciones graves a mediano y largo plazo
            (autoestima, conductas antisociales, fracaso escolar, aislamiento,
            etc.).
          </p>
          <p>
            En el{" "}
            <span className="italic">Manual Diagnóstico y Estadístico</span>{" "}
            (DSM-5) se define como un “patrón persistente de inatención y/o
            hiperactividad-impulsividad que interfiere con el funcionamiento o
            el desarrollo”.
          </p>
          <p>
            Sobre el TDAH y la importancia de afrontarlo, dos buenas guías para
            los padres y para adultos con TDAH son los siguientes libros:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <p>
                <span className="italic">
                  Niños hiperactivos. Cómo comprender y atender sus necesidades
                  especiales. Guía completa del Trastorno de Déficit de Atención
                  con Hiperactividad (TDAH).
                </span>{" "}
                Russell A. Barkley.
              </p>
            </li>
            <li>
              <p>
                <span className="italic">
                  Tomar el control del TDAH en la edad adulta.
                </span>{" "}
                Russell A. Barkley.
              </p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "¿Qué significa neurodivergente?",
      answer: (
        <div className="p-6 space-y-6">
          <p>
            El término neurodivergente se usa para describir a personas cuyos
            cerebros funcionan de manera diferente en comparación con lo que se
            considera &apos;típico&apos; o &apos;neurotípico&apos;. Esto incluye condiciones como el
            Trastorno por Déficit de Atención e Hiperactividad (TDAH), el
            Trastorno del Espectro Autista (TEA), la dislexia y otras
            diferencias neurológicas. La neurodiversidad busca reconocer y
            valorar estas diferencias como parte natural de la variabilidad
            humana.
          </p>
        </div>
      ),
    },
    {
      question:
        "¿Cuáles son las dificultades emocionales de niños y adolescentes?",
      answer: (
        <div className="p-6 space-y-6">
          <p>
            Los niños y adolescentes pueden enfrentar diversas dificultades
            emocionales, como
            <span className="font-bold">
              {" "}
              ansiedad, depresión, baja autoestima, dificultades para manejar la
              frustración{" "}
            </span>{" "}
            o problemas para regular sus emociones.
          </p>

          <p>Estas dificultades pueden estar relacionadas con factores como:</p>

          <ul className="list-disc pl-8 space-y-2">
            <li>El estrés escolar</li>
            <li>La presión social</li>
            <li>Experiencias de bullying</li>
            <li>Experiencias familiares adversas</li>
          </ul>

          <p>
            Cuando no se abordan adecuadamente, estas dificultades emocionales
            pueden afectar significativamente el{" "}
            <span className="italic">bienestar general</span> y el
            <span className="italic"> desempeño académico</span> del niño o
            adolescente.
          </p>
        </div>
      ),
    },
    {
      question: "¿Cuándo surge el estrés laboral?",
      answer: (
        <div className="p-6 space-y-6 text-gray-800">
          <p>
            El estrés laboral surge cuando las exigencias del trabajo
            <span className="font-bold">
              {" "}
              superan la capacidad del empleado para afrontarlas
            </span>
            , lo que puede deberse a factores como:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li>Cargas excesivas de trabajo</li>
            <li>Presión de tiempo</li>
            <li>Falta de control sobre las tareas</li>
            <li>Conflictos con compañeros y superiores</li>
          </ul>

          <p>
            También puede estar relacionado con la
            <span className="italic"> inseguridad laboral</span> o la
            <span className="italic">
              {" "}
              falta de equilibrio entre la vida personal y profesional
            </span>
            .
          </p>
        </div>
      ),
    },
    {
      question: "¿Qué es la ansiedad?",
      answer: (
        <div className="p-6 space-y-6 text-gray-800">
          <p>
            La ansiedad es una <span className="italic">respuesta natural</span>{" "}
            del cuerpo ante situaciones percibidas como amenazantes, pero cuando
            es <span className="font-bold">excesiva o persistente</span>, puede
            convertirse en un trastorno que afecta la calidad de vida.
          </p>

          <p>Se manifiesta a través de diversos síntomas:</p>

          <ul className="list-disc pl-8 space-y-2">
            <li>
              <span className="font-bold">Síntomas físicos:</span> taquicardia,
              tensión muscular, problemas digestivos
            </li>
            <li>
              <span className="font-bold">Síntomas emocionales:</span>{" "}
              preocupación excesiva, miedo, dificultad para concentrarse
            </li>
          </ul>

          <p>
            Puede afectar a niños, adolescentes y adultos en diferentes ámbitos
            de la vida, interfiriendo con sus actividades diarias y su bienestar
            emocional.
          </p>
        </div>
      ),
    },
    {
      question:
        "¿Cómo se puede ayudar a los padres con hijos que tienen problemas de conducta?",
      answer: (
        <div className="p-6 space-y-6 text-gray-800">
          <p>
            Es importante que los padres comprendan que los problemas de
            conducta
            <span className="font-bold"> no son solo &apos;mal comportamiento&apos;</span>
            , sino que pueden estar relacionados con dificultades emocionales o
            del desarrollo.
          </p>

          <p>Algunas estrategias efectivas incluyen:</p>

          <ul className="list-disc pl-8 space-y-2">
            <li>Establecer límites claros y consistentes</li>
            <li>Reforzar las conductas positivas</li>
            <li>Buscar apoyo profesional si es necesario</li>
          </ul>

          <p>
            Además, el <span className="italic">acompañamiento emocional</span>{" "}
            y la
            <span className="italic"> comunicación abierta</span> con los hijos
            son clave para abordar los problemas de conducta de manera efectiva.
          </p>
        </div>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-5">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-200">
          <button
            className="w-full text-left text-xl font-semibold text-blue-700 py-2 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function Faq() {
  return (
    <>
      <StaticBanner
        backgroundImage="/ask.jpg"
        subtitle="Frequently Asked Questions"
        title="¿Qué preguntas tienes?"
      />
      <FAQAccordion />
    </>
  );
}
