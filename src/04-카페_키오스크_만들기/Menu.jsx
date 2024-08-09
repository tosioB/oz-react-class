import { useState } from "react"
import Item from "./Item"
import OrderModal from "./OrderModal"

function Menu ({ menu, cart, setCart }) {
    if (!menu) return (<div style={{textAlign:"center", margin: '80px'}}> 메뉴 정보가 없어요!</div>)
    
    const [ modalOn, setModalOn ] = useState(false)
    const [ modalMenu, setModalMenu ] = useState(null)
    const categorys = Object.keys(menu)

    return (
        <>
          {
            categorys.map(category => {
              return (
                <section key={category}>
                  <h2>{category}</h2>
                  <ul className="menu">
                    {
                      // console.log(categorys) // [커피, 논커피]
                      // console.log(category) // 커피, 논커피
                      // console.log(menu[category]) // menu[category]가 왜 커피 리스트인지 모르겠음
                      menu[category].map((item) => { 
                        return (
                          <Item 
                            key={item.name} 
                            item={item} 
                            clickHandler={()=> { // 컴포넌트에서 clickHandler라는 함수 자체를 props로 직접 전달하는 방식 
                              /**
                               * 리액트에서는 <Item />와 같은 사용자 정의 컴포넌트에 직접적으로 
                               * onClick과 같은 HTML이벤트 핸들러를 전달 할 수 없다.
                               */
                              setModalMenu(item)
                              setModalOn(true)
                            }}
                          />
                        )
                      })
                    }
                  </ul>
                </section>
              )
            })
          }
          {
            modalOn ? 
            <OrderModal
              cart={cart}
              setCart={setCart}
              modalMenu={modalMenu} 
              setModalOn={setModalOn} 
            /> :
            null
          }
        </>
    )
}

export default Menu