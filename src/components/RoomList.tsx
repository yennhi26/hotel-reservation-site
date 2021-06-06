import React from "react";
import Room from "../components/Room";

export default function RoomsList({ rooms }: any) {

  if (!rooms.length)
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item: any) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
