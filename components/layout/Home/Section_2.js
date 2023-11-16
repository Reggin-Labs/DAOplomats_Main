import { Helvetica, Philosopher, Urbanist } from "@/components/ui/fonts";
import Image from "next/image";

export default function Section_2() {
  return (
    <div className="w-full flex flex-col gap-[140px] xl:gap-[96px] py-[103px] px-[60px] relative">
      <Image
        src="/images/section_2/bg_main.png"
        layout="fill"
        alt="bg"
        className="absolute top-0 left-0 z-0 object-cover"
      />
      <div className="flex flex-col 2xl:flex-row items-center justify-between w-full h-[331px] relative">
        <h1
          className={
            "text-[#FCFBEB] text-[50px] sm:text-[80px] lg:text-[120px] leading-[125px] " +
            Philosopher.className
          }
        >
          Enabling <br />
          <span className="text-[#DFE225]">Decentralization</span>
        </h1>
        <div className="flex  items-center justify-center gap-[100px]">
          <div className="flex flex-col gap-[6px] items-center text-[#fcfbfb]">
            <p
              className={
                "text-[50px] sm:text-[80px] lg:text-[120px] leading-[125px] " + Philosopher.className
              }
            >
              5M
            </p>
            <p className={"text-[12px] sm:text-[18px] lg:text-[24px] text-center " + Urbanist.className}>
              Token Delegated
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center text-[#fcfbfb]">
            <div
              className={
                "text-[50px] sm:text-[80px] lg:text-[120px] leading-[125px] relative " + Philosopher.className
              }
            >
              10
              <p
                className={
                  "-top-[35%] -right-[45%] text-[24px] sm:text-[34px] lg:text-[48px] absolute " +
                  Philosopher.className
                }
              >
                +
              </p>
            </div>
            <p className={"text-[12px] sm:text-[18px] lg:text-[28px] text-center " + Urbanist.className}>
              Proposals Passed
            </p>
          </div>
          <div className="flex flex-col gap-[6px] items-center text-[#fcfbfb]">
            <p
              className={
                "text-[50px] sm:text-[80px] lg:text-[120px] leading-[125px] " + Philosopher.className
              }
            >
              5
            </p>
            <p className={"text-[12px] sm:text-[18px] lg:text-[28px] " + Urbanist.className}>DAOS</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[150px] relative">
        <Image
          src="/images/section_2/logo_1.png"
          width={300}
          height={58}
          alt="logo_1"
        />
        <Image
          src="/images/section_2/logo_2.png"
          width={300}
          height={58}
          alt="logo_2"
        />
        <Image
          src="/images/section_2/logo_3.png"
          width={300}
          height={58}
          alt="logo_3"
        />
      </div>
    </div>
  );
}
