import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from './Map'
import List from "./List";
import Charts from './Charts';

function Search() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    "https://api.jsonbin.io/b/5f0d01e4c58dc34bf5d2e0ae"
  );
  const [query, setQuery] = useState("5f0d01e4c58dc34bf5d2e0ae");
  const [showList,setShowList] = useState(false);
  const [showMap,setShowMap] = useState(false);
  const [showCharts,setShowCharts] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    getData();
  }, [url]);

  return (
    <div>
      <form
        onSubmit={(event) => {
          setUrl(`https://api.jsonbin.io/b/${query}`);
          setShowList(true);
          setShowMap(true);
          setShowCharts(true);
          event.preventDefault();
        }}
      >
        <label>
          Id:
          <input
            type="text"
            name="id"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      {showList?<List data = {data}/>:<h1><span role='img' aria-label='property'>🏠</span></h1>}
      {showMap?<Map data = {data}/>:<h1><span role='img' aria-label='lookup'>🔎</span></h1>}
      {showCharts?<Charts data = {data}/>:<h1><span role='img' aria-label='tool'>🔨</span></h1>}
    </div>
  );
}



export default Search;
