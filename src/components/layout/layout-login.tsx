import Image from "next/image";
import React, { Suspense } from "react";

export default function LayoutLogin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={null}>
      <div className="h-full w-full bg-[#1F1F1F]">
        <div className="bg-home1 min-h-[700px] w-full bg-cover bg-center px-[75px] py-5 pb-[60px] text-base font-normal text-white">
          <div className="mb-[10px] flex w-full items-center justify-center rounded-[6px] bg-white/10 py-[10px] text-center">
            <Image
              width={24}
              height={24}
              alt="ic"
              src={"/icon/ic_target.svg"}
            />
            <span className="ml-2">
              Join Our Personalized Nutrition Demo For Free
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-[29px] font-extrabold">LOGO</div>
            <div className="flex w-[50%] justify-around py-[10px]">
              <div className="min-w-[120px] rounded-[6px] px-[30px] py-[12px] text-center">
                Home
              </div>
              <div className="min-w-[120px] rounded-[6px] px-[30px] py-[12px] text-center">
                About us
              </div>
              <div className="min-w-[120px] rounded-[6px] px-[30px] py-[12px] text-center">
                Portfolio
              </div>
              <div className="min-w-[120px] rounded-[6px] px-[30px] py-[12px] text-center">
                News
              </div>
              <div className="min-w-[120px] rounded-[6px] bg-[#FA9021] px-[30px] py-[12px] text-center">
                Contact us
              </div>
            </div>
          </div>
          {/* Content Banner  */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex w-[90%] justify-center">
              <div className="flex w-[50%]">
                <div className="max-w-[450px]">
                  <div className="text-[44px] leading-[50px] font-semibold">
                    Thúc đẩy hành trình sáng tạo của bạn
                  </div>
                  <div className="mt-[35px] text-[#838383]">
                    Nâng cao luồng của bạn bằng các công cụ tương tác và các
                    tính năng tăng doanh thu của .... Được thiết kế cho những
                    người phát trực tuyến, nền tảng của chúng tôi thúc đẩy sự
                    đổi mới và làm phong phú thêm cộng đồng sáng tạo.
                  </div>
                  <div className="mt-[100px] flex">
                    <div className="min-w-[120px] rounded-[6px] bg-[#FA9021] px-[30px] py-[12px] text-center">
                      Bắt đầu
                    </div>
                    <div className="ml-7 min-w-[120px] rounded-[6px] border-[1px] border-[#FA9021] px-[30px] py-[12px] text-center text-[#FA9021]">
                      Tìm hiểu thêm
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-left flex w-[50%] items-center">
                <Image
                  src={"/images/Home/img_home2.png"}
                  width={205}
                  height={205}
                  alt="home2"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 images */}
        {children}
        {/* Footer */}
        <div className="bg-footer flex items-center justify-between px-[75px]">
          <div className="">
            <div className="text-[44px] font-bold text-white">
              Start your free trial today!
            </div>
            <div className="mt-3 text-base text-[#999999]">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </div>
          </div>
          <div className="rounded-[6px] bg-[#FA9021] px-[12px] py-[10px] font-semibold text-white">
            Start a Free Trail
          </div>
        </div>
        <div className="grid grid-cols-12 px-[150px] pt-[100px] pb-12 text-base font-normal text-white">
          <div className="col-span-6"></div>
          <div className="col-span-6 flex justify-between">
            <div className="flex flex-col justify-around gap-[10px] text-base font-normal text-[#838383]">
              <div className="text-[#F1F1F1]">About</div>
              <div className="">Help</div>
              <div className="">Contacts</div>
              <div className="">Legal</div>
              <div className="">Privacy Policy</div>
              <div className="">Brand</div>
              <div className="">API for Developers</div>
            </div>
            <div className="">
              <div className="text-left text-white">Follow us</div>
              <div className="mt-3 flex justify-between gap-[15px]">
                <Image
                  src={"/icon/ic_facebook.svg"}
                  width={50}
                  height={50}
                  alt="fb"
                />
                <Image
                  src={"/icon/ic_twiiter.svg"}
                  width={50}
                  height={50}
                  alt="fb"
                />
                <Image
                  src={"/icon/ic_discord.svg"}
                  width={50}
                  height={50}
                  alt="fb"
                />
                <Image
                  src={"/icon/ic_youtube.svg"}
                  width={50}
                  height={50}
                  alt="fb"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
