import { faCircleArrowLeft, faCircleArrowRight, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SimpleImageSlider from "react-simple-image-slider";
import "./Places.css";

const Places = () => {
  const images = [
    {
      url: "https://a0.muscache.com/im/pictures/bd67daca-84a4-44e9-952d-11162ba76242.jpg?im_w=720",
    },
    {
      url: "https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720",
    },
  ];

  return (
    <div className="places">
      <div className="placesItems">
      <div className="placeSlider">
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
            />
            <img
          src="https://a0.muscache.com/im/pictures/bd67daca-84a4-44e9-952d-11162ba76242.jpg?im_w=720"
          alt=""
          className="placesImg"
        />
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
            />
        </div>
        <div className="placesDetails">
          <div className="placesLocation">
            <h4>Badachro, UK</h4>
            <span>
              4.67 <FontAwesomeIcon icon={faStar} className="starIcon" />
            </span>
          </div>
          <div className="placesDistance">5,890 kilometers away</div>
          <div className="placesDuration">Nov 1- 6</div>
          <div className="placesPrice"><b>$211</b> per night</div>
          <FontAwesomeIcon icon={faHeart} className="placesLike"/>
        </div>

        

      </div>

      <div className="placesItems">
        <img
          src="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
          alt=""
          className="placesImg"
        />
        <div className="placesLocation">
          <h4>Badachro, UK</h4>
          <span>
              4.67 <FontAwesomeIcon icon={faStar} className="starIcon" />
            </span>
        </div>
        <div className="placesDistance">5,890 kilometers away</div>
        <div className="placesDuration">Nov 1- 6</div>
        <div className="placesPrice"><b>$211</b> per night</div>
        <FontAwesomeIcon icon={faHeart} className="placesLike"/>
      </div>

      <div className="placesItems">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-49227437/original/7cf358b9-e8c5-4067-9ac5-014784387e22.jpeg?im_w=720"
          alt=""
          className="placesImg"
        />
        <div className="placesLocation">
          <h4>Badachro, UK</h4>
          <span>
              4.67 <FontAwesomeIcon icon={faStar} className="starIcon" />
            </span>
        </div>
        <div className="placesDistance">5,890 kilometers away</div>
        <div className="placesDuration">Nov 1- 6</div>
        <div className="placesPrice"><b>$211</b> per night</div>
        <FontAwesomeIcon icon={faHeart} className="placesLike"/>
      </div>

      <div className="placesItems">
        <img
          src="https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720"
          alt=""
          className="placesImg"
        />
        <div className="placesLocation">
          <h4>Badachro, UK</h4>
          <span>
              4.67 <FontAwesomeIcon icon={faStar} className="starIcon" />
            </span>
        </div>
        <div className="placesDistance">5,890 kilometers away</div>
        <div className="placesDuration">Nov 1- 6</div>
        <div className="placesPrice"><b>$211</b> per night</div>
        <FontAwesomeIcon icon={faHeart} className="placesLike"/>
      </div>
    </div>
  );
};

export default Places;
