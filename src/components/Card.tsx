import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrFormNextLink } from "react-icons/gr";

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  link: string;
  isNew?: boolean;
  category?: string;
}

export const Card: React.FC<PropsType> = ({ title, desc, img, tags, link, isNew, category }) => {
  return (
    <div className="group relative bg-secondary/30 backdrop-blur-sm border border-accent/20 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 w-[300px] sm:w-[350px]" data-aos="zoom-in-up">
      {/* New Badge */}
      {isNew && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-accent text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
          NEW
        </div>
      )}
      
      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 left-4 z-10 bg-accent2/80 text-white text-xs px-3 py-1 rounded-full font-medium">
          {category}
        </div>
      )}

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <Image 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
          src={img} 
          width={350} 
          height={200} 
          alt={title} 
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
          {title}
        </div>
        
        <div className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {desc}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Visit Project Button */}
        <div className="pt-4">
          <Link 
            href={link} 
            className="group/btn inline-flex items-center gap-2 text-accent hover:text-white px-6 py-3 rounded-xl border border-accent/30 hover:bg-gradient-accent transition-all duration-300 hover:scale-105" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="font-semibold">Visit Project</span>
            <GrFormNextLink className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};
