'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { TetrisPiece } from './3dAssets/TetrisPiece';

interface GamePiecesProps {
  isActive?: boolean;
}

const tetrisPieces = [
  { shape: 'I', color: '#00f0f0' }, // Cyan I piece
  { shape: 'J', color: '#0000f0' }, // Blue J piece
  { shape: 'L', color: '#f0a000' }, // Orange L piece
  { shape: 'O', color: '#f0f000' }, // Yellow O piece
  { shape: 'S', color: '#00f000' }, // Green S piece
  { shape: 'T', color: '#a000f0' }, // Purple T piece
  { shape: 'Z', color: '#f00000' }  // Red Z piece
];

const GamePieces: React.FC<GamePiecesProps> = ({ isActive = false }) => {
  const [activePiece, setActivePiece] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePiece((prev) => (prev + 1) % tetrisPieces.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={ref}
      className="bg-lighterblue h-[475px] flex flex-col items-center justify-center rounded-[16px] p-6 md:p-8 lg:p-10 shadow-lg relative overflow-hidden"
    >
      {/* Decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#AAADFA] to-transparent opacity-60"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#AAADFA] opacity-5 blur-3xl"></div> */}
      
      <motion.h2 
        initial={{ y: -10, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="font-jockey text-[#AAADFA] text-[24px] md:text-[30px] lg:text-[32px] tracking-wide relative mb-6"
      >
        Game Pieces
        {/* <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-[2px] bg-[#AAADFA] opacity-50"></span> */}
      </motion.h2>
      
      <div className="flex flex-col md:flex-row w-full h-full gap-6">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="md:w-1/2 flex flex-col justify-center"
        >
          <h3 className="font-jockey text-[#AAADFA] text-xl mb-4">
            {tetrisPieces[activePiece].shape}-Piece
          </h3>
          <p className="text-[#A7A7A7] text-sm md:text-base mb-4">
            Tetris pieces, known as Tetriminos, are geometric shapes composed of four square blocks. Each piece has a unique shape and color, creating diverse gameplay possibilities.
          </p>
          
          <ul className="space-y-3">
            <motion.li 
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-start"
            >
              <div className="h-6 w-6 rounded-full bg-[#AAADFA] opacity-20 mr-3 flex-shrink-0 mt-1"></div>
              <p className="text-[#A7A7A7] text-sm md:text-base">
                Each piece can be rotated and moved to fit into the playing field
              </p>
            </motion.li>
            <motion.li 
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start"
            >
              <div className="h-6 w-6 rounded-full bg-[#AAADFA] opacity-20 mr-3 flex-shrink-0 mt-1"></div>
              <p className="text-[#A7A7A7] text-sm md:text-base">
                The goal is to create complete horizontal lines that will disappear
              </p>
            </motion.li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="md:w-1/2 h-[250px]"
        >
          <Canvas>
            <Environment preset="city" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <TetrisPiece 
              shape={tetrisPieces[activePiece].shape} 
              color={tetrisPieces[activePiece].color} 
            />
          </Canvas>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GamePieces;
