import react from 'react'


const FullScreenSlide = ({video,image}) => {


    return (
        <div className='full-slide-container'>

            {video ? (
                 <video className='full-slide-video' controls auto muted loop>
                 <source src={video} type='video/mp4'/>
             </video>
            ) : (
                <img src={image}
            )}
           

        </div>
    )
}


export default FullScreenSlide


