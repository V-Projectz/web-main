import { Title, Text } from "@mantine/core";
import Image from "next/image";
import uownLogo from "@/assets/svgs/u-own-logo.svg";

// ========================================================================= //
export default function UOwnPage() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center rounded-lg bg-white">
        <Image alt="logo" src={uownLogo} />
      </div>
      <Title>U-Own</Title>
      <Text>{"Main page for U-Own application!"}</Text>
    </div>
  );
}