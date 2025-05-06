-- Add phone_number column to users table if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'users' AND column_name = 'phone_number') THEN
        ALTER TABLE public.users ADD COLUMN phone_number TEXT;
    END IF;
END $$;
