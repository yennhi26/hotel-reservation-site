import React, { useContext } from "react";
import { RoomContext } from "../context";
import { Loading } from "./Loading";
import { Title } from "./Title";
import Room from "./Room";

export const FeaturedRooms = () => {

  const context = useContext(RoomContext);
  console.log(context)
  const {
    rooms, loading
  } = context;
  const roomList = rooms?.map((room: any) => <Room room={room} key={room.id} />);
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomList}
      </div>
    </section>
  );
}
