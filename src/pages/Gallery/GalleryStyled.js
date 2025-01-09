import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    /* border: red solid 1px; */
    justify-content: center;
    width: 100%;
`

export const Section = styled.section`
      padding-top: 60px;
`

export const Search = styled.div`
  height: 50px;
  max-width: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;

  input {
    flex: 1;
    max-width: 300px;
    width: 100%;
    height: 35px;
    border-radius: 15px 0 0 15px;
    border: none;
    padding: 0 10px;
    outline: none;
    padding: 0 20px;
    background-color: #D9D9D9;
  }

  button {
    height: 35px;
    width: 60px;
    border-radius: 0 15px 15px 0;
    border: none;
    background-color: #D9D9D9;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color:rgb(189, 189, 189);
      }

    i {
      font-size: 18px;
    }
  }
`;

export const GridImages = styled.div`
  max-width: 1280px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 50px;
  padding: 20px;
  /* border: red solid; */
  justify-items: center;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImagesSection = styled.div`
  display: flex;
  /* border: red solid; */
  flex-direction: column;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  max-width: 270px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.04);
  }
`;

export const IconFav = styled.i`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1.5rem;
    text-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

    &:hover {
        opacity: 1;
        visibility: visible;
  }
`;

export const ImageStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 12px;
  width: 100%;
  filter: grayscale(20%);
  transition: transform 0.3s ease-in-out;
  /* border: red solid; */

  &:nth-child(1) { height: 250px; }
  &:nth-child(1) { width: 255px; }

  &:hover + ${IconFav} {
    opacity: 1;
    visibility: visible;
  }
`;


export const NameImage = styled.p`
    font-family: "Kaushan Script", serif;
    font-weight: 600;
    font-style: normal;
    font-size: 16px;
    color: #000;
`;
