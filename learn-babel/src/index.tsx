const App = () => {
  return <h1>Hello, world!</h1>;
};

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);
root.render(<App />);
