import { createClient } from "@supabase/supabase-js";

const supabaseKey = "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";
const supabaseUrl = "https://utnsukxejmvkdugjxtbd.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);
