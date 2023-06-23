import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
  margin-right: 16px;
  width: 218px;
  height: 48px;

  background-color: var(--Gray);
  border-radius: 8px;

  .option-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;

    width: 100%;
    gap: 16px;

    h4 {
      text-align: start;
    }

    .secondBtn {
      display: none;
    }
  }

  .option-content:hover {
    .secondBtn {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
