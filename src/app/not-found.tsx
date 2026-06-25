import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="luxury-container py-section-gap text-center">
      <p className="label-caps text-secondary">404</p>
      <h1 className="display-section mt-4 text-primary">This space has not been crafted yet.</h1>
      <p className="body-md mx-auto mt-6 max-w-xl text-on-surface-variant">
        The page you are looking for was moved or does not exist.
      </p>
      <Link href="/" className="label-caps mt-10 inline-flex border border-secondary px-8 py-4 text-secondary">
        Return Home
      </Link>
    </div>
  );
}

