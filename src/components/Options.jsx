import './Options.css';

const OptionsComponent = ({prop}) => {
    return (
        <div className= 'option-card'>
            <img src={prop} alt='imgSrc' className='image'></img>
        </div>
    )
}

export default OptionsComponent;