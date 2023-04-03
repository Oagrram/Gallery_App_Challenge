export const GetResources = async () => {
  console.log("i a m here")
  const CLIENT_ID = "kWupCmjQb-kQDZbV6h5uYy7y8huOAXmb8XDND5wKJTE";
  const URL =
    "https://api.unsplash.com/search/photos?query=dog&per_page=40&client_id=" +
    CLIENT_ID;
  const respons = await fetch(URL);
  const data = await respons.json();

  console.log(data.results.map((elem) => {
    console.log(elem.urls.small)
  }));
  return data
};


export const GetSelectedItem = async (id) => {
  const CLIENT_ID = "kWupCmjQb-kQDZbV6h5uYy7y8huOAXmb8XDND5wKJTE";
  const URL =
    "https://api.unsplash.com/photos/"  + id + "?client_id=" + CLIENT_ID;
  const respons = await fetch(URL);
  const data = await respons.json();

  console.log(data);
  return data
};
