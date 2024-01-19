import {useState, useRef, useEffect} from 'react';
import {CanvasCoefficientsType, CanvasDrawFunctionType} from '../common/types';

const useCanvas = (draw: CanvasDrawFunctionType, coefficients: CanvasCoefficientsType) => {
  const canvasRef = useRef(null);
  const [width, setWidth] = useState(0);

  const updateCanvasSize = () => {
    const {width} = canvasRef.current.parentElement.getBoundingClientRect();
    setWidth(width);
  };

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const {width, height} = canvas.parentElement.getBoundingClientRect();
    const calculatedWidth = Math.floor(width);
    const calculatedHeight = Math.floor(height);

    ctx.canvas.width = calculatedWidth;
    ctx.canvas.height = height;

    draw(ctx, calculatedWidth, calculatedHeight, coefficients);

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [width, coefficients]);

  return canvasRef;
};

export default useCanvas;
