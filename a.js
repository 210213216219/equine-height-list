{let b=document.body,c=b.children,wt,bmi,transform=new CSSTransformValue([new CSSTranslate(CSS.px(0),CSS.px(0))]);addEventListener('wheel',Number.isInteger(devicePixelRatio)?n=>n.preventDefault(b.scrollTop+=n.deltaY>0?40-b.scrollTop%40||40:-b.scrollTop%40||-40):n=>n.preventDefault(b.scrollTop+=n.deltaY>0?40:-40),{passive:!1}),ondragstart=n=>!1,a.oninput=n=>{let r=545,t=0;while(c[r].className=c[r].textContent.includes(n.target.value)?(++t,''):'a',--r);p.textContent=t},l.onchange=o=>{fetch("//210213216219.github.io/equine-height-list/0").then(async r=>{wt=(r=new Int32Array(await r.arrayBuffer())).slice(0,545+1);bmi=r.slice(545+1);(l.onchange=e=>{e=545;if(o=l.selectedIndex){o=o<2?wt:bmi;while((transform[0].y.value=o[e])&&c[e].attributeStyleMap.set("transform",transform),--e);}else{while(c[e].attributeStyleMap.clear(),--e);}})()})}}
