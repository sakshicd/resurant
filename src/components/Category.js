import React from 'react'

const Category = () => {
  return (
    <section className='category' id='category'>
        <h1 className="heading category">
            Types Of Food
        </h1>
        <div className="box-container">
          <div className="food-type fruit">
            <div className="img-container">
              <img src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="error" />
              <div className="img-content">
                <h3>Fruite</h3>
                <a href="https://en.wikipedia.org/wiki/Fruit" className="btn btn-primary" target="blank">learn
                  more</a>
              </div>
            </div>
          </div>
          <div className="food-type vegetable">
            <div className="img-container">
              <img src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="error" />
              <div className="img-content">
                <h3>Vegetable</h3>
                <a href="https://en.wikipedia.org/wiki/Vegetable" className="btn btn-primary" target="blank">learn
                  more</a>
              </div>
            </div>
          </div>
          <div className="food-type grin">
            <div className="img-container">
              <img src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="error" />
              <div className="img-content">
                <h3>Grain</h3>
                <a href="https://en.wikipedia.org/wiki/Grain" className="btn btn-primary" target="blank">learn
                  more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

        
        


export default Category