import "./styles.css";
import useUpdate from "./UseUpdate";

export default function App() {
  const update = useUpdate();
  console.log("re-rendering");

  return (
    <div className="App">
      <button onClick={update}> Update UI</button>
      <label>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        expedita distinctio ipsam possimus magni eveniet dicta vero consequatur
        maxime delectus adipisci dolores aliquam repellendus, facilis maiores
        saepe, dolorum nulla officia.
      </label>
    </div>
  );
}
