import React from 'react';
import Posts from './Posts';
import postsData from './PostsData';

const App = () => {
    return(
        <React.Fragment>
            {postsData.map((val, index) => {
                return <Posts 
                            key={index} 
                            text={val.text} 
                            img={val.img} 
                            alt={val.alt} 
                            like={val.like}
                            dislike={val.dislike} 
                            profilePic={val.profilePic} 
                            profileAlt={val.profileAlt} 
                            name={val.name} 
                        />
            })}
        </React.Fragment>
    );
}

export default App;