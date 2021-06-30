import React from 'react';
import Counter from "./Counter";
import Permissions from "./Permissions";

class Parent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { count: 1, canEdit: true };
  }

  render() {
    console.log("Render Parent");

    const toggleCanEdit = () => {
      console.log('click al boton de toggleCanEdit');
      this.setState(({ canEdit: oldCanEdit }) => {
        return { canEdit: !oldCanEdit };
      });
    };

    const countPlusPlus = () => {
      console.log('Click al boton counter');

      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    return (
      <div>
        <>
          <button onClick={countPlusPlus}>Counter + 1</button>
          <Counter count={this.state.count}/>

          <button onClick={toggleCanEdit}>Toggle Can Edit</button>
          <Permissions canEdit={this.state.canEdit} />
        </>
      </div>
    )
  }
}

export default Parent
