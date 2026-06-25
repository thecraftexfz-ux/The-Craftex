import { gsap } from 'gsap';

export function createMagneticMotion(target: HTMLElement) {
  const xTo = gsap.quickTo(target, 'x', { duration: 0.4, ease: 'power3.out' });
  const yTo = gsap.quickTo(target, 'y', { duration: 0.4, ease: 'power3.out' });

  const onMove = (event: MouseEvent) => {
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    xTo(x * 0.18);
    yTo(y * 0.18);
  };

  const onLeave = () => {
    xTo(0);
    yTo(0);
  };

  target.addEventListener('mousemove', onMove);
  target.addEventListener('mouseleave', onLeave);

  return () => {
    target.removeEventListener('mousemove', onMove);
    target.removeEventListener('mouseleave', onLeave);
  };
}

