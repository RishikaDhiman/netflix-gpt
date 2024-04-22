import {  Provider, useDispatch } from 'react-redux';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './utlis/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from './utlis/userSlice';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Browse from './components/Browse';

function App() {

  const dispatch = useDispatch();


  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Login/>
    },
    {
      path:"/browse",
      element: <Browse/>
    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid, email, displayName}));     
        // console.log(uid, email, displayName);
      } else {
        // sign out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
      <RouterProvider router={appRouter}/>
  );
}

export default App;
