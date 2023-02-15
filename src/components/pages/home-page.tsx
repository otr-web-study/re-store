import BookList from "../book-list";
import SoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <section>
      <BookList />
      <SoppingCartTable />
    </section>
  );
};

export default HomePage;