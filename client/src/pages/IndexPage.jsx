import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 gap-y-8">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id} key={place.name}>
            <div className="bg-gray-500 rounded-2xl flex mb-2">
              {place.photos?.[0] && (
                <img
                  className="rounded-2xl object-cover aspect-square"
                  src={
                    "https://airbmb-ewqp854kp-rahuls-projects-a9d4c0fb.vercel.app/uploads/" +
                    place.photos?.[0]
                  }
                />
              )}
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm truncate">{place.title}</h3>
            <div className="mt-1">
              <span className="font-bold">₹{place.price}</span> night
            </div>
          </Link>
        ))}
    </div>
  );
};

export default IndexPage;
