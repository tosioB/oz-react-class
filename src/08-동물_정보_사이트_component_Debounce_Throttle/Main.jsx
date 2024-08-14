import { data } from "../assets/create_screen_data/08-동물_정보_사이트_data_Debounce_Throttle"
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      {/* <div>메인페이지</div> */}
      <ul className="animal-box">
        {
          data.map((e) => {
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

export default Main;