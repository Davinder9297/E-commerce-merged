import { ReactComponent as Loc } from '../../assests/location_green.svg'
import { ReactComponent as Phone } from '../../assests/call_green.svg'
import { ReactComponent as Mail } from '../../assests/green_mail.svg'
import { ReactComponent as Linkidin } from '../../assests/green_link.svg'
import { ReactComponent as Facebook } from '../../assests/geen_fb.svg'
import { ReactComponent as Tw } from '../../assests/green_tw.svg'
import { ReactComponent as Time } from '../../assests/green_time.svg'
import { ReactComponent as Insta } from '../../assests/green_insta.svg'
import { ReactComponent as Whatsapp } from '../../assests/Whatsapp.svg'
import Mask from '../../Assets/Icons/Mask.svg'
import WhatsappFooter from '../../Assets/Icons/whatsapp_footer.svg'
import { Link } from 'react-router-dom'
import './footer.css'
import { useEffect } from 'react'
export default function Footer() {


    const handelClick = () => {

        window.scrollTo(0, 0)

    }

    return (<>
        <div className="h-fit w-full  bg-[#333333] text-white  pt-10 font ">
            <div className='flex justify-between mx-[5vw]'>
                <div className='w-45 sm:w-28'><img src='/logo.png' /></div>
                <Link to={"whatsapp://send?phone=1234567890&text=Hello%2C%20I%20would%20like%20to%20chat"}>
                    <img src={WhatsappFooter} alt="..." className='w-40 mr-10 sm:w-28 sm:mr-5' />
                </Link>
            </div>

            <div className='lg:grid lg:grid-col-5 lg:justify-between py-[3vh] mx-[5vw] sm:grid sm:grid-cols-2 category '>
                <div className="sm:hidden">

                    <div className='pt-2'>Discover endless possibilities with our one-stop shop for all your needs! Explore a world of endless options, where you can find everything you need in one place!</div>
                </div>

                <div className=" space-y-5 sm:space-y-4  ">
                    <div className="flex items-start space-x-2">
                        <Loc className='mt-1 text-[#c7eca9] w-[23px] h-[23px]' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            ThemesGround ,789 main road anytown,CA 12345 USA
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className='mt-1' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            +91 123456789
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail className='mt-1' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            abc121@gmail.com
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Time className='mt-1' />
                        <div className='text-[#FFFFFF] text-[16px] font'>
                            Mon-Sat 9:00 am-6:00 pm
                        </div>
                    </div>
                </div>

                <div className=" text-[#FFFFFF] flex flex-col  space-y-4 sm:space-y-3 ">
                    <Link className='font' to={'/about'} onClick={handelClick}>About Us</Link>
                    <Link className='font' to={'/contact_us'} onClick={handelClick}>Contact Us</Link>
                    {/* <Link className='font' to='/about#teams'>Our Team</Link> */}

                </div>

                <div className="text-[#FFFFFF] flex flex-col  space-y-4 sm:space-y-3 sm:justify-start">
                    <Link to={'/products?category=Electronics'} onClick={handelClick}> Electronics</Link>
                    <Link className='font' to={'/products?category=Grocery'} onClick={handelClick}> Groceries</Link>
                    <Link className='font' to={'/products?category=Health and Beauty'} onClick={handelClick}> Health & Beauty</Link>
                    <Link className='font' to={'/products?category=dairy'} onClick={handelClick}> Dairy </Link>
                    <Link className='font' to={'/products?category=frozen'} onClick={handelClick}>  Frozen</Link>
                    <Link className='font' to={'/products?category=poultary'} onClick={handelClick}>  Poultary</Link>
                    <Link className='font' to={'/stores'}> Stores</Link>
                </div>

                <div className="text-[#FFFFFF] flex flex-col   space-y-4 sm:space-y-3 pl-5">

                    {/* <Link to={'/privacy_policy'} className='font'>Privacy Policy</Link> */}
                    <Link to={'/return_policy'} className='font' onClick={handelClick}>Return Policy</Link>
                    <Link to={'shipping_policy'} className='font' onClick={handelClick}>Shipping Policy</Link>
                    {/* <Link to={'/terms'} className='font'>Terms Of Service</Link> */}
                    <Link className='font' to={'/faq'} onClick={handelClick}>FAQ</Link>
                    {/* <Link to={'/account/coupons'} className='font'>Coupons</Link> */}
                    <Link to={'/shop_registration'} className='flex space-x-2 justify-self-start items-center' onClick={handelClick}>
                        <img className='w-[23px] ' src={Mask} alt="" /> <h4>PARTNER WITH US</h4> </Link>
                </div>


            </div>

            <div className='flex justify-center space-x-10 mt-2'>
                <Link to={'https://www.linkdin.com'}><Linkidin /></Link>
                <Link to={'https://www.facebook.com'}><Facebook /></Link>
                <Link to={'https://www.instagram.com'}><Insta /></Link>
                <Link to={'https://www.twitter.com'}><Tw /></Link>
                {/* <Link><Whatsapp /></Link> */}
            </div>

            <div className='flex justify-center text-white items-center h-[70px] bg-[#222222] mt-3 font space-x-1'>
                <div> © Copy rights are reserved by </div>
                <div className='text-[#58B310]'>Grocerify</div>
            </div>
        </div >
    </>)
}