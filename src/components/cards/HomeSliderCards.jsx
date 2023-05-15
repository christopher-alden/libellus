
export default function HomeSliderCards({bannerImage}){
    return(
        <div className='w-96 mx-0 relative overflow-hidden h-56 z-[-20] rounded-xl transform perspective(500px) rotateX(20deg)'>
            <img src={bannerImage} alt="banner" className='w-full h-full object-cover object-center z-10 opacity-70' />
        </div>
    );
}
