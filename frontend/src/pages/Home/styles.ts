import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  margin: 0 auto;

  width: 90%;
  max-width: 1120px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 64px;

  width: 100%;

  form {
    width: 100%;
    text-align: center;
    margin: 64px 0;

    h1 {
      margin-bottom: 16px;
    }

    textarea {
      resize: none;
      background: #fff;
      border-radius: 5px;
      border: 2px solid #fff;
      padding: 12px 20px;
      height: 200px;
      width: 100%;
    }

    button {
      background: #365df0;
      border-radius: 5px;
      padding: 0 16px;
      color: #fff;
      height: 50px;
      border: 0;
      width: 100%;
      font-weight: 500;
      margin-top: 8px;
      transition: background-color 0.2s;

      &:hover {
        background: #2f55cc;
      }

      &:active {
        background: #244aa8;
      }
    }
  }

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #f0f0f5;
  }
`;

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  place-content: center;

  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
    padding: 16px;
    margin: 16px 0;
    width: 100%;

    > div {
      display: flex;
      flex-direction: column;
      margin: 0 16px;

      span {
        font-size: 14px;
        margin-top: 8px;
      }
    }

    audio {
      width: 100%;
    }
  }
`;
