import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './components/Header';
import { Stories } from './components/Stories';
import { StoryPage } from './components/StoryPage';
import { MainPage } from './components/MainPage';

export const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/storyPage_:id">
            <StoryPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
} 
