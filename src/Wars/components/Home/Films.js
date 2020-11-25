
import React, { useState, useEffect } from 'react';
import {Segment,Grid,Image} from 'semantic-ui-react'
import Img from "./img.json"
function Films() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
          console.log(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  console.log(`wewe`,Img.episode_id)
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
  <Grid>
    <Grid.Row columns={3} className="mediaQ">
{items.map(item => 
      <Grid.Column key={item.episode_id}>
        <Segment raised inverted textAlign='center' style={{height:"60px", fontSize:"16px",marginTop:"50px"}}>{item.title} </Segment>
            <div class="ui move reveal">
                <div class="visible content">
                    <Image  src="https://i.pinimg.com/564x/40/8f/9c/408f9cbce12f9d9adeb6b5638c9e2475.jpg"  class="ui large image" alt="poster"/>
                </div>
                <div class="hidden content">
                      <Segment style={{color:"black"}}>
                          <Segment piled textAlign='center'>{item.title}</Segment>
                          <Segment vertical style={{textAlign: 'justify', textIndent: "20px"}}>{item.opening_crawl}</Segment>
                          <Segment vertical>Director: {item.director}</Segment >
                          <Segment vertical>Producer: {item.producer}</Segment >
                          <Segment vertical>Released: {item.release_date}</Segment>
                      </Segment>
                </div>
            </div>
        </Grid.Column>)} 
    </Grid.Row>
</Grid>
    
    );
  }
}

export default Films
