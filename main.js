(()=>{"use strict";class t{constructor(t){this.container=t,this.onClick=this.onClick.bind(this)}static get markup(){return' \n    <div class="button_container">\n      <button type="button" class="showTooltip">Collapse</button>\n      <div class="tooltip_container animation">\n        <div class="message">And here\'s some amazing content. It\'s very engaging. Right? And here\'s some amazing content. It\'s very engaging. Right? And here\'s some amazing content. It\'s very engaging. Right? And here\'s some amazing content. It\'s very engaging. Right?</div>\n      </div>\n    </div>  \n    '}static get button(){return"button"}bindToDom(){this.container.innerHTML=t.markup,this.button=this.container.querySelector(t.button),this.button.addEventListener("click",this.onClick)}onClick(t){this.e=t.preventDefault();const n=document.querySelector(".tooltip_container");n.classList.contains("active")?n.classList.remove("active"):n.classList.add("active")}}const n=document.querySelector(".container");new t(n).bindToDom()})();
//# sourceMappingURL=main.js.map