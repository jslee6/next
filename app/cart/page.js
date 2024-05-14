'use client'
// 서버컴포넌트는 자바스크립트 못슴. 쓰기위해선 이게필요
// EX) 온클릭 유즈이펙트 같은거

// 클라이언트컴포넌트는 속도가 좀 느림 하이드레이션 필요

import {age, name} from './data.js'
import Hi from './data.js'
// 인포트 익스포트

export default function Cart() {
    let 장바구니 = ['Tomatoes', 'Pasta']

    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
        <Cartitem item={장바구니} ></Cartitem>
        
        {/* -> 장바구니 어레이변수를 가져옴 */}


        {/* 아래서 만든 카트아이템 컴포넌트 */}
       
        {/* props 사용방법

        1. 부모-> 자식  컴포넌트에 < 자식컴포넌트 = 작명= "데이터"/>
        2. 자식컴포넌트에서 함수에 (props
        3. 들어갈에 {props.작명} */}


      </div>
    )
  } 




  
  

//   컴포넌트만들기
// 1. Function 작명(){}
// 2. return ( 축약할 html)
// 3. <작명><작명/> 사용


// 카트아이템 컴포넌트
  function Cartitem(props){
    return (
        <div className="cart-item">
        <p>상품명 {props.item[0] }</p>
        <p>$40</p>
        <p>1개</p>
        {/* <Hi></Hi>
        샘플컴포넌트 cart 페이지에서 만듬 */}
   
    
      </div>
    )
  }


