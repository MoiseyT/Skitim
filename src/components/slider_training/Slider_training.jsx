import React, { useEffect, useState } from 'react';
import './slider_training.css';
import Winter from '../../assets/Winter.png';
import Spring from '../../assets/Spring.png';
import Summer from '../../assets/Summer.png';
import Autumn from '../../assets/Autumn.png';
const Thumbnail = ({ arr, image, index }) => {
    return (<div className="tumbnail">
      {
        arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? 'active' : ''}
          />
        ))
      }
    </div>)
  }

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>&#10094;</button>
        <button onClick={next}>&#10095;</button>
      </div >
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>

  )
}


function Slider_training() {
    return (
        <div>
            <Slideshow imgs={[
                Winter,
                Summer,
                Autumn,
                Spring
            ]}
            />
        </div>
    );
};
export default Slider_training