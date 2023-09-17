import React,{useState} from "react";
import JSONDATA from './MOCK_DATA.json';
import './App.css';

const App = () => {
  const [search,setSearch] = useState("");
  return (
    <div>
      <input type="search" placeholder="Search..." onChange={(e)=> setSearch(e.target.value)}/>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
           {JSONDATA.filter((item)=>{
            return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search);
           }).map((val,key) => 
            <tr>
              <td>{val.id}</td>
              <td>{val.first_name}</td>
              <td>{val.last_name}</td>
              <td>{val.email}</td>
              <td>{val.gender}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
