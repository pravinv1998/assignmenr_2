function loading(isLoading) {
    const displayVal = document.getElementById("display");
    if (isLoading) {
        displayVal.innerHTML = "<h2>Loading...</h2>";
    }
}


function searchCountry(e) {
    loading(true);
  const inputVal = document.getElementById("input").value;
  const displayVal = document.getElementById("display");

  async function fetchCountriesJSON() {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${inputVal}`
    );
    const countrie = await response.json();
    
    return countrie;
  }

  fetchCountriesJSON()
    .then((countrie) => {
      displayVal.innerHTML = `
    
        
        <div class="displayCountry">
            <div class="country">
                <img src=${countrie[0].flags.png} alt="country flag" width="500" height="300">
            
                <div class="countryData">
                    <h1> ${countrie[0].name.official}</h1>
                    <div class="countryDataAlign" style="align-items: center;" >
                        <h2>${countrie[0].name.common} </h2>
                        <h3>${countrie[0]['continents'][0]}</h3>
                    </div>
                    <div class="countryDataAlign" style="align-items: center;" >
                        <h3>${countrie[0]['capital'][0]}</h3>
                        <h3>${countrie[0].idd.root}${countrie[0].idd.suffixes[0]}</h3>
                    </div>

                    <div class="countryDataAlign" style="align-items: center;" >
                        <h3> Population </h3>
                        <h3>${countrie[0].population}</h3>
                    </div>

                    <div class="countryDataAlign" style="align-items: center;" >
                        <h3>${countrie[0]['timezones'][0]}</h3>
                        <h3><a class="link-info" href=${countrie[0].maps.googleMaps}>Google Map</a></h3>
                    </div>
                </div>

                
            </div>
            
            <div class="country secondHalf">
                <div>
                    <h5> CCA3: </h5>${countrie[0].cca3}
                    <h5>Independent: </h5>${countrie[0].independent ? 'YES': 'NA'}
                    <h5>Status: </h5>${countrie[0].status}
                </div>
                
                <div>
                    <h5>UN Member: </h5>${countrie[0].unMember ? 'YES': 'NA'} 
                    <h5>Language: </h5>${countrie[0].languages.eng == null? null: countrie[0].languages.eng},${countrie[0].languages.hin == null ? null: countrie[0].languages.hin}
                    <h5>Start Of the Week: </h5>${countrie[0].startOfWeek}
                </div>

                <div>
                    <h5>Region: </h5>${countrie[0].region}
                    <h5>Sub Region: </h5>${countrie[0].subregion}
                    <h5>Sub Region: </h5>${countrie[0].tld[0]}
                </div>
                <div>
                <h5>CoatOfArms: </h5><img src=${countrie[0].coatOfArms.png} alt="country flag" width=100" height="120">

                </div>
            </div>
         </div>


        
        `;
    })
    .catch((err) => {
      displayVal.innerHTML = `<h1> is not working </h1>`;
    });
}
