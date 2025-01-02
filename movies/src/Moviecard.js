import React from "react";

class MovieCard extends React.Component{
   
  //Creating an arrow function for addStars which automatically binds to the current instance
  addStars = () => {
    //Condition to stop the stars from increasing beyond 5
    if(this.state.star >= 5){
        return
    }
    //Form 1 of setState() - increasing the star count by 0.5
    this.setState({
        star : this.state.star + 0.5
    })

    //Form 2 of setState() - increasing the star count by 0.5
    /**
    this.setState((prevState) => {
        return {
            star: prevState + 0.5
        }
    })
     */
  }

  // event handler to decrease the star by 0.5
  decStars = () => {
    //Condition to stop the stars from decreasing beyond 0
    if(this.state.star <= 0){
        return
    }
    //form1 of setState
    this.setState({
        star: this.state.star - 0.5
    })
  }

  //Toggle Favourite button
  toggleFav= () => {
    this.setState({
        fav: !this.state.fav
    })
  }
  
  //Toggle add to cart button
  toggleCart= () => {
    this.setState({
        isInCart: !this.state.isInCart
    })
 }

    render(){
        //Destructing the state object in render function
        const {title, plot, poster, price, rating,star,fav,isInCart} =  this.props.movies;
        console.log(this.props.movies)
          
        return(
            //Movie Card
            <div className="movie-card">

                {/**Left section of Movie Card */}
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>
                
                {/**Right section Movie Card */}
                <div className="right">

                    {/**Title, plot, price of the movie */}
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    {/**Footer starts here with ratings, stars and buttons */}
                    <div className="footer">
                        <div className="rating">{rating}</div>

                        {/**Star image with increase and decrease buttons and star count */}
                        <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={this.decStars}
                            />
                            <img className="stars" 
                                    alt="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                            />
                            <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                // No binding required as addStars() is an arrow function
                                onClick={this.addStars}
                            />
                            <span className="starCount">{star}</span>
                        </div>

                        {/**conditional rendering on Favourite button */}
                        <button className={fav?"unfavourite-btn":"favourite-btn"}  onClick={this.toggleFav}>
                            {fav ? "Un-favourite":"Favourite"}
                        </button>
                        {/**
                         * {fav? <button className="unfavourite-btn" onClick={this.toggleFav}> Un-favourite </button> :
                         *       <button className="favourite-btn" onClick={this.toggleFav}> favourite </button>}
                         */}

                            {/**Conditional Rendering on Add to Cart Button */}
                        <button className={isInCart?"unfavourite-btn":"cart-btn"}  onClick={this.toggleCart}>
                            {isInCart ? "Remove from Cart":"Add to Cart"}
                        </button>
                        
                    </div>
                </div>

            </div>
          
        )
    }
}

export default MovieCard;