// Add spinner before fetching data
const spinner = document.getElementById("spinner");

function showSpinner() {
    spinner.className = "show";
    setTimeout(() => {
        spinner.className = spinner.className.replace("show", "");
    }, 500);
}

//function to get data and call api
const getCity = () => {
    const cityName = document.getElementById('city-name');
    const cityNameValue = cityName.value;
    cityName.value = '';
    showSpinner()
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&units=metric&appid=a2aa942ea49032dea30beefc40f6779b`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
}

//function to show data 

const display = data => {
    const tempDisplay = document.getElementById('temp-display');
    tempDisplay.innerHTML = `
    <img width="100px" height="100px" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${data.main.temp}</span>&deg;C</h3>
            <h1>${data.weather[0].main}</h1>`
}