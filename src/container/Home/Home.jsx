import React, {Component} from 'react';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component{
    render (){
        return(
            <div>
                <p>BlogPost</p>
                <hr />
                <BlogPost />
                </div>
        )
    }
}
export default Home;