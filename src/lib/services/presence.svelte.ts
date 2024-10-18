import PartySocket from "partysocket";
import { coursesOnlineList, studentsOnlineList } from "$lib/runes";
import { LoRecord, refreshLoRecord } from "./presence-types.svelte";
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
  studentByCourseEventMap: new Map<string, Map<string, LoRecord>>(),

  partyKitCourse: <PartySocket>{},

  groupedStudentListener(event: any) {
    let courseGroup = this.studentByCourseEventMap.get(event.courseId);
    if (!courseGroup) {
      const studentMap = new Map<string, LoRecord>();
      const latestLo = new LoRecord(event);
      studentMap.set(event.user.id, latestLo);
      this.studentByCourseEventMap.set(event.courseId, studentMap);
    } else {
      const loStudent = courseGroup.get(event.user.id);
      if (loStudent) {
        refreshLoRecord(loStudent, event);
      } else {
        courseGroup.set(event.user.id, new LoRecord(event));
      }
    }
  },

  studentListener(event: any) {
    let studentEvent = this.studentEventMap.get(event.user.id);
    if (!studentEvent) {
      const latestLo = new LoRecord(event);
      studentsOnlineList.value.push(latestLo);
      this.studentEventMap.set(event.user.id, latestLo);
    } else {
      refreshLoRecord(studentEvent, event);
    }
  },

  courseListener(event: any) {
    let courseEvent = this.courseEventMap.get(event.courseId);
    if (!courseEvent) {
      const latestLo = new LoRecord(event);
      coursesOnlineList.value.push(latestLo);
      this.courseEventMap.set(event.courseId, latestLo);
    } else {
      refreshLoRecord(courseEvent, event);
    }
  },
  partyKitListener(event: any) {
    try {
      const nextCourseEvent = JSON.parse(event.data);
      this.courseListener(nextCourseEvent);
      this.studentListener(nextCourseEvent);
      this.groupedStudentListener(nextCourseEvent);
    } catch (e) {
      console.log(e);
    }
  },

  startGlobalPresenceService() {
    partyKitAll.addEventListener("message", (event) => {
      this.partyKitListener(event);
    });
  }
};
