
import { MovieDetails} from "./pages/MovieDetails"
import { LandingPage } from "./pages/LandingPage";
import { NewsPage } from "./pages/NewsPage";
import { WeekPage } from "./pages/WeekPage";
import { DailyPage } from "./pages/DailyPage";
import { Toolbar } from "./components/Toolbar";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


export function App() {
    return (
    <Router>
        <header>

            <Toolbar />

        </header>
      <main>
        <Switch>
        <Route exact path="/estrenos">
            <NewsPage />
        </Route>
        <Route exact path="/diario">
            <DailyPage />
        </Route>
        <Route exact path="/semanal">
            <WeekPage />
        </Route>
          <Route exact path="/movies/:movieId">
            <MovieDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}