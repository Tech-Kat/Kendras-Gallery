DROP DATABASE IF EXISTS paintings_dev;
CREATE DATABASE paintings_dev;

\c paintings_dev;

CREATE TABLE paintings (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT,
  price numeric, 
  size TEXT,
  is_available Boolean,
  description TEXT,
  image TEXT DEFAULT 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
)
