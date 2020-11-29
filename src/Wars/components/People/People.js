import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "./People.css";
function People({ data }) {
  return (
    <>
      <div className="title">People</div>
      <Grid
        stackable
        columns={4}
        style={{ padding: "20px 0 40px 0", minHeight: "2100px" }}
      >
        {data.map((person, index) => {
          return (
            <Grid.Column key={index}>
              <Card>
                <Card.Content>
                  <Card.Content
                    textAlign="center"
                    style={{ height: "40px", fontSize: "16px" }}
                  >
                    {person.name}
                  </Card.Content>
                  <img
                    style={{ padding: "10px 0" }}
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ffdc5e90601171.5e1c27d79a475.jpg"
                    alt="people"
                    width="100%"
                    height="auto"
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
