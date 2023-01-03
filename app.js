const Coffee = () => (
  <li>coffee</li>
)

const Bagels = () => (
  <li>bagels</li>
)

// const GroceryList = () => (
//   <ul>
//     <Coffee />
//     <Bagels />
//   </ul>
// )

// const GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// )
const GroceryList = (props) => {
  const onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
      <li>{props.groceryItems[1]}</li>
    </ul>
  );
}

const GroceryListItem = () => (
  <GroceryList groceryItems={['coffee', 'bagels']}/>
)

const App = () => (
  <div>Some cliche salutation
    <h2>Grocery List</h2>
    <GroceryListItem />
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));
