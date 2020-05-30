import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'root';

let wrapped;
beforeEach(()=>{

    wrapped = mount(<Root><CommentBox /></Root>);
});
afterEach(()=>{
    wrapped.unmount();
});
it('has a text area and two button',()=>{
    //const wrapped = mount(<CommentBox />);
    //wrapped.find('textarea');
    //wrapped.find('button');
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area',()=>{
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change',{
            target:{ value: 'new comment'}
        });
        wrapped.update();

    });


    it('has a textarea that user can type in',()=>{
        //expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('has a submit button and on click the textarea is cleared',()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        wrapped.find('form').simulate('submit',{target:{value: ""}});
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

});