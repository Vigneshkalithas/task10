const getCountries = () =>{

    console.log("Getting Countries...");

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType ="json";

    xhr.onload = () => {
        const countries = xhr.response;
        // const countryNames = countries.map((country) => country.name.common);
        const spanNames = countries.reduce((span) => span.name.common);
        console.log("Full data",countries,"lang",spanNames);
    }

};
getCountries();