import React from "react";

import { useUniqueId } from "use-unique-id";

const App = () => {
  return <div>{useUniqueId("hello-world")}</div>;
};
export default App;
