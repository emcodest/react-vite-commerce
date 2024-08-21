import PropTypes from 'prop-types';
import "./Button.css"

Button.propTypes = {
    name: PropTypes.string.isRequired,
    func: PropTypes.func
  };
export default function Button(props) {

    return (

        <>
        <button onClick={props.func} className = "button">{props.name}</button>
        </>


    )

}