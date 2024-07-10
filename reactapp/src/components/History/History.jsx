import React, { useEffect, useState } from "react";
import HistoryPage from "./HistoryPage";
import api from "../../utils/api";

function History() {
  const [data, setdata] = useState([]);
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"));
  useEffect(() => {
    console.log(data);
    getData();
  }, []);

  const getData = () => {
    api
      .get(`/booking/${decodedToken.id}`)
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updatedata = (id) => {
    setdata(data.filter((c) => c.id != id));
  };

  return (
    <>
      <h3 className="text-center">Bookings</h3>
      <br />
      {data.length > 0 ? (
        data.map((e) => <HistoryPage data={e} update={updatedata} />)
      ) : (
        <h3>no bookings</h3>
      )}
    </>
  );
}

export default History;
