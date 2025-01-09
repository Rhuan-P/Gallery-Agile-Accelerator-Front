import styled from 'styled-components';

export const SideBarMenu = styled.div`
    width: ${(props) => (props.isOpen ? '250px' : '60px')};
    height: 100vh;
    background-color: #fff;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: fixed;
    padding-top: 70px;
    z-index: 1;
`;

export const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
    /* border: red solid; */
`;

export const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Option = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    cursor: pointer;
    /* border: red solid; */
    height: 60px;
    padding: 3px;

    &:hover {
        background-color: #f0f0f0;
        border-radius: 4px;
    }

    abbr {
        gap: 10px;
        display: flex;
        align-items: center;
    }

    span {
        font-size: 16px;
        color: #333;
    }
`;

export const I = styled.i`
    font-size: 24px;
`;

export const ToggleButton = styled.div`
    cursor: pointer;
    font-size: 24px;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5px;
`;
