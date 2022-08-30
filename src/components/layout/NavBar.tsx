import React from "react";

const NavBar = (props) => {
    return (
        <div className="nav-top">
            <a href={props.links[1]} >Option 1</a>
            <a href={props.links[2]} >  Option 2</a>
            <a href={props.links[3]} >Option 3</a>
            <a href={props.links[1]} >Option 3</a>
        </div>
    );
}

export default NavBar;