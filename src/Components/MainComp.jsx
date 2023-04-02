import { motion } from "framer-motion";
import WaveText from "./WaveText";

export function MainComp() {
  return (
    <div class="flex bg-red-500 justify-between p-10">
      <div>
        <div class="flex flex-col">
          <WaveText
            text={"Online meetings can "}
            duration={1}
            fontSize={"52px"}
          ></WaveText>
          <WaveText
            text={"save your company"}
            duration={2}
            fontSize={"52px"}
          ></WaveText>
          <WaveText
            text={"time and money."}
            duration={2.5}
            fontSize={"52px"}
          ></WaveText>
        </div>
        <div class="flex flex-col">
          <WaveText
            text={"Online meetings make it easier for us to conduct"}
            duration={0.5}
            delay={0.01}
          ></WaveText>
          <WaveText
            text={"meetings from various places without the need to"}
            duration={0.5}
            delay={0.01}
          ></WaveText>
          <WaveText text={"travel."} duration={1} delay={0.01}></WaveText>
        </div>
      </div>
      <div class="h-[550px] w-[550px] bg-purple-600"></div>
    </div>
  );
}
