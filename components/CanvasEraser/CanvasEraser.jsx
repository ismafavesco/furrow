import React from 'react';
import useForkRef from '../../hooks/useForkRef';
import canvasEraserFactory from './CanvasEraserFactory';

const CanvasEraser = (props, ref) => {
  const {
    completeRatio = 1,
    enabled = true,
    onComplete = null,
    onProgress = null,
    size = 40,
    background = '#000',
    width,
    height,
    ...other
  } = props;

  const [canvasEraser, setCanvasEraser] = React.useState(null);
  const [isDesktop, setIsDesktop] = React.useState(true);
  const canvasRef = React.useRef(null);
  const componentRef = useForkRef(canvasRef, ref);

  const options = React.useMemo(
    () => ({
      background,
      completeRatio,
      enabled,
      onComplete,
      onProgress,
      size,
      width,
      height,
    }),
    [
      background,
      completeRatio,
      enabled,
      onComplete,
      onProgress,
      size,
      width,
      height,
    ]
  );

  React.useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust this breakpoint as needed
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  React.useEffect(() => {
    if (isDesktop) {
      const canvas = canvasEraserFactory();
      setCanvasEraser(canvas);
    }
  }, [isDesktop]);

  React.useEffect(() => {
    if (canvasEraser && isDesktop) {
      canvasEraser.init(canvasRef.current, options);
    }
  }, [canvasEraser, options, isDesktop]);

  if (!isDesktop) {
    return null; // Don't render anything on mobile
  }

  return <canvas ref={componentRef} width={width} height={height} {...other} />;
};

export default React.forwardRef(CanvasEraser);
