import React from 'react';

import {
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Enrolled from './component/Enrolled';
// import Enrolled from './component/Enrolled';
import Fourth from './component/Fourth';
import Main from './component/Main';


function App() {
  return (
    <>
   <BrowserRouter>
     <Routes>
        <Route path='/' element = {<Main/>}></Route>
        <Route path='/Enrolled' element = {<Enrolled/>}></Route>    
     </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
