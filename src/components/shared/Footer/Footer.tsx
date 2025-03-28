'use client';

import Link from "next/link";
import ScrollButton from "./ScrollButton";

interface FooterSectionProps {
  title: string;
  items: { text: string; url?: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
  return (
    <div className="md:pr-0 pr-[90px] sm:px-0 ">
      <h4 className="text-white text-xl font-bold mb-2">{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-white text-xs font-normal uppercase">
            <Link href={item.url || '#'}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#1A5276]">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between max-w-[1165px] mx-auto gap-5 px-11 pt-[62px] pb-[40px]">
        <FooterSection
        title="Navegación"
        items={[
          { text: "Rusell A. Barkley", url: "https://www.russellbarkley.org/" },
          { text: "Instituto Nacional de Seguridad y Salud para el Trabajo", url: "https://www.insst.es/materias/riesgos/riesgos-psicosociales/estres-laboral" }, 
          { text: "El neuropediatra", url: "https://www.elneuropediatra.es/" }, 
          { text: "Somos neurodivergentes", url: "https://neurodivergentes.com/" }, 
          { text: "Child Mind Institute", url: "https://childmind.org/es/articulo/que-es-la-neurodiversidad/" },
          { text: "Center for Parent Information & Resources", url: "https://www.parentcenterhub.org/aprendizaje/" }
        ]}
      />
        <FooterSection
          title="Quick Links"
          items={[
            { text: "Dra. Esmeralda Conde", url: "/about" },
            { text: "Servicios", url: "/services" },
            { text:'Neurodivergentes',url: '/neurodivergentes'},
            { text: "Blog", url: "/blog" },
            { text: "FAQ", url: "/faq" },
            { text: "Contacto", url: "/contact" }
          ]}
        />
        <FooterSection
          title="Horario de atención"
          items={[
            { text: "LUNES A VIERNES: 9:00 a 13:00 y de 16:00 a 19:00" },
            { text: "SÁBADO: 10:00 a 14:00" },
            { text: "DOMINGO: CERRADO" }
          ]}
        />
        <FooterSection 
          title=""
          items={[
            { text: "Políticas de Privacidad", url: "/privacy" }
          ]}
        />
      </div>
      <ScrollButton />
{/*       <p className="text-center text-gray-500 text-sm mt-4">
        © 2024 Esmeralda Conde Psicóloga. Todos los derechos reservados. Diseño web por <a href="https://nahyoomi.com" className="text-blue-500 hover:underline">nahyoomi</a>.
      </p> */}
    </footer>
  );
};
