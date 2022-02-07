import React from "react";
import Counter from './Rating';
import Movie from "./Movies";
import Review from "./ReviewList";
import './styles.css';

export default class MovieList extends React.Component {
    render() {
        return (
            <div>
              <h1>Movie Reviews!</h1>
              <br></br>
              <h2>Step Brothers</h2>
              <br></br>
                    <img src="https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"/>
                    <br></br>
                    <br></br>
                    <Movie name="Two aimless middle-aged losers still living at home are forced against
                    their will to become roommates when their parents marry."/>
                    <ul>
                        <li><Counter name="⭐⭐⭐⭐⭐" /></li>
                        <li><Counter name="⭐⭐⭐⭐" /></li>
                        <li><Counter name="⭐⭐⭐" /></li>
                        <li><Counter name="⭐⭐" /></li>
                        <li><Counter name="⭐" /></li>
                    </ul>
                   <p>Go ahead and leave your thoughts down below!</p>
                      <Review/>
            </div>
        )        
    }
    
}