import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar style={ { backgroundColor:'#D4D4D4'} }
    title="Bruce Wayner"
    iconElementLeft={<div></div>}
    iconElementRight={<div></div>}
  />
);

export default AppBarExampleIcon;
