import React from 'react';
import cardBlogData from '../data/cardBlogData.json';
import Logo from '../shared/Header/Logo';


export const CardBlog = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {cardBlogData.map((card, index) => (
        <div key={index} className=" flex p-4 mt-16 mb-16 relative">
          <div className='min-w-[50px] mr-2.5'>
            <Logo />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#46617e]">{card.title}</h2>
            <p className='text-[#46617e]'>{card.description}</p>
            <a href="#" className="text-[#46617e] underline font-semibold">Leer más</a>
            <div className="absolute top-0 right-0 h-full border-r-2 border-gray-400"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
