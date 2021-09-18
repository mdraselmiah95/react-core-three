import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h3>Load Comment</h3>
      {comments.map((comment) => (
        <Comment title={comment.title} body={comment.body}></Comment>
      ))}
    </div>
  );
}

function Comment(props) {
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseNumber = () => setCount(count + 1);
  const decreaseNumber = () => setCount(count - 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseNumber}>INCREASE</button>
      <button onClick={decreaseNumber}>DECREASE</button>
    </div>
  );
}

export default App;
