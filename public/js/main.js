const submit=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const city_namee=document.getElementById('city_namee');
const temp_value=document.getElementById('temp_value');
const temp_status=document.getElementById('temp_status');

const datahide=document.querySelector('.mid_layer');


submit.addEventListener('click',async (event)=>{
    event.preventDefault();
    let cityValue=city_name.value;
    if(cityValue===''){
        city_namee.innerText='Please enter the city name :)';
        datahide.classList.add('data_hide');
    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=3783099bb68c13b2ede5c8c284988002`;
        const response=await fetch(url);
        const s_response=await response.json();

        const arrData=[s_response];

        city_namee.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;

        temp_value.innerText=arrData[0].main.temp;

        const temp_kind=arrData[0].weather[0].main;
        //console.log(temp_kind);
        if(temp_kind==='Clouds'){
            temp_status.innerHTML='<i class="fas fa-cloud" style="color:white"></i>';
        }else if(temp_kind==='Clear'){
            temp_status.innerHTML='<i class="far fa-moon"></i>';
        }else if(temp_kind==='Rain'){
            //console.log('i am inside rain');
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#037ffc'></i>";
        }else{
            temp_status.innerHTML='<i class="fas fa-sun" style="color:#ffc300"></i>';
        }
        
        datahide.classList.remove('data_hide');

        //console.log(s_response);
        }
        catch{
            city_namee.innerText='Please enter city name properly :)';
            datahide.classList.add('data_hide');
        }
        
    }
})