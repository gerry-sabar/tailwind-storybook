import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Contact } from "@/components/atoms/button/contact/contact";

const FooterTop: any = () => {
  return (
    <div id="footer-top font-gilroy">
      <div className="bg-gradient-to-b from-black from-50% to-white to-50%">
        <div className="flex mx-auto max-w-[1210px] xs:w-full sm:w-full xs:max-w-[90%] sm:max-w-[700px] md:max-w-[760px]">
          <div className="w-full bg-[#FFBC01] rounded-l-3xl rounded-tr-3xl">
            <div className="px-[50px] py-[50px] xs:py-[35px] xs:px-[15px]">
              <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">

                <div className="pr-[50px] xs:pr-[0px] sm:pr-[0px]">
                  <h4 className="text-[24px] font-semibold leading-[28px] font-allroundgothic">
                    Uxbee creates a successful e-commerce & marketing platform
                    together with you.
                  </h4>
                  <p className="mt-[25px] text-[17px] leading-[30px] font-semibold">
                    Let technology work in your favor from now on and bring
                    magic to your e-commerce & marketing activities.
                  </p>
                </div>

                <div className="pl-[30px] pr-[140px] xs:py-[35px] xs:px-[0px]">
                  <h4 className="text-[24px] font-semibold leading-[28px] mb-[16px] font-allroundgothic">
                    Do you have a question? Or would you like to know more about
                    uxbee?
                  </h4>
                  <div className="flex items-center">
                    <div className="pr-[20px]">
                      <img
                        src="https://uxbee.eu/-/media/project/uxbee/uxbee-new/team/yellow-background/theo-contact.png?h=78&iar=0&w=78&hash=ABC132BA690D40E8787560D116DDEDE4"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col space-y-[10px] text-[16px]">
                      <Contact
                        type="phone"
                        label="015 - 79 00 100"
                        link="tel://+31157900100"
                      />
                      <Contact
                        type="email"
                        label="hello@uxbee.nl"
                        link="mailto:hello@uxbee.nl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FooterTop;
