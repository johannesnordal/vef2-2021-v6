export interface ICharacter {
  birthYear?: string;
  eyeColor?: string;
  hairColor?: string;
  height?: number;
  id: string;
  mass?: number;
  name?: string;
}

export interface IFilm {
  characterConnection: IFilmCharacterConnection;
  episodeID?: number;
  openingCrawl?: string;
  title?: string;
}

export interface IFilmCharacterConnection {
  characters?: Array<ICharacter>;
}

export interface IFilms {
  films: Array<IFilm>;
}

export interface IAllFilms {
  allFilms: IFilms;
}

export interface IPageInfo {
  hasNextPage: boolean;
  endCursor?: string;
}

export interface IPeople {
  people: Array<ICharacter>;
  pageInfo: IPageInfo;
}

export interface IAllPeople {
  allPeople: IPeople;
}
