import styled from "styled-components";

export const Container = styled.div`
  width: 95%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--Gray);
  border-radius: 12px;

  .playing {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: -webkit-fill-available;
    padding: 16px 32px 16px 52px;
    gap: 16px;

    border-bottom: 1px solid #605c5c;
    margin-bottom: 8px;

    h2 {
      color: var(--Black);
      font-weight: bold;
    }

    audio.react-audio-player {
      display: none;
    }
  }

  .radio-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: -webkit-fill-available;

    padding: 8px;
    gap: 12px;
  }
`;
