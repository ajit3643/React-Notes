import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false,
      cart: false,
    };
    // this.addStars = this.addStars.bind(this);
  }
  addStars = () => {
    if (this.state.stars >= 10) {
      return;
    }
    // form - I
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });

    // form - II
    this.setState((previousState) => {
      return {
        stars: previousState.stars + 0.5,
      };
    });
    // this.state.stars += 0.5;
    // console.log("Star added", this.state.stars);
  };
  decreaseStar = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState((previousState) => {
      return {
        stars: previousState.stars - 0.5,
      };
    });
  };
  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };
  handleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  };
  render() {
    const { title, plot, price, rating, stars, fav, cart } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
              alt="Poster"
            />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/561/561179.png"
                  onClick={this.decreaseStar}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                  alt="stars"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/561/561169.png"
                  onClick={this.addStars}
                />
                <span>{stars}</span>
              </div>
              {/* {fav ? (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  Un-favourite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favourite
                </button>
              )} */}
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handleFav}
              >
                {fav ? "Unfavourite" : "Favourite"}
              </button>
              {/* {cart ? (
                <button className="cart-btn" onClick={this.handleCart}>
                  Add to Cart
                </button>
              ) : (
                <button className="remove-cart-btn" onClick={this.handleCart}>
                  Remove
                </button>
              )} */}

              <button
                className={cart ? "remove-cart-btn" : "cart-btn"}
                onClick={this.handleCart}
              >
                {cart ? "Remove" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
