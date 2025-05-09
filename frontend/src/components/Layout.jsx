// components/Layout.jsx
import { Outlet, useNavigate } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import { BASE_URL } from '../utils/constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { addUser } from '../utils/userSlice';

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(store => store.user);

  const fetchUser = async () => {
    if(userData) return;
    try {
    const res = await axios.get(BASE_URL + "/profile/view", {withCredentials: true})
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login")
      }
      console.log(err)
    }
  }

  useEffect(() => {
      fetchUser();
  },[])

  return (
    <>
      <Header style={{ minHeight: '10vh' }} />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        <Outlet />
      </main>
      <Footer style={{ minHeight: '10vh' }} />
    </>
  );
};

export default Layout;