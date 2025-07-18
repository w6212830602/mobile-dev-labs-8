import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mctukerfhzhqfxexvatw.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jdHVrZXJmaHpocWZ4ZXh2YXR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTU5NTUsImV4cCI6MjA2ODE5MTk1NX0.r4u9G2TR8fSbVnkfKkmX1rT4p4O7R_9j5iZW4Q9Gw70';

export const supabase = createClient(supabaseUrl, supabaseKey);
