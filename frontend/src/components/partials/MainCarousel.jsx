import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { carouselLinks } from '../../constants';

const MainCarousel = () => {
    return(
        <Splide
                extensions={{ AutoScroll }}
                options={
                    {
                        type: 'loop',
                        drag: 'free',
                        focus: 'center',
                        perPage: 1,
                        autoScroll: {
                            pauseOnHover: true,
                            pauseOnFocus: false,
                            rewind: true,
                            speed: 1
                        },
                        gap: '10px',
                        padding: '20px',
                        cover: true,
                        height: '50vh',
                    }
                }
                aria-label="Categories Carousel">

                {carouselLinks.map(
                    (linkElement) => (
                        <SplideSlide>
                            <h1 className="text-white text-bold text-2xl m-4">{linkElement.title}</h1>
                            <img src={linkElement.imgUrl} alt={linkElement.title} />
                        </SplideSlide>
                    )
                )}

            </Splide>
    );
}

export default MainCarousel;