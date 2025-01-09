import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: #FFF;
    position: relative;
    z-index: 100;
    `;

export const FooterContent = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
`;

export const FooterSocialMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
`;

export const FooterLink = styled.a`
    display: flex;
    justify-content: center;    
    align-items: center;
    text-decoration: none;
    color: #000;
    font-size: 2rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        color: #a0a0a0;
    }
`;

export const FooterText = styled.p`
    color: #3B2211;
    font-size: .8rem;
    padding: 10px;
    text-align: center;
    /* font-weight: 600; */
`;

export const I = styled.i`
    font-size: 2rem;
    width: 100%;
    /* height: 70px; */
    display: flex;
    color: #888888;
    justify-content: center;
    cursor: pointer;
`;