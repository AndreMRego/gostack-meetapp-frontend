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
      width: 172px;
      height: 42px;
      border: 0;
      color: #fff;
      border-radius: 4px;
      background: #f94d6a;
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
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  strong {
    color: ${props => (props.available ? '#999' : '#fff')};
    font-size: 18px;
    line-height: 2.4;
  }

  span {
    font-size: 16px;
    line-height: 1.8;
    color: ${props => (props.available ? '#999' : '#fff')};
  }
`
