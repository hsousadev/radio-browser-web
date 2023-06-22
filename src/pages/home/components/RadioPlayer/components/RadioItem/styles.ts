import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--LightGray);
  padding: 12px 16px 12px 32px;

  width: -webkit-fill-available;

  .info {
    display: flex;
    align-items: flex-start;
    justify-content: center;

    gap: 16px;

    h2 {
      font-weight: bold;
    }

    h2,
    h4 {
      color: var(--Black);
    }
  }

  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
`;

export default Container;
