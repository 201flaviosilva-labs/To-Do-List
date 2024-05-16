import{j as s,a as r}from"./jsx-runtime-9a982444.js";import{r as p}from"./index-928ed2fb.js";import{e as b,f as y}from"./tasks-61d70c5a.js";import{u as g}from"./hooks-cbe8f738.js";import{F as v,C,D as T}from"./Icons-1eeecf15.js";import{s as u}from"./styled-components.browser.esm-6e0b86f1.js";import{B as l}from"./enums-9689c747.js";function w(){const e=g();return{changeProp:p.useCallback((t,a,n)=>{e(b({id:t,change:{prop:a,value:n}}))},[e])}}function D(){const e=g();return{deleteTask:p.useCallback(t=>{e(y({id:t}))},[e])}}const _=u.li`
  width: 100%;
  min-height: 32px;
  display: flex;
  align-items: center;

  justify-content: space-between;
  padding: 4px 8px;
  border: 1px solid;
  border-radius: 4px;
  transition: 0.5s;

  &:nth-child(odd) {
    background-color: ${l.gray800};
  }

  &:nth-child(even) {
    background-color: ${l.gray700};
  }

  &:hover {
    transform: scale(1.025);
    background-color: ${l.gray900};
    border: 1px solid white;

    * {
      color: white;
    }
  }

  @media only screen and (max-width: 425px) {
    & {
      padding: 2px 4px;
    }
  }
`,f=u.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: ${({isLeft:e})=>e&&1};

  span {
    flex: 1;
    font-size: 16px;
    word-break: break-word;
    cursor: pointer;

    &.completed {
      text-decoration: line-through;
    }
  }
`,c=u.button`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  border-radius: 4px;
  transition: 0.5s;

  background-color: ${({isActive:e})=>e&&"red"};

  &:hover {
    transform: scale(1.1);
  }
`;function d({id:e,title:o,isFavorite:t,isCompleted:a}){const[n,m]=p.useState(!1),{changeProp:i}=w(),{deleteTask:k}=D();function x(){const h=prompt("New task title",o)||o;h!==o&&i(e,"title",h)}return s(_,{children:[s(f,{isLeft:!0,children:[r(c,{isActive:t,onClick:()=>i(e,"isFavorite",!t),children:r(v,{isFavorite:t})}),r("span",{className:a?"completed":"",title:"Double click to change task title",onDoubleClick:x,children:o})]}),s(f,{children:[r(c,{onClick:()=>i(e,"isCompleted",!a),children:r(C,{isCompleted:a})}),r(c,{title:"Delete task",isActive:n,onClick:()=>k(e),onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:r(T,{isHouver:n})})]})]})}d.displayName="Task";try{d.displayName="Task",d.__docgenInfo={description:"",displayName:"Task",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},isFavorite:{defaultValue:null,description:"",name:"isFavorite",required:!0,type:{name:"boolean"}},isCompleted:{defaultValue:null,description:"",name:"isCompleted",required:!0,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}}}}}catch{}export{d as T};
