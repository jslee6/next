'use client'
import { useState } from 'react'

import Image from 'next/image' //없어도됨빠른 로딩시


export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let [수량, 수량변경] = useState([0,0,0]) 
  //이게스테이트 만들기,클라이언트 컴포넌트에서만 사용
  // 스테이트장점 : 스테이트 변경되면 관련 html 자동렌더링


  return (
    <div> 
      <h4 className="title">상품목록</h4>
   
       {/* 스테이트 수량 개별
       -> 변수에 복사해서 사용 */}

      { 
        상품.map((상품, i)=>{
          return ( 
            <div className="food" key={i}> 
              <img src={`/food${i}.png`} className="food-img" />  
              <h4>{상품} $40 </h4>
              <span>{수량[i]}</span>

              <button onClick={() => {
                let copy = [...수량]
                copy[i]++
                수량변경(copy)
              }}>
                +
                </button>

              <button onClick={() => {
                let copy = [...수량]
                copy[i]--
                수량변경(copy)
              }}>
                -
                </button>
              {/* 수량을 복사하고 copy[i]를 1씩 감소함 -> 수량변경에 저장  */}
            </div>
          )
      }) }
    </div>
  )
}