import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./Moments.css";

function Moments() {
  let moment = [];
  const moments = [
    { name: "Louvor", start: "10h00", champ: "nome pessoa" },
    { name: "Estudo", start: "10h15", champ: "nome pessoa" },
    { name: "Oferta", start: "10h30", champ: "nome pessoa" },
  ];

  moments.forEach((item) => {
    const card = (
      <Card className="mb-2">
        <CardContent>
          <div className="row">
            <div className="col-2">
              <span className="time">{item.start}</span>
            </div>
            <div className="col-10">
              <span className="title">{item.name}</span>
              <br />
              <span class="champ">{item.champ}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );

    moment.push(card);
  });

  return (
    <>
      <h1>Momentos</h1>
      {moment}
    </>
  );
}

export default Moments;
