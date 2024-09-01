import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
export default function Slider() {
  return (<>
    <div className='my-4'>
      <div className='text-[32px] fontgobs text-[#848484] sm:text-[24px] '>Your Browsing History</div>
      <Splide

        options={{
          type: "loop",
          perPage: 4,
          pagination: true,
          perMove: 1,
          wheel: false,
          autoplay: false,
          pauseOnHover: true,
          arrows: true,
        }}
        aria-label="My Favorite Images">
        <SplideSlide>
          <div className='flex justify-center items-center h-full '>
            <img className=' ' src='/apple.png' />
          </div>

        </SplideSlide>
        <SplideSlide >
          <div className='flex justify-center items-center h-full  '>
            <img className=' ' src='/apple.png' />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className='flex justify-center items-center h-full '>
            <img className=' ' src='/bowl.png' />
          </div>

        </SplideSlide>
        <SplideSlide>
          <div className='flex justify-center items-center h-full '>
            <img className=' ' src='/lotion.png' />
          </div>

        </SplideSlide>
      </Splide>

    </div>
  </>)
}