export default function Home() {
  let name = 'park'
  let link = 'https://naver.com';
  return (
    <div>
    <h4 className="title">애플후레시</h4> 
    <h4 className="title" style={{ color : 'red', fontSize : '20px' }}>애플후레시</h4>
   {/* 첫번째는 css에 넣어서 클래스네임으로 넣음, 두번쨰는 스타일을 바로넣음, 
    콤마로 여러가지 스타일추가가능
    - 대시느,ㄴ 슬수없어서 카멜케이스로 씀 ex font-sze -> fontSize */}

    <p className="title-sub">by dev { name }</p>
    <a href={link}>링크</a>
  </div>
   
  
  );
}
