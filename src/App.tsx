import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const setTheQuery = (e: any) => setQuery(e.target.value);

  const [list, addToMyList] = useState([]);
  const addOnList = () => {
    //@ts-ignore
    addToMyList([...list, query]);
  };

  const [filteredQuery, setFilteredQuery] = useState([]);
  const handleFilteredSearch = (e: any) => setFilteredQuery(e.target.value);

  const filteredArray = list.filter((list: any) =>
    list.includes(filteredQuery)
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
        <ul>{filteredArray}</ul>
      ))}
    </div>
  );
};

export default App;
