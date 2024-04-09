import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
     <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews(122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
            An e-commerce website is an online platform where businesses sell products or services to customers over the internet. These websites often feature a variety of functionalities to facilitate the buying and selling process, including Product catalog: An organized listing of products or services available for purchase, often categorized for easy navigation.
            </p>
            <p>
            Successful e-commerce websites prioritize user experience, security, and convenience to drive sales and build customer loyalty. Continuous optimization based on analytics and customer feedback is essential for staying competitive in the online marketplace.
            </p>
        </div>
     </div>
  )
}
