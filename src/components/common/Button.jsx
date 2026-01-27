import "../../styles/components/button.scss";

const Button = ({children,variant="primary",type, onClick}) => {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button;
