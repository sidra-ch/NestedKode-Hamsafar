import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import VideoPopup from "../../../modals/VideoPopup";

const Cta = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="tg-banner-area tg-banner-space">
            <div className="container">
               <div className="row gx-0">
                  <div className="col-lg-7">
                      <div className="tg-banner-video-wrap">
                         <video 
                            className="w-100" 
                            muted 
                            controls 
                            playsInline
                            style={{ borderRadius: "12px", height: "400px", objectFit: "cover" }}
                         >
                            <source src="/assets/img/afghanistan/Download.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                         </video>
                      </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="tg-banner-content p-relative z-index-1 text-center">
                        <img className="tg-banner-shape" src="/assets/img/banner/shape.png" alt="shape" />
                        <h4 className="tg-banner-subtitle mb-10">Enjoy Summer Deals</h4>
                        <h2 className="tg-banner-title mb-25">Up to 40% Discount!</h2>
                        <div className="tg-banner-btn">
                           <Link to="/tour-details" className="tg-btn tg-btn-switch-animation">
                              <Button text="See Details" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <span className="tg-banner-transparent-bg"></span>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId="eEzD-Y97ges"
         />
      </>
   )
}

export default Cta
