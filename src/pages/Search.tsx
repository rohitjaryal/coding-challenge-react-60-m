import { ChangeEvent, useEffect, useState } from "react";
import { fetchSearchResult } from "../apis/Search.api";

let BASE_SEARCH_STRING = "What is NodeJS?";
const SEARCH_MODE_ENABLED = false;
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState("" as String);

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchKey(value);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchSearchResult(BASE_SEARCH_STRING);

      const messageContent = response?.data?.choices[0]?.message?.content;
      if (messageContent) {
        setSearchResult(messageContent);
      }
    };

    fetchData().catch(console.error);
  }, []);

  async function handleSearch() {}

  return (
    <div>
      {SEARCH_MODE_ENABLED && (
        <>
          <label>Search</label>
          <input value={searchKey} onChange={(e) => handleSearchInput(e)} />
          <button onClick={handleSearch}>Search</button>
        </>
      )}
      <div className="results-container">
        <label>{searchResult}</label>
      </div>
    </div>
  );
};

export default Search;
