import { presenceService } from "$lib/services/presence.svelte";

export const load = async ({ params, parent, fetch }) => {
  presenceService.startGlobalPresenceService();
};
