import styled from 'styled-components'

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    #description {
      min-height: 200px;
    }

    input,
    textarea {
      background: rgba(0, 0, 0, 0.1);
      height: 50px;
      border: 0;
      padding: 0 15px;
      border-radius: 4px;
      color: #fff;
      margin: 0 0 10px;

      width: 100%;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 180px;
      height: 42px;
      border: 0;
      color: #fff;
      border-radius: 4px;
      background: #f94d6a;
      margin-top: 10px;

      svg {
        margin-right: 5px;
      }
    }
  }
`
