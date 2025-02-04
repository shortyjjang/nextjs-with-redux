
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  try {
    if (url.pathname === "/api/get-test-data") {
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-type": "application/json" },
      });
    }
    return new Response(
      JSON.stringify({ message: "Failed to fetch notification" }),
      {
        status: 500,
        headers: { "Content-type": "application/json" },
      }
    );
  } catch (e) {
    return new Response(JSON.stringify(e), {
      status: 500,
      headers: { "Content-type": "application/json" },
    });
  }
}
const data = {
    appExamId: 1785,
    examId: "BMBTI",
    subject: "yellow_boy",
    pageQuestionNum: 15,
    leftText: "동의",
    rightText: "반대",
    examQuestions: [
      {
        examQuestionId: 221662,
        view: "ve1",
        name: "동창 모임에서 보통 말이 많은 편이지, 말수가 적은 편은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964109,
            name: "말많은",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964110,
            name: "조용한",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964313,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964314,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964315,
            score: 5,
            seq: 2,
          },
        ],
        seq: 1,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221729,
        view: "ve1",
        name: "일상 생활에서 일반적으로 미리 계획을 세우는 편이지, 즉흥적으로 행동하는 편은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964253,
            name: "대부분의 일에 미리 준비",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964254,
            name: "기회가 있을 때 어떤 흥미로운 일에 대해 열린 태도를 가지고 있습니다.",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964460,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964461,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964462,
            score: 5,
            seq: 2,
          },
        ],
        seq: 2,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221685,
        view: "ve1",
        name: "미래에 대해 이야기하는 사람들과 소통하는 것을 현재에 집중하는 사람들과 소통하는 것보다 선호합니다.",
        examAnswers: [
          {
            examAnswerId: 964155,
            name: "미래를 중요시하는 사람",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964156,
            name: "현재에 중요시하는 사람",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964358,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964359,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964360,
            score: 5,
            seq: 2,
          },
        ],
        seq: 3,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221683,
        view: "ve1",
        name: "캐비닛이나 가전제품을 설치할 때, 설명서를 먼저 보기보다는 먼저 상상하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964151,
            name: "상상력을 기반으로 설치하고 필요한 경우에만 설명서를 참고합니다.",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964152,
            name: "세심하게 설명서를 읽고 그에 따라 설치합니다.",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964373,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964374,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964375,
            score: 5,
            seq: 2,
          },
        ],
        seq: 4,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221728,
        view: "ve1",
        name: "어디론가 가고 싶을 때, 먼저 계획을 세우는 편이지 즉시 떠나는 편은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964251,
            name: "시간과 할 일을 계획하기",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964252,
            name: "너무 많이 생각하지 말고 그냥 가세요.",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964445,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964446,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964447,
            score: 5,
            seq: 2,
          },
        ],
        seq: 5,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221731,
        view: "ve1",
        name: "일정표를 따르는 것이 올바르다고 생각하며, 제약이라고 생각하지 않습니다.",
        examAnswers: [
          {
            examAnswerId: 964257,
            name: "나에게 잘 어울려요",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964258,
            name: "제한적인 느낌",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964466,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964467,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964468,
            score: 5,
            seq: 2,
          },
        ],
        seq: 6,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221706,
        view: "ve1",
        name: "다른 사람들과 함께하는 것보다 혼자 있는 것을 선호합니다.",
        examAnswers: [
          {
            examAnswerId: 964199,
            name: "감정적인",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964200,
            name: "이성적인",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964400,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964401,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964402,
            score: 5,
            seq: 2,
          },
        ],
        seq: 7,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221733,
        view: "ve1",
        name: "일을 처리하는 습관이 일반적으로 마지막까지 미루는 편이며, 일을 미리 완료하는 편은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964263,
            name: "매우 촉박한 마감일 아래 집중적으로 일하기",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964264,
            name: "일정에 따라 일을 계획하고 완료하기",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964469,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964470,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964471,
            score: 5,
            seq: 2,
          },
        ],
        seq: 8,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221668,
        view: "ve1",
        name: "새로운 사람들은 당신의 취미와 관심사를 빠르게 알게 됩니다.",
        examAnswers: [
          {
            examAnswerId: 964121,
            name: "네",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964122,
            name: "아니오",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964346,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964347,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964348,
            score: 5,
            seq: 2,
          },
        ],
        seq: 9,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221736,
        view: "ve1",
        name: "여행을 갈 때, 미리 계획을 세우기보다는 마음가는 대로 하는 것을 선호합니다.",
        examAnswers: [
          {
            examAnswerId: 964271,
            name: "자유로운",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964272,
            name: "대부분의 시간을 미리 계획하기",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964472,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964473,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964474,
            score: 5,
            seq: 2,
          },
        ],
        seq: 10,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221705,
        view: "ve1",
        name: "다른 사람들과 대할 때, 감성적인 면이 이성적인 면보다 우세합니다.",
        examAnswers: [
          {
            examAnswerId: 964197,
            name: "감정을 통해 결정을 내립니다.",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964198,
            name: "논리를 통해 결정을 내립니다.",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964424,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964425,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964426,
            score: 5,
            seq: 2,
          },
        ],
        seq: 11,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221690,
        view: "ve1",
        name: "판단 방식은 가정보다는 객관적인 분석에 기반합니다.",
        examAnswers: [
          {
            examAnswerId: 964165,
            name: "독특하고 새로운 표현에 만족하며, 논리가 조금 떨어져 있어도",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964166,
            name: "저자의 메시지가 명확하면 만족합니다. 스타일이 평범하더라도",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964361,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964362,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964363,
            score: 5,
            seq: 2,
          },
        ],
        seq: 12,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221667,
        view: "ve1",
        name: "융통성 있는 사고를 하는 친구들을 고집스러운 사고를 하는 친구들보다 선호합니다.",
        examAnswers: [
          {
            examAnswerId: 964119,
            name: "거의 누구와든 끊임없이 이야기할 수 있습니다.",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964120,
            name: "많이 말할 수 있지만 주로 특정 상황이나 특정한 사람들과만 이야기합니다.",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964343,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964344,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964345,
            score: 5,
            seq: 2,
          },
        ],
        seq: 13,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221682,
        view: "ve1",
        name: "선생님으로서 사실 위주의 과목(예: 역사)을 가르치는 것을 이론 위주의 과목(예: 물리학)보다 선호합니다.",
        examAnswers: [
          {
            examAnswerId: 964149,
            name: "사실 기반의 과목, 정치 역사와 같은",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964150,
            name: "물리학과 화학과 같은 이론 과목",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964370,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964371,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964372,
            score: 5,
            seq: 2,
          },
        ],
        seq: 14,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221669,
        view: "ve1",
        name: "대부분의 사람들은 당신이 비밀을 간직하는 편이라고 생각하며, 솔직하게 고백하는 편은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964123,
            name: "다른 사람들과 개인적인 일을 공유하는 것을 싫어하는 사람",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964124,
            name: "솔직하고 열린 사람, 이야기하기 쉬운 사람",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964322,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964323,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964324,
            score: 5,
            seq: 2,
          },
        ],
        seq: 15,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221688,
        view: "ve1",
        name: "사람들은 당신의 생각이 직관적이고 명확하기보다는 추상적이고 이해하기 어렵다고 더 자주 생각합니다.",
        examAnswers: [
          {
            examAnswerId: 964161,
            name: "추상적이며 즉시 직관적으로 이해하기 어려운 경우가 많습니다.",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964162,
            name: "구체적이며 매우 명쾌하며, 보통 다시 설명할 필요가 없습니다.",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964382,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964383,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964384,
            score: 5,
            seq: 2,
          },
        ],
        seq: 16,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221686,
        view: "ve1",
        name: "거의 모든 사람과 즐겁게 소통할 수 있으며, 선택적으로 소통하는 편은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964157,
            name: "새로운 아이디어와 창의적인 사고를 가진 사람",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964158,
            name: "체계적인 방식으로 접근하는 사람",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964379,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964380,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964381,
            score: 5,
            seq: 2,
          },
        ],
        seq: 17,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221707,
        view: "ve1",
        name: "다른 사람들과 상호작용할 때, 강경한 태도보다는 부드러운 태도를 보입니다.",
        examAnswers: [
          {
            examAnswerId: 964201,
            name: "온화한",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964202,
            name: "단호한 자신감",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964403,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964404,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964405,
            score: 5,
            seq: 2,
          },
        ],
        seq: 18,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221689,
        view: "ve1",
        name: "다른 사람들로부터 정보를 얻을 때, 개인적인 견해보다는 사실을 더 중요하게 여깁니다.",
        examAnswers: [
          {
            examAnswerId: 964163,
            name: "사실 정보",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964164,
            name: "상대방의 관점",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964385,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964386,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964387,
            score: 5,
            seq: 2,
          },
        ],
        seq: 19,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221671,
        view: "ve1",
        name: '다른 사람들은 당신에게 "너만의 세상에 살지 말라"고 말할 가능성이 더 높으며, "좀 조용히 해라"는 말을 듣는 것은 아닙니다.',
        examAnswers: [
          {
            examAnswerId: 964127,
            name: "당신은 잠시 당신의 세계를 벗어날 수 있나요?",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964128,
            name: "조용할 수 있을까요?",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964328,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964329,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964330,
            score: 5,
            seq: 2,
          },
        ],
        seq: 20,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221735,
        view: "ve1",
        name: "행동에서 감정을 논리보다 더 의존하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964269,
            name: "감정을 따르다",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964270,
            name: "논리를 따르다",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964451,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964452,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964453,
            score: 5,
            seq: 2,
          },
        ],
        seq: 21,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221693,
        view: "ve1",
        name: "당신과 대화한 친구들은 감정적 위로를 받기보다는 생각이 더 명확해진다고 느낍니다.",
        examAnswers: [
          {
            examAnswerId: 964173,
            name: "네",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964174,
            name: "아니요",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964388,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964389,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964390,
            score: 5,
            seq: 2,
          },
        ],
        seq: 22,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221740,
        view: "ve1",
        name: "당신은 즉흥성이 필요한 일보다는 체계적인 일을 선호합니다",
        examAnswers: [
          {
            examAnswerId: 964279,
            name: "체계적인 조직과 계획이 필요한 것",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964280,
            name: "적응력과 즉흥성이 필요한 것",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964457,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964458,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964459,
            score: 5,
            seq: 2,
          },
        ],
        seq: 23,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221708,
        view: "ve1",
        name: "결정을 내릴 때, 감정에 의존하기보다는 신중하게 생각하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964205,
            name: "생각",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964206,
            name: "느낌",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964427,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964428,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964429,
            score: 5,
            seq: 2,
          },
        ],
        seq: 24,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221743,
        view: "ve1",
        name: "일을 할 때, 당신은 장기적인 계획을 세우기보다는 세부 사항에 집중하는 경향이 있으며, 실행하기 어려운 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964285,
            name: "세부사항을 면밀히 계획하지만 시야가 제한적이에요",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964286,
            name: "장기 목표에 넓게 계획을 세우지만 실행에 어려움이 있어요",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964481,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964482,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964483,
            score: 5,
            seq: 2,
          },
        ],
        seq: 25,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221717,
        view: "ve1",
        name: "당신은 광고의 영향을 받아 충동적으로 소비하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964227,
            name: "네, 나중에 후회하는 경우가 많아요",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964228,
            name: "아니요, 제 구매는 합리적인 결정이에요",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964436,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964437,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964438,
            score: 5,
            seq: 2,
          },
        ],
        seq: 26,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221695,
        view: "ve1",
        name: "당신은 문학 작품에서 글쓰기 기술보다는 스토리에 더 감동받는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964177,
            name: "감동적이고 감정이 풍부한 이야기",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964178,
            name: "매혹적인 글쓰기 스타일",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964391,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964392,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964393,
            score: 5,
            seq: 2,
          },
        ],
        seq: 27,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221718,
        view: "ve1",
        name: "당신의 성격은 이성적이기보다는 충동적입니다.",
        examAnswers: [
          {
            examAnswerId: 964229,
            name: "충동적인",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964230,
            name: "합리적인",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964439,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964440,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964441,
            score: 5,
            seq: 2,
          },
        ],
        seq: 28,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221672,
        view: "ve1",
        name: "사람들은 당신이 사교적이기보다는 조용하고 내성적이라고 생각합니다.",
        examAnswers: [
          {
            examAnswerId: 964311,
            name: "조용하고 내성적인",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964312,
            name: "사교적인",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964331,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964332,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964333,
            score: 5,
            seq: 2,
          },
        ],
        seq: 29,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221720,
        view: "ve1",
        name: "당신은 감성적인 사람입니다.",
        examAnswers: [
          {
            examAnswerId: 964233,
            name: "아니요, 나는 논리와 조직을 중시해요",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964234,
            name: "네, 나는 종종 감정에 휩쓸리곤 해요",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964415,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964416,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964417,
            score: 5,
            seq: 2,
          },
        ],
        seq: 30,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221739,
        view: "ve1",
        name: "기회를 놓치는 이유는 신중하지 않아서가 아니라 과도한 생각 때문입니다.",
        examAnswers: [
          {
            examAnswerId: 964277,
            name: "과도한 생각으로 기회를 놓치는 경우",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964278,
            name: "충분한 계획 없이 행동하고 문제를 일으키는 경우",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964475,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964476,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964477,
            score: 5,
            seq: 2,
          },
        ],
        seq: 31,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221670,
        view: "ve1",
        name: "당신의 성격은 활발하기보다는 차분합니다.",
        examAnswers: [
          {
            examAnswerId: 964125,
            name: "고요한",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964126,
            name: "활기찬",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964325,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964326,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964327,
            score: 5,
            seq: 2,
          },
        ],
        seq: 32,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221691,
        view: "ve1",
        name: "다른 사람들과 수다를 떨 때, 미래에 대한 계획보다는 현재의 경험에 대해 이야기할 가능성이 더 높습니다.",
        examAnswers: [
          {
            examAnswerId: 964169,
            name: "현재 일어나고 있는 일, 당신 자신의 생각과 감정",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964170,
            name: "미래의 가능성, 당신의 기대와 전망",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964364,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964365,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964366,
            score: 5,
            seq: 2,
          },
        ],
        seq: 33,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221713,
        view: "ve1",
        name: "당신의 성격은 계산적이기보다는 동정심이 많습니다.",
        examAnswers: [
          {
            examAnswerId: 964215,
            name: "공감하는",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964216,
            name: "사려 깊은",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964406,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964407,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964408,
            score: 5,
            seq: 2,
          },
        ],
        seq: 34,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221714,
        view: "ve1",
        name: "당신은 원칙을 중시하는 편이며, 편안한 태도를 취하는 편은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964217,
            name: "원칙적인",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964218,
            name: "편안한",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964409,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964410,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964411,
            score: 5,
            seq: 2,
          },
        ],
        seq: 35,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221692,
        view: "ve1",
        name: "당신을 설득하기 위해서는 증거가 필요하며, 추측만으로는 부족합니다.",
        examAnswers: [
          {
            examAnswerId: 964171,
            name: "네, 저는 볼 수 있는 것만 믿어요",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964172,
            name: "그렇지 않아요, 때로는 추측도 맞을 수 있어요",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964367,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964368,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964369,
            score: 5,
            seq: 2,
          },
        ],
        seq: 36,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221741,
        view: "ve1",
        name: "당신이 지속하는 이유는 사랑 때문이 아니라 결정을 따르기 때문입니다.",
        examAnswers: [
          {
            examAnswerId: 964281,
            name: "결심과 처음 결정을 고수하는 것",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964282,
            name: "열정과 자신이 좋아하는 일을 하는 것",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964478,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964479,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964480,
            score: 5,
            seq: 2,
          },
        ],
        seq: 37,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221715,
        view: "ve1",
        name: "당신은 의지가 강한 사람입니다.",
        examAnswers: [
          {
            examAnswerId: 964219,
            name: "네",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964220,
            name: "아니요, 나는 약한 순간이 있어요",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964412,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964413,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964414,
            score: 5,
            seq: 2,
          },
        ],
        seq: 38,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221716,
        view: "ve1",
        name: "당신 주변 사람들은 당신이 상상력이 풍부하고 참신한 아이디어를 가지고 있다고 말합니다.",
        examAnswers: [
          {
            examAnswerId: 964225,
            name: "그들의 생각과 감정을 명확히 하다",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964226,
            name: "감정적으로 위로 받다",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964433,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964434,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964435,
            score: 5,
            seq: 2,
          },
        ],
        seq: 39,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221725,
        view: "ve1",
        name: "결정을 내릴 때, 감정보다는 사실을 고려하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964245,
            name: "사실을 고려하는",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964246,
            name: "사람들의 감정과 의견을 고려하는",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964421,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964422,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964423,
            score: 5,
            seq: 2,
          },
        ],
        seq: 40,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221697,
        view: "ve1",
        name: "문제를 설명할 때, 가능한 한 자세히 설명하는 편이며, 간결하게 설명하는 편은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964181,
            name: "가능한 한 상세하게",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964182,
            name: "간결하게",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964394,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964395,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964396,
            score: 5,
            seq: 2,
          },
        ],
        seq: 41,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221673,
        view: "ve1",
        name: "다른 사람들이 특히 열정적일 때, 당신은 불편함을 느끼기보다는 열정적으로 반응하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964129,
            name: "열심히 응대하고 새로운 친구를 사귀려고 해요",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964130,
            name: "불편하게 느끼고 대화를 피하려고 해요",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964349,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964350,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964351,
            score: 5,
            seq: 2,
          },
        ],
        seq: 42,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221722,
        view: "ve1",
        name: "다른 사람들이 규정을 위반할 때, 상황에 따라 융통성 있게 대처하기보다는 규칙에 따라 행동하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964239,
            name: "규정에 따라 행동하고, 그것이 나의 책임이기 때문에",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964240,
            name: "실제 상황을 고려하여 결정하고, 규칙은 중요하지만 유연성도 중요하다",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964442,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964443,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964444,
            score: 5,
            seq: 2,
          },
        ],
        seq: 43,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221700,
        view: "ve1",
        name: "당신은 구체적인 사실을 이해하는 데 더 능숙하며, 추상적인 이론을 이해하는 데는 그렇지 않습니다.",
        examAnswers: [
          {
            examAnswerId: 964187,
            name: "아니요",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964188,
            name: "예",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964397,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964398,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964399,
            score: 5,
            seq: 2,
          },
        ],
        seq: 44,
        dimensionCode: "RZFS",
      },
      {
        examQuestionId: 221723,
        view: "ve1",
        name: "당신의 성격은 단호하기보다는 관용적입니다.",
        examAnswers: [
          {
            examAnswerId: 964241,
            name: "관대한",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964242,
            name: "확고한",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964418,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964419,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964420,
            score: 5,
            seq: 2,
          },
        ],
        seq: 45,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221675,
        view: "ve1",
        name: "많은 사람들에게 둘러싸여 있을 때, 지친다기보다는 흥분하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964133,
            name: "다른 사람들에게 둘러싸여 있으면 활력이 생깁니다",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964134,
            name: "다른 사람들에게 둘러싸여 있으면 피곤하다",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964352,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964353,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964354,
            score: 5,
            seq: 2,
          },
        ],
        seq: 46,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221676,
        view: "ve1",
        name: "파티에서 보통 즐겁게 놀기보다는 지루함을 느끼는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964135,
            name: "가끔 지루함을 느낀다",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964136,
            name: "항상 즐거운 시간을 보낸다",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964355,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964356,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964357,
            score: 5,
            seq: 2,
          },
        ],
        seq: 47,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221747,
        view: "ve1",
        name: "대부분의 경우, 계획대로 일을 하기보다는 자연스럽게 흘러가는 것을 선호합니다.",
        examAnswers: [
          {
            examAnswerId: 964295,
            name: "마음대로",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964296,
            name: "일정을 따르다",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964484,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964485,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964486,
            score: 5,
            seq: 2,
          },
        ],
        seq: 48,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221677,
        view: "ve1",
        name: "혼자 있는 것을 즐기며, 동행이 필요하지 않습니다.",
        examAnswers: [
          {
            examAnswerId: 964137,
            name: "누구와도 잘 지내다",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964138,
            name: "혼자 있을 경향이 있다",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964334,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964335,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964336,
            score: 5,
            seq: 2,
          },
        ],
        seq: 49,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221748,
        view: "ve1",
        name: "큰 프로젝트를 시작할 때, 바로 시작하기보다는 먼저 계획을 세우는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964297,
            name: "시작하기 전에 계획하고 조직하는 것을 좋아합니다",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964298,
            name: "시작하고 어떻게 전개되는지 보는 것을 더 좋아합니다",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964487,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964488,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964489,
            score: 5,
            seq: 2,
          },
        ],
        seq: 50,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221750,
        view: "ve1",
        name: "중요한 작업을 완료할 때, 미리 계획을 세우기보다는 작업을 하면서 생각하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964301,
            name: "작업과 순서를 나열하는 데 시간을 들이다",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964302,
            name: "즉시 시작하다",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964490,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964491,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964492,
            score: 5,
            seq: 2,
          },
        ],
        seq: 51,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221738,
        view: "ve1",
        name: "일을 할 때 계획을 따르는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964275,
            name: "네",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964276,
            name: "아니오",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964454,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964455,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964456,
            score: 5,
            seq: 2,
          },
        ],
        seq: 52,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221711,
        view: "ve1",
        name: "친구들은 당신에게 중요한 결정에 대한 조언을 구할 가능성이 높으며, 감정적 위로를 구하는 것은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964211,
            name: "그들은 직장을 바꾸는 것과 같이 중요한 선택을 해야 합니다.",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964212,
            name: "그들은 어려움을 겪고 감정적인 지원이 필요합니다.",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964430,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964431,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964432,
            score: 5,
            seq: 2,
          },
        ],
        seq: 53,
        dimensionCode: "PDFS",
      },
      {
        examQuestionId: 221664,
        view: "ve1",
        name: "사회적 상호작용에서 주로 다른 사람들을 소개하는 편이지, 소개받는 편은 아닙니다.",
        examAnswers: [
          {
            examAnswerId: 964114,
            name: "다른 사람들이 나를 소개합니다",
            score: 2,
            seq: -2,
          },
          {
            examAnswerId: 964113,
            name: "나는 다른 사람을 소개합니다",
            score: 1,
            seq: -1,
          },
          {
            examAnswerId: 964337,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964338,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964339,
            score: 5,
            seq: 2,
          },
        ],
        seq: 54,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221665,
        view: "ve1",
        name: "다른 사람들이 당신을 이해하는 데는 일반적으로 오랜 시간이 걸립니다.",
        examAnswers: [
          {
            examAnswerId: 964115,
            name: "오랜 시간",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964116,
            name: "무 오래 걸리지 않고 짧은 시간동안",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964340,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964341,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964342,
            score: 5,
            seq: 2,
          },
        ],
        seq: 55,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221730,
        view: "ve1",
        name: "대부분의 일을 할 때, 계획을 따르기보다는 마음대로 하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964255,
            name: "즉흥적인",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964256,
            name: "계획적인",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964463,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964464,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964465,
            score: 5,
            seq: 2,
          },
        ],
        seq: 56,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221734,
        view: "ve1",
        name: "중요한 업무를 받으면, 바로 시작하기보다는 먼저 계획을 세우는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964267,
            name: "시작하기 전에 신중하게 조직하고 계획합니다.",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964268,
            name: "작업 중에서 가장 중요한 부분부터 즉시 시작합니다.",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964448,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964449,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964450,
            score: 5,
            seq: 2,
          },
        ],
        seq: 57,
        dimensionCode: "SHFS",
      },
      {
        examQuestionId: 221663,
        view: "ve1",
        name: "여러 사람들과 함께 있을 때, 알고 있는 사람들만이 아니라 모든 사람과 소통하는 편입니다.",
        examAnswers: [
          {
            examAnswerId: 964111,
            name: "대화에 참여합니다.",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964112,
            name: "나는 내가 친숙한 사람들과만 이야기합니다.",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964316,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964317,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964318,
            score: 5,
            seq: 2,
          },
        ],
        seq: 58,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221666,
        view: "ve1",
        name: "다른 사람들은 당신을 이성적이기보다는 감성적인 사람으로 여깁니다.",
        examAnswers: [
          {
            examAnswerId: 964117,
            name: "혼자 있는 것",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964118,
            name: "다른 사람들과 함께 있는 것",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964319,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964320,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964321,
            score: 5,
            seq: 2,
          },
        ],
        seq: 59,
        dimensionCode: "ZYL",
      },
      {
        examQuestionId: 221684,
        view: "ve1",
        name: "다른 사람들은 당신을 창의적이라기보다는 실용적인 사람으로 평가합니다.",
        examAnswers: [
          {
            examAnswerId: 964153,
            name: "실제 기술이 강한 사람",
            score: 1,
            seq: -2,
          },
          {
            examAnswerId: 964154,
            name: "풍부한 창의력을 가진 사람",
            score: 2,
            seq: -1,
          },
          {
            examAnswerId: 964376,
            score: 3,
            seq: 0,
          },
          {
            examAnswerId: 964377,
            score: 4,
            seq: 1,
          },
          {
            examAnswerId: 964378,
            score: 5,
            seq: 2,
          },
        ],
        seq: 60,
        dimensionCode: "RZFS",
      },
    ],
  };