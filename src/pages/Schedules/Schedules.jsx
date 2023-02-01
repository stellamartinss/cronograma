import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import './Schedules.css'

function Schedules() {
    let moment = [];
    const moments = [
      { name: "Celebração 01/01", date: new Date() },
      { name: "Celebração 02/01", date: new Date() },
      { name: "Celebração 03/01", date: new Date() },
    ];
  
    moments.forEach((item) => {
      const card = (
        <Card className="mb-2">
          <CardContent>
            <div className="row">
              <div className="col-2 text-center">
                <span className="date">{item.date.getDay()}</span>
                <br />
                <span className="month-year">{item.date.getMonth() + '/' + item.date.getFullYear()}</span>
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
        <h1>Eventos</h1>
        {moment}
      </>
    );
}

export default Schedules