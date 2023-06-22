import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  width: 218px;

  background-color: var(--Gray);
  border-radius: 8px;

  h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
