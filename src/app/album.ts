import {Tracks} from './tracks';

export interface Album {
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Tracks[];
}
