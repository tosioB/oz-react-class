import { data } from "../assets/create_screen_data/02-동물_정보_사이트_data"
import { Link, useSearchParams } from "react-router-dom";
import { getRegExp } from "korean-regexp";

function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get('animal');
  const reg = getRegExp(param); // param에서 받아온 검색어를 전달 / 검색어를 기반으로 정규식을 표현

  const filteredData = data.filter((e) => {return e.name.match(reg)}); // 문자열과 정규식이 잘 맞는지 match
  console.log(filteredData)

  return (
    <>
      <ul className="animal-box">
        {
          filteredData.map((e) => {
            return (
              <li key={e.id}>
                <Link to={`/detail/${e.id}`}>
                  <span className="img-box">
                    <img src={e.img} />
                  </span>
                  <div className="name">{e.name}</div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Search;

// korean-regexp - 검색 라이브러리
// 설치 - npm i korean-regexp