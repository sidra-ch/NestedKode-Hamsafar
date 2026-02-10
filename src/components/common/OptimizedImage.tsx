import React, { useState, useEffect, useRef } from 'react';
import '../../styles/optimized-image.css';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  placeholder = '/assets/img/placeholder.jpg'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (loading === 'lazy') {
      observer.observe(img);
    } else {
      setIsInView(true);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`optimized-image-container ${className}`}>
      {!isLoaded && (
        <div 
          className="image-placeholder"
          style={{
            width: width || '100%',
            height: height || '300px'
          }}
        >
          <div className="image-loading-text">Loading...</div>
        </div>
      )}
      
      {isInView && (
        <img
          ref={imgRef}
          src={error ? placeholder : src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={isLoaded ? 'fade-in' : ''}
          style={{
            width: width || '100%',
            height: height || 'auto',
            objectFit: 'cover',
            borderRadius: '8px',
            display: isLoaded ? 'block' : 'none'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
