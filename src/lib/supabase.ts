export type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

// Use Vite's standard way to access environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug logging (remove in production if needed)
console.log('Supabase Config:', {
  url: SUPABASE_URL ? 'Set' : 'Missing',
  key: SUPABASE_ANON_KEY ? 'Set' : 'Missing',
  urlValue: SUPABASE_URL || 'undefined'
});

let supabaseInstance: ReturnType<typeof createClient> | null = null;

export const isSupabaseAvailable = (): boolean => Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = (() => {
	if (!isSupabaseAvailable()) {
		console.warn('Supabase is not configured. Please check your environment variables.');
		return null as unknown as ReturnType<typeof createClient> | null;
	}
	if (!supabaseInstance) {
		supabaseInstance = createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string);
	}
	return supabaseInstance;
})(); 