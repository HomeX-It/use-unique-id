import React from "react";

import { useUniqueId } from "use-unique-id";

const App = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "24rem"
      }}
    >
      <label htmlFor="firstName">{useUniqueId("firstName")}</label>
      <input name="firstName" />
    </form>
  );
};
export default App;
