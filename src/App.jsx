import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setinfo(data.products);
      });
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="px-12 bg-gray-200">
        <div className=" flex justify-between flex-wrap gap-6 py-12 ">
          {info.map((items) => (
            <Card 
              src={items.thumbnail}
              title={items.title}
              price={items.price}
              description={items.description} 
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
