"use strict";(()=>{document.addEventListener("DOMContentLoaded",()=>{let c=document.querySelector(".blog-article_text"),s=document.querySelector(".blog-article_toc");s&&c&&(()=>{let t=c.querySelectorAll("h2"),e=document.createDocumentFragment();t.forEach(n=>{let d=n.textContent.trim(),u=`toc-${d.toLowerCase().replace(/\s+/g,"-")}`;n.id=u;let h=document.createElement("div"),r=document.createElement("a");r.classList.add("toc-item"),r.textContent=d,r.href=`#${u}`,h.appendChild(r),e.appendChild(h)});let o=document.createElement("div");o.classList.add("toc-list"),o.appendChild(e),s.appendChild(o)})();let a=document.querySelectorAll("[toc-wrap] a"),m=c.querySelectorAll("[id]"),i=t=>{a.forEach(e=>{e.classList[e.getAttribute("href")==="#"+t?"add":"remove"]("active-toc")})};a.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();let o=e.target.getAttribute("href").substring(1);i(o),document.getElementById(o).scrollIntoView()})}),m.forEach(t=>{t.addEventListener("click",()=>{i(t.getAttribute("id"))})});let g=new IntersectionObserver(t=>{t.forEach(e=>{let o=e.target.getAttribute("id");e.isIntersecting&&(document.querySelectorAll(".active-toc").forEach(n=>n.classList.remove("active-toc")),document.querySelector(`a[href="#${o}"]`).classList.add("active-toc"))})},{rootMargin:"0px 0px -50% 0px"});c.querySelectorAll("h2").forEach(t=>g.observe(t));let l=()=>{if(location.hash.length!==0){let t=location.hash.substring(1),e=document.getElementById(t);if(e){let o=e.getBoundingClientRect().top-100;window.scrollTo(window.scrollX,window.scrollY+o)}}};window.addEventListener("hashchange",l),window.setTimeout(l,1)});})();
