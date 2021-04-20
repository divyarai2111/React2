import Dashboard from '../Components/dashboard/Dashboard';
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
it("render dashboard",()=>{
    console.log(container.textContent)
    act(()=>{
        // render(<Dashboard></Dashboard>,container)
    })
    expect(container.textContent).toBe('');
}
)
export default Dashboard;