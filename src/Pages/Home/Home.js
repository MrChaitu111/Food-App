import route from './routing.svg';
import order from './3d-rotate.svg';
import card from './credit-card.svg';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import Header from '../../Components/Header/Header';
import './Home.css';
import { useState } from 'react';

const Home = () => {
  const [category, setCategory] = useState('All')
  return (

    <div>
      <Header />
      <div className="specifications">
        <div className="child">
          <img src={route} alt="route" />
          <div>
            <h3>Wide Map</h3>
            <p>Order from anywhere.</p>
          </div>
        </div>
        <div className="child">
          <img src={order} alt="order" />
          <div>
            <h3>Easeist Order</h3>
            <p>Easy order Process</p>
          </div>
        </div>
        <div className="child">
          <img src={card} alt="credit-card" id="card" />
          <div>
            <h3>Various Payment</h3>
            <p>Make order seamless</p>
          </div>
        </div>
      </div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>

  )
}

export default Home