import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import ShowCard from './Pages/ShowCard';
import Dashboard from './Pages/Dashboard';
import Guest from './Components/auth/GuestOnly';
import Register from './Pages/Register';
import Authenticated from './Components/auth/AuthenticatedOnly';
import Login from './Pages/Login';
import Portfolio from './Pages/Portfolio';
// import App from './App';
import NewPortfolioCard from './Pages/NewPortfolioCard';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import { CookiesProvider } from 'react-cookie';
import AuthProvider from './Components/auth/AuthProvider';
import EditPortfolioCard from './Pages/EditPortfolioCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/portfolio/:itemID",
    element: <Authenticated component={ShowCard} />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/portfolio/new",
    element: <Authenticated component={NewPortfolioCard} />,
  },
  {
    path: "/portfolio/:itemID/edit",
    element: <Authenticated component={EditPortfolioCard} />,
  },
  {
    path: "/portfolio",
    element: <Authenticated component={Portfolio} />,
  },
  {
    path: "/dashboard",
    element: <Authenticated component={Dashboard} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Footer />
      </AuthProvider>
    </CookiesProvider>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
