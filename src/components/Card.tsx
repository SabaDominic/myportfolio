"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../app/styles/card.css';

interface Propstype {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<Propstype> = ({ title, desc, img, tags }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`card ${isSmallScreen ? 'card-sm' : ''}`}
      data-aos="zoom-in-up"
    >
      <div>
        <Image
          className={`card-image ${isSmallScreen ? 'card-image-sm' : ''}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="card-container">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

