// import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AllWords from "./components/allWords";
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyGoal from "./components/dailyGoal";
import BurgerMenu from "./components/BurgerMenu";

const App = () => {
    return (
        <Router>
            <BurgerMenu />
            <Switch>
                <Route exact path="/">
                    <AllWords/>
                </Route>
                <Route exact path="/daily-goal">
                    <DailyGoal/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;