const dayNight=document.querySelector(".day-night");dayNight.addEventListener("click",()=>{dayNight.querySelector("i").classList.toggle("fa-sun"),dayNight.querySelector("i").classList.toggle("fa-moon"),document.body.classList.toggle("dark")}),window.addEventListener("load",()=>{document.body.classList.contains("dark")?dayNight.querySelector("i").classList.add("fa-sun"):dayNight.querySelector("i").classList.add("fa-moon")});const nav=document.querySelector(".nav"),navList=nav.querySelectorAll("li"),totalNavList=navList.length;for(let e=0;e<totalNavList;e++){navList[e].querySelector("a").addEventListener("click",function(){for(let e=0;e<totalNavList;e++)navList[e].querySelector("a").classList.remove("active");this.classList.add("active")})}function myFunction(){alert("Ju lutemi provoni me vone!")}const navTogglerBtn=document.querySelector(".nav-toggler"),aside=document.querySelector(".aside");function asideSectionTogglerBtn(){aside.classList.toggle("open"),navTogglerBtn.classList.toggle("open")}navTogglerBtn.addEventListener("click",()=>{asideSectionTogglerBtn()}),document.querySelectorAll(".nav-link").forEach(e=>e.addEventListener("click",()=>{aside.classList.remove("open"),navTogglerBtn.classList.remove("open")}));const hiddenOverflow=document.querySelector(".aside");hiddenOverflow.addEventListener("onclick",()=>{document.body.classList.toggle("noscroll")}),window.addEventListener("scroll",function(){window.scrollY>100&&(document.querySelector(".aside").classList.remove("open"),navTogglerBtn.classList.remove("open"))});var loader=document.getElementById("loader");function showPage(){document.getElementById("loader-hide").style.display="none",document.getElementById("loader").style.display="block"}window.addEventListener("load",function(){loader.style.display="none",loader=setTimeout(showPage,3e3)});const observer=new IntersectionObserver(e=>{e.forEach(e=>{console.log(e),e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})}),hiddenElements=document.querySelectorAll(".hiddenForm2");hiddenElements.forEach(e=>observer.observe(e));const openButton=document.getElementById("openButton"),closeButton=document.getElementById("closeButton"),projects=document.querySelectorAll("#projects");projects.forEach(function(e){openButton.addEventListener("click",function(){e.style.display="block",openButton.style.display="none",closeButton.style.display="block"}),closeButton.addEventListener("click",function(){e.style.display="none",openButton.style.display="block",closeButton.style.display="none"})});