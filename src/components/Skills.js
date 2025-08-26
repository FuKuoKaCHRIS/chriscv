import React, { useState } from "react";

export default function Skills() {
  const [lang, setLang] = useState("ja");

  const content = {
    ko: {
      title: "기술 스택",
      lead:
        "QA 엔지니어로 준비하며 숙련도에 따라 정리했습니다. (솔직함을 위해 현재 수준을 명시)",
      columns: [
        {
          key: "experience",
          icon: "✅",
          name: "사용 경험 있음",
          note: "작은 실습·강의 과제 중심",
          items: [
            "Java",
            "HTML",
            "CSS",
            "GitHub (버전 관리 기본)"
          ]
        },
        {
          key: "learning",
          icon: "🧪",
          name: "학습 중 (기초부터)",
          note: "학습 노트·연습 리포트 작성 중",
          items: [
            "테스트 케이스 작성 (시나리오 설계·기술)",
            "버그 리포트 작성 (재현 절차 정리)",
            "수동 테스트 기초 (기능/회귀)"
          ]
        },
        {
          key: "next",
          icon: "📈",
          name: "앞으로 학습 예정",
          note: "연습 프로젝트에 단계적 적용 예정",
          items: [
            "Selenium / Cypress",
            "Jest",
            "성능 테스트, 우선순위 설정"
          ]
        }
      ],
      foot:
        "* 실무 경력은 준비 중입니다. 학습·연습 결과물은 GitHub와 포트폴리오에 지속적으로 업데이트하겠습니다."
    },
    ja: {
      title: "技術スタック",
      lead:
        "QAエンジニアとして準備を進めるにあたり、現在の習熟度に応じて整理しています（正直さのためレベルを明記）。",
      columns: [
        {
          key: "experience",
          icon: "✅",
          name: "使用経験あり",
          note: "小さな実習・課題ベース",
          items: [
            "Java",
            "HTML",
            "CSS",
            "GitHub（基本的なバージョン管理）"
          ]
        },
        {
          key: "learning",
          icon: "🧪",
          name: "学習中（基礎から）",
          note: "学習ノート・練習レポート作成中",
          items: [
            "テストケース作成（シナリオの設計と記述）",
            "バグレポート作成（再現手順の整理）",
            "手動テストの基礎（機能テスト／リグレッションテスト）"
          ]
        },
        {
          key: "next",
          icon: "📈",
          name: "今後学びたい技術",
          note: "練習プロジェクトに段階的に適用予定",
          items: [
            "Selenium / Cypress",
            "Jest",
            "性能テスト、優先度設定"
          ]
        }
      ],
      foot:
        "※ 実務経験は現在準備中です。学習・練習の成果はGitHubとポートフォリオに継続的に更新します。"
    }
  };

  const t = content[lang];

  return (
    <section id="skills" className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
            <div className="w-20 h-1 bg-primary-600 mb-4"></div>
            <p className="text-sm text-gray-600">{t.lead}</p>
          </div>

          <div className="mt-3 flex items-center gap-2 sm:mt-0">
            <span className="text-xs text-gray-500">Language</span>
            <div className="rounded-2xl border border-gray-200 p-1">
              <button
                aria-label="한국어"
                onClick={() => setLang("ko")}
                className={`rounded-xl px-3 py-1 text-sm transition ${
                  lang === "ko" ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                한국어
              </button>
              <button
                aria-label="日本語"
                onClick={() => setLang("ja")}
                className={`rounded-xl px-3 py-1 text-sm transition ${
                  lang === "ja" ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                日本語
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.columns.map((col) => (
            <div
              key={col.key}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                <div className="text-xl" aria-hidden>{col.icon}</div>
                <h3 className="text-lg font-semibold">{col.name}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-800">
                {col.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">{col.note}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-500 text-center">{t.foot}</p>
      </div>
    </section>
  );
}