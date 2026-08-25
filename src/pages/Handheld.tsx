import styled from "styled-components";

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 66px);
    overflow-y: hidden;
`

const Console = styled.section`
    background-color: var(--color-primary);
    width: 350px;
    height: 550px;
    border-radius: 12px;
    border: 5px solid #000;
    position: relative;
    overflow: hidden;

    @media screen and (width >= 768px) {
        width: 760px;
        height: 470px;
    }
`

const Screen = styled.div`
    position: absolute;
    top: 30px;
    width: 300px;
    height: 285px;
    left: 20px;
    border: 5px solid #000;
    background-color: var(--color-gray);
    border-radius: 5px;

    @media screen and (width >= 768px) {
        border-radius: 5px;
        top: 40px;
        left: 170px;
        width: 400px;
        height: 380px;
    }
`

export default function Handheld() {
    return (
        <Main>
            <Console>
                <Screen></Screen>
            </Console>
        </Main>
    );
}