import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 16px;
    }

    textarea {
      background: #fff;
      border-radius: 5px;
      border: 2px solid #fff;
      padding: 16px;
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
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  margin-right: 80px;

  width: 100%;

  ul {
    li {
      display: flex;
      background: #fff;
      border-radius: 5px;
      padding: 16px;
      margin: 16px 0;

      > div {
        display: flex;
        flex-direction: column;
        margin: 0 16px;

        span {
          font-size: 14px;
          margin-top: 8px;
        }
      }

      button {
      background: #365df0;
      border-radius: 5px;
      padding: 0 16px;
      color: #fff;
      height: 50px;
      border: 0;
      font-weight: 500;
      transition: background-color 0.2s;

      &:hover {
        background: #2f55cc;
      }

      &:active {
        background: #244aa8;
      }
    }
  }
`;
