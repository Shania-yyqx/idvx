(this["webpackJsonpcalliope-lite-net"]=this["webpackJsonpcalliope-lite-net"]||[]).push([[2],{119:function(e,n){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},123:function(e,n,r){var t=r(147).default;function o(e){if("function"!==typeof WeakMap)return null;var n=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:n})(e)}e.exports=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!==typeof e)return{default:e};var r=o(n);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in e)if("default"!==f&&Object.prototype.hasOwnProperty.call(e,f)){var c=i?Object.getOwnPropertyDescriptor(e,f):null;c&&(c.get||c.set)?Object.defineProperty(a,f,c):a[f]=e[f]}return a.default=e,r&&r.set(e,a),a},e.exports.__esModule=!0,e.exports.default=e.exports},124:function(e,n,r){var t=r(118);function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}e.exports=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e},e.exports.__esModule=!0,e.exports.default=e.exports},127:function(e,n,r){"use strict";var t=r(119),o=r(123);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(r(124)),i=t(r(132)),f=t(r(118)),c=t(r(509)),l=o(r(0)),u=t(r(115)),d=t(r(510)),s=t(r(511)),g=r(800),p=r(409),b=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,g.setTwoToneColor)("#1890ff");var h=l.forwardRef((function(e,n){var r,t=e.className,o=e.icon,g=e.spin,h=e.rotate,v=e.tabIndex,m=e.onClick,y=e.twoToneColor,w=(0,c.default)(e,b),x=l.useContext(d.default).prefixCls,k=void 0===x?"anticon":x,C=(0,u.default)(k,(r={},(0,f.default)(r,"".concat(k,"-").concat(o.name),!!o.name),(0,f.default)(r,"".concat(k,"-spin"),!!g||"loading"===o.name),r),t),O=v;void 0===O&&m&&(O=-1);var M=h?{msTransform:"rotate(".concat(h,"deg)"),transform:"rotate(".concat(h,"deg)")}:void 0,j=(0,p.normalizeTwoToneColors)(y),T=(0,i.default)(j,2),A=T[0],S=T[1];return l.createElement("span",(0,a.default)((0,a.default)({role:"img","aria-label":o.name},w),{},{ref:n,tabIndex:O,onClick:m,className:C}),l.createElement(s.default,{icon:o,primaryColor:A,secondaryColor:S,style:M}))}));h.displayName="AntdIcon",h.getTwoToneColor=g.getTwoToneColor,h.setTwoToneColor=g.setTwoToneColor;var v=h;n.default=v},409:function(e,n,r){"use strict";var t=r(123),o=r(119);Object.defineProperty(n,"__esModule",{value:!0}),n.warning=function(e,n){(0,l.default)(e,"[@ant-design/icons] ".concat(n))},n.isIconDefinition=function(e){return"object"===(0,i.default)(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===(0,i.default)(e.icon)||"function"===typeof e.icon)},n.normalizeAttrs=s,n.generate=function e(n,r,t){if(!t)return c.default.createElement(n.tag,(0,a.default)({key:r},s(n.attrs)),(n.children||[]).map((function(t,o){return e(t,"".concat(r,"-").concat(n.tag,"-").concat(o))})));return c.default.createElement(n.tag,(0,a.default)((0,a.default)({key:r},s(n.attrs)),t),(n.children||[]).map((function(t,o){return e(t,"".concat(r,"-").concat(n.tag,"-").concat(o))})))},n.getSecondaryColor=function(e){return(0,f.generate)(e)[0]},n.normalizeTwoToneColors=function(e){if(!e)return[];return Array.isArray(e)?e:[e]},n.useInsertStyles=n.iconStyles=n.svgBaseProps=void 0;var a=o(r(124)),i=o(r(147)),f=r(481),c=t(r(0)),l=o(r(796)),u=r(797),d=o(r(510));function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,r){var t=e[r];switch(r){case"class":n.className=t,delete n.class;break;default:n[r]=t}return n}),{})}n.svgBaseProps={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"};var g="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";n.iconStyles=g;n.useInsertStyles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=(0,c.useContext)(d.default),r=n.csp;(0,c.useEffect)((function(){(0,u.updateCSS)(e,"@ant-design-icons",{prepend:!0,csp:r})}),[])}},481:function(e,n,r){"use strict";function t(e,n){(function(e){return"string"===typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"===typeof e&&-1!==e.indexOf("%")}(e);return e=360===n?e:Math.min(n,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:e=360===n?(e<0?e%n+n:e%n)/parseFloat(String(n)):e%n/parseFloat(String(n))}function o(e){return e<=1?"".concat(100*Number(e),"%"):e}function a(e){return 1===e.length?"0"+e:String(e)}function i(e,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*r*(n-e):r<.5?n:r<2/3?e+(n-e)*(2/3-r)*6:e}function f(e){return c(e)/255}function c(e){return parseInt(e,16)}r.r(n),r.d(n,"blue",(function(){return I})),r.d(n,"cyan",(function(){return N})),r.d(n,"geekblue",(function(){return D})),r.d(n,"generate",(function(){return C})),r.d(n,"gold",(function(){return S})),r.d(n,"green",(function(){return E})),r.d(n,"grey",(function(){return B})),r.d(n,"lime",(function(){return P})),r.d(n,"magenta",(function(){return R})),r.d(n,"orange",(function(){return _})),r.d(n,"presetDarkPalettes",(function(){return j})),r.d(n,"presetPalettes",(function(){return M})),r.d(n,"presetPrimaryColors",(function(){return O})),r.d(n,"purple",(function(){return q})),r.d(n,"red",(function(){return T})),r.d(n,"volcano",(function(){return A})),r.d(n,"yellow",(function(){return F}));var l={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function u(e){var n,r,a,u={r:0,g:0,b:0},d=1,s=null,g=null,h=null,v=!1,m=!1;return"string"===typeof e&&(e=function(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var n=!1;if(l[e])e=l[e],n=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var r=p.rgb.exec(e);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=p.rgba.exec(e))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=p.hsl.exec(e))return{h:r[1],s:r[2],l:r[3]};if(r=p.hsla.exec(e))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=p.hsv.exec(e))return{h:r[1],s:r[2],v:r[3]};if(r=p.hsva.exec(e))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=p.hex8.exec(e))return{r:c(r[1]),g:c(r[2]),b:c(r[3]),a:f(r[4]),format:n?"name":"hex8"};if(r=p.hex6.exec(e))return{r:c(r[1]),g:c(r[2]),b:c(r[3]),format:n?"name":"hex"};if(r=p.hex4.exec(e))return{r:c(r[1]+r[1]),g:c(r[2]+r[2]),b:c(r[3]+r[3]),a:f(r[4]+r[4]),format:n?"name":"hex8"};if(r=p.hex3.exec(e))return{r:c(r[1]+r[1]),g:c(r[2]+r[2]),b:c(r[3]+r[3]),format:n?"name":"hex"};return!1}(e)),"object"===typeof e&&(b(e.r)&&b(e.g)&&b(e.b)?(n=e.r,r=e.g,a=e.b,u={r:255*t(n,255),g:255*t(r,255),b:255*t(a,255)},v=!0,m="%"===String(e.r).substr(-1)?"prgb":"rgb"):b(e.h)&&b(e.s)&&b(e.v)?(s=o(e.s),g=o(e.v),u=function(e,n,r){e=6*t(e,360),n=t(n,100),r=t(r,100);var o=Math.floor(e),a=e-o,i=r*(1-n),f=r*(1-a*n),c=r*(1-(1-a)*n),l=o%6;return{r:255*[r,f,i,i,c,r][l],g:255*[c,r,r,f,i,i][l],b:255*[i,i,c,r,r,f][l]}}(e.h,s,g),v=!0,m="hsv"):b(e.h)&&b(e.s)&&b(e.l)&&(s=o(e.s),h=o(e.l),u=function(e,n,r){var o,a,f;if(e=t(e,360),n=t(n,100),r=t(r,100),0===n)a=r,f=r,o=r;else{var c=r<.5?r*(1+n):r+n-r*n,l=2*r-c;o=i(l,c,e+1/3),a=i(l,c,e),f=i(l,c,e-1/3)}return{r:255*o,g:255*a,b:255*f}}(e.h,s,h),v=!0,m="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(d=e.a)),d=function(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}(d),{ok:v,format:e.format||m,r:Math.min(255,Math.max(u.r,0)),g:Math.min(255,Math.max(u.g,0)),b:Math.min(255,Math.max(u.b,0)),a:d}}var d="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),s="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),g="[\\s|\\(]+(".concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")[,|\\s]+(").concat(d,")\\s*\\)?"),p={CSS_UNIT:new RegExp(d),rgb:new RegExp("rgb"+s),rgba:new RegExp("rgba"+g),hsl:new RegExp("hsl"+s),hsla:new RegExp("hsla"+g),hsv:new RegExp("hsv"+s),hsva:new RegExp("hsva"+g),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function b(e){return Boolean(p.CSS_UNIT.exec(String(e)))}var h=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function v(e){var n=function(e,n,r){e=t(e,255),n=t(n,255),r=t(r,255);var o=Math.max(e,n,r),a=Math.min(e,n,r),i=0,f=o,c=o-a,l=0===o?0:c/o;if(o===a)i=0;else{switch(o){case e:i=(n-r)/c+(n<r?6:0);break;case n:i=(r-e)/c+2;break;case r:i=(e-n)/c+4}i/=6}return{h:i,s:l,v:f}}(e.r,e.g,e.b);return{h:360*n.h,s:n.s,v:n.v}}function m(e){var n=e.r,r=e.g,t=e.b;return"#".concat(function(e,n,r,t){var o=[a(Math.round(e).toString(16)),a(Math.round(n).toString(16)),a(Math.round(r).toString(16))];return t&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}(n,r,t,!1))}function y(e,n,r){var t=r/100;return{r:(n.r-e.r)*t+e.r,g:(n.g-e.g)*t+e.g,b:(n.b-e.b)*t+e.b}}function w(e,n,r){var t;return(t=Math.round(e.h)>=60&&Math.round(e.h)<=240?r?Math.round(e.h)-2*n:Math.round(e.h)+2*n:r?Math.round(e.h)+2*n:Math.round(e.h)-2*n)<0?t+=360:t>=360&&(t-=360),t}function x(e,n,r){return 0===e.h&&0===e.s?e.s:((t=r?e.s-.16*n:4===n?e.s+.16:e.s+.05*n)>1&&(t=1),r&&5===n&&t>.1&&(t=.1),t<.06&&(t=.06),Number(t.toFixed(2)));var t}function k(e,n,r){var t;return(t=r?e.v+.05*n:e.v-.15*n)>1&&(t=1),Number(t.toFixed(2))}function C(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],t=u(e),o=5;o>0;o-=1){var a=v(t),i=m(u({h:w(a,o,!0),s:x(a,o,!0),v:k(a,o,!0)}));r.push(i)}r.push(m(t));for(var f=1;f<=4;f+=1){var c=v(t),l=m(u({h:w(c,f),s:x(c,f),v:k(c,f)}));r.push(l)}return"dark"===n.theme?h.map((function(e){var t=e.index,o=e.opacity;return m(y(u(n.backgroundColor||"#141414"),u(r[t]),100*o))})):r}var O={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},M={},j={};Object.keys(O).forEach((function(e){M[e]=C(O[e]),M[e].primary=M[e][5],j[e]=C(O[e],{theme:"dark",backgroundColor:"#141414"}),j[e].primary=j[e][5]}));var T=M.red,A=M.volcano,S=M.gold,_=M.orange,F=M.yellow,P=M.lime,E=M.green,N=M.cyan,I=M.blue,D=M.geekblue,q=M.purple,R=M.magenta,B=M.grey},509:function(e,n,r){var t=r(795);e.exports=function(e,n){if(null==e)return{};var r,o,a=t(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},510:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=(0,r(0).createContext)({});n.default=t},511:function(e,n,r){"use strict";var t=r(119);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(r(509)),a=t(r(124)),i=r(409),f=["icon","className","onClick","style","primaryColor","secondaryColor"],c={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var l=function(e){var n=e.icon,r=e.className,t=e.onClick,l=e.style,u=e.primaryColor,d=e.secondaryColor,s=(0,o.default)(e,f),g=c;if(u&&(g={primaryColor:u,secondaryColor:d||(0,i.getSecondaryColor)(u)}),(0,i.useInsertStyles)(),(0,i.warning)((0,i.isIconDefinition)(n),"icon should be icon definiton, but got ".concat(n)),!(0,i.isIconDefinition)(n))return null;var p=n;return p&&"function"===typeof p.icon&&(p=(0,a.default)((0,a.default)({},p),{},{icon:p.icon(g.primaryColor,g.secondaryColor)})),(0,i.generate)(p.icon,"svg-".concat(p.name),(0,a.default)({className:r,onClick:t,style:l,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s))};l.displayName="IconReact",l.getTwoToneColors=function(){return(0,a.default)({},c)},l.setTwoToneColors=function(e){var n=e.primaryColor,r=e.secondaryColor;c.primaryColor=n,c.secondaryColor=r||(0,i.getSecondaryColor)(n),c.calculated=!!r};var u=l;n.default=u},795:function(e,n){e.exports=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},796:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.call=i,n.default=void 0,n.note=a,n.noteOnce=function(e,n){i(a,e,n)},n.resetWarned=function(){t={}},n.warning=o,n.warningOnce=f;var t={};function o(e,n){0}function a(e,n){0}function i(e,n,r){n||t[r]||(e(!1,r),t[r]=!0)}function f(e,n){i(o,e,n)}var c=f;n.default=c},797:function(e,n,r){"use strict";var t=r(119).default;Object.defineProperty(n,"__esModule",{value:!0}),n.injectCSS=d,n.removeCSS=function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=s(e,r);null===t||void 0===t||null===(n=t.parentNode)||void 0===n||n.removeChild(t)},n.updateCSS=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=c(r);g(t,r);var o=s(n,r);if(o){var a,i,l;if((null===(a=r.csp)||void 0===a?void 0:a.nonce)&&o.nonce!==(null===(i=r.csp)||void 0===i?void 0:i.nonce))o.nonce=null===(l=r.csp)||void 0===l?void 0:l.nonce;return o.innerHTML!==e&&(o.innerHTML=e),o}var u=d(e,r);return u.setAttribute(f(r),n),u};var o=t(r(798)),a=t(r(799)),i=new Map;function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):"rc-util-key"}function c(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function l(e){return"queue"===e?"prependQueue":e?"prepend":"append"}function u(e){return Array.from((i.get(e)||e).children).filter((function(e){return"STYLE"===e.tagName}))}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(0,o.default)())return null;var r=n.csp,t=n.prepend,a=document.createElement("style");a.setAttribute("data-rc-order",l(t)),(null===r||void 0===r?void 0:r.nonce)&&(a.nonce=null===r||void 0===r?void 0:r.nonce),a.innerHTML=e;var i=c(n),f=i.firstChild;if(t){if("queue"===t){var d=u(i).filter((function(e){return["prepend","prependQueue"].includes(e.getAttribute("data-rc-order"))}));if(d.length)return i.insertBefore(a,d[d.length-1].nextSibling),a}i.insertBefore(a,f)}else i.appendChild(a);return a}function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=c(n);return u(r).find((function(r){return r.getAttribute(f(n))===e}))}function g(e,n){var r=i.get(e);if(!r||!(0,a.default)(document,r)){var t=d("",n),o=t.parentNode;i.set(e,o),o.removeChild(t)}}},798:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}},799:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){if(!e)return!1;if(e.contains)return e.contains(n);var r=n;for(;r;){if(r===e)return!0;r=r.parentNode}return!1}},800:function(e,n,r){"use strict";var t=r(119);Object.defineProperty(n,"__esModule",{value:!0}),n.setTwoToneColor=function(e){var n=(0,i.normalizeTwoToneColors)(e),r=(0,o.default)(n,2),t=r[0],f=r[1];return a.default.setTwoToneColors({primaryColor:t,secondaryColor:f})},n.getTwoToneColor=function(){var e=a.default.getTwoToneColors();if(!e.calculated)return e.primaryColor;return[e.primaryColor,e.secondaryColor]};var o=t(r(132)),a=t(r(511)),i=r(409)}}]);
//# sourceMappingURL=2.3dea21a1.chunk.js.map