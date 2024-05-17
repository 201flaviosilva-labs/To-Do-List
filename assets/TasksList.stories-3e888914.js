import{a as m}from"./jsx-runtime-9a982444.js";import{r as i}from"./index-928ed2fb.js";import{u as n}from"./index-9e094019.js";import{s as p}from"./tasks-61d70c5a.js";import"./styled-5194b703.js";import{T as a}from"./TasksList-3978b774.js";import"./_commonjsHelpers-725317a4.js";import"./index-462ba2bf.js";import"./hoist-non-react-statics.cjs-ded9213f.js";import"./enums-9689c747.js";import"./styled-components.browser.esm-6e0b86f1.js";import"./hooks-cbe8f738.js";import"./Task-994610b5.js";import"./Icons-1eeecf15.js";import"./index.esm-b0edbcdd.js";import"./iconBase-c523684a.js";const S={title:"Pages / Home / TasksList",component:a},s=()=>{const t=n(p);return i.useEffect(()=>{t.length||alert("Please add a task on (Pages/Home/Default) to see tasks.")},[t.length]),m(a,{})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};var e,r,o;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const tasks = useSelector(selectCurrentUserTasks);
  useEffect(() => {
    if (!tasks.length) alert("Please add a task on (Pages/Home/Default) to see tasks.");
  }, [tasks.length]);
  return <TasksList />;
}`,...(o=(r=s.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const C=["Default"];export{s as Default,C as __namedExportsOrder,S as default};
