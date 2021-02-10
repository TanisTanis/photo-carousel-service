import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '1m',
}

export default function() {
  const randomNum = Math.floor(Math.random() * 10000000);
  const url = `http://localhost:3003/?propertyId=${randomNum}`
  http.get(url);
  sleep(0.05);
}