import React, { useState } from "react";
import { Card, Grid, Input } from "semantic-ui-react";
import Img from "./shipsImg.json";

function Ships({ data }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  if (input.length > 2) {
    data = data.filter((n) => {
      return n.name.toLowerCase().match(input);
    });
  }
  return (
    <>
      <div
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "36px",
          padding: "20px",
        }}
      >
        Ships
      </div>
      <Input
        fluid
        icon="search"
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleChange}
        style={{ margin: "10px 0" }}
      />
      <Grid
        stackable
        columns={4}
        style={{ paddingBottom: "50px", minHeight: "1000px" }}
      >
        {data.map((ship, index) => {
          return (
            <Grid.Column style={{ margin: "20px 0" }} key={index}>
              <Card>
                <Card.Content>
                  <Card.Content
                    textAlign="center"
                    style={{ height: "40px", fontSize: "16px" }}
                  >
                    {ship.name}
                  </Card.Content>
                  <img
                    style={{ padding: "10px 0" }}
                    src={Img[index].url}
                    alt="people"
                    width="100%"
                    height="300px"
                  />
                  <Card.Description style={{ height: "150px" }}>
                    <strong>Length</strong>
                    <p>{ship.length}</p>
                    <strong>Model</strong>
                    <p>{ship.model}</p>
                    <strong>Passengers</strong>
                    <p>{ship.passengers}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}

export default Ships;
