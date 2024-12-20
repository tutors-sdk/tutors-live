import { getCatalogue } from "$lib/services/catalogue";

export const load = async ({ params, parent, fetch }) => {
  let catalogueEntries = await getCatalogue();
  catalogueEntries = catalogueEntries
    .filter(entry => entry.visit_count >= 4)
    .sort((a, b) => b.visit_count - a.visit_count);
  const courseRecords = catalogueEntries.map((entry) => entry.course_record);
  return {
    courseRecords
  };
};
