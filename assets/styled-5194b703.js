import{s as t}from"./styled-components.browser.esm-6e0b86f1.js";import{B as d}from"./enums-9689c747.js";const r=t.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,i="0.5s",s={Wrapper:t.aside`
    position: absolute; // Relative to the StyledMain component
    top: 0;
    left: 0;

    width: 100%;
    max-width: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: ${({isOpen:e})=>e?4:0}px;
    padding: 4px;

    border: 1px solid;
    border-radius: 4px;

    background-color: #242424;
    transition: gap ${i} ease-out;
    z-index: 1;

    @media only screen and (max-width: 1024px) {
      & {
        top: auto;
        bottom: 0;
        padding: 0;
        max-width: 64px;
      }
    }
  `,Toggle:t.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,Accordion:t.div`
    width: 100%;
    max-height: ${({isOpen:e,height:o})=>e?o:"0"}px;
    overflow: hidden;
    transition: ${i} ease-out;
  `,Section:t.section`
    width: 100%;
    border: 1px solid;
    border-radius: 4px;
    padding: 4px;
    background-color: ${({color:e})=>e?d[e]:"dark"};
  `,SectionTitle:t.h3`
    text-align: center;
  `,ButtonsGroup:t.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;

    @media only screen and (max-width: 1024px) {
      & {
        grid-template-columns: 1fr;
      }
    }
  `,Button:t.button`
    border: 1px solid;
    border-radius: 4px;
  `},p={Form:t.form`
    display: flex;
    width: 50%;
    align-items: center;
    gap: 8px;

    @media only screen and (max-width: 768px) {
      & {
        width: 75%;
      }
    }

    @media only screen and (max-width: 425px) {
      & {
        width: 90%;
      }
    }
  `,Input:t.input`
    flex: 1;
    font-size: 16px;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid;
    text-align: center;
    transition: 0.5s;

    &:focus {
      transform: scale(1.02);
      border: 1px solid #ccc;
      font-weight: bold;
    }
  `,Button:t.button`
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 4px;
    transition: 0.5s;

    &:hover {
      transform: scale(1.05);
      border: 1px solid #ccc;
    }

    &:active {
      opacity: 0.75;
      transform: scale(0.95);
    }
  `},l=t.p``,x=t.div`
  width: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;

  @media only screen and (max-width: 768px) {
    & {
      width: 75%;
    }
  }

  @media only screen and (max-width: 425px) {
    & {
      width: 100%;
      padding: 4px 8px;
      margin-bottom: 32px;
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;export{s as A,p as C,l as E,x as S,r as W};
