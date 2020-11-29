import React, { useState } from "react";
import { Card, Grid, Input } from "semantic-ui-react";
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
                    src="https://i.pinimg.com/originals/96/bf/bd/96bfbda81e65ed260074ee0054ec1334.gif"
                    alt="people"
                    width="100%"
                    height="auto"
                  />
                  <Card.Description style={{ height: "150px" }}>
                    <strong>Length</strong>
                    <p>{ship.length}</p>
                    <strong>Films</strong>
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
