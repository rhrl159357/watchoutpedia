import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Pageination from './compoments/Pageination';
import { StringLiteralLike } from 'typescript';

interface Airline{
  id:number;
  name: string;
  country: String;
  logo: string;
  slogan:string;
  head_quaters:string;
  website: string;
  established:string;
}

interface Passenger{
  _id:string;
  name:string;
  trips:number;
  airline: Airline;
  __v: number;
}

interface Response{
  totalpages: number;
  totalPassengers: number;
  data: Array<Passenger>;
} 


function App() {

  const [page, setPage] = useState(0);
  const [totalpages, setTotalPages] = useState(0);
  const [items, setItems] = useState<Array<Passenger>>([]);

  const handlePageChange = (currentPage: number): void => {
    setPage(currentPage);
  }

  useEffect(() => {
    const fetch = async () => {
      const params = {page,size: 10};
      const {data:{totalpages,data}} = await axios.get<Response>('https://api.instantwebtools.net/v1/passenqer',{params})
      setTotalPages(totalpages);
      setItems(data);
    }
    fetch();
  },[])

  return (
    <div className="App">
      <ul>
        {
          items.map(item => {
            <li key={item._id}>
              {item.name}
            </li>
          })
        }
      </ul>
      <Pageination count={totalpages}  page={page} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
