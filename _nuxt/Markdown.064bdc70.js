import s from"./ContentSlot.20057e16.js";import{d as o,Z as u,I as f,a9 as m}from"./entry.09e4a647.js";import"./node.e4a9c3bc.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};