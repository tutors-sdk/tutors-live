import PartySocket from "partysocket";
import { coursesOnline, coursesOnlineList, allStudentsOnlineList, allStudentsOnline } from "$lib/runes";
import type { LoEvent } from "./types/presence";
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
          this.courseEventMap.set(nextCourseEvent.courseId, nextCourseEvent);
        } else {
          refreshLoEvent(courseEvent, nextCourseEvent);
        }
        // this.courseLos = [...this.courseLos];
        coursesOnlineList.value = [...this.courseLos];
        coursesOnline.value = this.courseLos.length;

        const nextStudentEvent = JSON.parse(event.data);
        let studentEvent = this.allStudentEventMap.get(nextStudentEvent.user.id);
        if (!studentEvent) {
          this.allStudentLos.push(nextStudentEvent);
          this.allStudentEventMap.set(nextStudentEvent.user.id, nextStudentEvent);
        } else {
          refreshLoEvent(studentEvent, nextStudentEvent);
        }
        // this.allStudentLos = [...this.allStudentLos];
        allStudentsOnlineList.value = [...this.allStudentLos];
        allStudentsOnline.value = this.allStudentLos.length;
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
