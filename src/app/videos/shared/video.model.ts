import {Genre} from '../../genres/shared/genre.model';

export class Video {
  id?: number;
  title: string;
  About: string;
  genres: Genre[];
}
