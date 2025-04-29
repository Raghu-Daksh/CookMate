import React, {useEffect} from "react";

import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OtherRecies = () => {
          useEffect(() => {
              AOS.init({
                duration: 1000, // animation duration
                once: true,     // animation only once
              });
            }, []);
        const recipes = [
            {
               img: img1,
                title: 'Chicken Meatball with Creamy Chees...',
                owner: 'Andreas Paula'
            },
            {
               img: img2,
                title: 'The Creamiest Creamy Chicken an...',
                owner: 'Andreas Paula'
            },
            {
               img: img3,
                title: 'The Best Easy One Pot Chicken and Rice',
                owner: 'Andreas Paula'
            },
        ]
  return (
    <div className="recipe-details-other-recipes">
      <h1>Other Recipes</h1>
      <div className="recipe-details-other-recipes-container">
        {recipes.map((recipe, index) => (
          <div className="recipe-details-other-recipe" key={index} data-aos="zoom-in"> 
            <img src={recipe.img} alt="" />
            <div className="recipe-details-other-recipe-text">
              <h3>{recipe.title}</h3>
              <p>{recipe.owner}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherRecies;
