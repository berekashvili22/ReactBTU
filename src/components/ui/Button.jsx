import './button.css';

function Button({type = 'none', text = 'default text', onClick}) {
    if (type === 'none') {
        return null;
    }

    return (
        <button className={`btn btn-${type} mx-1`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;