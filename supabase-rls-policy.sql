-- Enable RLS on the waitlist table
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert into waitlist
CREATE POLICY "Allow anonymous inserts" ON waitlist
FOR INSERT 
TO anon
WITH CHECK (true);

-- Optional: Prevent duplicate emails (if not already handled by unique constraint)
-- ALTER TABLE waitlist ADD CONSTRAINT unique_email UNIQUE (email);