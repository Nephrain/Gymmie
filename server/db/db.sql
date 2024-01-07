-- This file is not run. It is only used as reference for setting up PostgreSQL tables.

CREATE DATABASE gymmie;

CREATE TABLE profile(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE exercise(
  id SERIAL PRIMARY KEY,
  exercise_name VARCHAR(255),
  track_type_id INT,
  CONSTRAINT fk_track_type(
    FOREIGN KEY(track_type_id)
      REFERENCES track_type(id)
  )
);

CREATE TABLE workout(
  id SERIAL PRIMARY KEY,
  workout_name VARCHAR(255),
  datetime INT,
  user_id INT
  CONSTRAINT fk_user(
    FOREIGN KEY(user_id)
      REFERENCES profile(id)
  )
);

CREATE TABLE workout_exercise(
  id SERIAL PRIMARY KEY,
  position_in_sequence INT,
  exercise_id INT,
  workout_id INT,
  CONSTRAINT fk_exercise(
    FOREIGN KEY(exercise_id)
      REFERENCES exercise(id)
  ),
  CONSTRAINT fk_workout(
    FOREIGN KEY(workout_id)
      REFERENCES workout(id)
  )
);

CREATE TABLE workout_sets(
  id SERIAL PRIMARY KEY,
  position_in_sequence INT,
  weight INT,
  reps INT,
  time INT,
  distance INT,
  set_type_id INT,
  workout_exercise_id INT,
  CONSTRAINT fk_set_type(
    FOREIGN KEY(set_type_id)
      REFERENCES set_type(id)
  ),
  CONSTRAINT fk_workout_exercise(
    FOREIGN KEY(workout_exercise_id)
      REFERENCES workout_exercise(id)
  )
);

CREATE TABLE set_type(
  id SERIAL PRIMARY KEY,
  set_type VARCHAR(255)
);

CREATE TABLE tracking_type(
  id SERIAL PRIMARY KEY,
  track_type VARCHAR(255)
);

INSERT INTO set_type(set_type) VALUES ('Straight set'), ('Drop set'), ('Superset');
INSERT INTO tracking_type(track_type) VALUES ('Weight and Reps'), ('Reps only'), ('Distance Time');
INSERT INTO exercise(exercise_name, track_type_id) VALUES 
("Bench Press", 1), ("Barbell Squat", 1), ("Deadlift", 1),
("Bodyweight Squat", 2), ("Pushups", 2), ("Pull-ups", 2), 
("Running", 3), ("Stairmaster", 3), ("Swimming", 3);
