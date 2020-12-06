import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "./People.css";
import Images from "./characters.json";

function People({ data }) {
  return (
    <>
      <div className="title">People</div>
      <Grid
        stackable
        columns={4}
        style={{ padding: "20px 0", minHeight: "2100px" }}
      >
        {data.map((person, index) => {
          return (
            <Grid.Column style={{ height: "fit-content" }} key={index}>
              <Card>
                <Card.Content>
                  <Card.Content
                    textAlign="center"
                    style={{
                      height: "40px",
                      fontSize: "16px",
                    }}
                  >
                    {person.name}
                  </Card.Content>
                  <img
                    style={{ padding: "10px 0" }}
                    src={Images[index].url}
                    alt="people"
                    width="100%"
                    height="300px"
                  />
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{person.height}</p>
                    <strong>Mass</strong>
                    <p>{person.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{person.hair_color}</p>
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

export default People;
