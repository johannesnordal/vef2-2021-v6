import Link from 'next/link';

import s from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props): JSX.Element {
  return (
    <div className={s.layout}>
      <div className={s.layout__links}>
        <div className={s.layout__links__link}>
          <Link href="/">Films</Link>
        </div>
        <div className={s.layout__links__link}>
          <Link href="/characters">Characters</Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
