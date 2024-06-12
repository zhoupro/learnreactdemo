import { useState } from 'react';

// 组件任意一个状态发生变化，都会引起整个组件进行重新渲染。
// 而useState的set函数会引起整个组件重新渲染。
// useState 状态是静态的，重新 render的时候，会将状态进行同步。　
// 类似与 static 变量。
export default function Gallery() {
  const [index, setIndex] = useState(0);
  alert(index)

  function handleNextClick() {
    setIndex(index + 1);
  }

  function test(){
    alert("a")
  }
  test()

  return (
    <>
      <button onClick={handleNextClick}>
        {index}
      </button>
    </>
  );
}


