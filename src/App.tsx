import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddToList } from "./actions";
import { selectorList } from "./selectors";

const App = () => {
  const dispatch = useDispatch();

  const myList = useSelector(selectorList) || [];

  const [query, setQuery] = useState("");
  const setTheQuery = (e: any) => setQuery(e.target.value);

  const addOnList = () => {
    dispatch(actionAddToList(query));
  };

  const [filteredQuery, setFilteredQuery] = useState([]);
  const handleFilteredSearch = (e: any) => setFilteredQuery(e.target.value);

  const filteredArray = myList.filter((myList: any) =>
    myList.includes(filteredQuery)
  );

  return (
    <div>
      <label>
        <h1>Inserisci alla lista</h1>
        <input
          type="text"
          placeholder="Cosa vuoi aggiungere?"
          onChange={setTheQuery}
          value={query}
        />
        <button onClick={addOnList}>Aggiungi</button>
      </label>
      <label>
        <h1>Cerca nella lista</h1>
        <input
          type="text"
          placeholder="Cosa stai cercando?"
          onChange={handleFilteredSearch}
          value={filteredQuery}
        />
      </label>
      {filteredArray.map((filteredArray: any) => (
        <div>{filteredArray}</div>
      ))}
    </div>
  );
};

export default App;
