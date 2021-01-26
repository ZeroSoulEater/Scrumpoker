import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss'

import S404 from './sites/s404/s404';
import ScrumMasterView, {route as ScrumMasterViewRoute} from './sites/scrum_master_view/scrum_master_view';
import Login, {route as loginRoute} from './sites/login/login';
import EstimationView, {route as estimationViewRoute} from './sites/estimation-room/estimation-view';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={loginRoute} component={Login}/>
        <Route exact path={ScrumMasterViewRoute} component={ScrumMasterView} />
        <Route exact path={estimationViewRoute} component={EstimationView} />
        <Route component={S404} />
      </Switch>
    </Router>
  );
}

export default App;
