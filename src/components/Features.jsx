import React from 'react'
import featureimage from '../images/Frame 19.png';

function Features() {
  return (
    <div id='features'>
      <div className='features-model'>
        <img src={featureimage} alt='feature-image' />
      </div>
      <div className="features-text">
        <h2>Features</h2>
        <h3>This Application <span>Software</span>is Art</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, aspernatur tenetur, ab sit deserunt, enim iste quasi ipsam esse earum odio. Ipsa quas praesentium illum facilis aliquid illo maxime quod!
        Provident magni nisi assumenda soluta libero atque doloremque voluptate porro itaque unde. Similique molestiae voluptatem at quo, eius facere dolor possimus, qui necessitatibus blanditiis perferendis</p>
       <button>View more features</button>
      </div>
    </div>
  )
}

export default Features
