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


// traditional "structured" way to write it:
// const GroceryListItem = (props) => (
//   <li>{props.grocery}</li>
// )

// more common "destructured" way to write it
const GroceryListItem = ({ grocery }) => {
  const [isCrossed, setIsCrossed] = React.useState(false); // means that it is false that it "is crossed" the first time - the initial value
  const [isBold, setIsBold] = React.useState(false);

  const style = {
    textDecoration: isCrossed ? 'line-through' : 'none',
    fontWeight: isBold ? 'bold' : 'normal'
  }
  return <li
           style={style}
           onClick={() => setIsCrossed(!isCrossed)}
           onMouseEnter={() => setIsBold(true)}
           onMouseLeave={() => setIsBold(false)}
        >
          {grocery}
          </li>
}


const GroceryList = (props) => {
  const { items } = props;
  return (
  <ul>
    {items.map((item) => (
      <GroceryListItem grocery={item} /> // setting up a props object, with key of groc. Could set up more properties. The first groc is the key, and the 2nd groc in curly braces is the variable. If I added GroceryListItem color={red} for example, then color would be another key on props.
    ))}
  </ul>
  )
};

const App = () => {
  let groceryItems = ['coffee', 'bagels', 'funyuns', 'chocolate'];
  return (
    <div>Some cliche salutation
      <h2>Grocery List</h2>
      <GroceryList items={groceryItems}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
