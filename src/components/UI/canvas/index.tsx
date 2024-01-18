import React from 'react';
import useCanvas from '../../../hooks/use-canvas';
import {CanvasBlock} from './canvas.styled';

interface Props {
  draw: (...args: any[]) => any
}

const Canvas: React.FunctionComponent<Props> = (props) => {
  const {draw} = props;
  //const [canvasWidth, setCanvasWidth] = useState(0);
  //const [canvasHeight, setCanvasHeight] = useState(0);

  const canvasRef = useCanvas(draw);
  /*
  const updateCanvasSize = () => {
    const parentDiv = canvasRef.current.parentElement;
    console.log('in updateCanvasSize');
    console.log(`parentDiv.clientWidth: ${parentDiv.clientWidth}, parentDiv.clientHeight: ${parentDiv.clientHeight}`);

    setCanvasWidth(parentDiv.clientWidth);
    setCanvasHeight(parentDiv.clientHeight);
  };

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);*/

  return (
    <CanvasBlock
      ref={canvasRef}
    />
  );
};

Canvas.displayName = 'Canvas';
export default Canvas;
