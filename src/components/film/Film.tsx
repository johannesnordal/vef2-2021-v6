import Link from 'next/link';

import { IFilm } from '../../types';

import s from './Film.module.scss';

type Props = {
  film: IFilm;
};

export function Film({ film }: Props): JSX.Element {
  const { characters } = film.characterConnection;

  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        Episode {film.episodeID}: {film.title}
      </h2>
      <div className={s.film__main}>
        <div className={s.film__crawl}>
          <p>{film.openingCrawl}</p>
        </div>
        <div className={s.film__char}>
          <h3>Characters</h3>
          <div className={s.film__char__links}>
            {characters.map((character, index) => (
              <div key={index} className={s.film__char__link}>
                <Link href={`/characters/${character.id}`}>
                  {character.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className={s.film__line} />
    </section>
  );
}
