import CardList from "@/components/cardList";
import CategoryList from "@/components/categoryList";
import Featured from "@/components/featured";
import Menu from "@/components/menu";

const Home = () => {
  return (
    <>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </>
  );
};

export default Home;
