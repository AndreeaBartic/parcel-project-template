!function(){function t(t){var e="?image_type=photo&category=travel&orientation=horizontal&q=".concat(encodeURIComponent(t),"&page=1&per_page=40");return fetch("https://pixabay.com/api/"+e+"&key=40060920-6840b24aaee2d2997514145f9").then((function(t){if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((function(t){if(t.hits&&t.hits.length){var e=Math.floor(Math.random()*t.hits.length);return t.hits[e].largeImageURL}throw new Error("No images found.")}))}function e(t){t?fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("384cfe62d8b3ed2e8a555db347025eef")).then((function(t){return t.json()})).then((function(t){if(200===t.cod){var e=new Date(1e3*t.sys.sunrise).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),n=new Date(1e3*t.sys.sunset).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),o=document.getElementById("sunriseDisplay"),r=document.getElementById("sunsetDisplay");o.textContent="".concat(e),r.textContent="".concat(n)}else console.error("Error fetching data for city:",t.message)})).catch((function(t){return console.error("Error fetching data from OpenWeatherMap:",t)})):console.error("City name is missing.")}function n(t){var e=new Date,n=t+e.getTimezoneOffset()/60,o=e.getHours()+n;o=(o+24)%24;var r=String(o).padStart(2,"0"),a=String(e.getMinutes()).padStart(2,"0"),c=String(e.getSeconds()).padStart(2,"0");document.querySelector(".dateDisplay__hour").textContent="".concat(r,":").concat(a,":").concat(c)}function o(){var t=new Date,e=document.getElementById("dayDisplay"),n=document.getElementById("monthDisplay"),o=document.getElementById("timeDisplay"),r=document.getElementById("sunriseDisplay"),a=document.getElementById("sunsetDisplay"),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()],i=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()],u=t.getDate(),s=t.getHours(),d=t.getMinutes(),l=t.getSeconds(),g="".concat(s.toString().padStart(2,"0"),":").concat(d.toString().padStart(2,"0"),":").concat(l.toString().padStart(2,"0")),h=f(u);function f(t){if(t>=11&&t<=13)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}e.textContent="".concat(u).concat(h," ").concat(c),n.textContent="".concat(i),o.textContent=g,navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var n=t.coords,o=n.latitude,i=n.longitude;fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(o,"&lon=").concat(i,"&appid=").concat("384cfe62d8b3ed2e8a555db347025eef")).then((function(t){return t.json()})).then((function(t){var n="\n          <h3>".concat(u,'<sup class="exponent">').concat(f(u),"</sup> ").concat(c,"</h3>\n        ");e.innerHTML=n;var o=new Date(1e3*t.sys.sunrise).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}),i=new Date(1e3*t.sys.sunset).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1});r.textContent="".concat(o),a.textContent="".concat(i)})).catch((function(t){return console.error("Error fetching data from OpenWeatherMap:",t)}))}))}o();var r="07aed853a2b3116bf7e19dfeee63b968";document.addEventListener("DOMContentLoaded",(function(){console.log("DOMContentLoaded fired");var a=document.querySelector(".search-bar"),c=document.querySelector(".search-bar_input"),i=document.querySelector(".search-bar_favorites-icon"),u=document.querySelector(".favorites_list"),s=document.querySelector(".favorites_prev-btn"),d=document.querySelector(".favorites_next-btn");a.addEventListener("submit",(function(t){t.preventDefault();var e=c.value.trim();e&&l(e)})),i.addEventListener("click",(function(){var t=c.value.trim();this.classList.toggle("selected"),t&&!function(t){var e=u.querySelectorAll(".favorites_item"),n=!0,o=!1,r=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){if(a.value.textContent.trim().toLowerCase()===t.toLowerCase())return!0}}catch(t){o=!0,r=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw r}}return!1}(t)&&function(t){var e=document.createElement("li");e.classList.add("favorites_item"),e.textContent=t;var n=document.createElement("span");n.classList.add("close-button"),n.textContent="x",n.addEventListener("click",(function(){e.remove()})),e.appendChild(n),u.appendChild(e)}(t)}));function l(o){var a="https://api.openweathermap.org/data/2.5/weather?q=".concat(o,"&appid=").concat(r);fetch(a).then((function(t){return t.json()})).then((function(r){200===r.cod?t(o).then((function(t){console.log("Fetched Image URL:",t),document.body.style.backgroundImage="url(".concat(t,")"),document.body.style.backgroundSize="cover",document.body.style.backgroundPosition="center",document.body.style.backgroundRepeat="no-repeat";var a=r.timezone/3600;document.body.style.height="954px",e(o),n(a)})).catch((function(t){console.error("Error fetching city image:",t)})):alert(r.message)})).catch((function(t){console.error("Error fetching weather data:",t)}))}s.addEventListener("click",(function(){u.scrollBy({left:-100,top:0,behavior:"smooth"})})),d.addEventListener("click",(function(){u.scrollBy({left:100,top:0,behavior:"smooth"})})),o();!function(){console.log("findCityLocation called");var t=function(t){console.log("Location access allowed");var e=t.coords.latitude,n=t.coords.longitude,o="http://api.openweathermap.org/geo/1.0/reverse?lat=".concat(e,"&lon=").concat(n,"&appid=").concat(r);console.log("Latitude:",e,"Longitude:",n),fetch(o).then((function(t){return t.json()})).then((function(t){if(t&&t.length>0){var e=t[0].name;console.log("Resolved City:",e),l(e)}else console.error("City not found.")})).catch((function(t){console.error("Error fetching city name:",t)}))},e=function(){console.error("Could not get location.")};navigator.geolocation.getCurrentPosition(t,e),document.querySelector(".search-bar_location-icon").addEventListener("click",(function(){console.log("Location icon clicked"),navigator.geolocation.getCurrentPosition(t,e)}))}()}))}();
//# sourceMappingURL=index.235a6b5c.js.map
