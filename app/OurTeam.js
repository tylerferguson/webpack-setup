import React, { Component } from 'react';

class OurTeam extends Component {
  state = {
    team: [],
  };

  componentDidMount() {
    this.getTeam().then(({ team }) => {
      this.setState({
        team,
      });
    });
  }

  getTeam = () => fetch('/team').then((res) => res.json());

  render() {
    return (
      <ul>
        {this.state.team.map((member) => <li>{member.name}</li>)}
      </ul>
    );
  }
}

export default OurTeam;
