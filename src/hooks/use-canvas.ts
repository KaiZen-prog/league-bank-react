import {useRef, useEffect} from 'react';
import {CanvasDrawFunctionType} from '../common/types';

const useCanvas = (draw: CanvasDrawFunctionType) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    draw(canvas);
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
