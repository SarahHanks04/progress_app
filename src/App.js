import logo from './logo.svg';
import './App.css';


function App() {
  
  let a = ["Sarah ", "Wura ", "Toheeb ", "Muyiwa"];

  let alternative = [
    { id: 1, name: "Item 1" },
    { id: 4, name: "item 4" },
    { id: 3, name: "item 3" },
    { id: 2, name: "item 2" },
  ];

  let assignment = [
    {
      id: 1,
      type: [
        { food: "Beans" },
        { food: "Rice" },
        { food: "Yam" },
        { food: "Fufu" },
      ],
    },

    {
      id: 2,
      type: [
        { car: "Benz" },
        { car: "Toyota" },
        { car: "BMW" },
        { car: "Ford" },
      ],
    },

    {
      id: 3,
      type: [
        { system: "Mac" },
        { system: "Hp" },
        { system: "Dell" },
        { system: "Lenovo" },
      ],
    },
  ];
  return (
    <div className='container'>
      {/* {a.map((item) => (
        <span>{item}</span>
      ))} */}

      {/* {alternative.map((values) => (
        <div>
          <div>{values.id}</div>
          <div>{values.name}</div>
        </div>
      ))}  */}


      
      {assignment.map((items) => (

        <div className='assignment'>
  
          <div className='item-id'>{items.id!==1? items.id!==2?"System":"Car":"Food"}</div>

          <ul className='items'>
            {items.type.map((subItem, index) => (
              <li className='subitems' key={index}>
                {subItem.food}
                {subItem.car}
                {subItem.system}
              </li>
            ))}
          </ul>

        </div>

      ))}

      
    </div>
  );
}

export default App;
