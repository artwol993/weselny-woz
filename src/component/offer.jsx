import React from 'react'
import "../style/offer.css"
import photo1 from "../assets/photo1.png"
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';

function Offer() {
  return (
    <section id="about-us" className="p-5">
      <div className="container">
        <div className="row text-center g-4">
        <div className="col-md">
            <div className=" text-dark adv-card">
              <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
                <div className="h1 mb-3">
                  <img src={photo1} alt="dos"/>
                </div>
                <h3 className="card-title mb-3">Flota</h3>
                <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in aspernatur accusamus ipsa ea sunt saepe. Deleniti, mollitia beatae fugiat inventore dicta quidem quod non dolorum nam tempore suscipit obcaecati!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className=" text-dark adv-card">
              <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
                <div className="h1 mb-3">
                  <img src={photo2} alt="dos"/>
                </div>
                <h3 className="card-title mb-3">Zespół</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam maiores deleniti rerum qui amet repudiandae eaque tempora corporis nostrum, commodi, tempore, nemo eveniet est nesciunt facere molestiae nulla esse dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className=" text-dark adv-card">
              <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
                <div className="h1 mb-3">
                  <img src={photo3} alt="dos"/>
                </div>
                <h3 className="card-title mb-3">Profesjonalizm</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate eos excepturi reiciendis quas molestias totam recusandae quasi architecto, et reprehenderit sed est voluptates ipsum ut similique, neque provident aperiam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer