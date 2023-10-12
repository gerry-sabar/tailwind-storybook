import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Contact } from "@/components/atoms/button/contact/contact";

const FooterTop: any = () => {
    return(
<div id="footer-top font-gilroy">
  <div className="bg-gradient-to-b from-black from-50% to-white to-50% px-4 xs:pt-[75px] sm:pt-[70px]">
    <div className="flex flex-wrap justify-center mx-auto max-w-[1010px]">
      <div className="w-full p-2 bg-[#FFBC01] rounded-3xl">
        <div className="xs:p-4 sm:p-4 md:pt-[35px] md:selection:px-[49px] pb-[25px]">
          <div className="flex flex-wrap">
            <div className="max-w-[400px] w-full inline md:mr-[98px] xl:mr-[98px] lg:mr-[98px]">
              <h4 className="text-[24px] font-semibold leading-[28px] font-allroundgothic">
                Uxbee creates a successful e-commerce & marketing platform
                together with you.
              </h4>
              <p className="mt-[25px] text-[17px] leading-[30px] font-semibold">
                Let technology work in your favor from now on and bring
                magic to your e-commerce & marketing activities.
              </p>
            </div>
            <div className="max-w-[315px] w-full inline">
              <h4 className="text-[24px] font-semibold leading-[28px] mb-[16px] xs:mt-[25px] font-allroundgothic">
                Do you have a question? Or would you like to know more
                about uxbee?
              </h4>
              <div className="flex items-center">
                <div className="pr-[20px]">
                  <img
                    src="https://uxbee.eu/-/media/project/uxbee/uxbee-new/team/yellow-background/theo-contact.png?h=78&iar=0&w=78&hash=ABC132BA690D40E8787560D116DDEDE4"
                    alt=""
                  />
                </div>
                <div className="flex flex-col space-y-[10px] text-[16px]">
                  <Contact type="phone" label="015 - 79 00 100" link="tel://+31157900100" />
                  <Contact type="email" label="hello@uxbee.nl" link="mailto:hello@uxbee.nl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>        
    )
}

export default FooterTop;