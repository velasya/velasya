-- Add OTP column to users table if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'otp') THEN
    ALTER TABLE public.users ADD COLUMN otp TEXT;
  END IF;
END $$;

-- Make sure realtime is enabled for the users table (safely check if it's already a member)
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_publication_tables WHERE pubname = 'supabase_realtime' AND tablename = 'users') THEN
    alter publication supabase_realtime add table users;
  END IF;
END $$;
