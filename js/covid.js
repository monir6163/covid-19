// loadcovid-19 fetch api 
const loadcovid = async () => {
    const res = await fetch('https://api.covid19api.com/summary');
    const data = await res.json();
    displayCovid(data.Countries)
}
loadcovid();
const displayCovid = Countries => {
    const covidResult = document.getElementById('covid-result');
    Countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `<div class="card h-100">
                        <h5 class="card-header text-center text-muted">Country Information</h5>
                        <div class="card-body">
                            <h5 class="card-title">Country: <span class = "text-white bg-success p-1 rounded fs-6">${country.Country}</span></h5>
                            <h5 class="card-title">CountryCode: ${country.CountryCode}</h5>
                            <h5 class="card-title">NewConfirmed: ${country.NewConfirmed}</h5>
                            <h5 class="card-title">NewDeaths: ${country.NewDeaths}</h5>
                            <h5 class="card-title">NewRecovered: ${country.NewRecovered}</h5>
                            <h5 class="card-title">TotalConfirmed: ${country.TotalConfirmed}</h5>
                            <h5 class="card-title">TotalDeaths: ${country.TotalDeaths}</h5>
                            <h5 class="card-title">TotalRecovered: ${country.TotalRecovered}</h5>
                        </div>
                        <div class="card-footer text-muted">Date: ${country.Date}</div>
                    </div>`;
        covidResult.appendChild(div); 
    });
}