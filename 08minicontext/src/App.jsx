import Login from "./components/Login";
import Profile from './components/Profile';

import "./App.css";
import UserContextProvider from "./Context/UserContextprovider";

function App() {
  return (
    <UserContextProvider>
      <h1> Context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
