import{c as d,a as _,g as m,r as p}from"./index-9e094019.js";import{D as T,L as l}from"./enums-9689c747.js";function n(s,a){return a===T.ADMIN?s:s.filter(e=>e.userID===a)}function o(){return JSON.parse(localStorage.getItem(l.CURRENT_USER))}const k={_tasks:localStorage.getItem(l.TASKS)?JSON.parse(localStorage.getItem(l.TASKS)):[],status:null,searchValue:""};r(k._tasks);function r(s){localStorage.setItem(l.TASKS,JSON.stringify(s))}const i=d({name:"users",initialState:k,reducers:{addNewTask(s,a){s._tasks.push({id:m(),userID:o(),...a.payload}),localStorage.setItem(l.TASKS,JSON.stringify(s._tasks))},changeIndividualProp(s,a){const{id:e,change:{prop:t,value:u}}=a.payload,c=s._tasks.find(({id:S})=>S===e);c&&(c[t]=u,r(s._tasks))},changeSearchValue(s,a){s.searchValue=a.payload.value},removeTask(s,a){const{id:e}=a.payload;s._tasks=s._tasks.filter(({id:t})=>t!==e),r(s._tasks)},removeDuplicatedTasks(s){const a=o(),e=s._tasks.filter(({userID:t})=>t===a);s._tasks=p(e,"title"),r(s._tasks)},removeCompletedTasks(s){const a=o();s._tasks=s._tasks.filter(({userID:e,isCompleted:t})=>!t&&e===a),r(s._tasks)},removeAllTasks(s){const a=n(s._tasks,o()).map(({id:e})=>e);s._tasks=s._tasks.filter(({id:e})=>!a.includes(e)),r(s._tasks)},clearStatus(s){s.status=null}}}),f=_(s=>s.tasks._tasks,()=>o(),n),{addNewTask:v,changeIndividualProp:h,changeSearchValue:A,removeTask:D,removeDuplicatedTasks:U,removeCompletedTasks:N,removeAllTasks:y,clearStatus:L}=i.actions,C=i.reducer;export{v as a,N as b,A as c,y as d,h as e,D as f,U as r,f as s,C as t};
