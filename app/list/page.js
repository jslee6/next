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

      <span>{수량[0]}</span>
      <button onClick={()=>{ 
        let copy = [...수량]
        copy[0]++
        수량변경(copy)
       }}>+</button>

       
       {/* 스테이트 수량 개별
       -> 변수에 복사해서 사용 */}

      

       <span>{수량[1]}</span>
      <button onClick={()=>{ 
        let copy = [...수량]
        copy[1]++
        수량변경(copy)
       }}>+</button>

       <span>{수량[1]}</span>
      <button onClick={()=>{ 
        let copy = [...수량]
        copy[1]++
        수량변경(copy)
       }}>+</button>
       






      { 
        상품.map((a,i)=>{
          return ( 
            <div className="food" key={i}> 
              <img src={"/food"+[i]+".png"} className="food-img"/>  
              <h4>{ 상품[i] } $40 </h4>
              {/* <h4>{a} $40</h4>  */}
              {/* {상품[i]} 랑 {a} 랑같음 */}
                <span>{수량}</span>
              {/* 스팸태그 텍스트 그룹화 변경하거나 강조등 */}
            
             <span>{수량[i]}</span>

        
            
               
              {/* 스테이트 수량에 수량+1을 해주세요 */}
            </div>
          )
      }) }
    </div>
  )
}