import {  BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Login from "./components/Login";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import Register from "./components/Register";

function App() {

  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/task/create" element={<TaskForm/>}/>
          <Route path="/task/edit" element={<TaskForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
