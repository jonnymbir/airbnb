import { faArrowDownZA, faBacon, faChess, faGlobeEurope, faLocation, faNotEqual, faPodcast, faVoicemail } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Filter.css"

const Filter = () => {
  return (
    <div className="filterContainer">
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faChess} className="filterIcon"/>
            <span>Island</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faBacon} className="filterIcon"/>
            <span>Artic</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faLocation} className="filterIcon"/>
            <span>Amazing Pools</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faGlobeEurope} className="filterIcon"/>
            <span>OMG</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faPodcast} className="filterIcon"/>
            <span>National Park</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faNotEqual} className="filterIcon"/>
            <span>Tiny Homes</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faVoicemail} className="filterIcon"/>
            <span>Design</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faChess} className="filterIcon"/>
            <span>Island</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faBacon} className="filterIcon"/>
            <span>Artic</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faLocation} className="filterIcon"/>
            <span>Amazing Pools</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faGlobeEurope} className="filterIcon"/>
            <span>OMG</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faPodcast} className="filterIcon"/>
            <span>National Park</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faNotEqual} className="filterIcon"/>
            <span>Tiny Homes</span>
        </div>
        <div className="filterIconWrapper">
            <FontAwesomeIcon icon={faVoicemail} className="filterIcon"/>
            <span>Design</span>
        </div>

        <div className="filters">
        <FontAwesomeIcon icon={faArrowDownZA} className="filterIcon"/>
            <span>Filters</span>
        </div>
    </div>
  )
}

export default Filter