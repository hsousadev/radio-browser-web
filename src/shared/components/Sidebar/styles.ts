import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  width: fit-content;
  height: 100%;
  padding: 16px;
  gap: 12px;

  background-color: var(--Dark);

  .menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .menu-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    gap: 16px;
  }

  @media (max-width: 768px) {
    position: absolute;
    height: auto;
    width: auto;
  }
`;
