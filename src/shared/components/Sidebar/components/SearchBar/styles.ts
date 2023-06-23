import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background-color: var(--Gray);
  height: 32px;
  margin-bottom: 12px;

  input {
    width: 160px;
    height: 32px;
  }

  @media (max-width: 768px) {
    width: 80%;

    input {
      width: 100%;
    }
  }
`;
