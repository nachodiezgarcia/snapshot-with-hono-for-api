import type { HomeSectionVm } from "./home.vm";

interface HomeProps {
  content: HomeSectionVm;
}

export const Home: React.FC<HomeProps> = ({ content }) => {
  return (
    <div>
      <h1>{content.mainText}</h1>
    </div>
  );
};