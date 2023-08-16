import React from 'react';
import banner from '../images/news-banner.jpg'
import postImage from '../images/post-image.jpg'
import '../css/news.css'

class News extends React.Component {
    render() {
      return (
        <div className='news'>
          <h1>News Page</h1>
          <img className='news_banner' src={banner} alt='News'/>
          <div className='news_post'>
            <img className='news_post_image' src={postImage} alt='News'/>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
          </div>
          <div className='news_post'>
            <img className='news_post_image' src={postImage} alt='News'/>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
          </div>
          <div className='news_post'>
            <img className='news_post_image' src={postImage} alt='News'/>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
          </div>
        </div>
      )
    }
  }
  export default News