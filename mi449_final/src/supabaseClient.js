
import { createClient } from '@supabase/supabase-js' ;

const supabaseUrl = 'https://pavinuwtygecdbnszgus.supabase.co' ;
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhdmludXd0eWdlY2RibnN6Z3VzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI5MDExODIsImV4cCI6MTk5ODQ3NzE4Mn0.i2yHirifcnQJ7TeyvGHcLvP1LB3Dhvxo8bPS2T-4cDE ;
export const supabase = createClient(supabaseUrl, supabaseKey) ;
