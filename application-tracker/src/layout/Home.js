import React, { useState, useEffect } from "react";

function Home() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch("/infos")
      .then((res) => res.json())
      .then((jsonRes) => setInfos(jsonRes.data));
  }, []);
  const listOfInfos = infos.map((info) => (
    <li>
      {info.company}-{info.position}
    </li>
  ));
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
        <ul>{listOfInfos}</ul>
      </div>
    </div>
  );
}

export default Home;
