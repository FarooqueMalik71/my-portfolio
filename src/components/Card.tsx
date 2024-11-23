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
}

export const Card: React.FC<PropsType> = ({ title, desc, img, tags, link }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px]" data-aos="zoom-in-up">
      <div>
        <Image className="w-[300px] sm:w-[350px] h-auto" src={img} width={350} height={350} alt={title} />
      </div>

      <div className="p-4 space-y-4">
        <div className="text-4xl font-extralight">{title}</div>
        <div>{desc}</div>
        <div className="flex gap-2 mt-4">
          
         
            <Link href={link} className="flex text-blue-500  px-4 py-2 rounded hover:bg-blue-600 transition" target="_blank" rel="noopener noreferrer" >
            
<div> Visit Project<GrFormNextLink /></div>
            </Link>

        </div>
        <div className="mt-4">
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
