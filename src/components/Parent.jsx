// optimizing a react component using React.memo
// we should not optimize react components by default. we need to remember that
// optimization comes with costs asociated to its benefits, so it's worth
// considering if the benefits outweight the costs or if the react component that
// we need to optimize is going to be called many times.

import React, { useState } from 'react';

const Parent = React.memo(() => {
  console.log("Render Parent");

  const [count, setCount] = useState(1);
  const [canEdit, setCanEdit] = useState(true);

  const countPlusPlus = () => {
    console.log("Click to the counter button");
    setCount(count + 1);
  }

  const toggleCanEdit = () => {
    console.log("Click to the Can Edit Button");
    setCanEdit(!canEdit);
  }

  return (
    <>
      <button onClick={countPlusPlus}>Count + 1</button>
      <Counter count={count} />

      <button onClick={toggleCanEdit}>Toggle Can Edit</button>
      <Permissions canEdit={canEdit} />
    </>
  )
})

const Counter = React.memo(({ count }) => {
  console.log("Render Counter");

  return (
    <>
      <form>
        <p>Count: {count}</p>
      </form>
    </>
  )
})

const Permissions = React.memo(({ canEdit }) => {
  console.log("Render Permissions");

  return (
    <>
      <form>
        <p>El usuario {canEdit ? "" : "no"} puede editar...</p>
      </form>
    </>
  )
})

export default Parent
