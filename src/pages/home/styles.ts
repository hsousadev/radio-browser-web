import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 32px 0 32px 64px;

  .info-head {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
