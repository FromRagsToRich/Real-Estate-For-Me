import { grade } from "@/constants";

function useGrade() {
  const 급지목록 = [...new Set(grade.map((item) => item.급지))];

  return {
    급지목록,
  };
}

export { useGrade };
