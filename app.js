// const Coffee = () => (
//   <li>coffee</li>
// )

// const Bagels = () => (
//   <li>bagels</li>
// )

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

///

// const GroceryList = (props) => {
//   const onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
//       <li>{props.groceryItems[1]}</li>
//     </ul>
//   );
// }

// const GroceryListItem = () => (
//   <GroceryList groceryItems={['coffee', 'bagels']}/>
// )

///

// const props = (groceryItems: ['coffee', 'bagels'])

// traditional "structured" way to write it:
// const GroceryListItem = (props) => (
//   <li>{props.groc}</li>
// )

// more common "destructured" way to write it
const GroceryListItem = ({groc}) => (
  <li>{groc}</li>
)

const GroceryList = () => {

  let groceryItems = ['coffee', 'bagels'];

  return (
  <ul>
    {groceryItems.map((groc) => (
      <GroceryListItem groc={groc} /> // setting up a props object, with key of groc. Could set up more properties. The first groc is the key, and the 2nd groc in curly braces is the variable
    ))}
  </ul>
  )
};

const App = () => (
  <div>Some cliche salutation
    <h2>Grocery List</h2>
    <GroceryList />
  </div>
)

ReactDOM.render(<App />, document.getElementById("app"));
