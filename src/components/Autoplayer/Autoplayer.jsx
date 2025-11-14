import React from 'react'
import Marquee from "react-fast-marquee";
import Brand1 from '../../assets/images/Brand1.png'
import Brand2 from '../../assets/images/Brand2.png'
import Brand3 from '../../assets/images/Brand3.png'
import Brand4 from '../../assets/images/Brand4.png'
export default function Autoplayer() {
    return (
        <>
            <Marquee className="mt-5 w-100" gradient gradientWidth='20%'>
                <div className="container d-flex align-items-center gap-5 mt-5 mb-5">
                    <img src={Brand1} alt="Brand1" className="img-fluid mx-3" width={120} />
                    <img src={Brand2} alt="Brand2" className="img-fluid mx-3" width={120} />
                    <img src={Brand3} alt="Brand3" className="img-fluid mx-3" width={120} />
                    <img src={Brand4} alt="Brand4" className="img-fluid mx-3" width={120} />
                    <img src={Brand1} alt="Brand1" className="img-fluid mx-3" width={120} />
                    <img src={Brand4} alt="Brand4" className="img-fluid mx-3" width={120} />
                    <img src={Brand2} alt="Brand2" className="img-fluid mx-3" width={120} />
                </div>
            </Marquee>

        </>
    )
}
