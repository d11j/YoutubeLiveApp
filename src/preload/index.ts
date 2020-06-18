import { compose, applyMiddleware, createStore } from "redux";
import RendererProcessMiddleware, { requestInitialState } from "@common/Middlewares/WebcontentsPreloadMiddleware";
import createAppReducer from "@common/AppState/AppStateReducer";

(async () => {
  const myCreateStore = compose(applyMiddleware(RendererProcessMiddleware()))(createStore);
  const store = myCreateStore(createAppReducer(await requestInitialState()));

  function init() {
    // WIP: そのうちなんか作りま～～ス
  }

  init();
})();
