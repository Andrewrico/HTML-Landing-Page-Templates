// create el-copyright template.
const elCopyrightFullYear = new Date().getFullYear();
const elCopyrightCSS = `:host{ display: flex;justify-content:center; white-space: nowrap; font-family:inherit; font-size:inherit; text-decoration:none;}:host p{ white-space: inherit nowrap; margin:0; }`;
const elCopyrightHTML = `<p><slot name="copyright"> copyright </slot> © ${elCopyrightFullYear} All Rights Reserved </p>`;
const elCopyrightTemplate = document.createElement("template");
elCopyrightTemplate.innerHTML = `<style>`.concat(elCopyrightCSS, `</style>`).concat(elCopyrightHTML);
// defines el-copyright tag.
customElements.define('el-copyright',
	class elCopyright extends HTMLElement {
		constructor() {
			super();
			let _thisElCopyright = this;
			// open shadowRoot.
			const shadowRoot = _thisElCopyright.attachShadow({
				mode: "open"
			});
			// clone template. 
			shadowRoot.appendChild(elCopyrightTemplate.content.cloneNode(!0));
			return _thisElCopyright;
		}
		connectedCallback() {
			let elCopyright = this;
			// inject css attributes.
			const _elCopyrights = document.querySelectorAll('el-copyright');
			_elCopyrights.forEach(_elCopyright => {
				elCopyright.hasAttribute("margin") && (
					elCopyright.styleMargin = elCopyright.getAttribute("margin") + "rem",
					elCopyright.style.margin = elCopyright.styleMargin ? elCopyright.styleMargin : null
				)
			})
		}
	}
);
