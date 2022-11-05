import { useEffect, useRef } from "react";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHero } from "./components/RQSuperHero";
import { ParallelQueryPage } from "./components/ParallelQueryPage";
import "./App.css";

import { hoverActive } from "./util/hoverActive";
import { DynamicParallelQueryPage } from "./components/DynamicParallelQueryPage";
import { DependentQueryPage } from "./components/DependentQueryPage";
import { PagenatedQueriesPage } from "./components/PagenatedQueriesPage";

const queryClient = new QueryClient();

function App() {
  const list = useRef();

  useEffect(() => {
    const onHover = hoverActive(list);
    list.current.addEventListener("mouseover", onHover);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul className="list" ref={list}>
              <li>
                <NavLink
                  exact
                  to="/"
                  className="links"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/super-heroes"
                  className="links"
                  activeClassName="active"
                >
                  Traditional Super Heroes
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/rq-super-heroes"
                  className="links"
                  activeClassName="active"
                >
                  RQ Super Heroes
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/rq-parallel"
                  className="links"
                  activeClassName="active"
                >
                  RQ Parallel
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/rq-parallel-dynamic"
                  className="links"
                  activeClassName="active"
                >
                  RQ Parallel Dynamic
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/rq-dependent"
                  className="links"
                  activeClassName="active"
                >
                  RQ Dependent
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/rq-pagenation"
                  className="links"
                  activeClassName="active"
                >
                  RQ Pagenation
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="container">
            <Switch>
              <Route path="/rq-pagenation">
                <PagenatedQueriesPage />
              </Route>
              <Route path="/rq-dependent">
                <DependentQueryPage email="dodogof02@gmail.com" />
              </Route>
              <Route path="/rq-parallel-dynamic">
                <DynamicParallelQueryPage heroId={[1, 3]} />
              </Route>
              <Route path="/rq-parallel">
                <ParallelQueryPage />
              </Route>
              <Route path="/rq-super-heroes-details/:heroId">
                <RQSuperHero />
              </Route>
              <Route path="/super-heroes">
                <SuperHeroesPage />
              </Route>
              <Route path="/rq-super-heroes">
                <RQSuperHeroesPage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
