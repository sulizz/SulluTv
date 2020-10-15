import React from 'react';
import Person from "@material-ui/icons/Person";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";
import MenuBook from "@material-ui/icons/MenuBook";
// import WhatshotIcon from '@material-ui/icons/Whatshot';
import { Link } from 'react-router-dom';

class NavBarItems extends React.Component {
    render () {
        return (
          <div>
            <a className="nav-bar-items" href="https://sulizz.github.io/">
              <Person className="home-icon" />
              <h1 className="home-icon"> Portfolio </h1>
            </a>
            <a
              className="nav-bar-items"
              href="https://www.linkedin.com/in/suliz-basnet-966170172/"
            >
              <LinkedIn className="home-icon" />
              <h1 className="home-icon"> Linkedin </h1>
            </a>
            <a className="nav-bar-items" href="https://github.com/sulizz">
              <Github className="home-icon" />
              <h1 className="home-icon"> Github </h1>
            </a>

            <a
              className="nav-bar-items"
              href="https://sulizz.github.io/assets/resume.pdf"
              target="blank"
            >
              <MenuBook className="home-icon" />
              <h1 className="home-icon"> Resume </h1>
            </a>
          </div>
        );
    }
}

export default NavBarItems;
