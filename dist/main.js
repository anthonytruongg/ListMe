(()=>{"use strict";class e{constructor(e,t,o,n){this.id="_"+Math.random().toString(36).substr(2,9),this.title=e,this.description=t,this.date=o,this.priority=n}}function t(){document.querySelector(".modal").classList.toggle("show-modal")}function o(e){const o=document.querySelector(".modal"),n=document.querySelector(".submit");e.target!==o&&e.target!==n||t()}const n=document.querySelector(".mainBody"),c=[];function d(t){t.preventDefault();const o=new e(document.getElementById("title").value,document.getElementById("description").value,document.getElementById("date").value,document.getElementById("priority").value);c.push(o),console.log(c);const d=document.createElement("div");d.classList.add("item");const r=document.createElement("h1"),i=document.createElement("p"),l=document.createElement("p");c.forEach((e=>{r.textContent="Title: "+e.title,d.appendChild(r),i.textContent="Due Date: "+e.date,d.appendChild(i),l.textContent="Details: "+e.description,d.appendChild(l),"4"===e.priority?d.style.backgroundColor="#f87171":"3"===e.priority?d.style.backgroundColor="#facc15":"2"===e.priority?d.style.backgroundColor="#34d399":"1"===e.priority&&(d.style.backgroundColor="#38bdf8"),n.appendChild(d)})),document.getElementById("taskForm").reset()}function r(){document.querySelector(".sideNav").classList.toggle("sideNav-open")}!function(){const e=document.querySelector(".addTask"),n=document.querySelector(".close-button");e.addEventListener("click",t),n.addEventListener("click",t),window.addEventListener("click",o),document.querySelector(".submit").addEventListener("click",d),document.querySelector(".menuButton").addEventListener("click",r)}()})();