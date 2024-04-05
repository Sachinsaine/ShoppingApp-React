import { Hero } from "../components/Hero/Hero";
import { NewCollection } from "../components/NewCollection/NewCollection";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";
import { Offer } from "../components/Offer/Offer";
import { Popular } from "../components/Popular/Popular";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};
