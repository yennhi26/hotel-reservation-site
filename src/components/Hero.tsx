import React from "react";

export const Hero = ({ children, hero = "defaultHero" }: React.PropsWithChildren<any>) => {
  return <header className={hero}>{children}</header>;
}
