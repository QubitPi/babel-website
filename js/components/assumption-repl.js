const e=document.createElement("template");e.innerHTML=`
  <label>
    <input id="enabled" type="checkbox" checked /> Enabled
  </label>

  <mini-repl id="repl" vertical></mini-repl>
`;class t extends HTMLDivElement{_enabled=!0;constructor(){super(),this.attachShadow({mode:"open"}).appendChild(e.content.cloneNode(!0))}connectedCallback(){this._plugins=this.dataset.plugins.split(","),this._assumption=this.dataset.assumption,this._input=function(e){let t=[];for(let n of e.querySelectorAll(".token-line"))t.push(n.textContent);return t.join("\n")}(this.querySelector("code"));let e=this.shadowRoot.getElementById("repl");customElements.upgrade(e),e.setInput(this._input),this._updateOptions(),this.shadowRoot.getElementById("enabled").addEventListener("change",()=>{this._enabled=!this._enabled,this._updateOptions()})}_updateOptions(){this.shadowRoot.getElementById("repl").options={sourceType:"module",plugins:this._plugins.concat([["transform-runtime",{version:"7.100.0"}]]),assumptions:{[this._assumption]:this._enabled}}}}customElements.define("assumption-repl",t,{extends:"div"});