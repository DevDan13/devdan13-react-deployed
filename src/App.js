import Header from "../src/Components/Header/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/Components/Footer/index";
import AboutMe from "../src/pages/aboutMe";
import Portfolio from "../src/pages/portfolio";
import Title from "../src/Components/Title/index";
import Contact from "../src/pages/contact";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route path="/portfolio">
          <Portfolio>
            <Title title={"Portfolio"} />
          </Portfolio>
        </Route>

        <Route path="/contact">
          <Contact>
            <Title title={"Contact"} />
          </Contact>
        </Route>

        <Route path="/">
          <AboutMe>
            <Title title={"About Me"} />
          </AboutMe>
        </Route>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
