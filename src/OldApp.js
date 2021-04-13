import { Component } from "react";
import "./App.css";
import ListStudent from "./components/ListStudent";
// import Welcome from "./components/Welcome";

// B A S I C - R E A C T 1
// const App = () => {
//   const student1 = "John";

//   return (
//     <>
//       <h1>Hello World</h1>
//       <h3>Welcome {student1}</h3>
//       <h3>Welcome {student1}</h3>
//       <h3>Welcome {student1}</h3>
//     </>
//   )
// };

// class App extends Component{
//   render() {
//     return (  
//     <>
//       <h1>Hello World</h1>
//       <Welcome />
//       <Welcome />
//       <Welcome />
//     </>
//     );
//   }
// }

// B A S I C - R E A C T 2
class App extends Component{
  state = {
    isShow: false,
  };

  toggleButton = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    const backend = [
      {
        name: 'John',
        address: 'Manado',
      },
      {
        name: 'Jane',
        address: 'Airmadidi',
      },
      {
        name: 'Bob',
        address: 'Tondano',
      },
    ];

    const webProgramming = [
      {
        name: 'Smith',
        address: 'Manado',
      },
      {
        name: 'Peter',
        address: 'Airmadidi',
      },
      {
        name: 'Mayrra',
        address: 'Tondano',
      },
    ];

    return (  
    <>
    {this.state.isShow && (
            <ListStudent title="Back-end Programming Class" student={backend} />
    )}
      {/* <ListStudent title="Web Programming Class" student={webProgramming} /> */}
      <button onClick={this.toggleButton}>Toggle List Student</button>
    </>
    );
  }
}

export default App;
