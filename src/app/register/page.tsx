import RegisterPage from "@/app/register/register-page";
import "@/styles/home.scss";
import Image from "next/image";

export default function Login() {
  //define

  //useEffect
  return (
    <div className="bg-login grid grid-cols-12 gap-4 px-[120px] py-[75px] text-white">
      <div className="col-span-6"></div>
      <div className="col-span-6">
        <div className="bg-login-form max-w-[600px] rounded-[40px] px-[120px] py-[60px]">
          <div className="flex justify-center">
            <Image width={50} height={50} alt="ic" src={"/icon/ic_logo.svg"} />
          </div>
          <div className="mt-[55px] text-[34px] font-semibold">Đăng ký</div>
          <div className="mt-6">
            <RegisterPage />
          </div>
        </div>
      </div>
    </div>
  );
}
