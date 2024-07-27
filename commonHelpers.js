import c from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=[{tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/src/img/projects/project_1_img_1x.png",link:"https://lubarskiyk.github.io/project-02/"},{tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/src/img/projects/project_2_img_1x.png",link:"https://lubarskiyk.github.io/project-02/"},{tags:["#react","#js","#node js","#git"],title:"Programming Across Borders: Ideas, Technologies, Innovations",imgSrc:"/src/img/projects/project_3_img_1x.png",link:"https://lubarskiyk.github.io/project-02/"}],a=document.querySelector(".swiper-wrapper"),p=l.map(({title:i,imgSrc:r,link:o,tags:s})=>`
    <div class="swiper-slide proj-slide">
      <div class="swipe-prescription">
        <ul class="list-tags">${s.map(t=>`<li class="list-tags-item">
      <p>${t}</p>
    </li>`).join("")}</ul>
        <h3 class="prescription-title">${i}</h3>
        <a href="${o}" class="prescription-btn" target="_blank">
          See project
        </a>
      </div>
      <div class="swipe-img">
        <img src="${r}" alt="${i}" />
      </div>
    </div>
  `).join("");a.innerHTML=p;new c(".swiper-container",{navigation:{nextEl:".proj-btn-next",prevEl:".proj-btn-prev"}});
//# sourceMappingURL=commonHelpers.js.map
