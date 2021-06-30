import React from 'react'

class Counter extends React.PureComponent {
  render() {
    console.log('Render Counter');

    const { count } = this.props;
    return (
      <div>
        <form>
          <p>Counter: {count}</p>
        </form>
      </div>
    )
  }
}

export default Counter
