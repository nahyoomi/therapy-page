import React from 'react';
import experience from './data/experience.json';

const ExperienceTable = () => (
  <div className="w-full">
    {experience.map((item, index) => (
      <ul key={index} className="flex items-start">
        <li className="px-4 py-4 text-sm text-gray-500 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-6 before:w-2 before:h-2 before:bg-[#46617e] before:rounded-full">
          {item.descripcion}
        </li>
      </ul>
    ))}
  </div>
);

export default ExperienceTable;