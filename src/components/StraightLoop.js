import { useEffect, useRef } from 'react';

const StraightLoop = ({
  text = '',
  speed = 0.6,
  className = '',
  direction = 'left',
  interactive = true
}) => {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  useEffect(() => {
    let raf;

    const loop = () => {
      if (!dragging.current && trackRef.current) {
        const dir = direction === 'right' ? 1 : -1;
        offsetRef.current += dir * speed;

        const width = trackRef.current.scrollWidth / 2;
        if (offsetRef.current <= -width) offsetRef.current = 0;
        if (offsetRef.current >= 0) offsetRef.current = -width;

        trackRef.current.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [speed, direction]);

  const onPointerDown = e => {
    if (!interactive) return;
    dragging.current = true;
    lastX.current = e.clientX;
  };

  const onPointerMove = e => {
    if (!dragging.current || !trackRef.current) return;
    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;
    offsetRef.current += dx;
    trackRef.current.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className="w-full overflow-hidden select-none cursor-grab"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div
        ref={trackRef}
        className={`flex w-max whitespace-nowrap will-change-transform text-current ${className}`}
      >
        <span className="px-8">{text}</span>
        <span className="px-8">{text}</span>
      </div>
    </div>
  );
};

export default StraightLoop;
