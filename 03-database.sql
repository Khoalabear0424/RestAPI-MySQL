CREATE DATABASE tvshows_db;

USE tvshows_db;

-- Connect to it, and then create a tvshows table with 3 columns (columns: id, tvshow_name), make a ratings table (columns: id, rating and tvshow_id), insert 6 tv shows into the table and insert 2 ratings for each tv show into the ratings table

-- 	ask students in slack for their ratings

CREATE TABLE tvshows(
    id INT AUTO_INCREMENT,
    tvshow_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE ratings (
    id INT NOT NULL AUTO_INCREMENT,
    rating VARCHAR(255) NOT NULL,
    tvshow_id INT NOT NULL,
    FOREIGN KEY (tvshow_id) REFERENCES tvshows(id),
    PRIMARY KEY(id)
);

INSERT INTO tvshows(tvshow_name) VALUES ('Rick and Morty'),
('True Detective')
('Black Mirror')
('West Wing')
('American Horror Story')
('Lost')
('West World');

INSERT INTO ratings(rating,tvshow_id) VALUES (9,1),(10,1),(10,2),(10,2),(9,2),(9,2),(9,2),(9,3),(7,3),(7,3),(8,4),(8,4),(8,4),(9,4),(8,5),(10,5),(10,5),(9,6),(8,6),(7,7),(8,7),(8.5,7);
