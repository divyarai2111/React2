import Login from '../Components/login/Login';
// please add your test cases here
import React from 'react'
// please add your test cases here
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
it("render Footer",()=>{
    act(()=>{
        console.log(container.textContent)
        render(<Login></Login>,container)
    })
    expect(container.textContent).toBe("UsernamepasswordSubmitNot a User ? Register Now");
}
)
export default Login;