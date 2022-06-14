import { IGroup } from '../../Atoms/ItemList';

export interface IVideo {
  duration: number;
  programTitle: string;
  source: string;
}

export interface ISideNews {
  chapeu?: string;
  image: string;
  section?: string;
  summary?: string;
  title: string;
  url: string;
  video?: IVideo | null;
  group?: IGroup[];
  type: string;
  created: string;
  id: string;
}
