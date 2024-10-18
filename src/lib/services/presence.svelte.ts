import PartySocket from "partysocket";
import { coursesOnlineList, studentsOnlineList } from "$lib/runes";
import type { LoEvent } from "./presence-types";
import { getKeys } from "$lib/environment";
import { PUBLIC_party_kit_main_room } from "$env/static/public";

const partyKitServer = getKeys().partyKit.mainRoom;

let partyKitAll = <PartySocket>{};

if (PUBLIC_party_kit_main_room !== "XXX") {
  partyKitAll = new PartySocket({
    host: partyKitServer,
    room: "tutors-all-course-access"
  });
}

export const presenceService = {
  studentEventMap: new Map<string, LoEvent>(),
  studentLos: new Array<LoEvent>(),

  courseEventMap: new Map<string, LoEvent>(),
  courseLos: new Array<LoEvent>(),

  allStudentEventMap: new Map<string, LoEvent>(),
  allStudentLos: new Array<LoEvent>(),

  currentUserId: "",

  partyKitCourse: <PartySocket>{},

  startGlobalPresenceService() {
    partyKitAll.addEventListener("message", (event) => {
      try {
        const nextCourseEvent = JSON.parse(event.data);

        let courseEvent = this.courseEventMap.get(nextCourseEvent.courseId);

        if (!courseEvent) {
          this.courseLos.push(nextCourseEvent);
          coursesOnlineList.value.push(nextCourseEvent);
          this.courseEventMap.set(nextCourseEvent.courseId, nextCourseEvent);
        } else {
          refreshLoEvent(courseEvent, nextCourseEvent);
          coursesOnlineList.value = [...this.courseLos];
        }

        const nextStudentEvent = JSON.parse(event.data);
        let studentEvent = this.allStudentEventMap.get(nextStudentEvent.user.id);
        if (!studentEvent) {
          this.allStudentLos.push(nextStudentEvent);
          studentsOnlineList.value.push(nextStudentEvent);
          this.allStudentEventMap.set(nextStudentEvent.user.id, nextStudentEvent);
        } else {
          refreshLoEvent(studentEvent, nextStudentEvent);
          studentsOnlineList.value = [...this.allStudentLos];
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
};

function refreshLoEvent(loEvent: LoEvent, nextLoEvent: LoEvent) {
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
