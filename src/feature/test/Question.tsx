"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { setTestData, setAnswer as setAnswerAction } from "@/store/testReducer";

export default function Question() {
  const questions = useAppSelector((state) => state.test.value);
  const completeQty = questions.filter((item) => item?.answer).length;
  const dispatch = useAppDispatch();

  const getLoadingTestData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/get-test-data`
      );
      const data = await response.json();
      dispatch(setTestData(data.examQuestions));
    } catch (error) {
      if (process.env.NODE_ENV === "development") console.error(error);
    }
  };

  const setAnswer = (
    examQuestionId: number,
    answer: {
      examAnswerId: number;
      name: string;
      score: number;
      seq: number;
    }
  ) => {
    dispatch(setAnswerAction({ examQuestionId, answer }));
  };

  useEffect(() => {
    getLoadingTestData();
  }, []);

  if (questions.length > 0)
    return (
      <div className="flex flex-col gap-4 p-4">
        <div className="text-right text-gray-500 text-sm">
          <div className="mb-2 w-full rounded-md bg-gray-100">
            <div
              className="h-2 rounded-md bg-blue-500"
              style={{ width: `${(completeQty / questions.length) * 100}%` }}
            ></div>
          </div>
          {completeQty}/{questions.length}
        </div>
        {questions.map((question) => (
          <div key={question.examQuestionId} className="flex flex-col gap-2">
            {question.name}
            <div className="flex justify-between items-center">
              {question.examAnswers.map((answer, index) => {
                const centerIndex = (question.examAnswers.length - 1) / 2;
                const distanceFromCenter = Math.abs(index - centerIndex);
                const sizeAdjustment = 1 + distanceFromCenter * 0.4; // 크기 조정 비율
                return (
                  <button
                    className={`aspect-square rounded-full ${
                      question.answer?.examAnswerId === answer.examAnswerId
                        ? "border-black border-2"
                        : "border-gray-300 border"
                    }`}
                    key={answer.examAnswerId}
                    style={{
                      width: `${
                        (100 / question.examAnswers.length) * sizeAdjustment
                      }px`,
                    }}
                    onClick={() => setAnswer(question.examQuestionId, answer)}
                  ></button>
                );
              })}
            </div>
          </div>
        ))}
        <button
          className="bg-black text-white rounded-sm px-8 py-3 font-medium disabled:opacity-50"
          disabled={completeQty !== questions.length}
          onClick={() => {
            const totalScore = questions.reduce((acc, cur) => acc + (cur.answer?.score || 0), 0)
            alert(`총 점수: ${totalScore}`)
          }}
        >
          완료하기
        </button>
      </div>
    );
  return <div>Loading...</div>;
}
