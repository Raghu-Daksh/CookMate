import React, {useEffect} from 'react'
import img1 from '../../../assets/suggestion1.jpg'
import img2 from '../../../assets/suggestion2.jpg'
import img3 from '../../../assets/suggestion3.jpg'
import img4 from '../../../assets/suggestion4.jpg'
import './recomendation.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const RecommandationRecipes = () => {

    useEffect(() => {
    AOS.init({
        duration: 1000, // animation duration
        once: true,     // animation only once
    });
    }, []);

    const suggestionRecipes = [
        {
            img: img1,
            title: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
            time: '15 minutes',
            type: 'Salad',
        },
        {
            img: img2,
            title: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
            time: '15 minutes',
            type: 'Salad',
        },
        {
            img: img3,
            title: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
            time: '15 minutes',
            type: 'Salad',
        },
        {
            img: img4,
            title: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
            time: '15 minutes',
            type: 'Salad',
        },
    ]

  return (
    <div className='recommandation-recipes'>
        {
            suggestionRecipes.map((recipe, index) => (
                <div className='recommandation-recipe' key={index} data-aos="zoom-in">
                    <img src={recipe.img} alt="img" />
                    <div className='recommandation-recipe-content'>
                        <h1>{recipe.title}</h1>

                        <div className='recommandation-recipe-content-overview'>
                            <div className='recommandation-recipe-content-overview-item'>
                                <ion-icon name="stopwatch"></ion-icon>
                                <p>{recipe.time}</p>
                            </div>
                            <div className='recommandation-recipe-content-overview-item'>
                                <ion-icon name="restaurant"></ion-icon>
                                <p>{recipe.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default RecommandationRecipes
