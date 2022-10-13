import { Movie, Movies } from "./movies";

export function compareYear(a: Movie, b:Movie) {
  return  a.year > b.year ? 1: b.year > a.year ? -1 : 0;
}

export function compareTitle(a: Movie, b: Movie) {
  return a.title.replace('The ','').localeCompare(b.title.replace('The ',''));
}

export function filterByMovieGenre(genre: string) {
  return function (a: Movie){
    return a.genres.includes(genre);
  };
}

export function sortYear(movies: Movie[]): Movie[] {
  return movies.sort(compareYear);
}

export function sortTitle(movies: Movie[]): Movie[] {
return movies.sort(compareTitle);
}

export function inGenre(movies: Movie[], genre: string): Movie[] {
  return movies.filter(filterByMovieGenre(genre));
}
