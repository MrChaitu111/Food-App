import React from 'react'
import { menu_list } from '../../assets/assets';
import './ExploreMenu.css';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div>
      <div className='explore-menu' id='explore-menu'>
              <h2>Explore our Menu </h2>
              <center><h1> Tasty Food to your Destination<br/><span>IN 20 Mins</span></h1></center>
              <div className='explore-menu-list'>
                  {menu_list.map((item, index) =>{
                      return(
                          <div onClick={() => setCategory(prev => prev=== item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                              <img className={category === item.menu_name ? "active" :""} src={item.menu_image} alt='menu-img' />
                              <p>{item.menu_name}</p>
                          </div>
                      )
                  })}
              </div>
               <hr/>
           </div>
    </div>
  )
}

export default ExploreMenu