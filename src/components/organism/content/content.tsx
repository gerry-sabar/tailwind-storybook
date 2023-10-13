import Leftcontent from "@/components/molecules/leftcontent/leftcontent";
import Form from "@/components/molecules/form/form";

export const Content = () => {
  return (
    <main>
      <div className="pt-[130px] xs:pt-[100px] sm:pt-[100px] md:pt-[100px] pb-[160px] bg-black">
        <div className="grid grid-cols-2 xs:grid-cols-1 justify-center mx-auto max-w-[1210px]">
          <Leftcontent />
          <Form />
        </div>
      </div>
    </main>
  );
};
