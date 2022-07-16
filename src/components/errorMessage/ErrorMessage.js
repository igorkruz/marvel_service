import img from './error.gif'
const ErrorMessage = () => {
    return (
    <img style={{display: 'block', width: 200, height:200, margin: '0 auto', objectFit:'contain'}} src={img} alt='Error'/>
    )
}

export default ErrorMessage