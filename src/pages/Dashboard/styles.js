import styled from 'styled-components'

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 172px;
      height: 42px;
      border: 0;
      color: #fff;
      border-radius: 4px;
      background: #f94d6a;

      svg {
        margin-right: 5px;
      }
    }

    strong {
      color: #fff;
      font-size: 32px;
    }
  }

  ul {
    margin-top: 30px;
  }
`

export const Meetup = styled.li`
  padding: 20px;
  margin: 10px 0;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  strong {
    color: ${props => (props.available ? '#999' : '#fff')};
    font-size: 18px;
    line-height: 24px;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.8;
    color: ${props => (props.available ? '#999' : '#fff')};

    svg {
      margin-left: 25px;
    }
  }
`
