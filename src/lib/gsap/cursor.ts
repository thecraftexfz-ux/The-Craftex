import { gsap } from 'gsap';

export function createCursorSmoothing(cursor: HTMLElement) {
  const xTo = gsap.quickTo(cursor, 'x', {
    duration: 0.45,
    ease: 'power3.out'
  });
  const yTo = gsap.quickTo(cursor, 'y', {
    duration: 0.45,
    ease: 'power3.out'
  });

  const onMove = (event: MouseEvent) => {
    xTo(event.clientX);
    yTo(event.clientY);
  };

  window.addEventListener('mousemove', onMove);

  return () => {
    window.removeEventListener('mousemove', onMove);
  };
}

