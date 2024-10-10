import React from 'react'

export default function Alert(props) {
  let capital = (word) => {
        return (word.toLowerCase().charAt(0).toUpperCase() + word.slice(1));
    }

  return (
    <div style={{height:'50px'}}>
      {
    props.prop && <div className={`alert alert-${props.prop.type} alert-dismissible fade show`} role="alert">
  <strong>{capital(props.prop.type)}</strong>: {props.prop.message}.
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
</div>
  )
}
