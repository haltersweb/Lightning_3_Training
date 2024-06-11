import { render, Canvas, Config } from '@lightningjs/solid';
import { HashRouter, Route } from "@solidjs/router";
import App from './pages/App';
import HelloWorld from './pages/HelloWorld';
import TextPage from './pages/Text';
import ButtonsPage from './pages/ButtonsPage';
import NotFound from './pages/NotFound';
// import {default as FilmPage } from './pages/FilmPage';
import {default as FilmPage } from './pages/FilmPageWithCE';

import coreExtensionModuleUrl from './AppCoreExtensions.js?importChunkUrl';
import coreWorkerUrl from './threadx-core-worker.js?importChunkUrl';

Config.debug = true;
Config.fontSettings.fontFamily = 'Ubuntu';
Config.fontSettings.color = 0xffffffff;

const driver = 'main';
const RenderOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  threadXCoreWorkerUrl: driver === 'threadx' ? coreWorkerUrl : undefined,
  numImageWorkers: 2,
  // deviceLogicalPixelRatio: 1
}

render(() =>  (
  <Canvas options={RenderOptions}>
    <HashRouter root={App}>
      <Route path="/" component={HelloWorld} />
      <Route path="/text" component={TextPage} />
      <Route path="/buttons" component={ButtonsPage} />
      <Route path="/films/:id?" component={FilmPage} />
      <Route path="/*all" component={NotFound} />
      {/* 
      ROUTE OPTIONS

      <Route path="/shows/:seasonId/:episodeId/:captions?" component={ShowsPage} /> 
      using the ? at the end of the variable means it is not required
      
      Multiple paths.  login and signin both go to the AuthPage
      <Route path={["login", "signin"]} component={AuthPage} />

      <Route path="/shows/" component={ButtonsPage}>
        <Route path="/" component={AllShows}></Route>
        <Route path="/:seasonId" component={Season}></Route>
      </Route>

      */}
    </HashRouter>
  </Canvas>
));
