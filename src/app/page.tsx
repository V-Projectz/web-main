import { Text, Title } from "@mantine/core";
import { DisplayLottie } from "@/components/display-lottie";

// ========================================================================= //
export default function RootPage() {
  return (
    <div className="text-center">
      <Title>Welcome to V-Projectz!</Title>
      <Text>{"This website is currently under heavy construction..."}</Text>
      <DisplayLottie
        src={"/lotties/site-under-construction.lottie"}
        loop
        autoplay
      />
    </div>
  );
}
