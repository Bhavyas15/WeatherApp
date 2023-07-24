
const apiKey = "4ba0a72cc89421352f5c6fde070e7fcb";
let city = "mumbai";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}`;
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wspeed").innerHTML = data.wind.speed + " KMPH";
    document.querySelector(".mini").innerHTML = data.main.temp_min + " °C";
    document.querySelector(".maxi").innerHTML = data.main.temp_max + " °C";
    // let x=data.weather[0].main;

    if (data.weather[0].main === "Rain") {
        const imageElement = document.querySelector(".wimage");
        imageElement.src = "images/rain.png";
        imageElement.alt = "Rain";
    }
    else if (data.weather[0].main === "Thunderstorm") {
        const imageElement = document.querySelector(".wimage");
        imageElement.src = "images/thunder.png";
        imageElement.alt = "Thunder";
    }
    else if (data.weather[0].main === "Haze" || data.weather[0].main === "Mist") {
        const imageElement = document.querySelector(".wimage");
        imageElement.src = "images/haze.png";
        imageElement.alt = "Haze";
    }
    else if (data.weather[0].main === "drizzle") {
        const imageElement = document.querySelector(".wimage");
        imageElement.src = "images/drizzle.jpeg";
        imageElement.alt = "drizzle";
    }
    else if (data.weather[0].main === "Clouds") {
        const imageElement = document.querySelector(".wimage");
        imageElement.src = "images/clouds.png";
        imageElement.alt = "clouds";
    }
}
checkWeather();
future(1275339,'4ba0a72cc89421352f5c6fde070e7fcb');
document.querySelector(".convertbtn").addEventListener("click", () => {
    data = document.querySelector(".convertbtn").textContent;
    if (data === "F") {
        // data="C";
        document.querySelector(".convertbtn").innerHTML = "C";
        // document.querySelector(".temp").innerHTML="F";
        let d = parseFloat(document.querySelector(".temp").textContent);
        let d1=parseFloat(document.querySelector(".t1").innerHTML);
        let d2=parseFloat(document.querySelector(".t2").innerHTML);
        let d3=parseFloat(document.querySelector(".t3").innerHTML);
        let d4=parseFloat(document.querySelector(".t4").innerHTML);
        let d5=parseFloat(document.querySelector(".t5").innerHTML);
        let d6=parseFloat(document.querySelector(".t6").innerHTML);
        let x = (d * (9 / 5)) + 32;
        let x1= (d1 * (9 / 5)) + 32;
        let x2= (d2 * (9 / 5)) + 32;
        let x3= (d3 * (9 / 5)) + 32;
        let x4= (d4 * (9 / 5)) + 32;
        let x5= (d5 * (9 / 5)) + 32;
        let x6= (d6 * (9 / 5)) + 32;
        document.querySelector(".temp").innerHTML = x.toFixed(2) + " F";
        document.querySelector(".t1").textContent=x1.toFixed(2) + " F";
        document.querySelector(".t2").textContent=x2.toFixed(2) + " F";
        document.querySelector(".t3").textContent=x3.toFixed(2) + " F";
        document.querySelector(".t4").textContent=x4.toFixed(2) + " F";
        document.querySelector(".t5").textContent=x5.toFixed(2) + " F";
        document.querySelector(".t6").textContent=x6.toFixed(2) + " F";
    }
    else {
        document.querySelector(".convertbtn").innerHTML = "F";
        let d = parseFloat(document.querySelector(".temp").textContent);
        let d1=parseFloat(document.querySelector(".t1").innerHTML);
        let d2=parseFloat(document.querySelector(".t2").innerHTML);
        let d3=parseFloat(document.querySelector(".t3").innerHTML);
        let d4=parseFloat(document.querySelector(".t4").innerHTML);
        let d5=parseFloat(document.querySelector(".t5").innerHTML);
        let d6=parseFloat(document.querySelector(".t6").innerHTML);
        let x = (d - 32) * 5 / 9;
        let x1= (d1 - 32) * 5 / 9;
        let x2= (d2 - 32) * 5 / 9;
        let x3= (d3 - 32) * 5 / 9;
        let x4= (d4 - 32) * 5 / 9;
        let x5= (d5 - 32) * 5 / 9;
        let x6= (d6 - 32) * 5 / 9;
        document.querySelector(".temp").innerHTML = x.toFixed(2) + " °C";
        document.querySelector(".t1").textContent=x1.toFixed(2) + " °C";
        document.querySelector(".t2").textContent=x2.toFixed(2) + " °C";
        document.querySelector(".t3").textContent=x3.toFixed(2) + " °C";
        document.querySelector(".t4").textContent=x4.toFixed(2) + " °C";
        document.querySelector(".t5").textContent=x5.toFixed(2) + " °C";
        document.querySelector(".t6").textContent=x6.toFixed(2) + " °C";
    }
    console.log("Button clicked");
})

let cityid;
const apikey2 = '4ba0a72cc89421352f5c6fde070e7fcb'; // Replace with your actual API key
document.querySelector(".simg").addEventListener("click", () => {
    let city = document.querySelector(".search").value;
    console.log(city);
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}`;
    document.querySelector(".search").value = "";
    checkWeather();
    //find id via city name
    const apiUrl3 = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${apikey2}`;
    fetch(apiUrl3)
        .then(response => response.json())
        .then(data => {
            if (data.list && data.list.length > 0) {
                const cityId = data.list[0].id;
                  console.log(`City ID for ${city}: ${cityId}`);
                cityid = cityId;
            } else {
                console.log(`City not found: ${city}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
        future( cityid,apikey2);
})
//

