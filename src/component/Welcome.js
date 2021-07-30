import ProductItem from "../ProductItem";

function Welcome(props) {
  return <div>Hello World of React. My first React Project</div>;
}

function Greeting(props) {
  return <div>Hello </div>;
}

const PI = 3.14;

function MyComponent(props) {
  return (
    <div>
      This is My Component
      <ProductItem />
    </div>
  );
}

export { Welcome, Greeting, PI };
export default MyComponent; // export default มีได้ตัวเดียว
