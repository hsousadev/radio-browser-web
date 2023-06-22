import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

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
