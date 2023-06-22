import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 32px 0;
    width: 100%;

    > h1 {
      margin-bottom: 12px;
    }

    .info-head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 95%;
      margin-bottom: 8px;

      button {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;
