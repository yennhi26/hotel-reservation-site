import React from "react";
import { RoomsFilter } from "./RoomFilter";
import RoomsList from "./RoomList";
import { withRoomConsumer } from "../context";
import { Loading } from "./Loading";

const RoomsContainer = ({ context }: any) => {
  const { loading, rooms, sortedRooms } = context;
  if (loading) return <Loading />;
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);
