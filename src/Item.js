import React, { Component } from 'react'
export default class home extends Component {
    
    
  render() {
    const {price,title,img}=this.props.product;
    return (
      <div className='item'>
        <div className='upper-part'>
          <img src={img} />
        </div>
        <div className='lower-part'>
          <div>{title}</div>
          <div>{price}</div>
          <div className='cart-item-actions'>
            <img alt="small" className='item-action'
            src='https://cdn-icons-png.flaticon.com/512/8142/8142557.png'
            // onClick={changeStyle}
            />
            <img alt='medium' className='item-action'
            src='https://cdn-icons-png.flaticon.com/512/8142/8142539.png'
            // onClick={changeStyle}
            />
            <img alt='large' className='item-action'
            src='https://cdn-icons-png.flaticon.com/512/9089/9089793.png'
            // onClick={}
            />
            <img alt='rating' className='item-action'
            src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png'
            />
            <div>BUY+</div>
          </div>
        </div>
      </div>
    )
  }
}
