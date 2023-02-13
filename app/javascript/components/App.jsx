import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navigation from "./Navigation";
import SignUp from "./SignUp";
import { checkForAuth } from "./utils/checkForAuth";

export default function App(props) {
  const [auth, setAuth] = useState(true);

  useEffect(() => {
    checkForAuth()
      .then((response) => {
        setAuth(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navigation auth={auth} />
      <Routes>
        <Route eaxct path='/' element={auth ? <Home {...props} /> : <Navigate to='/login' />}></Route>
        <Route path='/login' element={!auth ? <Login setAuth={setAuth} /> : <Navigate to='/' />}></Route>
        <Route path='/signup' element={!auth ? <SignUp setAuth={setAuth} /> : <Navigate to='/' />}></Route>
      </Routes>
    </>
  );
}
