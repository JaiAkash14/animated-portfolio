import "./hero.scss"

export const Hero = () => {
  return (
  <div className="hero">
    <div className="wrapper">
    <div className="textContainer">
      <h2>JAI AKASH</h2>
      <h1>Web developer <br/> and UI designer</h1>
      <div className="buttons">
        <button>See the Latest Works</button>
        <button>Contact Me </button>
      </div>
      <img src ="/scroll.png"/>
    </div>
    </div>
    <div className="imageContainer">
       <img style={{ height:"100%"}} src="hero.png" />
    </div>
  </div>
  )
}
