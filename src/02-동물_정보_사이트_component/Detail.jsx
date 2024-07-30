import { data } from "../assets/create_screen_data/02-동물_정보_사이트_data"
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const animalData = data.find((e) => {return e.id === Number(params.id);});

  return (
    <>
      <section className="animal-detail-box">
        <span className="img-box">
          <img src={animalData.img} />
        </span>
        <div className="text-box">
          <h2>이름: {animalData.name}</h2>
          <div>상세정보: {animalData.description}</div>
        </div>
      </section>
    </>
  )
}

export default Detail;