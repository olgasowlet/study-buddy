import { GlobalStyle } from "assets/styles/GlobalStyles";
import UsersList from "components/organisms/UsersList/UsersList";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.lightGrey};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
