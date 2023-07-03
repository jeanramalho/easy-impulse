import styled  from "styled-components";

export const Container = styled.div`
    background: #fff;
    width: 100vw;
    height: 100vh;

    .modal-overlay {
        background: #cecece;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        aling-items: center;
        justify-content: center;
    }

    .modal-content {
        width: 90%;
        max-width: 500px;
        background: #fff;
        padding: 10px;
        border-radius: 5px;
        
    }
`