import axios from "axios";
import { useEffect, useState } from "react";

const Flower = () => {
  const [flowers, setFlowers] = useState([]);

  const apidata = async () => {
    try {
      const res = await axios.get("http://localhost:8000/flower");

    
      const dataArray = Object.values(res.data);
      console.log(res.data)
      console.log(dataArray)
      setFlowers(dataArray);
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  useEffect(() => {
    apidata();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {flowers.map((flower, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300"
        >
          <img
            src={flower.image}
            alt={flower.name}
            className="w-full h-40 object-cover"
          />

          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">{flower.name}</h2>
            <p className="text-green-600 font-bold">₹{flower.price}</p>
            <p className="text-gray-500 text-sm">{flower.origin}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flower;