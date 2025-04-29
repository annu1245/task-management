import {  BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
