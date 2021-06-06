import React from "react";

type Props = {
  title: string;
  subTitle?: string;
}

export const Banner = ({ children, title, subTitle }: React.PropsWithChildren<Props>) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subTitle}</p>
      {children}
    </div>
  );
}
