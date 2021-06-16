import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AddIngredients from "../components/AddIngredients";
import Page from "../components/Page";

export default function HomePage() {
  return (
    <Page>
      <Header />
      <Navigation />
      <AddIngredients />
    </Page>
  );
}
