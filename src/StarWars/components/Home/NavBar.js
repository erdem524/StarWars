import React from 'react'
import {Menu,Container} from 'semantic-ui-react'
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <Menu inverted>
            <Container>
                <Link to="/">
                    <Menu.Item name="Star Wars Films"/> 
                </Link>
                <Link to="/people">
                    <Menu.Item name="people"/>  
                </Link>
                <Link to="/planets">
                    <Menu.Item name="planets"/> 
                </Link>
                <Link to="/ships">
                    <Menu.Item name="ships"/> 
                </Link>
            </Container>          
        </Menu>
    )
}

export default NavBar
