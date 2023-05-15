import { Fragment } from "react";

export default function HomeSliderCards({bannerImage, title, description, beginner }){
    return(
        <Fragment >
        <div className='absolute top-56 md:top-72 lg:top-96 left-0 max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-6xl p-4 md:px-10 md:py-6 lg:px-14 z-20 text-white'>
            <span className='text-2xl font-bold lg:text-4xl uppercase mb-2 md:mb-4 line-clamp-1'>{title}</span>
            <p  className="line-clamp-2 text-sm md:text-base lg:text-lg mb-4 md:mb-6">{description}</p>
            {/* <div className="text-center flex flex-wrap pb-6 md:pb-0">
            {props.genres.slice(0, window.innerWidth < 768 ? 3 : 6).map((genre) => (
                <button key={genre} className="border-2 border-d-gray-300 rounded-md px-2 py-1 mr-2 mb-2 text-sm hover:scale-95 transition duration-75">
                {genre}
                </button>
            ))}
            </div> */}
        </div>
          
        <div className='w-96 mx-0 relative overflow-hidden h-56 z-[-20] rounded-xl'>
            <div className='h-[601px] md:h-[701px] lg:h-[801px] absolute bg-gradient-to-t from-d-primary z-10'/>
            <img src={bannerImage} alt={title} className='w-full h-full object-cover object-center z-[-1]' />
        </div>
        </Fragment>
    );
}