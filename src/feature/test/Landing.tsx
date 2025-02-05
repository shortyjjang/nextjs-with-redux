"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Landing() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between max-h-[500px] h-full">
      <h1 className="text-2xl font-bold">
        16가지 성격 유형, 당신은 어떤 유형인가요?
      </h1>
      <p>
        8가지 선호, 외향성(E) 또는 내향성(I), 감각(S) 또는 직관(N), 사고(T) 또는
        감정(F), 판단(J) 또는 인식(P)이 16가지 문자 유형을 형성하며, 이는 사람들
        간의 자연스러운 성격 차이를 과학적으로 설명합니다. 당신이 창의적인
        몽상가이든 실용적인 실행가이든, 이 테스트는 당신의 삶의 질을 향상시키고
        새로운 자기 성장 여정을 시작하는 데 도움을 줄 것입니다.
      </p>
      <button
        className="bg-black text-white rounded-sm px-8 py-3 font-medium"
        onClick={() => router.push("/test")}
      >
        시작하기
      </button>
    </div>
  );
}
