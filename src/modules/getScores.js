export default async (ID = 'YI5c8JUjdl1SSUf3eTcy') => {
  const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${ID}/scores`;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const LB = await response.json();

  return LB.result;
};
