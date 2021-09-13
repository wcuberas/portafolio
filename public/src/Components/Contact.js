import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import '../css/Contact.css';
import fotoContact from './Images/FotoPerfil.jpeg'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Walter Cuberas</h2>
            <img style={{height: '300px'}} src={fotoContact} alt="fotoBuzo" />
          </Cell>
          <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list"> 
              <List>
                  <ListItem>
                      <ListItemContent className='lista'><i className="fa fa-phone-square" aria-hidden='true'></i>+54 3731 444330</ListItemContent>
                  </ListItem>
                  <ListItem >
                      <ListItemContent className='lista'><i className="fa fa-envelope" aria-hidden='true'></i>wcuberas@gmail.com</ListItemContent>
                  </ListItem>
              </List>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
