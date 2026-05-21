import React, { useContext, useEffect } from "react";
import "../styles/Clients.scss";
import { DataContext } from "../context/DataContext";

function Clients() {
  const { data }: any = useContext(DataContext);

  const clientsData = data?.clients ? data.clients : [];

  useEffect(() => {
    console.log("-----> Data", clientsData);
  }, []);

  if (clientsData?.length > 0) {
    return (
      <div>
        <div className="row d-flex justify-content-between">
          {clientsData.map((client, index) => (
            <div key={index} className="client-container col-3 col-md-3">
              <img src={client.logoUri} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Clients;
