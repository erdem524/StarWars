// import React, {useState, useEffect} from 'react';
// // import Data from './Home/img.json'

// // const data = Data.map(da => da.title)
// // const people = data

//  export default function Look() {
//  const [searchTerm, setSearchTerm] = React.useState("");
//  const [searchResults, setSearchResults] = React.useState([]);
//  const [ships, setShips] = useState([]);


//    useEffect(() => {
//         async function fetchShips (){
//      let res = await fetch("https://swapi.dev/api/starships/?format=json");
//      let data =await res.json();
//      setShips(data.results);
//      console.log("mana men", data.results)
//    } 
//    fetchShips();
//    },[])

     
//  const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };
//  React.useEffect(() => {
//     const results = ships.filter(person =>
//       person.name.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <ul>
//          {searchResults.map(item => (
//           <li style={{color:"red"}}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }