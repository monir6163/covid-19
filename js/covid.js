// loadcovid-19 fetch api 
const resultCovid = document.getElementById('covid-result');
const diffMessage = document.getElementById('error-message');
const poster = document.getElementById("poster");
const spinner = `<div class = "text-center mt-3">
<div class="spinner-border text-white" role="status" id ="load">
<span class="visually-hidden">Loading...</span>
</div>
</div>`;
let inputValue;
const loadcovid = async () => {
    const searchField = document.getElementById('search-country');
    const searchResult = searchField.value;
    searchField.value = "";
    if(searchResult == ""){
        diffMessage.innerHTML = `<div class=" w-100 mx-auto alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Hello 3rd Person!</strong> Please Enter Your FuckUp Name.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
    }
    else{
        resultCovid.innerHTML = spinner;
        const res = await fetch(`https://api.covid19api.com/total/country/${searchResult}`);
        inputValue = searchResult;
        const data = await res.json();
        displayData(data);
    }
}
const displayData = async data => {
    const resultCovid = document.getElementById('covid-result');
    if (Array.isArray(data) == false) {
    diffMessage.innerHTML = `<div class=" w-100 mx-auto alert alert-danger alert-dismissible fade show" role="alert">
  <strong>${inputValue}</strong>  This Country Name Not Found.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  } else if (Array.isArray(data)) {
    resultCovid.innerHTML = "";
    const country = data.reverse()[0];
    const countryName = country.Country;
    const totalCase = country.Confirmed;
    const totalDeath = country.Deaths;
    const totalRecoverd = country.Active;
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML = `
   <h3>Result:<span> ${inputValue}</span></h3>
   <h3>Country:<span>${countryName}</span></h3>
   <h3>Total Cases:<span>${totalCase}</span></h3>
   <h3>Total Deaths:<span class="text-danger">${totalDeath}</span></h3>
   <h3>Recovered:<span>${totalRecoverd}</span></h3>
   `;
    resultCovid.appendChild(resultDiv);
  }
  document.getElementById('load').style.display= "none";
}