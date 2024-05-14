'use client';

import { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

import TimeCard from './time-card';

const NightComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // set canvas dimensions
    const isMobile = window.innerWidth < 768;
    canvas.width = isMobile ? window.innerWidth : window.innerWidth / 3;
    canvas.height = isMobile ? window.innerHeight : window.innerHeight / 3;

    // draw some stars
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  return (
    <TimeCard className="bg-[#001324] text-white">
      <canvas className="absolute inset-0 size-full opacity-70 md:opacity-100" ref={canvasRef} />
      <motion.div
        animate={{ scale: [1, 1.1, 1.1, 1, 1] }}
        className="absolute bottom-0 right-0 rounded-tl-full bg-white/10 pl-2 pt-2 md:pl-4 md:pt-4"
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <motion.div>
          <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
            <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
              <motion.div
                animate={{ scale: [1, 0.9, 0.9, 1, 1] }}
                className="relative size-48 rounded-tl-full bg-[#DFDFDF]"
                initial={false}
                transition={{
                  duration: 4,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <div className="absolute left-12 top-14 size-2 rounded-full bg-[#C2C2C2] md:left-28 md:top-16 md:size-4  xl:left-56 xl:top-20 xl:size-12" />
              <div className="absolute left-14 top-10 size-4 rounded-full bg-[#C2C2C2] md:left-[115px] md:top-24 xl:left-[230px] xl:top-36 xl:size-8" />
              <div className="absolute left-10 top-10 size-2 rounded-full bg-[#C2C2C2] md:left-20 md:top-20 md:size-8 xl:left-36 xl:top-32 xl:size-16" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </TimeCard>
  );
};

export default NightComponent;
