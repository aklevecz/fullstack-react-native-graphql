import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import * as Modal from 'react-modal';

import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apollo";
import { Routes } from "./routes";
import "./index.css";
Modal.setAppElement('#root');

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
