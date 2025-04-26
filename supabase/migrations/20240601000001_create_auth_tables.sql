-- Create users table with role-based authentication
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  role TEXT NOT NULL CHECK (role IN ('buyer', 'seller', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable row level security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policy for users to view their own data
DROP POLICY IF EXISTS "Users can view their own data" ON public.users;
CREATE POLICY "Users can view their own data" 
  ON public.users 
  FOR SELECT 
  USING (auth.uid() = id);

-- Create policy for users to update their own data
DROP POLICY IF EXISTS "Users can update their own data" ON public.users;
CREATE POLICY "Users can update their own data" 
  ON public.users 
  FOR UPDATE 
  USING (auth.uid() = id);

-- Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  starting_price DECIMAL(10, 2) NOT NULL,
  current_bid DECIMAL(10, 2),
  start_time TIMESTAMP WITH TIME ZONE NOT NULL,
  end_time TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('draft', 'active', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable row level security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy for anyone to view active products
DROP POLICY IF EXISTS "Anyone can view active products" ON public.products;
CREATE POLICY "Anyone can view active products" 
  ON public.products 
  FOR SELECT 
  USING (status = 'active' OR auth.uid() = seller_id);

-- Create policy for sellers to manage their own products
DROP POLICY IF EXISTS "Sellers can manage their own products" ON public.products;
CREATE POLICY "Sellers can manage their own products" 
  ON public.products 
  FOR ALL 
  USING (auth.uid() = seller_id);

-- Create bids table
CREATE TABLE IF NOT EXISTS public.bids (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  buyer_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  amount DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(product_id, buyer_id, amount)
);

-- Enable row level security
ALTER TABLE public.bids ENABLE ROW LEVEL SECURITY;

-- Create policy for anyone to view bids
DROP POLICY IF EXISTS "Anyone can view bids" ON public.bids;
CREATE POLICY "Anyone can view bids" 
  ON public.bids 
  FOR SELECT 
  USING (true);

-- Create policy for buyers to create bids
DROP POLICY IF EXISTS "Buyers can create bids" ON public.bids;
CREATE POLICY "Buyers can create bids" 
  ON public.bids 
  FOR INSERT 
  WITH CHECK (auth.uid() = buyer_id);

-- Enable realtime for all tables
alter publication supabase_realtime add table users;
alter publication supabase_realtime add table products;
alter publication supabase_realtime add table bids;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS products_seller_id_idx ON public.products(seller_id);
CREATE INDEX IF NOT EXISTS products_status_idx ON public.products(status);
CREATE INDEX IF NOT EXISTS bids_product_id_idx ON public.bids(product_id);
CREATE INDEX IF NOT EXISTS bids_buyer_id_idx ON public.bids(buyer_id);
