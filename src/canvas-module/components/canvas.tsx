import { styled } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import React, { useEffect, useRef, FC, DetailedHTMLProps } from "react";

const StyledCanvas = styled("canvas")((props) => ({}));

type CanvasProps = DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> & {
  draw: (context: CanvasRenderingContext2D) => void;
} & { sx?: SxProps };
const Canvas: FC<CanvasProps> = ({ draw, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    draw(context);
  }, []);
  return <StyledCanvas {...props} ref={canvasRef} />;
};

export default Canvas;
