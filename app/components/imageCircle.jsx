"use client";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, animate } from 'motion/react';
import { useState } from 'react';

export default function ImageCircle(props){
  const [ selected, setSelected ] = useState(null)
  const { images } = props;
  const multiplier = ( 100 / images.length ) * 360

  return (
    <div className="relative rounded-full bg-none border-2 border-[#dddddd80] h-[85vmax] w-[85vmax] ">
      <AnimatePresence>
        {selected !== null &&
          images.map((image, i)=>{
            let x, y = -multiplier;

            if(i <= Math.floor(images.length / 4)){
              x += multiplier;
              y += multiplier;
            } else if(i <= Math.floor(images.length / 2)){
              x -= multiplier;
              y += multiplier;
            } else if(i <= Math.floor((images.length / 4) * 3)){
              x -= multiplier;
              y -= multiplier;
            }
          })
        }
      </AnimatePresence>
    </div>
  )
}