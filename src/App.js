import Laptop from "./component/Laptop";
import Container from "./UI/Container";
import LaptopForm from "./component/LaptopForm";

function App() {
  const laptops = [
    {
      brand: "MacBook Pro 14-inch",
      description: "Silver M1/512GB/2021",
      date: new Date("2022-01-18"),
      price: 25080000,
    },
    {
      brand: "MacBook Pro 16-inch",
      description: "Silver M1/1024GB/2021",
      date: new Date("2022-02-28"),
      price: 32080000,
    },
    {
      brand: "MacBook Pro 14-inch",
      description: "Silver M1/1024GB/2021",
      date: new Date("2022-03-20"),
      price: 28080000,
    },
  ];

  return (
    <div className="App">
      <Container>
        <LaptopForm />
        <Laptop laptop={laptops[0]} />
        <Laptop laptop={laptops[1]} />
        <Laptop laptop={laptops[2]} />
      </Container>
    </div>
  );
}

export default App;
