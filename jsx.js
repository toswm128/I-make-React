const body = document.querySelector("body");
const createElement = Node => {
  const element = document.createElement(Node.type);
  Node.children.map(current => {
    const children = document.createElement(current.type);
    children.innerText = current.text;
    element.appendChild(children);
    console.log(element, children, Node.children);
  });
  body.appendChild(element);
};

const init = () => {
  createElement({
    type: "ul",
    props: { class: "class" },
    children: [
      { type: "li", props: { class: "content" }, text: "안녕" },
      { type: "li", props: { class: "content" }, text: "하하" },
      { type: "li", props: { class: "content" }, text: "저는" },
      { type: "li", props: { class: "content" }, text: "조민수" },
    ],
  });
};

init();
