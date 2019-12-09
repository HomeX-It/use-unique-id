import React from "react";

import { useUniqueId } from "use-unique-id";

const App = () => {
  return (
    <main className={useUniqueId("Main")}>
      <nav className={useUniqueId("Nav")}>
        <a className={useUniqueId("NavLink")} href="/">
          Home
        </a>
      </nav>
    </main>
  );
};
export default App;
