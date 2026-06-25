import Image from 'next/image';

import { cn } from '@/lib/utils/cn';

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function EditorialImage({ src, alt, className, priority }: EditorialImageProps) {
  return (
    <div className={cn('editorial-image-frame relative', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="editorial-image object-cover"
        priority={priority}
      />
    </div>
  );
}

