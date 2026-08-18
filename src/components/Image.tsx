// Image.tsx - Function Declaration Style
import { useEffect, useState } from 'react';

interface ImageProps {
  name: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

// Import all images from the folder using Vite's glob import
const imageModules = import.meta.glob('/src/assets/images/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export default function Image({ 
      name, 
      alt = '',
      width = '100%',
      height = 'auto', 
      className = '' 
    }: ImageProps) {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    // Find the image that matches the name
    const matchedPath = Object.keys(imageModules).find((path) =>
      path.includes(`/${name}.`)
    );

    if (matchedPath) {
      setSrc(imageModules[matchedPath]);
    } else {
      console.warn(`Image "${name}" not found`);
      setSrc('');
    }
  }, [name]);

  return (
    src ? 
    <img 
        src={src} 
        alt={alt}
        style={{
          width: width,
          height: height
        }}
        className={className} 
    /> : 
    null
    );
}