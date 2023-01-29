import React, { Component } from 'react'
import Item from './Item';
export default class extends Component {
    constructor(){
        super();
        this.state={
           product:[
            {
                price:3.99,
                title:'White traditional long dress',
                img:'https://m.media-amazon.com/images/I/51QROUl1E8L.jpg'
     
            },
            {
                price:3.99,
                title:'Long sleeve denim jacket',
                img:'https://images-cdn.ubuy.co.in/633be7f72b0fa046894a0a34-women-x27-s-ripped-distressed.jpg'
     
            },
            {
                price:3.99,
                title:'Hush Pupples',
                img:'https://rukminim1.flixcart.com/image/850/1000/l51d30w0/sandal/c/b/q/4-5741864-4-hush-puppies-white-original-imagftfkqfcvkqf8.jpeg?q=90'
     
            },
            {
                price:3.99,
                title:'Athens Skirt',
                img:'https://cdn.shopify.com/s/files/1/0170/0476/products/52a1f72a0394391bfc6b917f20ceda08c0cfda4a30312e75735dc1ee595de96f.jpg?v=1649202516'
     
            }
           ]
        }
    }
  render() {
    const {product}=this.state;
    return (
      <div className='cart'>
        <Item />
      </div>
    )
  }
}
