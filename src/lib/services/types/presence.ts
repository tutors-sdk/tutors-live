export type IconType = {
  type: string;
  color: string;
};

export interface LoUser {
  fullName: string;
  avatar: string;
  id: string;
}

export interface LoEvent {
  courseId: string;
  courseUrl: string;
  courseTitle: string;
  loRoute: string;
  title: string;
  img?: string;
  icon?: IconType;
  isPrivate: boolean;
  user: LoUser;
  type: string;
}
