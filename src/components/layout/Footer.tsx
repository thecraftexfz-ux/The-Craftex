import Link from 'next/link';

import { Container } from './Container';

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-dim">
      <Container className="py-24">
        <div className="grid gap-gutter md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="headline text-primary">The Craftex Studio</h3>
            <p className="body-md mt-4 max-w-sm text-on-surface-variant">
              Ancestral Craftsmanship, Contemporary Elegance.
            </p>
          </div>

          <div>
            <h2 className="label-caps text-primary">Connect</h2>
            <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <li className="body-md text-on-surface-variant">thecraftexfz@gmail.com</li>
              <li className="body-md text-on-surface-variant">+91 9825611879</li>
              <li className="body-md text-on-surface-variant">
                <Link
                  href="https://www.instagram.com/the.craftex.studio?igsh=MTUxZHZuM2dybnkybw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                The Craftex
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-outline-variant/20 pt-8">
          <p className="label-caps text-[10px] text-on-surface-variant/70">
            © 2026 THE CRAFTEX STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </Container>
    </footer>
  );
}
