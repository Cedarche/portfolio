import React from 'react';
import { Parallax } from 'react-scroll-parallax';

interface PointLayerProps {
  count: number;
  maxX: number;
  maxY: number;
  color: string;
  size: number;
}

interface BackgroundProps {
  points?: PointLayerProps[];
}

const PointsLayer: React.FC<PointLayerProps> = ({ count, maxX, maxY, color, size }) => {
  return (
    <div>
      {Array.from({ length: count }, () => {
        let x = Math.floor(Math.random() * maxX);
        let y = Math.floor(Math.random() * maxY);
        return (
          <div
            style={{
              position: 'relative',
              top: x,
              left: y,
              display: 'block',
              height: size,
              width: size,
              backgroundColor: color,
            }}
          />
        );
      })}
    </div>
  );
};

const Background: React.FC<BackgroundProps> = () => {
  return (
    <>
      <Parallax
        style={{ position: 'relative', width: '100%', top: -2000 }}
        speed={60}
        startScroll={0}
        endScroll={4000}
      >
        <PointsLayer count={50} maxX={2500} maxY={2500} color={'ligthgrey'} size={3} />
      </Parallax>
      <Parallax
        style={{ position: 'relative', width: '100%', top: -2000 }}
        speed={20}
        startScroll={0}
        endScroll={4000}
      >
        <PointsLayer count={200} maxX={3000} maxY={2500} color={'lightgrey'} size={2} />
      </Parallax>
      <Parallax
        style={{ position: 'relative', width: '100%', top: -2000 }}
        speed={-30}
        startScroll={0}
        endScroll={4000}
      >
        <PointsLayer count={200} maxX={4000} maxY={2500} color={'white'} size={1} />
      </Parallax>
    </>
  );
};

export default Background;
