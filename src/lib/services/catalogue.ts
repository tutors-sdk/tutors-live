import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import type { CatalogueEntry } from "./presence-types.svelte";

export let supabase: SupabaseClient;

supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export async function getCatalogue() {
  try {
    const { data, error } = await supabase.from("tutors-connect-courses").select("*").order("visited_at", { ascending: false });

    if (error) {
      throw error;
    }

    let catalogue = data as Array<CatalogueEntry>;
    return catalogue;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export async function getCatalogueCount() {
  try {
    const { count, error } = await supabase.from("tutors-connect-courses").select("*", { count: "exact", head: true });

    if (error) {
      throw error;
    }

    return count || 0;
  } catch (error) {
    console.error("Error fetching course count:", error);
    return 0;
  }
}

export async function getStudentCount() {
  try {
    const { count, error } = await supabase.from("tutors-connect-profiles").select("*", { count: "exact", head: true });

    if (error) {
      throw error;
    }

    return count || 0;
  } catch (error) {
    console.error("Error fetching course count:", error);
    return 0;
  }
}
