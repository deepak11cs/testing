import React from 'react';
import {mount, ReactWrapper } from 'enzyme';
import Root from 'root';
import App from 'components/App';
import moxios from 'moxios';
let wrapped;
beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        response: [{name:'lorem ipsum'},{name: 'dolor dsfaowe'}]
    });

    wrapped = mount(
        <Root>
            <App/>
        </Root>
    );
});
afterEach(()=>{
    moxios.uninstall();
    wrapped.unmount();
});
it('can fetch a list of comments and display them',(done)=>{
    wrapped.find('.fetch-comments').simulate('click');
    moxios.wait(()=>{
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
    });

    
});