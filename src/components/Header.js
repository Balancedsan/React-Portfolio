import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import { headerStyles } from '../styles/headerStyles';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Home, Person, Folder, ImageSearch } from '@material-ui/icons';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleOnChange = (event, newValue) => {
    this.setState({
      value: newValue
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.tool}>
          <Tabs
            value={this.state.value}
            onChange={this.handleOnChange}
            variant="scrollable"
            scrollButtons="on"
            classes={{ indicator: classes.indicator }}
          >
            <Tab icon={<Home />} label="Home" />
            <Tab icon={<Person />} label="About" />
            <Tab icon={<ImageSearch />} label="Skills" />
            <Tab icon={<Folder />} label="Projects" />
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(headerStyles)(Header);
