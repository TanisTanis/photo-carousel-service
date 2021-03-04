<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/> <img alt="AWS" src="https://img.shields.io/badge/AWS%20-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/> <img alt="Nginx" src="https://img.shields.io/badge/nginx%20-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white"/> 

# Photo Gallery Service

### An example page from this microservice
<img src="./assets/PhotoGallery.gif"/>

## Project Overview

<ul>
  <li>Took a photo-gallery microservice for an application similar to Airbnb that was originally written with around 100 different records/pages and scaled it to    handle 10 million different primary listings, with 50 million photo listings.</li>
  <li>Transitioned database from MongoDB to PostgreSQL in order to have a relational database</li>
  <li>Deployed to EC2 and tested web performance</li>
</ul>

### Accomplishments

<ul>
  <li>Reduced PostgreSQL query times of a table with 50 million photo records from ~40 seconds to ~1ms by indexing</li>
  <li>Horizontally scaled by running up to 4 EC2 instances of the service</li>
  <li>Used NGINX as a load balancer to between the four instances</li>
</ul>

Through all these steps, was able to scale the microservice to handle up to 90,000 requests per minute. (1500 requests per second)
