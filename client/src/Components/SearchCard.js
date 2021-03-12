import React from "react";

function SearchCard(props) {
  return (
    <form>
      <input name={props.name} id={props.id} onChange={props.onChange} placeholder="Book Title"/>
      <button type="submit" onClick={props.onClick}>Submit</button>
    </form>
  );
}

export default SearchCard;
