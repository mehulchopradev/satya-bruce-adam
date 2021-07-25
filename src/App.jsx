// Components
import { Route, Link } from 'react-router-dom';
import './App.styles.scss';

import CalculatorApp from './pages/calculator-app/calculator-app.component';
import TaskApp from './pages/task-app/task-app.component';
import LibraryApp from './pages/library-app/library-app.component';

function App() {
  return (
    <div className='app-container'>
      <h1>Welcome to my utility application</h1>
      <div>
        <Link to="/calc">Calculator app</Link>| <Link to="/todos">Task management app</Link>| <Link to="/lib">Library management app</Link>
      </div>

      <Route path='/calc' component={CalculatorApp}/>
      <Route path='/todos' component={TaskApp}/>
      <Route path='/lib' component={LibraryApp}/>

      <footer>
        Copyright 2021 All rights reserved.
      </footer>
    </div>
  );
}

export default App;
