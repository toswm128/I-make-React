/** @jsx createElement */

//
function createElement(type, props = {}, ...children) {
  // type이 funtion인 경우 예외 처리
  if (typeof type === "function") {
    return type.apply(null, [props, ...children]);
  }

  return { type, props, children };
}

//이 함수는 render 함수에서 사용된다.
//버츄얼 돔을 받아서 리얼 돔으로 만들어주는 역할
const renderElement = Node => {
  //태그가 아니라 텍스트라면 따로 텍스트로 뗴어 리턴 (자식이 없어 재귀 할 필요 없음)
  if (typeof Node === "string") {
    return document.createTextNode(Node);
  }
  const el = document.createElement(Node.type);
  if (Node.props.src) {
    el.src = Node.props.src;
  }
  // 재귀 해서 자식의 자식까지 엘리먼트를 만들어준다
  Node.children.map(renderElement).forEach(element => {
    //forEach함수로 각각의 자식을 그 부모의 자식으로 위치시킨다
    el.appendChild(element);
  });
  return el;
};

//최종적으로 버추얼DOM을 리얼DOM으로 이동시켜 랜더링 최소화 (이전의 작업들은 자바스크립트 내에서 이루어 지기 때문에 랜더링 되지않음)
const render = (DOM, root) => {
  console.log(DOM);
  root.appendChild(renderElement(DOM));
};

const background = [
  "https://cdn.discordapp.com/attachments/676942969710051360/853799693238534144/ab0b164fd8c516bc.gif",
  "https://w.namu.la/s/32d07783a93f968dd7fadae25f254c6e1135dc3d09285bb48785cc798096aa1667c53945035397ffa3d28a233788d7f032d218dd2af5e8b703bccd7a11d5c34cd9a6d3aa13831d227b495673a9db9297fa2852af59e834a4811e3c75bd5dffd8",
  "https://img.hankyung.com/photo/201808/03.17543429.1.jpg",
  "https://img.insight.co.kr/static/2019/01/31/700/18nd52ajs5z4750u7p6f.jpg",
  "http://ojsfile.ohmynews.com/STD_IMG_FILE/2020/0130/IE002597642_STD.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3FDg9Q7JRnV2SGsvXhRJyafXFWZKatrUHg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs52rnezs7eGzT8hxJkEHhtHivFzOh03XPYz1i_xOvIZaDR2bMmyU0IHYXMQlYNhTdg_I&usqp=CAU",
  "https://image.musinsa.com/mfile_s01/2020/02/07/f99687dd719c4e8bc6a39e946c3d9ef7114955.jpg",
  "https://pbs.twimg.com/media/EQJGuF9U0AEB3QG.jpg",
  "https://media.discordapp.net/attachments/676942969710051360/853822425614254100/0662f3d46bf89a438289c8d56615c29567af2395.gif",
  "https://media.discordapp.net/attachments/676942969710051360/853828865939210260/2d3d928f40bebeafb24185adab9206e5e790ba4a_re_1621692482933.gif",
];

function App() {
  return (
    <div src>
      <div src>
        <h1 src>안녕</h1>
      </div>
      <ul src>
        <li src>이것이</li>
        <li src>바로</li>
        <li src>JSX</li>
        <button src>아년ㅇ</button>
        <img src={background[0]}>aa</img>
      </ul>
    </div>
  );
}

render(<App />, document.getElementById("root"));
