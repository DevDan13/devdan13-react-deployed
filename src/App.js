import logo from './logo.svg';
import './App.css';
import Header from "../src/Components/Header/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/Components/Footer/index";
import Title from "../src/Components/Title/index";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/portfolio">
          <Title title="Portfolio" />
        </Route>
        <Route path="/">
          <Title title="About Me" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
