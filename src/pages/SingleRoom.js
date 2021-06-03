import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import defaultBg from "../images/room-1.jpeg";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link className="btn-primary" to="/rooms">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <Hero className="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
}
// import React from 'react'
// import Hero from "../components/Hero";
// import Banner from "../components/Banner";
// import { Link } from "react-router-dom";
// import { RoomContext } from "../context";
// import defaultBg from '../images/room-1.jpeg';

// export default function SingleRoom({props}) {
//   console.log(this.props);
//   return (
//     <div>
//       Hello from Single room
//     </div>
//   )
// }
