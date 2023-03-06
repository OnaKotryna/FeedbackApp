import Header from "./components/Header";

function App() {
  const title = "Skrr pa pa";
  return (
    <>
      <Header />
      <div className="container">
        <h1>{title.toLocaleUpperCase()}</h1>
        <p>:)</p>
      </div>
    </>
  );
}

export default App;
