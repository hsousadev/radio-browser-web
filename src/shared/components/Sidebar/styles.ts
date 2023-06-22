import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: fit-content;
  height: 100vh;
  padding: 16px;
  gap: 12px;

  background-color: var(--Dark);

  .menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
