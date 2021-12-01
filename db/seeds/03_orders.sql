INSERT INTO orders (user_id, in_progress, time_ordered, pickup_ready)
VALUES (2, FALSE, NOW()::timestamp, FALSE),
(3, FALSE, NOW()::timestamp, FALSE),
(1, FALSE, NOW()::timestamp, FALSE),
(4, TRUE, NOW()::timestamp, FALSE);
