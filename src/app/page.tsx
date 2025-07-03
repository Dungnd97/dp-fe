import LayoutLogin from "@/components/layout/layout-login";
import "@/styles/home.scss";
import Image from "next/image";
export default function Home() {
  return (
    <LayoutLogin>
      {/* Section 2 images */}
      <div className="px-auto flex items-center justify-center bg-[#1F1F1F] px-[75px] py-[100px]">
        <div className="flex w-[90%]">
          <div className="w-[50%]">
            <Image
              src="/images/Home/img_home3.png"
              alt="home3"
              width={700}
              height={355}
              className="max-w-[700px]"
            />
          </div>
          <div className="ml-[90px] w-[50%] max-w-[470px] text-white">
            <div className="space-x-1.5 text-[30px] font-bold">
              Lorem Ipsum is simply dummy text.
            </div>
            <div className="mt-[12px] text-sm leading-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy .
            </div>
            <div className="mt-[25px]">
              <div className="flex items-center">
                <Image
                  alt="ic"
                  width={24}
                  height={24}
                  src={"/icon/ic_success.svg"}
                />
                <span className="ml-2">Lorem Ipsum is simply</span>
              </div>
              <div className="mt-5 flex items-center">
                <Image
                  alt="ic"
                  width={24}
                  height={24}
                  src={"/icon/ic_success.svg"}
                />
                <span className="ml-2">Lorem Ipsum is simply</span>
              </div>
              <div className="mt-5 flex items-center">
                <Image
                  alt="ic"
                  width={24}
                  height={24}
                  src={"/icon/ic_success.svg"}
                />
                <span className="ml-2">Lorem Ipsum is simply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-12 items-center bg-[#1F1F1F] px-[75px]">
        <div className="col-span-5 flex max-w-[400px] flex-col justify-center">
          <div className="">
            <div className="font-bold text-[#FA9021]">
              <span className="text-[60px]">$500</span>
              <span className="ml-2 text-[35px]">Fine Dining</span>
            </div>
            <div className="mt-[25px] text-right text-xl font-medium text-white">
              Bottle of Champagne Fine Sushi Tower For 2+ Dessert
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <Image
            alt="home4"
            width={1100}
            height={500}
            src="/images/Home/img_home4.png"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-12 items-center bg-[#1F1F1F] px-[75px]">
        <div className="col-span-7">
          <Image
            alt="home5"
            width={1100}
            height={500}
            src="/images/Home/img_home5.png"
          />
        </div>
        <div className="col-span-5 flex flex-col items-end justify-center">
          <div className="w-full max-w-[400px]">
            <div className="text-right font-bold text-[#FA9021]">
              <span className="text-[60px]">$500</span>
              <span className="ml-2 text-[35px]">Fine Dining</span>
            </div>
            <div className="flex-end mt-[25px] flex justify-end text-right text-xl font-medium text-white">
              <div className="max-w-[200px]">
                Bottle of Champagne Fine Sushi Tower For 2+ Dessert
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 images */}
      <div className="px-[150px] py-[100px] text-center text-white">
        <div className="text-[30px] font-bold">Our Recent Projects</div>
        <div className="mx-auto mt-[15px] max-w-[480px] text-center text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </div>
        <div className="mt-[70px] grid grid-cols-12 gap-8">
          <Image
            alt="img_home_section1"
            width={382}
            height={225}
            src="/images/Home/img_home_section1.png"
            className="col-span-4"
          />
          <Image
            alt="img_home_section1"
            width={382}
            height={225}
            src="/images/Home/img_home_section2.png"
            className="col-span-4"
          />
          <Image
            alt="img_home_section1"
            width={352}
            height={225}
            src="/images/Home/img_home_section3.png"
            className="col-span-4"
          />
          <Image
            alt="img_home_section1"
            width={246}
            height={225}
            src="/images/Home/img_home_section4.png"
            className="col-span-3"
          />
          <Image
            alt="img_home_section1"
            width={401}
            height={225}
            src="/images/Home/img_home_section5.png"
            className="col-span-4"
          />
          <Image
            alt="img_home_section1"
            width={469}
            height={225}
            src="/images/Home/img_home_section6.png"
            className="col-span-5"
          />
        </div>
      </div>
      {/* Section 4 social  */}
      <div className="grid grid-cols-12 px-[150px] py-[100px] text-left text-white">
        <div className="col-span-6 pr-20">
          <div className="w-fit bg-white/10 p-2">
            <Image src={"/icon/ic_missile.svg"} width={42} height={42} alt="" />
          </div>
          <div className="mt-5 text-left text-[28px] leading-10">
            Compatible & Friendly
          </div>
          <div className="mt-5 text-[#838383]">
            Chúng tôi hợp tác chặt chẽ với các nền tảng phát trực tuyến phổ biến
            và luôn tuân thủ quy tắc. Chúng tôi ở đây để thúc đẩy hành trình
            phát trực tuyến của bạn, bất kể nó diễn ra ở đâu.
          </div>
        </div>
        <div className="col-span-6">
          <Image
            src={"/images/Home/img_home_social.png"}
            width={353}
            height={184}
            alt="social"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 px-[150px] py-[100px] text-left text-white">
        <div className="col-span-6 text-center">
          <Image
            src={"/images/Home/img_home_payment.png"}
            width={424}
            height={228}
            alt="social"
          />
        </div>
        <div className="col-span-6">
          <div className="w-fit bg-white/10 p-2">
            <Image src={"/icon/ic_wallet.svg"} width={42} height={42} alt="" />
          </div>
          <div className="mt-5 text-left text-[28px] leading-10">
            Donate dễ dàng và Rút tiền an toàn
          </div>
          <div className="mt-5 text-[#838383]">
            Đảm bảo trải nghiệm liền mạch cho cả người phát trực tiếp và người
            xem.Với nhiều phương thức thanh toán khác nhau, những người ủng hộ
            bạn có thể dễ dàng đóng góp và bạn có thể rút tiền một cách an toàn.
          </div>
        </div>
      </div>
      {/* Footer */}
    </LayoutLogin>
  );
}
