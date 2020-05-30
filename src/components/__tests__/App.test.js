import React from 'react';
import App from 'components/App';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import { shallow } from 'enzyme';

let wrapped;
beforeEach(()=>{
    wrapped = shallow(<App />);
});
it('shows a comment box',()=>{
    //const div = document.createElement('div');
    //ReactDOM.render(<App/>,div);
    //expect(div.innerHTML).toContain('Comment Box');
    //ReactDOM.unmountComponentAtNode(div);

    //const wrapped = shallow(<App />);
    expect(wrapped.find(CommentBox).length).toEqual(1);
});
it('shows a comment list',()=>{
    //const wrapped = shallow(<App />);
    expect(wrapped.find(CommentList).length).toEqual(1);
});
