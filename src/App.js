import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import Counter from "./componets/Counter";

  function App() {
    const [value, setValue] = useState('Егеер')
    
    return (
      <div className="App">
        <Counter/>
        
      </div>
    );
  }

export default App;
