export default function (props) {
  switch (props.type) {
    case 'checkbox':
      return (
        <input
          type={props.type}
          checked={props.checked}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      )
    default:
      return (
        <input
          type={props.type}
          value={props.value}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      )
  }
}
