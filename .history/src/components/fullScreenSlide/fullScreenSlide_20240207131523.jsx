import react from 'react'


const FullScreenSlide = ({vide}) => {


    return (
        <div className='full-slide-container'>

            <video className='full-slide-video' controls auto muted loop>
                <source src='' type='video/mp4'/>
            </video>

        </div>
    )
}


export default FullScreenSlide


