import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "テスト手法",
      items: ["ソフトウェアテスト", "機能テスト", "性能テスト", "リグレッションテスト"]
    },
    {
      category: "バグ管理",
      items: ["バグトラッキング", "レポーティング", "再現シナリオ作成", "優先度設定"]
    },
    {
      category: "自動化ツール",
      items: ["Selenium", "Cypress", "Jest", "テストシナリオ自動化"]
    },
    {
      category: "コラボレーションツール",
      items: ["GitHub", "Git", "Jira", "ドキュメント作成"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            技術スタック
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            QAエンジニアとして保有している技術とツールです
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d={index === 0 ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" :
                             index === 1 ? "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" :
                             index === 2 ? "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" :
                             "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
              </div>
              
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">継続的な学習を通じて新しい技術を習得しています</p>
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full">
            <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            <span className="text-primary-700 font-medium">成長するQAエンジニア</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;