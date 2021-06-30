import React from 'react'

class Permissions extends React.PureComponent {
  render() {
    console.log('Render Permissions');

    const { canEdit } = this.props;

    return (
      <div>
        <form>
          <p>El usuario {canEdit ? "" : "no"} puede editar...</p>
        </form>
      </div>
    )
  }
}

export default Permissions
