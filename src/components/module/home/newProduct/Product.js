import React, { useState, useEffect } from "react";
import "../StyleHome.css";
import axios from "axios";
import Card from "../../../base/Card";
// import Input from "../../../base/Input/Input"
const Product = ({ title, subtitle }) => {
  
  const [products, setProducts] = useState([]); 
  // const [searchItem, setSearch] = useState("");
   async function fetchData() {
     try {
       const result = await axios({
         method: "GET",
         baseURL: process.env.REACT_APP_API_BACKEND,
         url: "/products/AllProduct",
       });
      //  console.log(result.data.data[0].image.split(',')[0]);
       setProducts(result.data.data);
     } catch (error) {
       console.log(error);
     }
   }
     useEffect(() => {
       fetchData();
     }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="products">
            <h3 className="title">{title}</h3>
            <p>{subtitle}</p>
          </div>
          {/* <Input onChange={(e) => setSearch(e.target.value)} /> */}
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
            {products
              .map((item) => (
                <div className="col" key={item.id}>
                  <Card
                    src={item.image.split(",")[0]}
                    to={`/detail/${item.id}`}
                    titleName={item.name}
                    price={item.price}
                    merk={item.merk}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product