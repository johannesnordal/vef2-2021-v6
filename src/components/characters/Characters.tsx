import React, { useState } from 'react';

import Link from 'next/link';

import s from './Characters.module.scss';
import { Button } from '../button/Button';
import { ICharacter, IAllPeople } from '../../types';

type Props = {
  data: IAllPeople;
};

export function Characters({ data }: Props): JSX.Element {
  const { people, pageInfo } = data.allPeople;

  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Array<ICharacter>>(people ?? []);
  const [nextPage, setNextPage] = useState<string | null>(pageInfo?.endCursor ?? null);
  const [hasNextPage, setHasNextPage] = useState<boolean>(pageInfo?.hasNextPage ?? false);

  const fetchMore = async (): Promise<void> => {
    if (hasNextPage) {
      setLoading(true);

      const result = await fetch(`/api/characters?after=${nextPage}`);

      const {
        allPeople: {
          people: xpeople,
          pageInfo: xpageInfo,
        },
      } = await result.json();

      setCharacters(characters.concat(xpeople ?? []));
      setNextPage(xpageInfo?.endCursor ?? null);
      setHasNextPage(xpageInfo?.hasNextPage ?? false);

      setLoading(false);
    }
  };

  return (
    <section className={s.characters}>
      <ul className={s.characters__list}>
        {characters.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
      {hasNextPage && <Button disabled={loading} onClick={fetchMore}>Fetch more</Button>}
    </section>
  );
}
