-- SPOT
-- Ajout d'un spot
INSERT INTO
    spot (
        name,
        country_id,
        image_link,
        has_coworking,
        has_coliving,
        latitude,
        longitude,
    )
VALUES
    (
        'name',
        'country_id',
        'image_link',
        'has_coworking',
        'has_coliving',
        'latitude',
        'longitude',
    );

-- Supression d'un spot
DELETE FROM spot
WHERE
    id = 'id';

-- Selection de tous les spots
SELECT * FROM spot;

-- selection de spots likés par un utilisatuer
SELECT * FROM spot
WHERE
    id IN (
        SELECT spot_id
        FROM like
        WHERE
            user_id = 'user_id'
    );

-- Selection des spots en fonction de filtres

-- Workplace
-- Ajout d'un workplace
INSERT INTO
    work_place (
        name,
        type,
        spot_id,
        creator_user_id,
        adress,
        image_link,
        latitude,
        longitude
    )
-- Supression d'un workplace
DELETE FROM work_place
WHERE
    id = 'id';

-- Selection des workplaces en fonction d'un spot
SELECT * FROM work_place
WHERE
    spot_id = 'spot_id';


-- User
-- Ajout d'un user
INSERT INTO
    users (id, name)
VALUES
    ('id', 'name');

-- Supression d'un user
DELETE FROM users-
WHERE
    id = 'id';

-- Rating
-- Ajouter un rating
INSERT INTO
    ratings (user_id, work_place_id, rating)

-- modification d'un rating
UPDATE rating
SET
    rating = 'rating'
WHERE
    user_id = 'user_id'
    AND work_place_id = 'work_place_id';


-- Like
-- Ajouter un like
INSERT INTO
    like (user_id, spot_id)

-- Supression d'un like
DELETE FROM like
WHERE
    user_id = 'user_id'
    AND spot_id = 'work_place_id';