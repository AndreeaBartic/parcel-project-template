function e(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]}function t(e){return e.toLocaleDateString("en-US",{month:"short",day:"numeric"})}!async function(){try{const n=await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Dublin&appid=07aed853a2b3116bf7e19dfeee63b968");!function(n){const a=document.getElementById("weather-forecast");a.innerHTML="";const d={};n.list.forEach((e=>{const t=new Date(1e3*e.dt).toDateString();d[t]||(d[t]=[]),d[t].push(e)}));for(const n in d){document.createElement("div").classList.add("weather-forecast-item");const c=d[n][0],o=document.createElement("div");o.classList.add("all-about");const r=document.createElement("div");r.classList.add("day");const i=new Date(1e3*c.dt);r.innerHTML=`${e(i)} </br> ${t(i)}`,o.appendChild(r);const s=document.createElement("img");s.classList.add("w-icon");const m=`https://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`;s.src=m,s.alt="weather-icon",o.appendChild(s);const h=document.createElement("div");h.classList.add("temperature");const u=Math.round(c.main.temp_min),l=Math.round(c.main.temp_max);h.innerHTML=`Min: ${u}&deg;C | Max: ${l}&deg;C`,o.appendChild(h),a.appendChild(o)}}(await n.json())}catch(e){console.error("Error fetching weather data:",e)}}();
//# sourceMappingURL=index.3fa60aca.js.map