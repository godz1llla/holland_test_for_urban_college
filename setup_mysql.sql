CREATE USER IF NOT EXISTS 'riasecuser'@'localhost' IDENTIFIED BY 'riasecpass';
GRANT ALL PRIVILEGES ON riasec.* TO 'riasecuser'@'localhost';
FLUSH PRIVILEGES;
