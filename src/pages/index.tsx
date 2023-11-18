import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { first, second, third, forth, fifth, gyeonggi } from "@/constants";
import { useGrade } from "@/hooks/useGrade";
import Box from "@/components/Box";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { 급지목록 } = useGrade();
  console.log(급지목록);
  return (
    <main>
      <Layout>
        <div className="flex flex-col gap-10">
          <Box places={first} />
          <Box places={second} />
          <Box places={third} />
          <Box places={forth} />
          <Box places={fifth} />
          <Box places={gyeonggi} />
        </div>
      </Layout>
    </main>
  );
}
