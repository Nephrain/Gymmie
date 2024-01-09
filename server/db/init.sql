CREATE TABLE IF NOT EXISTS set_type(
  id SERIAL PRIMARY KEY,
  set_type VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tracking_type(
  id SERIAL PRIMARY KEY,
  tracking_type VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS profile(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS exercise(
  id SERIAL PRIMARY KEY,
  exercise_name VARCHAR(255) NOT NULL,
  tracking_type_id INT NOT NULL,
  CONSTRAINT fk_tracking_type
    FOREIGN KEY(tracking_type_id)
      REFERENCES tracking_type(id)
);

CREATE TABLE IF NOT EXISTS workout(
  id SERIAL PRIMARY KEY,
  workout_name VARCHAR(255) NOT NULL,
  datetime VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES profile(id)
);

CREATE TABLE IF NOT EXISTS workout_exercise(
  id SERIAL PRIMARY KEY,
  position_in_sequence INT NOT NULL,
  exercise_id INT NOT NULL,
  workout_id INT NOT NULL,
  CONSTRAINT fk_exercise
    FOREIGN KEY(exercise_id)
      REFERENCES exercise(id),
  CONSTRAINT fk_workout
    FOREIGN KEY(workout_id)
      REFERENCES workout(id)
);

CREATE TABLE IF NOT EXISTS workout_sets(
  id SERIAL PRIMARY KEY,
  position_in_sequence INT NOT NULL,
  weight INT,
  reps INT,
  time INT,
  distance INT,
  set_type_id INT NOT NULL,
  workout_exercise_id INT NOT NULL,
  CONSTRAINT fk_set_type
    FOREIGN KEY(set_type_id)
      REFERENCES set_type(id),
  CONSTRAINT fk_workout_exercise
    FOREIGN KEY(workout_exercise_id)
      REFERENCES workout_exercise(id)
);

INSERT INTO set_type(set_type) VALUES ('Straight set'), ('Drop set'), ('Superset');
INSERT INTO tracking_type(tracking_type) VALUES ('Weight and Reps'), ('Reps only'), ('Distance Time');

INSERT INTO exercise(exercise_name, tracking_type_id) VALUES 
('Bench Press', 1), 
('Barbell Squat', 1), 
('Deadlift', 1),
('Shoulder Press', 1),
('Dumbbell Bench Press', 1),
('Dumbbell Curl', 1),
('Barbell Curl', 1),
('Leg Press', 1),
('Dumbbell Shoulder Press', 1),
('Bent Over Row', 1),
('Incline Bench Press', 1),
('Incline Dumbbell Bench Press', 1),
('Lat Pulldown', 1),
('Hip Thrusts', 1),
('Dumbbell Lateral Raise', 1),
('Military Press', 1),
('Romanian Deadlift', 1),
('Dumbbell Row', 1),
('Machine Chest Press', 1),
('Tricep Pushdown', 1),
('Dumbbell Fly', 1),
('Dumbbell Pullover', 1),
('Dumbbell Shrug', 1),
('Dumbbell Overhead Tricep Extension', 1),
('Dumbbell Front Raise', 1),
('Dumbbell Rear Delt Fly', 1),
('Goblet Squat', 1),
('Seated Cable Row', 1),
('Hammer Curl', 1),
('Seated Leg Curl', 1),
('Machine Chest Fly', 1),
('Machine Rear Delt Fly', 1),
('Dip Machine', 1),
('Dumbbell Preacher Curl', 1),
('Machine Preacher Curl', 1),
('Bodyweight Squat', 2), 
('Pushups', 2), 
('Pull-ups', 2), 
('Chin-ups', 2),
('Dips', 2),
('Running', 3), 
('Stairmaster', 3), 
('Swimming', 3);

INSERT INTO profile(name, email) VALUES ('John Doe', 'johndoe@example.com');

INSERT INTO workout(workout_name, datetime, user_id) VALUES 
('Chest Day', '2020-01-01 12:00:00', 1), 
('Leg Day', '2020-01-02 12:00:00', 1), 
('Back Day', '2020-01-03 12:00:00', 1), 
('Shoulder Day', '2020-01-04 12:00:00', 1), 
('Arm Day', '2020-01-05 12:00:00', 1), 
('Cardio Day', '2020-01-06 12:00:00', 1);