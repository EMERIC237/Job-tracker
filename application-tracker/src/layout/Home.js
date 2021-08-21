import React from "react";
import infos from "../data/infos";

function Home() {
    const listOfInfos = infos.map((info)=> <li>{info.company}</li>)
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button>New entry</button>
        </div>
        <div className="col">sort</div>
        <div className="col">Filter</div>
      </div>
      <div className="row">
        this is the record list of you last five Application
        <ul>
            {listOfInfos}
        </ul>
      </div>
    </div>
  );
}

export default Home;
