import RestaurantCard from "./RestaurantCards";
import OptionsComponent from "./Options";
import { imgSrc } from "../mockData/imageMock";
import './Body.css';


const BodyComponent = () => {
    return (
      <div className = "body">
        <div className = "search">
          <h1 className='searchText'>Order food & groceries. Discover<br/> best restaurants. Swiggy it!</h1>
          <input type="text" placeholder="Search" />
        </div>
        <div className = "optionCards">
          {imgSrc.map((src) => {
            return <OptionsComponent prop={src.imgSrc} key={src.id} />
          })}
        </div>
      </div>
    )
  }
  

export default BodyComponent;