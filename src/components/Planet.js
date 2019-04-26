import React, { useState, useEffect } from "react";
import axios from "axios";

const Homeworld = ({ url }) => {
  const [homeworld, setHomeworld] = useState({});

  useEffect(() => {
    axios.get(url).then(res => setHomeworld({ ...res.data }));
  }, [url]);

  return (
      <div>
        Home Planet: {homeworld.name}
      </div>
  );
};
export default Homeworld;