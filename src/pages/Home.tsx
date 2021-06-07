import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { FeaturedRooms } from "../components/FeaturedRooms";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

export const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subTitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
