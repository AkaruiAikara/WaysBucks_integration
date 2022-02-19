import Jumbotron from "../../components/Jumbotron";
import ListProducts from "../../components/ListProducts";

export default function Home() {
  return (
    <div className="mx-10 lg:mx-0">
      <Jumbotron />
      <ListProducts />
    </div>
  );
}
