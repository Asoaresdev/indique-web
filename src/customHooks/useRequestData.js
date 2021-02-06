import axios from "axios";
import React from "react";

//fazer requisição na API
const useRequestData = (url, initialState) => {
  const [data, setData] = React.useState(initialState);

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [url]);

  return data;
};

export default useRequestData;
