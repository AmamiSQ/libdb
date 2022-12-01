import BookCount from "./components/bookCount";
import BookSearch from "./components/bookSearch";
import BookAdd from "./components/bookAdd";

export default function App() {
  return (
    <div className="App">
      <BookCount />
      <BookSearch />
      <BookAdd />
      <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg" alt="bleh"/>
    </div>
  );
}