// const currentDate = new Date();
// const year = currentDate.getFullYear(); // 4-digit year
// const month = currentDate.getMonth(); // Month (0-11)
// const day = currentDate.getDate();
const today = new Date();
const options = { day: 'numeric', month: 'long', year: 'numeric' };

const currentDate = new Date(today);
//   currentDate.setDate(currentDate.getDate() + i);
//   const formattedDate = currentDate.toLocaleString('en-US', options);
//   console.log(formattedDate);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const two = new Date(today);
// two.setDate(currentDate.getDate()+2);
two.setDate(two.getDate() + 2);
const three = new Date(today);
three.setDate(three.getDate() + 3);
const four = new Date(today);
four.setDate(four.getDate() + 4);
const five = new Date(today);
five.setDate(five.getDate() + 5);
const six = new Date(today);
six.setDate(six.getDate() + 6);

const tomorrowa = tomorrow.toLocaleString('en-US', options);
const twoa = two.toLocaleString('en-US', options);
const threea = three.toLocaleString('en-US', options);
const foura = four.toLocaleString('en-US', options);
const fivea = five.toLocaleString('en-US', options);
const sixa = six.toLocaleString('en-US', options);

document.querySelector(".one").innerHTML = tomorrowa;
document.querySelector(".two").innerHTML = twoa;
document.querySelector(".three").innerHTML = threea;
document.querySelector(".four").innerHTML = foura;
document.querySelector(".five").innerHTML = fivea;
document.querySelector(".six").innerHTML = sixa;


// const cityName = 'Mumbai'; // Replace with the desired city name



//2nd api
// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
// const apikey2 = "4ba0a72cc89421352f5c6fde070e7fcb";
// let cityid = "524901";
async function future(cityid,apikey2) {
    const apiurl2 = `http://api.openweathermap.org/data/2.5/forecast?&units=metric&`;
    const response2 = await fetch(apiurl2 + `id=${cityid}` + `&appid=${apikey2}`);
    var data2 = await response2.json();
    console.log(data2);
    console.log(cityid);

    document.querySelector(".t1").innerHTML=data2.list[1].main.temp +" °C";
    document.querySelector(".w1").innerHTML=data2.list[1].wind.speed +" KMPH";
    document.querySelector(".hum1").innerHTML=data2.list[1].main.humidity +" %";
    document.querySelector(".t2").innerHTML=data2.list[2].main.temp +" °C";
    document.querySelector(".w2").innerHTML=data2.list[2].wind.speed +" KMPH";
    document.querySelector(".hum2").innerHTML=data2.list[2].main.humidity +" %";
    document.querySelector(".t3").innerHTML=data2.list[3].main.temp +" °C";
    document.querySelector(".w3").innerHTML=data2.list[3].wind.speed +" KMPH";
    document.querySelector(".hum3").innerHTML=data2.list[3].main.humidity +" %";
    document.querySelector(".t4").innerHTML=data2.list[4].main.temp +" °C";
    document.querySelector(".w4").innerHTML=data2.list[4].wind.speed +" KMPH";
    document.querySelector(".hum4").innerHTML=data2.list[4].main.humidity +" %";
    document.querySelector(".t5").innerHTML=data2.list[5].main.temp +" °C";
    document.querySelector(".w5").innerHTML=data2.list[5].wind.speed +" KMPH";
    document.querySelector(".hum5").innerHTML=data2.list[5].main.humidity +" %";
    document.querySelector(".t6").innerHTML=data2.list[6].main.temp +" °C";
    document.querySelector(".w6").innerHTML=data2.list[6].wind.speed +" KMPH";
    document.querySelector(".hum6").innerHTML=data2.list[6].main.humidity +" %";
}

// document.querySelectorAll(".dropdown-item").addEventListener("click",()=>{
//     let data=document.querySelector(".dropdown-item").value;
//     console.log(data);
//     city=data;
//     apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}`
//     checkWeather();
// })
const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    let data = item.textContent;
    console.log(data);
    // document.querySelector(".search").innerHTML=data;
    document.querySelector(".search").value=data;
    
    // apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}`;
    // checkWeather();

  });
});
