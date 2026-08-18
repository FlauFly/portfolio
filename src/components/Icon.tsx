// To style icons using this component, erase any styles in svg file
// I used opensvg.dev, mostly from lineicons
import { useState, useEffect } from 'react';

const icons = import.meta.glob('/src/assets/icons/*.svg', { eager: true, import: 'default' });

interface IconProps {
  name: string;
  color?: string;
  size?: string | number;
  className?: string;
}

export const Icon = ({
    name,
    color = 'currentColor',
    size = '24px',
    className = '' 
  }: IconProps) => {
    const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    const iconUrl = icons[`/src/assets/icons/${name}.svg`] as string;
    
    if (iconUrl) {
      // Fetch the SVG content
      fetch(iconUrl)
        .then(res => res.text())
        .then(svg => setSvgContent(svg))
        .catch(() => console.error(`Failed to load icon "${name}"`));
    } else {
      console.error(`Icon "${name}" not found`);
    }
  }, [name, color]);

  if (!svgContent) return null;

  return (
    <div 
      className={className}
      style={{
        width: size,
        height: size,
        color: color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyItems: 'center'
      }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};