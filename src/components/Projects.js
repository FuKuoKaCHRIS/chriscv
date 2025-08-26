import React, { useState } from 'react';

const Projects = () => {
  const [lang, setLang] = useState("ja");

  const content = {
    ko: {
      title: "실습 활동",
      subtitle: "QA 엔지니어로 성장하기 위한 학습과 연습 활동들입니다",
      activities: [
        {
          id: 1,
          title: "Java 기초 학습 및 연습",
          description: "프로그래밍 기초를 위한 Java 학습을 진행하고 있습니다. 작은 프로그램들을 만들어보며 코드 이해력을 높이고 있습니다.",
          tags: ["Java", "프로그래밍 기초", "연습"],
          type: "코딩",
          status: "학습중"
        },
        {
          id: 2,
          title: "GitHub 활용 및 버전 관리",
          description: "학습 노트와 연습 코드를 GitHub에 체계적으로 정리하고 있습니다. 협업을 위한 버전 관리 도구 사용법을 익히고 있습니다.",
          tags: ["GitHub", "Git", "버전 관리"],
          type: "도구",
          status: "활용중"
        }
      ],
      moreText: "더 많은 학습 자료와 연습 결과는 GitHub에서 확인하실 수 있습니다",
      githubButton: "GitHub 프로필 보기"
    },
    ja: {
      title: "実習活動",
      subtitle: "QAエンジニアとして成長するための学習と練習活動です",
      activities: [
        {
          id: 1,
          title: "Java基礎学習および練習",
          description: "プログラミング基礎のためのJava学習を進めています。小さなプログラムを作成しながらコード理解力を高めています。",
          tags: ["Java", "プログラミング基礎", "練習"],
          type: "コーディング",
          status: "学習中"
        },
        {
          id: 2,
          title: "GitHub活用およびバージョン管理",
          description: "学習ノートや練習コードをGitHubに体系的に整理しています。協業のためのバージョン管理ツールの使用方法を習得しています。",
          tags: ["GitHub", "Git", "バージョン管理"],
          type: "ツール",
          status: "活用中"
        }
      ],
      moreText: "より多くの学習資料と練習結果はGitHubでご確認いただけます",
      githubButton: "GitHubプロフィールを訪問"
    }
  };

  const getStatusColor = (status) => {
    const statusMap = {
      '진행중': 'bg-blue-100 text-blue-800',
      '進行中': 'bg-blue-100 text-blue-800',
      '완료': 'bg-green-100 text-green-800',
      '完了': 'bg-green-100 text-green-800',
      '학습중': 'bg-purple-100 text-purple-800',
      '学習中': 'bg-purple-100 text-purple-800',
      '활용중': 'bg-orange-100 text-orange-800',
      '活用中': 'bg-orange-100 text-orange-800'
    };
    return statusMap[status] || 'bg-gray-100 text-gray-800';
  };

  const getTypeIcon = (type) => {
    const iconMap = {
      '문서화': '📝', '文書化': '📝',
      '분석': '🔍', '分析': '🔍', 
      '코딩': '💻', 'コーディング': '💻',
      '도구': '🛠️', 'ツール': '🛠️'
    };
    return iconMap[type] || '📚';
  };

  const t = content[lang];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-16">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto sm:mx-0 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto sm:mx-0">
              {t.subtitle}
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2 sm:mt-0 justify-center sm:justify-end">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.activities.map((activity) => (
            <div key={activity.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </span>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {getTypeIcon(activity.type)}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-50 text-primary-700 text-sm rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm">
                      <span className="font-medium">종류:</span> {activity.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">{t.moreText}</p>
          <a 
            href="https://github.com/FuKuoKaCHRIS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            {t.githubButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;