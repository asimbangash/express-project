const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const getInfo = async(event)=>{
    event.preventDefault();
    
    let cityval = cityName.value;

    if(cityval === ""){
        city_name.innerText = `Please write the name before search`;

    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=812db8330210547c70c5b49d26a9f684`;
        const response = await fetch(url);
        const data = response.json();
        const arrData = [data];
         
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;
        }catch{
            city_name.innerText = `Plz write the name before search`;
        }

    }

}

submitBtn.addEventListener('click', getInfo);