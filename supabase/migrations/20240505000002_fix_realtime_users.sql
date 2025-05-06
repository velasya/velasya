-- Fix for the realtime publication error
-- First check if the table is already in the publication
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' 
    AND schemaname = 'public' 
    AND tablename = 'users'
  ) THEN
    -- Only add if not already present
    ALTER PUBLICATION supabase_realtime ADD TABLE public.users;
  END IF;
END
$$;