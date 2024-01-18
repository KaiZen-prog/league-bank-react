import React from 'react';
import useCanvas from '../../../hooks/use-canvas';
import {CanvasBlock} from './canvas.styled';

interface Props {
  draw: (...args: any[]) => any
}

const Canvas: React.FunctionComponent<Props> = React.memo((props) => {
  const {draw} = props;
  const canvasRef = useCanvas(draw);

  return (
    <CanvasBlock
      ref={canvasRef}
    />
  );
});

Canvas.displayName = 'Canvas';
export default Canvas;
