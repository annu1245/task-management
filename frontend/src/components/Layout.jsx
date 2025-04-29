// components/Layout.jsx
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        <Outlet /> {/* Child routes will render here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;