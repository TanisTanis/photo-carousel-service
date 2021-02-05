// const fs = require('fs').promises;
// const path = require('path');
// const records = ['listingId'];
// for (let i = 1; i <= 10000000; i += 1) {
//   records.push(i);
// }
// const filePath = path.join(__dirname, 'generated');
// fs.writeFile(`${filePath}/primary.csv`, records.join('\n'))
//   .then(() => {
//     console.log('Success');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const fs = require('fs');
const path = require('path');
const faker = require('faker');
const filePath = path.join(__dirname, 'generated');
const ws = fs.createWriteStream(`${filePath}/photos5.csv`);
ws.write(`photoId, thumbnailUrl, imageUrl, description, room\n`, 'utf-8');
// Declare your columns name here, you can add more than two!

const rooms = ['Living area', 'Full kitchen', 'Dining room', 'Full bathroom', 'Bedroom Area', 'Entry', 'Exterior', 'Patio'];

const records = ['photoId, thumbnailUrl, imageUrl, description, room'];

let count = 0;
let id = 8000001;

function photoNumber() {
  return Math.round(Math.random() * (995 - 1) + 1);
}

function roomIndex() {
  return Math.round(Math.random() * (rooms.length - 1));
}

for (let i = 1; i <= 10000000; i += 1) {
  // Enter your record her
  const num = photoNumber();
  const desc = faker.lorem.sentence();
  const room = rooms[roomIndex()];
  // Format your record with template lit,   seperates it with comma
  const record = `${id}, https://erictnv-photo-bucket.s3.us-west-1.amazonaws.com/photos/image${num}.jpg, https://erictnv-photo-bucket.s3.us-west-1.amazonaws.com/photos/image${num}.jpg, ${desc}, ${room}`;
  ws.write(`${record}\n`, 'utf-8');

  count++;
  if (count === 5) {
    count = 0;
    id++;
  }

  if (i % 100000 === 0 ) {
    console.log(`process: ${i / 100000}%`);
  }
}
ws.end();
console.log('Finished');

