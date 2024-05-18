// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex < reviewsList.length - 1) {
      this.setState((prevState) => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review 

    return (
      <div className = "container">
         <img src = {imgUrl} alt = {username} />
         <p className = "username">{username}</p>
         <p className = "companyName">{companyName}</p>
         <p className = "description">{description}</p>
      </div>
    )
  }

   onClickLeftArrow = () => {
    const {activeIndex} = this.state

    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }



  render() {
    const {activeIndex} = this.state 
    const {reviewsList} = this.props 
    const updatedDetails = reviewsList[activeIndex]

    return (
      <div className="bg-container">
          <h1 className = "heading">Reviews</h1>
          <div className = "carousel-container">
              <button type = "button" onClick = {this.onClickLeftArrow} testid = "leftArrow" className = "button1">
                  <img src = "https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt = "left arrow" />
              </button>
              {this.renderActiveReview(updatedDetails)}
              <button type = "button" onClick = {this.onClickRightArrow} testid = "rightArrow" className = "button1" >
                  <img src = "https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt = "right arrow" />
              </button>
          </div>
      </div>
    )
  }
}


export default ReviewsCarousel