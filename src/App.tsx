import BookCount from "./components/bookCount";
import BookSearch from "./components/bookSearch";
import BookAdd from "./components/bookAdd";
import Header from "./components/header";
import BookShelf from "./components/bookShelf";

export default function App() {
  return (
    <div className="AppClass">
      <Header />
      <BookCount />
      <BookSearch />
      <BookAdd />
      <BookShelf />
    </div>
  );
}