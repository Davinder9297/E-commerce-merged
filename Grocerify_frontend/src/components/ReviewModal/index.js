// import { FaRegStar } from "react-icons/fa";
// import { RxCross1 } from "react-icons/rx";
// import './reviewmodel.css'
// import { useEffect } from "react";
// export default function ReviewModal(){
//     // const [open, setopen] = useState(true)


//     return(<>
//     <div  id="rating" className={`h-[100vh] w-[100vw]  flex justify-center items-center bg-[#00000099] z-10 fixed  top-0 right-0`}>
//             <div className="h-[70%] w-[30%] z-50 bg-white rounded-xl ">
//                 <div className="w-full flex justify-end p-3">
//                     <RxCross1 className="text-2xl cursor-pointer" onClick={()=>Close()} />
//                 </div>
               
//                <div className="flex w-full justify-center ">
//                     <div className=" w-[80%] flex flex-col space-y-2">
//                     <div className="">
//                     <p className="text-xl font-semibold text-center">Rating</p>
//                     <div className="flex justify-center w-full">
//                     <div class="rating">
//                         <input value="5" name="rating" id="star5" type="radio"/>
//                         <label for="star5"></label>
//                         <input value="4" name="rating" id="star4" type="radio"/>
//                         <label for="star4"></label>
//                         <input value="3" name="rating" id="star3" type="radio"/>
//                         <label for="star3"></label>
//                         <input value="2" name="rating" id="star2" type="radio"/>
//                         <label for="star2"></label>
//                         <input value="1" name="rating" id="star1" type="radio"/>
//                         <label for="star1"></label>
//                     </div>

//                     </div>

//                 </div>

//                 <div className="">
//                     <p className="text-xl font-semibold text-center">Add a review</p>
//                     <textarea placeholder="write a review.."  className="w-full p-3 focus:outline-none border h-[200px] resize-none overflow-y-auto text-wrap"/>
//                 </div>

//                 <div className="w-full flex justify-center mb-2">
//                     <button className="bg-[#58B310] text-white py-2 px-4 rounded-xl">Submit</button>
//                 </div>
//                     </div>
//                </div>
//             </div>
//     </div>
//     </>)
// }