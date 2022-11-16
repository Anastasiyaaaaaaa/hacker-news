import './style.css';
import HTMLReactParser from 'html-react-parser';

export const Comment = ({comment}) => {

    return <div className='comment'>
        <p>by: {comment.by}</p>
        <p>{HTMLReactParser(comment.text)}</p>  
    </div>
}