export type IconType = {
  type: string;
  color: string;
};

export interface LoUser {
  fullName: string;
  avatar: string;
  id: string;
}

export class LoRecord {
  courseId: string = $state("");
  courseUrl: string = $state("");
  courseTitle: string = $state("");
  loRoute: string = $state("");
  title: string = $state("");
  img?: string = $state("");
  icon?: IconType = $state();
  isPrivate: boolean = $state(false);
  user?: LoUser = $state<LoUser | undefined>();
  type: string = $state("");

  constructor(data: any) {
    Object.assign(this, data);
  }
}

export interface CatalogueEntry {
  course_id: string;
  visited_at: Date;
  visit_count: number;
  course_record: any;
}

export type CourseVisit = {
  id: string;
  title: string;
  img?: string;
  icon?: IconType;
  lastVisit: Date;
  credits: string;
  visits?: number;
  private: boolean;
};

export interface CardDetails {
  route: string;
  title: string;
  type: string;
  subtitle1?: string;
  subtitle2?: string;
  summary?: string;
  icon?: IconType;
  img?: string;
  student?: LoUser;
  video?: string;
}

export function refreshLoRecord(loEvent: LoRecord, nextLoEvent: LoRecord) {
  loEvent.loRoute = `https://tutors.dev${nextLoEvent.loRoute}`;
  loEvent.title = nextLoEvent.title;
  loEvent.type = nextLoEvent.type;
  if (nextLoEvent.icon) {
    loEvent.icon = nextLoEvent.icon;
    loEvent.img = undefined;
  } else {
    loEvent.img = nextLoEvent.img;
    loEvent.icon = undefined;
  }
}
