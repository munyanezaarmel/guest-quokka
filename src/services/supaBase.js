import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aavegtujjziytqhjknev.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhdmVndHVqanppeXRxaGprbmV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5ODk2OTcsImV4cCI6MjAxNjU2NTY5N30.om8vDOUXsN_V0SzfzPaDa8nutGAeD8HLVCWZCrW4apo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
