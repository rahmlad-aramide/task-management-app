import fetchData from '../app/data';
import { useState, useEffect } from 'react';
import axios from 'axios';
function HomePage() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1)

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    axios.get(url).then(res=>setData(res.data.slice(0,5)))
  }, []);

  console.log(data)
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <span>{item.id}. {" "}</span>
          {item.title} {" "}
          <span> {item.completed}</span>
        </div>
      ))}
    </div>
  );
}

export default HomePage;