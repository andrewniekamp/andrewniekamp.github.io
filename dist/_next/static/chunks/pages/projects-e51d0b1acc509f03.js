(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7670:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(5919)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let i=r(4788),n=r(8754),o=r(1757),a=r(224),l=o._(r(7294)),s=n._(r(2636)),c=r(7757),u=r(3735),d=r(3341);r(4210);let f=n._(r(7746)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current(i._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}function b(e){let[t,r]=l.version.split("."),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let w=(0,l.forwardRef)((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fetchPriority:g,fill:p,placeholder:h,loading:w,srcString:v,config:y,unoptimized:_,loader:j,onLoadRef:x,onLoadingCompleteRef:E,setBlurComplete:S,setShowAltText:C,onLoad:P,onError:z}=e,R=a._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return w=f?"lazy":w,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",i._({},R,b(g),{loading:w,width:o,height:n,decoding:"async","data-nimg":p?"fill":"1",className:c,style:i._({},u,d)},r,{ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&m(e,v,h,x,E,S,_))},[v,h,x,E,S,z,_,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,x,E,S,_)},onError:e=>{C(!0),"blur"===h&&S(!0),z&&z(e)}})))}),v=(0,l.forwardRef)((e,t)=>{let r,n;var o,{src:m,sizes:v,unoptimized:y=!1,priority:_=!1,loading:j,className:x,quality:E,width:S,height:C,fill:P,style:z,onLoad:R,onLoadingComplete:k,placeholder:N="empty",blurDataURL:O,fetchPriority:I,layout:M,objectFit:A,objectPosition:L,lazyBoundary:B,lazyRoot:D}=e,F=a._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=(0,l.useContext)(d.ImageConfigContext),U=(0,l.useMemo)(()=>{let e=g||T||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i._({},e,{allSizes:t,deviceSizes:r})},[T]),W=F,q=W.loader||f.default;delete W.loader;let G="__next_img_default"in q;if(G){if("custom"===U.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=q;q=t=>{let{config:r}=t,i=a._(t,["config"]);return e(i)}}if(M){"fill"===M&&(P=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(z=i._({},z,e));let t={responsive:"100vw",fill:"100vw"}[M];t&&!v&&(v=t)}let V="",J=h(S),X=h(C);if("object"==typeof(o=m)&&(p(o)||void 0!==o.src)){let e=p(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,O=O||e.blurDataURL,V=e.src,!P){if(J||X){if(J&&!X){let t=J/e.width;X=Math.round(e.height*t)}else if(!J&&X){let t=X/e.height;J=Math.round(e.width*t)}}else J=e.width,X=e.height}}let Y=!_&&("lazy"===j||void 0===j);(!(m="string"==typeof m?m:V)||m.startsWith("data:")||m.startsWith("blob:"))&&(y=!0,Y=!1),U.unoptimized&&(y=!0),G&&m.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(y=!0),_&&(I="high");let[H,$]=(0,l.useState)(!1),[K,Q]=(0,l.useState)(!1),Z=h(E),ee=Object.assign(P?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:L}:{},K?{}:{color:"transparent"},z),et="blur"===N&&O&&!H?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:J,heightInt:X,blurWidth:r,blurHeight:n,blurDataURL:O,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:U,src:m,unoptimized:y,width:J,quality:Z,sizes:v,loader:q}),ei=m,en=(0,l.useRef)(R);(0,l.useEffect)(()=>{en.current=R},[R]);let eo=(0,l.useRef)(k);(0,l.useEffect)(()=>{eo.current=k},[k]);let ea=i._({isLazy:Y,imgAttributes:er,heightInt:X,widthInt:J,qualityInt:Z,className:x,imgStyle:ee,blurStyle:et,loading:j,config:U,fetchPriority:I,fill:P,unoptimized:y,placeholder:N,loader:q,srcString:ei,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:$,setShowAltText:Q},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(w,i._({},ea,{ref:t})),_?l.default.createElement(s.default,null,l.default.createElement("link",i._({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:W.crossOrigin},b(I)))):null)}),y=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,l=i||t,s=n||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},5919:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var i=r(5893),n=r(5675),o=r.n(n);function a(e){let{project:t}=e;return(0,i.jsxs)("div",{className:"border-2 border-sky-600 w-64 h-48",children:[t.title,(0,i.jsx)(o(),{src:t.imageUrl,alt:"Vercel Logo",width:255,height:255,priority:!0})]})}let l=[{title:"Props",imageUrl:"/images/props-thumbnail.png"},{title:"Props",imageUrl:"/images/props-thumbnail.png"},{title:"Props",imageUrl:"/images/props-thumbnail.png"}];function s(){return(0,i.jsxs)("main",{className:"flex flex-col justify-center items-center p-8",children:[(0,i.jsx)("p",{className:"responsive-header max-w-screen text-center",children:"Projects"}),(0,i.jsx)("div",{className:"flex gap-4",children:l.map((e,t)=>(0,i.jsx)(a,{project:e},"project-card-".concat(t)))})]})}},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7670)}),_N_E=e.O()}]);