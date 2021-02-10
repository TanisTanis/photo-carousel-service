CREATE TABLE Photos(
  id INT PRIMARY KEY NOT NULL,
  photoId INT,
  orderId INT NOT NULL,
  thumbnailUrl TEXT,
  imageUrl TEXT,
  description TEXT,
  room TEXT
)