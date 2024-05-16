import{s as e,A as i}from"./styled-components.browser.esm-6e0b86f1.js";import{B as n}from"./enums-9689c747.js";const d=e.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: ${n.gray900};

  @media only screen and (max-width: 768px) {
    & {
      padding: 4px 0;
      width: 100%;
      flex-direction: column;
    }
  }
`,r=e.div`
  flex: 1;
  max-width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`,s=i`
  flex: 1;
  visibility: visible;
`,a=i`
  width: 0;
  visibility: hidden;
`,p=e.input`
  ${({isActive:t})=>t?s:a}

  font-size: 16px;
  padding: 4px 8px;
  transition: 0.5s;
`,l=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;export{p as I,r as S,l as a,d as b};
