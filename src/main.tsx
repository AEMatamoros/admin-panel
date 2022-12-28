import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";
import "./index.scss";
//Chart Config
import {Chart as ChartJS, registerables} from 'chart.js';
ChartJS.register(...registerables);
//Redux
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Navigation />
  </Provider>
);
