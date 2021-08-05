import { BrowserRouter,Switch , Route } from 'react-router-dom';
import dotEnv from 'dotenv'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar/Index';
import Container from './Stream/Container';
import Upload from './Upload/Index';
dotEnv.config();
const App =()=>(
  <div  className="App">
  <BrowserRouter>
     <NavBar/>
      <Switch>
          <Route exact path='/' component={Container} />
          <Route exact path='/upload' component={Upload} />
      </Switch>
  </BrowserRouter>
  </div>
)

export default App;


{/* <div className="App">
<header className="App-header">
  <h5>Video Streaming app</h5>
  <Video/>
  <Audio/>
</header>
</div> */}