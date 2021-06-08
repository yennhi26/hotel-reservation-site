import React, { useContext } from "react";
import { RoomContext } from "../context";
import { Loading } from "./Loading";
import { Title } from "./Title";
import Room from "./Room";

export const FeaturedRooms = () => {

  const context = useContext(RoomContext);
  const {
    rooms, loading
  } = context;
  const featuredRooms = rooms.filter((room: any) => room.featured === true)
  const roomList = featuredRooms?.map((room: any) => <Room room={room} key={room.id} />);
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomList}
      </div>
    </section>
  );
}
