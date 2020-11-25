import React from 'react'
import {Card, Grid} from 'semantic-ui-react'
import "./Planets.css"
function Planets({data}) {
    return (
       <> 
       <div className="title">Planets</div>
             <Grid stackable columns={4} style={{margin:"20px 0 40px 0",minHeight:"2100px"}}>
                 {data.map((planets, index) =>{
                     return (
                     <Grid.Column  key={index}>
                         <Card>
                             <Card.Content>
                                <Card.Content textAlign='center' style={{height:"40px", fontSize:"16px"}}>{planets.name}</Card.Content>
                                 <img style={{ padding:"10px 0"}} src = "https://i.imgur.com/Pi95o0m.jpg" alt="people" width="100%" height ="auto"/>
                                <Card.Description>
                                    <strong>Climate</strong>
                                    <p>{planets.climate}</p>
                                    <strong>Diameter</strong>
                                    <p>{planets.diameter}</p>
                                    <strong>Population</strong>
                                    <p>{planets.population}</p>
                                </Card.Description>
                             </Card.Content>
                         </Card>
                     </Grid.Column>)
                 })}
             </Grid>
        </>
    )
}

export default Planets

// https://i.pinimg.com/564x/e3/3d/9d/e33d9dee26ae96abb2a19bbb81e1ccba.jpg