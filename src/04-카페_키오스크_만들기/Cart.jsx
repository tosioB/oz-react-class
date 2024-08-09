import data from "../assets/create_screen_data/04-카페_키오스크_만들기"

function Cart ({menu, cart, setCart}) {
  if (!menu) return (<div style={{textAlign:"center", margin: '80px'}}> 메뉴 정보가 없어요!</div>)
  const allMenus = [...menu.커피, ...menu.논커피]

  /** console.log(allMenus)
   * {id: 0, name: '아메리카노', description: '에스프레소에 물을 섞은 커피', price: 3500, img: '/src/assets/create_screen_image/04-%EC%B9%B4%ED%8E…D%81%AC_%EB%A7%8C%EB%93%A4%EA%B8%B0/americano.png'}
   * {id: 1, name: '카페라떼', description: '에스프레소에 우유을 섞은 커피', price: 4000, img: '/src/assets/create_screen_image/04-%EC%B9%B4%ED%8E…D%81%AC_%EB%A7%8C%EB%93%A4%EA%B8%B0/cafelatte.png'}
   * {id: 2, name: '바닐라라떼', description: '에스프레소에 우유와 바닐라 시럽을 넣은 커피', price: 4200, img: '/src/assets/create_screen_image/04-%EC%B9%B4%ED%8E…1%AC_%EB%A7%8C%EB%93%A4%EA%B8%B0/vanillalatte.png'}
   * {id: 3, name: '카페모카', description: '에스프레소에 우유와 초콜릿 시럽을 넣은 커피', price: 4500, img: '/src/assets/create_screen_image/04-%EC%B9%B4%ED%8E…D%81%AC_%EB%A7%8C%EB%93%A4%EA%B8%B0/cafemocha.png'}
   * {id: 4, name: '초코라떼', description: '우유에 초콜렛이 듬뿍', price: 4800, img: '/src/assets/create_screen_image/04-%EC%B9%B4%ED%8E…A4%ED%81%AC_%EB%A7%8C%EB%93%A4%EA%B8%B0/choco.png'}
   * {id: 5, name: '딸기라떼', description: '우유에 딸기가 듬뿍', price: 5500, img: '/src/assets/create_screen_image/04-%EC%B9%B4%ED%8E…%81%AC_%EB%A7%8C%EB%93%A4%EA%B8%B0/strawberry.png'}
   * {id: 6, name: '바나나라떼', description: '우유에 바나나가 듬뿍', price: 5000, img: '/src/assets/create_screen_image/04-%EC%B9%B4%ED%8E…4%ED%81%AC_%EB%A7%8C%EB%93%A4%EA%B8%B0/banana.png'}
   * {id: 7, name: '녹차라떼', description: '우유에 녹차가 듬뿍', price: 5200, img: '/src/assets/create_screen_image/04-%EC%B9%B4%ED%8E…ED%81%AC_%EB%A7%8C%EB%93%A4%EA%B8%B0/greentea.png'}
   */

  return (
    <>
      <h2>장바구니</h2>
      <ul className="cart">
        {
          // console.log(cart?.length)
          cart?.length ? cart.map(el => // cart?.length - cart?.length가 존재하면...(옵셔널체이닝 문법)
            // console.log(el) // 장바구니에 담긴 메뉴의 객체값
            // console.log(el.options) // 장바구니에 담긴 메뉴의 options값(옵션)
            // console.log(el.quantity) // 장바구니에 담긴 메뉴의 quantity값(수량)

            /** console.log(allMenus.find(menu => menu.id === el.id))
             * allMenus의 id값과 장바구니에 담긴 메뉴의 id값을 비교해
             * 같은 id를 가진 값을 반환
            */
          
            <CartItem 
              key={el.id} 
              item={allMenus.find(menu => menu.id === el.id)}
              options={el.options} 
              quantity={el.quantity}
              cart={cart}
              setCart={setCart}
            />
          )
          :
          <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
        }
      </ul>
    </>
  )
}

function CartItem ({item, options, quantity, cart, setCart}) {
    return (
      <li className='cart-item'>
        <div className="cart-item-info">
          <img height={100} src={item.img} />
          <div>{item.name}</div>
        </div>
        <div className="cart-item-option">
          {
            Object.keys(options).map(el => 
              // console.log(el) //온도, 진하기, 사이즈
              // console.log(data.options[el])
              // console.log(options[el])
              <div>
                {el}
                :
                {data.options[el][options[el]]}
              </div>
            )
          }
          <div>개수 : {quantity}</div>
        </div>
        <button className="cart-item-delete" onClick={() => {
          setCart(cart.filter(el => el.id !== item.id))
        }}>삭제</button>
      </li>
    )
}
export default Cart