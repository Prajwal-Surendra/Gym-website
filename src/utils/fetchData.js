export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1e56507124msh15afc2630b0d1e7p1b9579jsn115d87a5262f",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  console.log(data);
};
