"use client";
import React, { useState, useEffect, useMemo } from 'react';
import externalLink from "../assets/externalLinkWhite.png"

const Intro= () => {
  const traits = useMemo(() =>[
    { text: "Alex Li", color: "#FFFFFF" },
    { text: "Software Engineer", color: "#20C997" },
    { text: "Swimmer", color: "#6CC0BA" },
    { text: "Avid Reader", color:"#df8402"},
    { text: "Niki's Biggest Fan", color:"#ADD8E6"},
    { text: "Watching Arcane :(", color:"#7F00FF"}
  ], [])

  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [traitIndex, setTraitIndex] = useState(0);

  useEffect(() => {
    if (charIndex < traits[traitIndex].text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + traits[traitIndex].text[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      }, 100);
      return () => clearTimeout(typingTimeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        const nextIndex = (traitIndex + 1) % traits.length;
        setTraitIndex(nextIndex);
        setDisplayedText("");
        setCharIndex(0);
      }, 5000);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, traitIndex, traits]);

  const isWithArticle = traits[traitIndex].text === "Software Engineer" || traits[traitIndex].text === "Swimmer" || traits[traitIndex].text === "Avid Reader"

  return (
    <div style={{ backgroundColor: "#2C2C2C", height: "100vh", transition: "background-color 1s ease" }}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl py-2">
          <span className="bg-white text-black px-2 rounded-sm">Hi!</span><span className='text-white'>  I'm{isWithArticle && " a"} </span>
        </h1>
        <h1 className="text-9xl" style={{ color: traits[traitIndex].color }}>
          {displayedText}
        </h1>
        <h3 className='py-6 text-3xl text-white'>
          <a href="/Alex_s_SWE_Resume copy.pdf" 
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-flow">
          Resume <img src={externalLink} alt="External Link Icon" className="w-5 h-5" />
          </a>
        </h3>
      </div>
      <div className="absolute bottom-4 left-4 px-36 py-16">
        <h1 className="text-4xl">
          <span className="bg-white text-black px-2 rounded-sm">Computer Science</span>
          <span className='text-white'> Student @</span>
        </h1>
        <h1 className="text-4xl text-white">University of Wisconsin - Madison</h1>
      </div>
    </div>
  );
};

export default Intro;
