"use client";

import Section_1 from "@/components/layout/Home/Section_1";
import Section_10 from "@/components/layout/Home/Section_10";
import Section_11 from "@/components/layout/Home/Section_11";
import Section_12 from "@/components/layout/Home/Section_12";
import Section_2 from "@/components/layout/Home/Section_2";
import Section_3 from "@/components/layout/Home/Section_3";
import Section_4 from "@/components/layout/Home/Section_4";
import Section_5 from "@/components/layout/Home/Section_5";
import Section_6 from "@/components/layout/Home/Section_6";
import Section_7 from "@/components/layout/Home/Section_7";
import Section_8 from "@/components/layout/Home/Section_8";
import Section_9 from "@/components/layout/Home/Section_9";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const about = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);
  const client = useRef(null);

  return (
    <div className="w-screen flex flex-col bg-[#242424]">
      <Section_1 about={about} services={services} contact={contact} />
      <Section_2 />
      <Section_3 />
      {/* <Section_11 /> */}
      <div ref={about}>
        <Section_12 />
      </div>
      <div ref={services}>
        <Section_4 />
      </div>
      <div ref={client}>
        <Section_7 />
      </div>
      <div ref={contact}>
        <Section_8 />
      </div>
      <Section_10
        about={about}
        services={services}
        contact={contact}
        client={client}
      />
    </div>
  );
}
