// 페이지분할

let age = 20;
let name = 'kim';

export {age, name}


//   컴포넌트만들기
// 1. Function 작명(){}
// 2. return ( 축약할 html)
// 3. <작명><작명/> 사용

function Hi(){
    return (
        <div>
        <h1>안녕하세요</h1>
      </div>
    )
  }

  export default Hi;
