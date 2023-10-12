import Leftcontent from "@/components/molecules/leftcontent/leftcontent"
import Form from "@/components/molecules/form/form"

export const Content = () => {
    return (
<main>
    <div className="xs:pt-[80px] sm:pt-[80px] md:pt-[130px] lg:pt-[130px] xl:pt-[130px] xs:pb-[50px] sm:pb-[50px] md:pb-[160px] lg:pb-[160px] xg:pb-[160px] bg-black">
        <div className="flex flex-wrap justify-center mx-auto max-w-[1210px]">
            <Leftcontent />
            <Form />
        </div>
    </div>      
</main>    
)}