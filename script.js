const countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then(res => res.json())
    .then(data => country(data));
};
const country = data => {
  const countries = document.getElementById("countries");
  data.forEach(country => {
    // console.log(country.cca2);
    countries.innerHTML += `
        <div class="card m-4 bg-light" style="width: 18rem;">
                <img src="${country.flags.png}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    <button onClick="countryDetails('${country.cca2}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Country Details
                </button>
                </div>
            </div>
        
        `;
  });
};

const countryDetails = cca2 => {
  const url = `https://restcountries.com/v3.1/alpha/${cca2}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayModel(data));
};

const displayModel = data => {
  console.log(data[0]);

  document.getElementById("exampleModalLabel").innerHTML = data[0].name.common;
  document.getElementById("imgModel").src = data[0].flags.png;
  document.getElementById("capital").innerHTML = "Capital : " + data[0].capital;
  document.getElementById("area").innerHTML = "Area : " + data[0].area;
  document.getElementById("population").innerHTML =
    "Population : " + data[0].population;
  document.getElementById("continents").innerHTML =
    "continents : " + data[0].continents;
  document.getElementById("languages").innerHTML =
    "Languages : " + data[0].languages.eng;
};

countries();
