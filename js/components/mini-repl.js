var t,e,i,o,r;import{EditorState as d,basicSetup as s,EditorView as n,oneDark as a,javascriptLanguage as p}from"../build/cm6.mjs";let l=document.createElement("template");l.innerHTML=`
  <div>
    <div class="repl">
      <h3 class="input-title">Input code</h3>
      <h3 class="output-title">Output code</h3>
      <div id="repl-in" class="repl__code input-editor"></div>
      <div class="output-editor-container">
        <div id="repl-out" class="repl__code"></div>
        <div id="error" class="output-error"></div>
      </div>
    </div>

    <style>
      .repl {
        color: white;

        display: grid;
        grid-template:
          "input-title"
          "input-editor"
          "output-title"
          "output-editor";

        background: #353634;
      }

      @media (min-width: 992px) {
        .repl:not(.vertical) {
          grid-template:
            "input-title output-title"
            "input-editor output-editor"
            / 50% 50%;
        }
      }

      .input-title { grid-area: input-title }
      .output-title { grid-area: output-title }
      .input-editor { grid-area: input-editor }
      .output-editor-container { grid-area: output-editor }

      @media (min-width: 992px) {
        .input-title, .input-editor {
          border-right: 1px solid #4f504d;
        }
      }

      .input-editor, .output-editor-container {
        overflow-x: auto;
      }

      .output-editor-container {
        position: relative;
      }

      .output-error {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        background: #702141;
        font-family: monospace;
        font-size: 0.83rem;
        opacity: 0;
        overflow-y: auto;
        padding: 16px 24px;
        text-align: left;
        transition: opacity 0.25s ease-out;
        white-space: pre;
        display: none;
      }

      .output-error--visible {
        opacity: 1;
        display: block;
      }

      .repl__pane {
        background: #353634;
        border: 1px solid #4f504d;
        position: relative;
      }

      @media (min-width: 992px) {
        .repl__pane {
          width: 50%;
        }
      }

      .repl__code {
        background: rgb(40, 44, 52);
        font-family: monospace;
        font-size: 0.83rem;
        min-height: 125px;
        height: 100%;
        text-align: left;
      }
      @media (min-width: 992px) {
        .repl__code {
          font-size: 1rem;
          min-height: 200px;
        }

        .vertical .repl__code {
          min-height: 150px;
        }
      }

      .repl h3 {
        color: #b7b8b7;
        font-size: 0.875rem;
        margin: 0;
        padding: 12px 24px;
        text-align: center;
      }
      @media (min-width: 992px) {
        .repl h3 {
          font-size: 1rem;
          text-align: left;
        }
      }

      .repl__code .cm-wrap {
        height: 100%;
      }
    </style>
  </div>
`;class u extends HTMLElement{_inEditor;_outEditor;_debouncedShowError=(t=this._showError.bind(this),e=1e3,(r=function(){var r=this,d=arguments,s=i&&!o;clearTimeout(o),o=setTimeout(function(){o=null,!i&&t.apply(r,d)},e),s&&t.apply(r,d)}).cancel=function(){clearTimeout(o)},r);constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(l.content.cloneNode(!0))}connectedCallback(){this._defaultCode=this.getAttribute("default-code"),this._vertical=this.hasAttribute("vertical"),this._options=JSON.parse(this.getAttribute("options"))??{},this._vertical&&this.shadowRoot.querySelector(".repl").classList.add("vertical");let t=this.getAttribute("default-code")??"";this._inEditor=new n({state:this._createInputEditorState(t),parent:this.shadowRoot.querySelector("#repl-in"),root:this.shadowRoot,dispatch:t=>{this._inEditor.update([t]),this._render()}}),this._outEditor=new n({state:this._createOutputEditorState(""),parent:this.shadowRoot.querySelector("#repl-out"),root:this.shadowRoot}),this.shadowRoot.querySelector("#repl-in").addEventListener("click",()=>{this._inEditor.focus()})}setInput(t){this._inEditor.setState(this._createInputEditorState(t)),this._render()}get options(){return this._options}set options(t){this._options=t,this._render()}_render(){let t=this._inEditor.state.doc.toString();if(!t){this._outEditor.setState(this._createOutputEditorState("")),this._hideError();return}try{let e=this._compile(t);this._outEditor.setState(this._createOutputEditorState(e)),this._hideError()}catch(t){this._debouncedShowError(t.message)}}_compile(t){return Babel.transform(t,this._options).code}_createInputEditorState(t){return d.create({doc:t,extensions:[s,a,p]})}_createOutputEditorState(t){return d.create({doc:t,extensions:[s,a,p,n.editable.of(!1)]})}_showError(t){let e=this.shadowRoot.getElementById("error");e.textContent=t,e.classList.add("output-error--visible")}_hideError(){this._debouncedShowError.cancel(),this.shadowRoot.getElementById("error").classList.remove("output-error--visible")}}customElements.define("mini-repl",u);