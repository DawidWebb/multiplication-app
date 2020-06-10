import React, { Component } from "react";

import StartViev from "./StartViev"

const numbersCol = [
 
  {id:2,
    name:2},
    {id:3,
      name:3},
      {id:4,
        name:4},
        {id:5,
          name:5},
          {id:6,
            name:6},
            {id:7,
              name:7},
              {id:8,
                name:8},
                {id:9,
                  name:9},
                  {id:10,
                    name:10},
]
const numbersRow = [
  {id:1,
    name:1},
{id:2,
  name:2},
  {id:3,
    name:3},
    {id:4,
      name:4},
      {id:5,
        name:5},
        {id:6,
          name:6},
          {id:7,
            name:7},
            {id:8,
              name:8},
              {id:9,
                name:9},
                {id:10,
                  name:10},
]

class App extends Component {
  state = {  }


  render() { 
    return ( 
    <>
    <div>TEst</div>
    <StartViev numbersCol={numbersCol} numbersRow={numbersRow}/>
    </>
     );
  }
}
 
export default App;
