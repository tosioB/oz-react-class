import { contents } from "./assets/create_screen_data/03-유튜브_화면_만들기";
import Content from "./03-유튜브_화면_만들기/Content";
import Header from "./03-유튜브_화면_만들기//Header";
import Nav from "./03-유튜브_화면_만들기//Nav";
import Tab from "./03-유튜브_화면_만들기//Tab";
import "./assets/create_screen_css/03-유튜브_화면_만들기.scss";
import "./assets/create_screen_css/03-유튜브_화면_만들기.scss";

function App() {
  return (
    <>
    <div className="container">
      <Header />
      <Nav />
      <Tab />
      <main>
        {contents.map((el) => (
          <Content key={el.id} conten3t={el} />
        ))}
      </main>
    </div>
    </>
  );
}

export default App;
