import React from 'react';
import useCanvas from '../../../hooks/use-canvas';
import {CanvasBlock} from './canvas.styled';
import {CanvasCoefficientsType} from '../../../common/types';

interface Props {
  draw: (...args: any[]) => any,
  coefficients: CanvasCoefficientsType
}

const Canvas: React.FunctionComponent<Props> = React.memo((props) => {
  const {draw, coefficients} = props;
  const canvasRef = useCanvas(draw, coefficients);

  return (
    <CanvasBlock
      ref={canvasRef}
    />
  );
});

Canvas.displayName = 'Canvas';
export default Canvas;
