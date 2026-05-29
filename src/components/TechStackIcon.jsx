import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group flex h-full min-h-[160px] cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl bg-slate-800/50 p-4 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-slate-700/50 shadow-lg hover:shadow-xl sm:min-h-[180px] sm:p-6">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img 
          src={TechStackIcon} 
          alt={`${Language} icon`} 
          className="relative h-14 w-14 transform transition-transform duration-300 sm:h-16 sm:w-16 md:h-20 md:w-20"
        />
      </div>
      <span className="text-center text-sm font-semibold tracking-wide text-slate-300 transition-colors duration-300 group-hover:text-white md:text-base">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon; 
