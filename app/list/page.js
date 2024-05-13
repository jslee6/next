import Image from 'next/image' //없어도됨빠른 로딩시


export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  return (
    <div> 
      <h4 className="title">상품목록</h4>
      { 
        상품.map((a,i)=>{
          return ( 
            <div className="food" key={i}> 
              <img src={"/food"+[i]+".png"} className="food-img"/>  
              <h4>{ 상품[i] } $40 </h4>
              {/* <h4>{a} $40</h4>  */}
              {/* {상품[i]} 랑 {a} 랑같음 */}
            </div>
          )
      }) }
    </div>
  )
}