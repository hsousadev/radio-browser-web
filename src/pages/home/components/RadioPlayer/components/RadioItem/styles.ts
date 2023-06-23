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

    .edition-inputs {
      display: flex;
      gap: 4px;
    }

    h2 {
      font-weight: bold;
    }

    h2,
    h4 {
      color: var(--Black);
    }

    input {
      border: 1px solid var(--Black);
      color: var(--Black);

      &::placeholder {
        color: rgba(0, 0, 0, 0.35);
      }
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
