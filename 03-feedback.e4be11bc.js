function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,v=function(){return l.Date.now()};function b(e,t,n){var o,r,i,a,f,u,c=0,l=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function O(){var e=v();if(j(e))return x(e);f=setTimeout(O,function(e){var n=t-(e-u);return d?m(n,i-(e-c)):n}(e))}function x(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function h(){var e=v(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(d)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:x(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form > label > input"),j=document.querySelector(".feedback-form > label > textarea"),O={},x=e(t)((function(){O.email=S.value,O.textArea=j.value;let e=JSON.stringify(O);localStorage.setItem("feedback-form-state",e),Object.assign(e,O)}),500);if(y.addEventListener("input",x),localStorage.getItem("feedback-form-state")){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);S.value=t.email,j.value=t.textArea}y.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),S.value="",j.value=""}));
//# sourceMappingURL=03-feedback.e4be11bc.js.map