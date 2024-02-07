import react from 'react'


const FullScreenSlide = ({video,image}) => {


    return (
        <div className='full-slide-container'>

            {video ? (
                
            )}
            <video className='full-slide-video' controls auto muted loop>
                <source src='' type='video/mp4'/>
            </video>

        </div>
    )
}


export default FullScreenSlide


