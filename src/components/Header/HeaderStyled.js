import styled from "styled-components";

export const Container = styled.header`
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #FFF;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  position: fixed;
`;

export const Menu = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;

  h1 {
    font-family: "Kaushan Script", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
    color: #000;
  }
`;
