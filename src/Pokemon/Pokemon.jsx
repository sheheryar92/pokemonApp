import React, { useEffect, useState } from "react";




import "./pokemon.css";

function Pokemon() {
  // State and Events
  const [val, setVal] = useState("");
  const [select, setSelect] = useState(null);
  // State and Events

  const [data, setData] = useState([]);

  // Asynchronous Requests
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => console.error())
  }, []);
  // Asynchronous Requests

  

  // State and Events
  const PokemonInfo = ({ name, base }) => (
    <div>
      <h1>{name.english}</h1>
      {/* to itrate hole object we do the following */}
      <h3>DETAILS</h3>
      <table>
        <thead>
          <tr>
            <th>features</th>
            <th>percentage</th>
          </tr>
        </thead>
        <tbody>
          {/* //best way to ittrate in object to show keys vand value  , key value */}
          {Object.keys(base).map((item, id) => {
            return (
              <tr key={id}>
                <td> {item}</td>
                <td>{base[item]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  // State and Events

  return (
    // select && (<div>{select.name.english}</div>)
    <div>
<h1>pokemon app</h1>
      <br />
      <input
        placeholder="search pokemon..."
        value={val}
     
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />

      {/* table */}
      <div>
        <table>
          <thead>
            <tr>
              <th>Names</th>
              <th>Types</th>
            </tr>
          </thead>
          <tbody>
            {/* pokeDAta */}
           
            {data.filter(
              (pokemonFilter) =>
                pokemonFilter.name.english
                  .toLocaleLowerCase()
                  .includes(val.toLocaleLowerCase())
              //includes is case sensitve , to let the includes work properly , and let it filter the value accuratley we do add toLowerCase function so it will make it incase-sensitve and it will work properly
            )
              .slice(0, 15)
              .map((item, key) => (
                <tr key={key}>
                  <td>{item.name.english}</td>
                  <td>{item.type.join()}</td>

                  {/* // State and Events */}
                  <td>
                    {" "}
                    <button
              
                      onClick={() => {
                        setSelect(item);
                      }}
                    >
                      select
                    </button>
                  </td>
                  {/* // State and Events */}
                </tr>
              ))}
            {/* pokeDAta */}
          </tbody>
        </table>
      </div>
      {/* table */}

      <div>
        <h1>Selected items</h1> <br />
        {select && (
          <div>
            <PokemonInfo {...select} />

            {/* // {...select} by this way  we can send all the attributes of the selected item object
{console.log({...select} , 'this is selected all properties')}
and use them by like that 
const PokemonInfo = ({name, base, type}) => (
<div>
<h1>NAME: {name.english}</h1>
<h2>ATTACK :{base.Attack}</h2>
<h3>TYPE :{type}</h3>
</div>
  )
*/}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pokemon;
