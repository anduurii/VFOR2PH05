CREATE TABLE IF NOT EXISTS movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  year INTEGER CHECK (year > 1880),
  genre VARCHAR(64),
  image_url VARCHAR(255),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (title, year, genre, image_url, description) VALUES 
('Inception', 2010, 'Sci-Fi', '/images/inception.jpg', 'Draumur innan draums.'),
('Interstellar', 2014, 'Sci-Fi', '/images/interstellar.jpg', 'Ferðalag í gegnum ormagöng.');

SELECT * FROM movies;




CREATE TABLE IF NOT EXISTS teams (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),    
);

INSERT INTO teams (title, region, description, image_url) VALUES
('T1', 'LCK', 'The most storied LCK organization, 
synonymous with championship pedigree and legendary players.',
'/images/T1.png'),
('GEN.G', 'LCK', 'A consistently elite powerhouse 
known for disciplined play and domestic dominance.',
'/images/Gen.G.png'),
('HLE', 'LCK', 'An ambitious contender built around star talents 
and aggressive roster investments.',
'/images/HLE.png'),