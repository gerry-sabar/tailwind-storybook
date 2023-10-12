import { Linkedin } from "@/components/atoms/icon/linkedin/linkedin"

const Leftcontent: any = () => {
    return (
<div className="w-full md:w-full lg:w-1/2 xl:w-1/2 p-4 font-gilroy">
  <div className="md:pl-[50px] md:mr-[100px] xl:pl-[50px] xl:pl-[100px] lg:pl-[50px] lg:pl-[100px]">
    <div className="text-[60px] font-semibold mb-[45px] font-allroundgothic">
      <span className="text-[#FFBC01]">Contact</span>
      <p className="text-white">with uxbee</p>
    </div>
    <p className="text-white text-[16px] leading-[30px] mb-[35px]">
      Are you eager to find out how our ecommerce and marketing
      technology can benefit your organization? Engaging in a
      conversation with uxbee is cost-free and can provide valuable
      insights.
    </p>
    <h4 className="text-[30px] mb-[10px] text-white">
      Contact Information
    </h4>
    <div className="text-white">
      <div
        className="flex items-center py-2 transition ease delay-350 hover:text-[#FFBC01]"
      >
        <span>
          <img
            src="https://uxbee.eu/assets/images/contact/icon-02.svg"
            alt=""
            className="w-[30px] h-auto"
          />
        </span>
        <span className="ml-4 text-[23px]">
          <a href="">Elektronicaweg 37, 2628 XG Delft</a>
        </span>
      </div>
      <div
        className="flex items-center py-2 transition ease delay-350 hover:text-[#FFBC01]"
      >
        <span>
          <img
            src="https://uxbee.eu/assets/images/contact/icon-03.svg"
            alt=""
            className="w-[30px] h-auto"
          />
        </span>
        <span className="ml-4 text-[23px]">
          <a href="">00 31 (0) 15 - 79 00 100</a>
        </span>
      </div>
      <div
        className="flex items-center py-2 transition ease delay-350 hover:text-[#FFBC01]"
      >
        <span>
          <img
            src="https://uxbee.eu/assets/images/contact/icon-01.svg"
            alt=""
            className="w-[30px] h-auto"
          />
        </span>
        <span className="ml-4 hover:text[#FFBC01] text-[23px]">
          <a href="">hello@uxbee.nl</a>
        </span>
      </div>
    </div>
    <div className="flex text-black mt-[45px] text-[23px]">
      <a
        href="https://www.linkedin.com/company/uxbee-experience/"
        target="_blank"
        rel="noopener"
      >
      </a>
    </div>
  </div>
</div>        
    )
}

export default Leftcontent
