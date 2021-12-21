import React from 'react';


//单独的button
export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button> 
    );

}