import { data } from "../assets/create_screen_data/08-동물_정보_사이트_data_Debounce_Throttle"
import { Link, useSearchParams } from "react-router-dom";
import { getRegExp } from "korean-regexp";
import { useEffect, useState, useRef } from "react";

// ----------------------------- Debounce ----------------------------- //
// function Search() {
//   const [searchParams] = useSearchParams();
//   const [filteredData, setFilteredData] = useState(data);
//   const param = searchParams.get('animal');
//   const reg = getRegExp(param); // param에서 받아온 검색어를 전달 / 검색어를 기반으로 정규식을 표현

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => {
//       const newFilteredData = data.filter((e) => {return e.name.match(reg)});
//       setFilteredData(newFilteredData);
//     }, 1000);
//     return () => clearTimeout(debounceTimer);
//   }, [param]);

//   return (
//     <>
//       <ul className="animal-box">
//         {
//           filteredData.map((e) => {
//             return (
//               <li key={e.id}>
//                 <Link to={`/detail/${e.id}`}>
//                   <span className="img-box">
//                     <img src={e.img} />
//                   </span>
//                   <div className="name">{e.name}</div>
//                 </Link>
//               </li>
//             )
//           })
//         }
//       </ul>
//     </>
//   )
// }

// ----------------------------- Throttle ----------------------------- //
function Search() {
  const [searchParams] = useSearchParams();
  const [filteredData, setFilteredData] = useState(data);
  const param = searchParams.get('animal');
  const reg = getRegExp(param);
  const time = useRef(new Date());

  useEffect(() => {
    const newTime = new Date();

    const throttleTimer = setTimeout(() => {
      const newFilteredData = data.filter((e) => {return e.name.match(reg)});
      setFilteredData(newFilteredData);
      time.current = new Date();
    }, 1000 - (newTime - time.current));

    return () => clearTimeout(throttleTimer);
  }, [param])

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