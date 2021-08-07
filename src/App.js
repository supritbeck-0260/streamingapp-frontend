import routes from './routes';
import {lazy, Suspense } from 'react';
import { BrowserRouter,Switch , Route } from 'react-router-dom';
import dotEnv from 'dotenv'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar/Index';
dotEnv.config();



const App =()=>(
  <div  className="App">
  <Suspense fallback={<h1>Loading</h1>}>
  <BrowserRouter>
     
      <Switch>
       { routes.map(({location,path},index)=>
              <Route key={index} exact path={path} 
              component={lazy(()=>import(`./${location}`))} 
              />
              )}
      </Switch>
      <NavBar/>
  </BrowserRouter>
  </Suspense>
  </div>
)

export default App;