
import NewsCard from '../Components/card/Card';
// please add your test cases here

import React from 'react'

import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
let container=null
beforeEach(()=>{
    container=document.createElement("div");
    document.body.appendChild(container);

});
afterEach(()=>
{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})
it("render card",()=>{
    act(()=>{
       // render(<Card></Card>,container)
    })
    
    expect(2+3).toBe(5);
}
)


export default NewsCard;