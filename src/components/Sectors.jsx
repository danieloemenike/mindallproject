import image1 from '../assets/sector1.jpeg'; 
import image2 from '../assets/sector2.jpg'; 
import image3 from '../assets/sector33.jpeg'; 
import image4 from '../assets/sector4.jpeg'; 
import image5 from '../assets/sector5.jpeg'; 
import image6 from '../assets/sector6.jpeg'; 
import image7 from '../assets/sector7.jpeg'; 
import image8 from '../assets/sector8.jpeg'; 



function Sectors() {
    const items = [
        { id: 1, image: image1, text: 'Construction & Civil Engineering' },
        { id: 2, image: image2, text: 'Financial Services' },
        { id: 3, image: image3, text: 'Health Care' },
        { id: 4, image: image4, text: 'Information Technology' },
        { id: 5, image: image5, text: 'Procurement & Supply Chain' },
        { id: 6, image: image6, text: 'Human Resources' },
        { id: 7, image: image7, text: 'Education' },
        { id: 8, image: image8, text: 'Government' },
      ];
  return (
      <section className="sector-container">
          <h2 className='sector-heading'> SECTORS </h2>
          
          <div className='grid-sector-container'>
          {items.map(item => (
              <div className="grid-item" key={ item.id }>
                  <div className='grid-image'>
                  <img src={item.image} alt={item.text} />
                  </div>
                  <div className="grid-text-container">
                  <p className='grid-text'>{item.text}</p>
      </div>
        
      </div>
    ))}
          </div>

  </section>
  )
}

export default Sectors