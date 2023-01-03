const Coffee = () => (
  <li>coffee</li>
)

const Bagels = () => (
  <li>bagels</li>
)

const GroceryList = () => (
  <ul>
    <Coffee />
    <Bagels />
  </ul>
)

const App = () => (
  <div>Some cliche salutation
    <h2>Grocery List</h2>
    <GroceryList />
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));
