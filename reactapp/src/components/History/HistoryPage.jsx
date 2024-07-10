import React from "react";
import api from "../../utils/api";

function HistoryPage({ data, update }) {
  const decodedToken = JSON.parse(localStorage.getItem("decodedToken"));
  const handledelete = (id) => {
    alert("do you want to cancel the booking?");
    api
      .delete(`/booking/${decodedToken.id}/${id}`)
      .then((res) => {
        console.log(res);
        update(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div class="card">
          <h5 class="card-header">{data.type}</h5>
          <div class="card-body">
            <h5 class="card-title">{data.date}</h5>
            <h5 class="card-title">Name: {data.customerName}</h5>
            <p class="card-text">
              Location: {data.location} || <strong>price: {data.price}</strong>
            </p>
            <button
              class="btn btn-danger"
              onClick={() => {
                handledelete(data.id);
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryPage;
