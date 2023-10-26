import { Link } from "react-router-dom";
import style from './menu.module.css'
import { v4 } from "uuid";

const Menu = () => {

  const planetas = {
    mercury:{
      name:'mercury',
      url:'/mercury',
    }, venus:{
      name:'venus',
      url:'/venus',
    }, earth:{
      name:'earth',
      url:'/earth',
    }, mars:{
      name:'mars',
      url:'/mars',
    }, jupiter:{
      name:'jupiter',
      url:'/jupiter',
    }, saturn:{
      name:'saturn',
      url:'/saturn',
    }, uranus:{
      name:'uranus',
      url:'/uranus',
    }, neptune:{
      name:'neptune',
      url:'/neptune',
    },
  }

  return (
    <nav className={style.nav}>
      <ul>
        {Object.keys(planetas).map(planet => {
          const data = planetas[planet];
          return (
            <li key={v4()}>
              <Link to={`${data.url}`} key={v4()}>{data.name}</Link>
            </li>
          )
        }
        )}
      </ul>
    </nav>
  )
}

export default Menu;