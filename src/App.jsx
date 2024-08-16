import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMultiplepokemonById } from "./redux/09-포켓몬_도감_만들기/thunk";
import { Route, Routes, Link } from "react-router-dom";
import Main from "./09-포켓몬_도감_만들기/Main";
import Detail from "./09-포켓몬_도감_만들기/Detail";
import Search from "./09-포켓몬_도감_만들기/Search";
import Favorite from "./09-포켓몬_도감_만들기/Favorite";
import './assets/create_screen_css/09-포켓몬_도감_만들기.scss'

function App() {
  const dispatch = useDispatch();
  const pokemonData = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(fetchMultiplepokemonById(151))
  }, [])

  return (
    <>
      <div className="pokemon">
        <h1 className="main-title">포켓몬 도감</h1>

        <nav className="link">
          <Link to={"/"}>메인</Link>
          <Link to={"/Detail/1"}>상세정보</Link>
          <Link to={"/Search"}>검색</Link>
          <Link to={"/Favorite"}>찜목록</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Detail/:pokemonId" element={<Detail />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </div>
    </>
  )
}
export default App

/** 포켓몬 도감 만들기
 * 1. 포켓몬 정도는 pokeapi.co에서 받아와서 표시
 * 2. 다음 중 최소 2개의 페이지를 만드세요.
 *   2-1)Main - 전체 포켓몬 리스트를 표시합니다.
 *   2-2)Detail - 포켓몬 상세 정보를 표시합니다.
 *   2-3)Favorite - 찜한 포켓몬 리스트를 표시합니다.
 *   2-4)Search - 포켓몬 검색 결과 리스트를 표시합니다.
 * 3.  Context API , Redux, RTK 등 전역 상태 관리 도구를 사용하세요.
 * 4. Styled-Components, Tailwind CSS 등 스타일링 도구를 사용하세요.
 * 5. 최적화를 진행해 보세요.
 */