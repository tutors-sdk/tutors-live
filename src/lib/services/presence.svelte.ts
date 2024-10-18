import PartySocket from "partysocket";
import { coursesOnlineList, studentsOnlineList } from "$lib/runes";
import { LoRecord } from "./presence-types.svelte";
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
  studentEventMap: new Map<string, LoRecord>(),
  courseEventMap: new Map<string, LoRecord>(),
  studentByCourseEventMap: new Map<string, LoRecord[]>(),

  partyKitCourse: <PartySocket>{},

  startGlobalPresenceService() {
    partyKitAll.addEventListener("message", (event) => {
      try {
        const nextCourseEvent = JSON.parse(event.data);

        let courseEvent = this.courseEventMap.get(nextCourseEvent.courseId);
        if (!courseEvent) {
          const latestLo = new LoRecord(nextCourseEvent);
          coursesOnlineList.value.push(latestLo);
          this.courseEventMap.set(nextCourseEvent.courseId, latestLo);
        } else {
          Object.assign(courseEvent, nextCourseEvent);
        }

        let studentEvent = this.studentEventMap.get(nextCourseEvent.user.id);
        if (!studentEvent) {
          const latestLo = new LoRecord(nextCourseEvent);
          studentsOnlineList.value.push(latestLo);
          this.studentEventMap.set(nextCourseEvent.user.id, latestLo);
        } else {
          Object.assign(studentEvent, nextCourseEvent);
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
};
