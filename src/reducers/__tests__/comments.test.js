import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT} from 'actions/types';

it('handles actions of type SAVE_COMMENT',()=>{
    let action= {
        type: SAVE_COMMENT,
        payload: "new comment"
    };
    expect(commentsReducer([],action)).toEqual(['new comment']);
});

it('handles actions of unknown type',()=>{
    expect(commentsReducer([],{type: 'UNKNOWN'})).toEqual([]);
});