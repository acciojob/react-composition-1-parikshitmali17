
import React, { useState } from "react";

import Tab from "./Tab";
const App = () => {
  const tabsData = [
    { title: "Tab 1", content: "This is the content for Tab 1" },
    { title: "Tab 2", content: "This is the content for Tab 2" },
    { title: "Tab 3",content: "This is the content for Tab 3" }
  ];
  
  
  return (
    <div>
<Tab tabs={tabsData}></Tab>
    </div>
  )
}

export default App
