function e(e){const t=`?image_type=photo&category=travel&orientation=horizontal&q=${encodeURIComponent(e)}&page=1&per_page=40`;return fetch("https://pixabay.com/api/"+t+"&key=40060920-6840b24aaee2d2997514145f9").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{if(e.hits&&e.hits.length){const t=Math.floor(Math.random()*e.hits.length);return e.hits[t].largeImageURL}throw new Error("No images found.")}))}document.addEventListener("DOMContentLoaded",(function(){console.log("DOMContentLoaded fired");const t=document.querySelector(".search-bar"),o=document.querySelector(".search-bar_input"),n=document.querySelector(".search-bar_favorites-icon"),r=document.querySelector(".favorites_list"),c=document.querySelector(".favorites_prev-btn"),a=document.querySelector(".favorites_next-btn");t.addEventListener("submit",(function(e){e.preventDefault();const t=o.value.trim();t&&i(t)})),n.addEventListener("click",(function(){const e=o.value.trim();this.classList.toggle("selected"),e&&!function(e){const t=r.querySelectorAll(".favorites_item");for(let o of t)if(o.textContent.trim().toLowerCase()===e.toLowerCase())return!0;return!1}(e)&&function(e){const t=document.createElement("li");t.classList.add("favorites_item"),t.textContent=e;const o=document.createElement("span");o.classList.add("close-button"),o.textContent="x",o.addEventListener("click",(function(){t.remove()})),t.appendChild(o),r.appendChild(t)}(e)}));function i(t){fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=07aed853a2b3116bf7e19dfeee63b968`).then((e=>e.json())).then((o=>{200===o.cod?e(t).then((e=>{console.log("Fetched Image URL:",e),document.body.style.backgroundImage=`url(${e})`,document.body.style.backgroundSize="cover",document.body.style.backgroundPosition="center",document.body.style.backgroundRepeat="no-repeat"})).catch((e=>{console.error("Error fetching city image:",e)})):alert(o.message)})).catch((e=>{console.error("Error fetching weather data:",e)}))}c.addEventListener("click",(function(){r.scrollBy({left:-100,top:0,behavior:"smooth"})})),a.addEventListener("click",(function(){r.scrollBy({left:100,top:0,behavior:"smooth"})}));(()=>{console.log("findCityLocation called");const e=e=>{console.log("Location access allowed");const t=e.coords.latitude,o=e.coords.longitude,n=`http://api.openweathermap.org/geo/1.0/reverse?lat=${t}&lon=${o}&appid=07aed853a2b3116bf7e19dfeee63b968`;console.log("Latitude:",t,"Longitude:",o),fetch(n).then((e=>e.json())).then((e=>{if(e&&e.length>0){const t=e[0].name;console.log("Resolved City:",t),i(t)}else console.error("City not found.")})).catch((e=>{console.error("Error fetching city name:",e)}))},t=()=>{console.error("Could not get location.")};navigator.geolocation.getCurrentPosition(e,t);document.querySelector(".search-bar_location-icon").addEventListener("click",(()=>{console.log("Location icon clicked"),navigator.geolocation.getCurrentPosition(e,t)}))})()}));
//# sourceMappingURL=index.4ef441e1.js.map
