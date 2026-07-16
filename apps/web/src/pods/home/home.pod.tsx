import type { FC } from "react";
import type { HomeSectionVm } from "./home.vm";

interface HomeProps {
  content: HomeSectionVm;
}

export const Home: FC<HomeProps> = ({ content }) => {
  return (
    <div>
      <h1>{content.mainText}</h1>
    </div>
  );
};