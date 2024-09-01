import { useEffect } from 'react'
import './about.css'
import { ReactComponent as Headphone } from '../../assests/headphone.svg'
import { ReactComponent as Linkedin } from '../../assests/graylinkdin.svg'
import { ReactComponent as Fb } from '../../assests/grayfb.svg'
import { ReactComponent as Insta } from '../../assests/grayinsta.svg'
import { ReactComponent as Tw } from '../../assests/graytw.svg'

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (<>
        <div className='bg-[#E6E6E6] pb-20'>
            <div className="w-full h-[350px] bg flex justify-center items-center fontabout2">
                <div className='font-bold text-[20px]'>ABOUT US</div>
            </div>
            <div className='bg-[#E6E6E6] h-[200px] w-full flex justify-center relative fontabout2'>
                <div className='w-[50%] h-[280px] flex bg-white absolute bottom-[0.1px] justify-around'>
                    <div className='w-[50%] flex justify-center items-center'>
                        <div className='w-[80%]'>
                            <div className='flex space-x-1 items-center justify-center font-bold text-[20px]' >
                                <div>We are</div>
                                <div className='text-[#58B310]'>Grocerify</div>
                            </div>
                            <div className='text-[14px] mt-1'>Amazon was founded on July 5, 1994 by Jeff Bezos from his garage in Bellevue, Washington. The company initially was an online marketplace for books, but incrementally expanded into a multitude of product categories, a strategy that has earned it the moniker "The Everything Store".</div>
                        </div>
                    </div>
                    <div className='w-[50%] h-full  flex justify-center'>
                        <img src='/about1.png' className='h-full w-full' />
                    </div>
                </div>
            </div>

            <div className='flex w-full h-fit bg-white'>
                <div className='w-[50%]'>
                    <img src='/laptop_about.png' />
                </div>
                <div className='w-[50%] flex justify-center items-center ' id='teams'>
                    <div className='w-[90%] fontabout2'>
                        <div className='text-center text-[20px] font-bold'>WHY CHOOSE US</div>
                        <div className='mt-1 fontabout2'>Enjoy the luxury of having your groceries delivered right to your door!
                            Join our community of satisfied customers who enjoy stress-free shopping!</div>

                        <div className='flex justify-around pt-3 text-[14px]'>
                            <div className='flex space-x-4 items-center'>
                                <Headphone />
                                <span>24 X 7 hours Service</span>
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <Headphone />
                                <span>24 X 7 hours Service</span>
                            </div>
                        </div>
                        <div className='flex justify-around pt-3 text-[14px]'>
                            <div className='flex space-x-4 items-center'>
                                <Headphone />
                                <span>24 X 7 hours Service</span>
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <Headphone />
                                <span>24 X 7 hours Service</span>
                            </div>
                        </div>
                        <div className='flex justify-around pt-3 text-[14px]'>
                            <div className='flex space-x-4 items-center'>
                                <Headphone />
                                <span>24 X 7 hours Service</span>
                            </div>
                            <div className='flex space-x-4 items-center'>
                                <Headphone />
                                <span>24 X 7 hours Service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center bg-[#E6E6E6] pt-4 fontabout2' >
                <div className='w-[70%]  flex justify-center'>
                    <div className=''>
                        <div className='flex space-x-2 justify-center text-[24px] font-bold'>
                            <div className='text-[#58B310]'>|</div>
                            <div>MEET OUR TEAM</div>
                            <div className='text-[#58B310]'>|</div>
                        </div>
                        <div className='text-center mt-3 font-semibold fontabout2 '>We Are The Best Team</div>
                        <div className='flex justify-center space-x-16 pt-4'>
                            <div className='h-[300px] w-[240px] mainimg z-20'>
                                <img src='/ladki1.png' className='h-full w-full ' />
                                <div className='bg-white py-3 space-y-1 showhidden z-10'>
                                    <div className='text-center font-semibold'>ASHMIN</div>
                                    <div className='text-center'>Managing Director</div>
                                    <div className='flex justify-center space-x-5 pt-1 '>
                                        <Linkedin />
                                        <Fb />
                                        <Insta />
                                        <Tw />
                                    </div>
                                </div>
                            </div>
                            <div className='h-[300px] w-[240px] mainimg1'>
                                <img src='/ladka.png' className='h-full w-full' />
                                <div className='bg-white py-3 space-y-1 showhidden1 z-10'>
                                    <div className='text-center font-semibold'>DAVINDER</div>
                                    <div className='text-center'>Co-Founder</div>
                                    <div className='flex justify-center space-x-5 pt-1 '>
                                        <Linkedin />
                                        <Fb />
                                        <Insta />
                                        <Tw />
                                    </div>
                                </div>
                            </div>
                            <div className='h-[300px] w-[240px] mainimg2'>
                                <img src='/ladki2.png' className='h-full w-full' />
                                <div className='bg-white py-3 space-y-1 showhidden2 z-10'>
                                    <div className='text-center font-semibold'>ASHMIN</div>
                                    <div className='text-center'>Managing Director</div>
                                    <div className='flex justify-center space-x-5 pt-1 '>
                                        <Linkedin />
                                        <Fb />
                                        <Insta />
                                        <Tw />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-[60%] mx-auto bg-white mt-32'>
                <div className='flex justify-center'>
                    <div className='w-[300px] h-[260px] bg-black'>
                        <img src='/chair.png' className='h-full w-full' />
                    </div>
                    <div className='w-[300px] h-[260px]  flex justify-center items-center fontabout2 missionbox hover:shadow-xl'>
                        <div className='w-[80%]'>
                            <div className='flex space-x-1 justify-center text-[24px] font-bold'>
                                <span className='our'>OUR</span>
                                <span className='text-[#58B310] mission'>MISSION</span>
                            </div>
                            <div className='text-[16px] text-ellipsis text-[#848484]'>
                                signed to enhance your everyday life and bring joy to your routines. With us, you'll find a wide range of options that combine functionality, style.
                            </div>
                        </div>
                    </div>
                    <div className='w-[300px] h-[260px] bg-black'>
                        <img src='/people.png' className='h-full w-full' />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[300px] h-[260px]  flex justify-center items-center fontabout2 valuebox'>
                        <div className='w-[80%]'>
                            <div className='flex space-x-1 justify-center text-[24px] font-bold'>
                                <span className='our2'>OUR</span>
                                <span className='text-[#58B310] values'>VALUES</span>
                            </div>
                            <div className='text-[16px] text-ellipsis text-[#848484]'>
                                signed to enhance your everyday life and bring joy to your routines. With us, you'll find a wide range of options that combine functionality, style.
                            </div>
                        </div>
                    </div>
                    <div className='w-[300px] h-[260px] bg-[#E6E6E6] flex justify-center items-center'>
                        <img src='/logo.png' className='w-[60%]' />
                    </div>

                    <div className='w-[300px] h-[260px] flex items-center pl-6 companyvalues'>
                        <div className='flex flex-col text-[30px] font-bold fontabout2'>
                            <span className='our3'>OUR</span>
                            <span className='text-[#58B310] company'>COMPANY</span>
                            <span className='companyvalue'>VALUES</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-[300px] h-[260px] bg-black'>
                        <img src='/ourmission.png' className='h-full w-full' />
                    </div>
                    <div className='w-[300px] h-[260px]  flex justify-center items-center fontabout2 visionbox'>
                        <div className='w-[80%]'>
                            <div className='flex space-x-1 justify-center text-[24px] font-bold'>
                                <span className='our4'>OUR</span>
                                <span className='text-[#58B310] vision'>VISION</span>
                            </div>
                            <div className='text-[16px] text-ellipsis text-[#848484]'>
                                signed to enhance your everyday life and bring joy to your routines. With us, you'll find a wide range of options that combine functionality, style.
                            </div>
                        </div>
                    </div>
                    <div className='w-[300px] h-[260px] bg-black'>
                        <img src='/ourmission2.png' className='h-full w-full' />
                    </div>
                </div>
            </div>
        </div>
    </>)
}