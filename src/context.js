import React from "react";
import items from "./data";

const RoomContext = React.createContext();

function RoomProvider({ children }) {
  const [state, setState] = React.useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });

  // get data
  const formatData = (items) => {
    let tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };
  
  React.useEffect(() => {
    const rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true)
    setState({rooms, featuredRooms, sortedRooms: rooms, loading: false})
    console.log(rooms);
  }, []);

  const getRoom = slug => {
    const tempRooms = [...state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    console.log(room);
    return room;
  }

  return (
    <RoomContext.Provider value={{ ...state, getRoom }}>{children}</RoomContext.Provider>
  );
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomConsumer };
