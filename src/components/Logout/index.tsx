import logout from "../../img/logout.png"
import "./index.css"

import { ButtonProps } from "../../interface"

const Logout: React.FC<ButtonProps> = ({onClick}) => {
    return (
        <div>
            <button className="logout" onClick={onClick}>
                <img src={logout}/>
                    Log Out
            </button>
        </div>
    )
}

export default Logout