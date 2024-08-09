import { useState } from "react";
import data from "../assets/create_screen_data/04-카페_키오스크_만들기";

function OrderModal({ modalMenu, setModalOn, cart, setCart }) {
  const [options, setOptions] = useState({ 온도: 0, 진하기: 0, 사이즈: 0 });
  const [quantity, setQuantity] = useState(1);
  const itemOptions = data.options;

  // console.log(modalMenu)
  // console.log(itemOptions)

  return (
    <>
      {
        modalMenu ? 
        (<section className="modal-backdrop" onClick={() => setModalOn(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-item">
              <img src={modalMenu.img} />
              <div>
                <h3>{modalMenu.name}</h3>
                <div>{modalMenu.description}</div>
              </div>
            </div>
            <ul className="options">
              {
                Object.keys(itemOptions).map((el) => (
                  // console.log(el) // 온도, 진하기, 사이즈
                  /** console.log(itemOptions[el])
                   * ['HOT', 'ICE']
                   * ['연하게', '보통', '진하게']
                   * ['Small', 'Medium', 'Large']
                  */
                  <Option
                    key={el}
                    options={options}
                    setOptions={setOptions}
                    name={el}
                    itemOptions={itemOptions[el]}
                  />
                ))
              }
            </ul>
            <div className="submit">
              <div>
                <label htmlFor="count">개수</label>
                <input
                  id="count"
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(event) => setQuantity(Number(event.target.value))}
                />
              </div>
              <button
                onClick={() => {
                  setCart([...cart, {quantity, options, id: modalMenu.id}])
                  setModalOn(false);
                }}
              >
                장바구니 넣기
              </button>
            </div>
          </div>
        </section>) : null
      }
    </>
  );
}

function Option({ name, options, setOptions, itemOptions }) {
  return (
    <li className="option">
      {name}
      <ul>
        {
          itemOptions.map((option, idx) => (
            <li key={option}>
              <input
                type="radio"
                name={name}
                checked={options[name] === idx}
                onChange={() => setOptions({ ...options, [name]: idx })}
              />
              {option}
            </li>
          ))
        }
      </ul>
    </li>
  );
}

export default OrderModal;
