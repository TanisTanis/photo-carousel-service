const fs = require('fs');
const fetch = require('node-fetch');


const width = 320;
const height = 240;
const keywords = ['houses', 'vacation', 'beach'];
const numberOfImages = 995;
const fileprefix = 'image';
const directory = './photos';


async function download(directory, prefix, numberOfImages, width, height, keywords = []) {
  keywords = keywords.join(',');
  for (let i = 1; i <= numberOfImages; i++) {
    const response = await fetch(`https://loremflickr.com/${width}/${height}/${keywords}`);
    const buffer = await response.buffer();
    fs.writeFile(`${directory}/${prefix}${i}.jpg`, buffer, () =>
      console.log(`Downloaded ${i} out of ${numberOfImages}...`));
  }
};
download(directory, fileprefix, numberOfImages, width, height, keywords);