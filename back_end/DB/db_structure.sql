CREATE TABLE countries(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    code VARCHAR(2) NOT NULL,
    continent VARCHAR(20) NOT NULL CHECK (continent IN ('Europe', 'Asia', 'Africa', 'Oceania', 'North America', 'South America', 'Antarctica')),
    surf_season VARCHAR(20) NOT NULL,
    good_weather_season VARCHAR(20) NOT NULL,
    timezone VARCHAR(20) NOT NULL,
    life_cost INTEGER NOT NULL CHECK (life_cost >= 1 AND life_cost <= 5)
);

CREATE TABLE spots(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    country_id INTEGER NOT NULL REFERENCES countries(id) ON DELETE CASCADE,
    image_link TEXT NOT NULL,
    has_coworking BOOLEAN DEFAULT FALSE,
    has_coliving BOOLEAN DEFAULT FALSE,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL
);

CREATE TABLE users( 
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE work_places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('café', 'coworking', 'coliving')),
    spot_id INTEGER NOT NULL REFERENCES spots(id) ON DELETE CASCADE,
    creator_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    adress TEXT NOT NULL,
    image_link TEXT NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL
);



CREATE TABLE ratings(
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    work_place_id INTEGER REFERENCES work_places(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 0 AND rating <= 5),
    PRIMARY KEY (user_id, work_place_id)
);

CREATE TABLE likes(
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    spot_id INTEGER REFERENCES spots(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, spot_id)
);



