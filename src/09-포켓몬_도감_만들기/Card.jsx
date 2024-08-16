import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = ({ pokemon }) => {
  const navigate = useNavigate()
  return (
    <CardContainer onClick={() => {navigate(`/Detail/${pokemon.id}`)}}>
      <img src={pokemon.front} alt={pokemon.name} />
      <div>{pokemon.name}</div>
    </CardContainer>
  )
}

export default Card;

const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 150px;
  padding: 8px;
  background-color: #FFF;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
`