export type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

// Expect these to be defined in Vite/CRA env style. Fallback to undefined when missing.
const SUPABASE_URL = (import.meta as any).env?.VITE_SUPABASE_URL || (globalThis as any).VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || (globalThis as any).VITE_SUPABASE_ANON_KEY;

let supabaseInstance: ReturnType<typeof createClient> | null = null;

export const isSupabaseAvailable = (): boolean => Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = (() => {
	if (!isSupabaseAvailable()) return null as unknown as ReturnType<typeof createClient> | null;
	if (!supabaseInstance) {
		supabaseInstance = createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string);
	}
	return supabaseInstance;
})(); 