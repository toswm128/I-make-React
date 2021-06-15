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

function App() {
  return (
    <div>
      <div>
        <h1>안녕</h1>
      </div>
      <ul>
        <li>이것이</li>
        <li>바로</li>
        <li>JSX</li>
      </ul>
    </div>
  );
}

render(<App />, document.getElementById("root"));
