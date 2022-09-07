// import { dividerClasses } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import landscape from "../images/Summerlandscape_Monochromatic.png";

function Home() {
  return (
    <div>
      <img src={landscape} />
      <div>
        <Link to="/profile">Profile</Link>
        <Link to="/trips">Trips</Link>
      </div>
    </div>
  );
}
export default Home;

//   const [places, setPlaces] = useState([]);
//   const [err, setErr] = useState(null);

//   const fetchPlaces = async () => {
//     try {
//       const response = await fetch("/api/v1/places");
//       if (!response.ok) throw response;
//       const data = await response.json();
//       setPlaces(data);
//     } catch (err) {
//       console.log(err);
//       setErr(err);
//     }
//   };

//   useEffect(() => {
//     fetchPlaces();
//   }, []);

//   if (!err && !places.length) return <p>No places listed</p>;

//   if (err) return <p>Error. Check console.</p>;

//   return <p>{JSON.stringify(places)}</p>;
