(()=>{"use strict";class e{constructor(e,t,n,o){this.id="_"+Math.random().toString(36).substr(2,9),this.title=e,this.description=t,this.date=n,this.priority=o}}!function(){const t=document.querySelector(".modal"),n=document.querySelector(".addTask"),o=document.querySelector(".close-button");function c(){t.classList.toggle("show-modal")}n.addEventListener("click",c),o.addEventListener("click",c),window.addEventListener("click",(function(e){e.target!==t&&e.target!==d||c()}));const d=document.querySelector(".submit");d.addEventListener("click",(function(t){t.preventDefault();const n=new e(document.getElementById("title").value,document.getElementById("description").value,document.getElementById("date").value,document.getElementById("priority").value);i.push(n),console.log(i);const o=document.createElement("div");o.classList.add("item");const c=document.createElement("h1"),d=document.createElement("p"),l=document.createElement("p");document.createElement("p"),i.forEach((e=>{c.textContent=e.title,o.appendChild(c),d.textContent=e.date,o.appendChild(d),l.textContent=e.description,o.appendChild(l),"4"===e.priority?o.style.backgroundColor="#f87171":"3"===e.priority?o.style.backgroundColor="#facc15":"2"===e.priority?o.style.backgroundColor="#34d399":"1"===e.priority&&(o.style.backgroundColor="#38bdf8"),r.appendChild(o)})),document.getElementById("taskForm").reset()}));const r=document.querySelector(".mainBody"),i=[];document.querySelector(".menuButton").addEventListener("click",(function(){document.querySelector(".sideNav").classList.toggle("sideNav-open")}))}()})();