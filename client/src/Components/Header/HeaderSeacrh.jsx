import "./HeaderSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

const HeaderSeacrh = () => {
  return (
    <div className="headerSearch">
        <span className="anyWhere">Anywhere</span>
        <span className="barSpace"> | </span>
        <span className="anyWhere">Any Week</span>
        <span className="barSpace"> | </span>
        <div className="headerSearchRight">
        <span className="addSearch">Add guests</span>
        <div className="headerMagnifyingGlass">
           <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        </div>
    </div>
  )
}

export default HeaderSeacrh