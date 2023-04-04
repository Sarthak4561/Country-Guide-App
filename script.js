let searchBtn = document.getElementById('search-btn');

let countryInp = document.getElementById('country-inp');
let result = document.querySelector('#result');
searchBtn.addEventListener("click",async()=>{
    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    let response = await fetch(finalUrl)

    let country_data = await response.json()

    
        result.innerHTML = `
        <img src="${country_data[0].flags.svg}"
        class = "flag-img">
        <h2>${country_data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital</h4>
                <span>${country_data[0].capital[0]}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent</h4>
                <span>${country_data[0].continents[0]}</span>
            </div>
        </div>


        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population</h4>
                <span>${country_data[0].population}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency</h4>
                <span>${country_data[0].currencies[Object.keys(country_data[0].currencies)].name}-${Object.keys(country_data[0].currencies)[0]}</span>
            </div>
        </div>

        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital</h4>
                <span>${Object.values(country_data[0].languages).toString().split(",").join(", ")}</span>
            </div>
        </div>
        `;
    // .catch(()=>{
    //     if(countryName.length == 0){
    //         result.innerHTML = `<h3>The input field is empty</h3>`;
    //     }
    //     else{
    //         result.innerHTML = `<h3>Please enter a valid country</h3>`;
    //     }
    // });
});