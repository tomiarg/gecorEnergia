import { useEffect, useState } from "react"
import { Nav, BackgroundHeader  } from "./"


export const Header = () => {
  let headerData =[
    {text1: "Fabricamos Generadores"},
    {text1: "Energía en todos lados"},
    {text1: "Energía siempre "}
  ]
  const [heroCount, setHeroCount] = useState(2)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count)=>{return count === 2 ? 0 : count+1})
    }, 4000);
  }, [])
  
  return (
    <header className="header">
      <BackgroundHeader playStatus={playStatus} heroCount={heroCount}/> 
      <div className="header__overlay">
        <Nav/>
        <h1 className="header__heading">{headerData[heroCount].text1}</h1>
      </div> 
      <div className="header-dot-play">
        <ul className="header-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount == 0 ? "header-dot blue" : "header-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount == 1 ? "header-dot blue" : "header-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount == 2 ? "header-dot blue" : "header-dot"}></li>
        </ul>
      </div>
        
    </header>
  )
}
