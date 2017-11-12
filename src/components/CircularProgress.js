import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default class CircularProgressExampleDeterminate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  render() {
    return (
      <div>
        <CircularProgress
          mode="determinate"
          value={this.state.completed}
          size={60}
          thickness={7}
        />
      </div>
    );
  }
}
