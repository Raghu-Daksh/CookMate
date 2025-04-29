import React, { useEffect, useRef } from 'react'
import './recipeDetails.css'
import img from '../../assets/fried rice.jpg'
import profile from '../../assets/profile.jpg'
import ad2 from '../../assets/ad2.jpg'
import SubscribeCard from './subscribeCard/SubscribeCard'
import RecommandationRecipes from './recommendate recipes/RecommandationRecipes'
import OtherRecies from './other recipes/OtherRecies'
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecipeDetails = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          once: true,     // animation only once
        });
      }, []);
  return (
    <div className='recipe-details-container' data-aos="fade-up">
        <div className='recipe-details-section-1' data-aos="fade-up">
            <div className='recipe-details'>
                <div className='recipe-details-title' data-aos="fade-up">
                        <h1>Health Japanese Fried Rice</h1>
                        <div className='reciepe-details-overview-container'>
                            <div className='recipe-details-overview-user'>
                                <img src={profile} alt="profile" />
                                <div>
                                    <h3>Chef Name</h3>
                                    <p>15 march 2025</p>
                                </div>
                            </div>
                            <div className='recipe-details-overview-group'>
                            <div className='recipe-details-overview'>
                            <ion-icon name="stopwatch"></ion-icon>
                                <div>
                                    <h3>Prep Time</h3>
                                    <p>15 march 2025</p>
                                </div>
                            </div>
                            <div className='recipe-details-overview'>
                            <ion-icon name="stopwatch"></ion-icon>
                                <div>
                                    <h3>Cook Time</h3>
                                    <p>15 march 2025</p>
                                </div>
                            </div>
                            <div className='recipe-details-overview' style={{border: 'none'}}>
                            <ion-icon name="restaurant"></ion-icon>
                                <div>
                                    <h3>chicken</h3>
                                </div>
                            </div> 
                             </div>
                        </div>
                </div>
                <div className='recipe-details-action-btns' data-aos="fade-up">
                    <div className='recipe-details-action-btn'>
                    <ion-icon name="print-outline"></ion-icon>
                        <p>Print</p>
                    </div>
                    <div className='recipe-details-action-btn'>
                    <ion-icon name="share-outline"></ion-icon>
                        <p>Share</p>
                    </div>
                </div>
            </div>
            <div className='recipe-details-content' data-aos="fade-up">
                <div className='recipe-details-content-img' data-aos="fade-up">
                    <img src={img} alt="img" />
                </div>
                <div className='recipe-details-content-text' data-aos="fade-up">
                    <h1>Nutrition Information</h1>
                    <div className='recipe-details-content-text-nutrition'>
                        <div className='recipe-details-content-text-nutrition-item'>
                            <h3>Calories</h3>
                            <p>200 g</p>
                        </div>
                        <div className='recipe-details-content-text-nutrition-item'>
                            <h3>Carbohydrates</h3>
                            <p>200 g</p>
                        </div>
                        <div className='recipe-details-content-text-nutrition-item'>
                            <h3>Protein</h3>
                            <p>200 g</p>
                        </div>
                        <div className='recipe-details-content-text-nutrition-item'>
                            <h3>Fat</h3>
                            <p>200 g</p>
                        </div>
                    </div>
                    <p className='recipe-details-nutrition-bottom-text'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className='recipe-details-bottom-text' >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates doloremque aspernatur sed voluptatibus harum similique, mollitia quisquam iusto officiis impedit error soluta, aut corporis dolor itaque quas quo aliquid quasi nam. Id officiis ratione obcaecati rem quis earum est animi commodi amet cupiditate rerum dicta unde aperiam molestiae quibusdam fugit, aliquam sunt deserunt culpa reprehenderit vel dolore, quia eaque. Soluta laborum nostrum, quae unde excepturi doloremque tempore, optio adipisci magni provident rerum nisi esse inventore nam neque dicta? Porro corrupti nihil officia amet, similique sint eligendi consequatur omnis ipsam ex doloribus maiores hic. Nesciunt voluptate adipisci labore laborum sit.</p>
            </div>
        </div>
        <div className='recipe-details-section-2' data-aos="fade-up">
            <div className='recipe-details-section2-container' data-aos="fade-up">
                <div className='recipe-details-ingredients' data-aos="fade-up">
                  <h1>Ingredients</h1>
                  <div className='recipe-details-ingredients-container'data-aos="fade-up">
                    <h4>For main dish</h4>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, illum.</li>
                    <li>Beatae eaque quas quis ullam excepturi tempore illum sunt illo!</li>
                    <li>Ullam quidem et qui numquam similique eligendi libero laboriosam inventore.</li>
                    <li>Amet tenetur quae illo, voluptatem numquam sunt ab commodi voluptates?</li>
                  </div>
                </div>
                <OtherRecies    />
            </div>
            <div className='recipe-details-advertisement' data-aos="fade-left">
                    <div className='recipe-details-for-sauce' data-aos="fade-left">
                        <h4>For the sauce</h4>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Aspernatur obcaecati libero ducimus unde.</li>
                      <li>Maxime, in. Esse, inventore maiores!</li>
                    </div>
                    <div className='recipe-details-advertisement-img'>
                            <img src={ad2} alt="advertisment" />
                      
                    </div>
            </div>
        </div>
        <div className='recipe-details-section-3' data-aos="fade-right">
                 <SubscribeCard />           
        </div>
        <div className='recipe-details-section-4' data-aos="fade-left">
            <h1 style={{textAlign:'center'}}>You may like these recipe too</h1>
            <RecommandationRecipes />

        </div>
    </div>
  ) 
}

export default RecipeDetails
