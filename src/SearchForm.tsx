/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";


class SearchForm extends React.Component<any,any> {
    render() {
        const handleSubmit = (e:any)=>{
            e.preventDefault();
            if(this.props.onSearch){
                this.props.onSearch(e.target.search.value)
            }else{console.error("Hubo un error")}
        }
    return <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="search" className="search-form__input" required />
        <button className="search-form__button">Buscar</button>
    </form>
}
}

export { SearchForm };