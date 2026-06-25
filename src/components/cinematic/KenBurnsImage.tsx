import Image, { type ImageProps } from 'next/image';

import { cn } from '@/lib/utils/cn';

type KenBurnsImageProps = Omit<ImageProps, 'alt'> & {
  alt: string;
  className?: string;
};

export function KenBurnsImage({ className, ...props }: KenBurnsImageProps) {
  const { alt, ...rest } = props;
  return <Image {...rest} alt={alt} className={cn('ken-burns h-full w-full object-cover', className)} />;
}

