/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { SearchForm } from "./SearchForm";
import { SearchResultItem } from "./SearchResultItem";

class App extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      results: [],
    };
  }
  render() {
    const handleSearch = async (search:string) => {
      const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q="+search);
      const data = await res.json();
      this.setState({
        results: data.results
      })
    };

    return (
      <div>
        <SearchForm onSearch={handleSearch} />
        <div className="search-results">
        {this.state.results.map((r: { title: string; price: string; thumbnail: string, permalink: string; }) => (
          <SearchResultItem
          key={r.title} 
          title={r.title} 
          price={r.price} 
          img={r.thumbnail} 
          permalink={r.permalink}/>
        ))}
        </div>
      </div>
    );
  }
}

export { App };