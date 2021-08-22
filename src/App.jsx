// Components
import { Route, Link } from 'react-router-dom';
import './App.styles.scss';


import { lazy, Suspense } from 'react';

import ErrorHelper from './components/errors/error-helper.component';

// import CalculatorApp from './pages/calculator-app/calculator-app.component';
// import TaskApp from './pages/task-app/task-app.component.preredux';
// import LibraryApp from './pages/library-app/library-app.component';

const CalculatorApp = lazy(() => import('./pages/calculator-app/calculator-app.component'));
const TaskApp = lazy(() => import('./pages/task-app/task-app.component.preredux'));
const LibraryApp = lazy(() => import('./pages/library-app/library-app.component'));
const UsersApp = lazy(() => import('./pages/users/users.component'));

function App() {
  return (
    <div className='app-container'>
      <h1>Welcome to my utility application</h1>
      <div>
        <Link to="/calc">Calculator app</Link>| <Link to="/todos">Task management app</Link>| <Link to="/library">Library management app</Link>|
        <Link to="/users">Users</Link>
      </div>

      <ErrorHelper>
        <Suspense fallback={<h2>Loading... Please wait</h2>}>
          <Route path='/calc' component={CalculatorApp}/>
          <Route path='/todos' component={TaskApp}/>
          <Route path='/library' component={LibraryApp}/>
          <Route path='/users' component={UsersApp}/>
        </Suspense>
      </ErrorHelper>

      <footer>
        Copyright 2021 All rights reserved.
      </footer>
    </div>
  );
}

export default App;
