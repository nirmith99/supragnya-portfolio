import * as React from "react";

export interface PaintSplashProps {
  color: string;
  width: number;
  height: number;
  opacity?: number;
  variant: 'blob1' | 'blob2' | 'blob3' | 'splatter' | 'drip';
  className?: string;
  style?: React.CSSProperties;
}

export function PaintSplash({ color, width, height, opacity = 1, variant, className, style }: PaintSplashProps) {
  const filterId = `paint-${variant}`;
  
  const getPath = () => {
    switch(variant) {
      case 'blob1':
        return "M34.5 12.3C45.2 18.5 56.4 24.1 60.1 34.2C63.8 44.3 60 58.9 50.1 65.4C40.2 71.9 24.2 70.3 14.1 62.5C4 54.7 -0.2 40.7 0.1 27.9C0.4 15.1 6.3 3.5 16.5 0.7C26.7 -2.1 41.2 5.1 34.5 12.3Z";
      case 'blob2':
        return "M32.5 15.2C40.1 20.3 48.9 25.1 55.4 33.2C61.9 41.3 66.1 52.7 61.3 60.4C56.5 68.1 42.7 72.1 30.1 71.5C17.5 70.9 6.1 65.7 1.8 56.1C-2.5 46.5 0.3 32.5 6.9 22.1C13.5 11.7 23.9 4.9 32.5 15.2Z";
      case 'blob3':
        return "M42.1 12.4C51.5 21.8 59.9 31.9 61.4 43.1C62.9 54.3 57.5 66.6 47.8 73.1C38.1 79.6 24.1 80.3 14.4 73.5C4.7 66.7 -0.7 52.4 0.1 39.8C0.9 27.2 7.7 16.3 16.9 8.2C26.1 0.1 37.7 -3.2 42.1 12.4Z";
      case 'splatter':
        return "M10 10C15 5 25 15 20 20C15 25 5 15 10 10ZM40 5C43 2 50 8 47 12C44 16 37 10 40 5ZM60 30C65 25 75 35 70 40C65 45 55 35 60 30ZM5 50C10 45 20 55 15 60C10 65 0 55 5 50Z";
      case 'drip':
        return "M10 0 C15 20 15 40 10 60 C5 40 5 20 10 0 Z";
      default:
        return "M34.5 12.3C45.2 18.5 56.4 24.1 60.1 34.2C63.8 44.3 60 58.9 50.1 65.4C40.2 71.9 24.2 70.3 14.1 62.5C4 54.7 -0.2 40.7 0.1 27.9C0.4 15.1 6.3 3.5 16.5 0.7C26.7 -2.1 41.2 5.1 34.5 12.3Z";
    }
  };

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 80 80" 
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={{ opacity, ...style }}
    >
      <defs>
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
      <path 
        d={getPath()} 
        fill={color} 
        filter={`url(#${filterId})`}
      />
    </svg>
  );
}
