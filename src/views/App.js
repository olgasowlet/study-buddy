import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyles";
import UsersList from "components/organisms/UsersList/UsersList";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./App.styles";
import { users as data } from "data/users";
import AddUserForm from "components/organisms/AddUserForm/AddUserForm";
import Navigation from "components/organisms/Navigation/Navigation";
import { routes } from "assets/routes/routes";

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve([...data]);
      } else {
        reject({ message: "Error" });
      }
    }, 2000);
  });
};

const initialFormState = {
  name: "",
  attendance: "",
  avarage: "",
};

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputsValues, setInputsValues] = useState(initialFormState);

  const deleteUser = (index) => {
    const newUsers = [...users.slice(0, index), ...users.slice(index + 1)];

    setUsers(newUsers);
  };

  useEffect(() => {
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onInputChange = (e) => {
    setInputsValues({
      ...inputsValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdduser = (e) => {
    e.preventDefault();

    const newUser = {
      name: inputsValues.name,
      attendance: inputsValues.attendance,
      avarage: inputsValues.avarage,
    };

    setUsers([...users, newUser]);

    setInputsValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Navigation/>
          <Routes>
            <Route
              path={routes.addUser}
              element={
                <AddUserForm
                  handleAdduser={handleAdduser}
                  inputsValues={inputsValues}
                  onInputChange={onInputChange}
                />
              }
            />
            <Route
              path={routes.studentsList}
              element={
                <UsersList
                  users={users}
                  deleteUser={deleteUser}
                  isLoading={isLoading}
                />
              }
            />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
