import{j as t,F as m,a as e}from"./jsx-runtime-9a982444.js";import{s as p}from"./styled-components.browser.esm-6e0b86f1.js";import{B as d}from"./enums-9689c747.js";import{F as r,C as s,D as i}from"./Icons-1eeecf15.js";import"./index-928ed2fb.js";import"./_commonjsHelpers-725317a4.js";import"./hoist-non-react-statics.cjs-ded9213f.js";import"./index.esm-b0edbcdd.js";import"./iconBase-c523684a.js";const g={title:"Components / Task / Icons"},n=p.section`
    border: 1px solid ${d.light};
    padding: 4px 16px;
    margin: 16px 0;
`,o=()=>t(m,{children:[t(n,{children:[e("h2",{children:"Favorite"}),e(r,{isFavorite:!0}),e(r,{isFavorite:!1})]}),t(n,{children:[e("h2",{children:"Completed"}),e(s,{isCompleted:!0}),e(s,{isCompleted:!1})]}),t(n,{children:[e("h2",{children:"Delete"}),e(i,{}),e(i,{isHouver:!0})]})]});o.__docgenInfo={description:"",methods:[],displayName:"Icons"};var a,c,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <>
            <Section>
                <h2>Favorite</h2>
                <FavoriteIcon isFavorite={true} />
                <FavoriteIcon isFavorite={false} />
            </Section>

            <Section>
                <h2>Completed</h2>
                <CompletedIcon isCompleted={true} />
                <CompletedIcon isCompleted={false} />
            </Section>

            <Section>
                <h2>Delete</h2>
                <DeleteIcon />
                <DeleteIcon isHouver={true} />
            </Section>
        </>;
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const D=["Icons"];export{o as Icons,D as __namedExportsOrder,g as default};
