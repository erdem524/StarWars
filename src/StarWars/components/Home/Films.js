import React, { useState, useEffect } from "react";
import { Segment, Grid, Image } from "semantic-ui-react";
import Img from "./img.json";
function Films() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Grid stackable columns={3}>
        {items.map((item, index) => (
          <Grid.Column
            style={{
              color: "black",
            }}
            key={item.episode_id}
          >
            <Segment
              raised
              inverted
              textAlign="center"
              style={{ height: "60px", fontSize: "16px", marginTop: "50px" }}
            >
              {item.title}{" "}
            </Segment>
            <div class="ui move reveal">
              <div class="visible content">
                <Image
                  src={Img[index].url}
                  class="ui large image"
                  alt="poster"
                  height="420px"
                  width="100%"
                />
              </div>
              <div className="hidden content">
                <Segment>
                  <Segment
                    piled
                    textAlign="center"
                    style={{ marginBottom: "5px" }}
                  >
                    {item.title}
                  </Segment>
                  <Segment
                    style={{ padding: "7px 0" }}
                    vertical
                    className="opening-crawl"
                  >
                    {item.opening_crawl}
                  </Segment>
                  <Segment vertical>Director: {item.director}</Segment>
                  <Segment vertical>Producer: {item.producer}</Segment>
                  <Segment vertical>Released: {item.release_date}</Segment>
                </Segment>
              </div>
            </div>
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default Films;

// ${Img[index].url}
