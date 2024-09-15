/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
interface SearchResultProp {
    title:string,
    price:string,
    img:string
    permalink: string
}

class SearchResultItem extends React.Component<SearchResultProp,any> {
render() {
    return (
    <a href={this.props.permalink} target="blank">
        <div className="search-result-item">
            <img className="search-result-item__img" src={this.props.img} alt={this.props.title} />
            <div className="search-result-item__data">
            <h1>{this.props.title}</h1>
            <h2>$ {this.props.price}</h2>
            </div>
        </div>
    </a>
    );
}
}

export { SearchResultItem };