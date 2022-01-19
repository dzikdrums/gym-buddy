import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';

const Root = () => {
  const Wrapper = styled.div`
    background: #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </>
  );
};

export default Root;
