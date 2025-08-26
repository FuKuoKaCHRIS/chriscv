import React from 'react';

const Career = () => {
  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            経歴
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                現在準備中です
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                QAエンジニアとしての第一歩のために関連技術とツールを学習しています。 <br/>
                実務経験を積むために様々なプロジェクトを通じてテスト能力を育成し、 <br/>
                体系的な学習と実習を通じて専門性を備えたQAエンジニアになりたいと思います。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-2">学習中</h4>
                  <p className="text-primary-700 text-sm">テスト自動化ツールおよびQA手法</p>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-2">実習中</h4>
                  <p className="text-primary-700 text-sm">個人プロジェクトを通じた実務経験の積み上げ</p>
                </div>
                <div className="p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-2">目標</h4>
                  <p className="text-primary-700 text-sm">専門的なQAエンジニアとして成長</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-500 italic">
                  "品質への情熱と絶え間ない学習を通じて信頼されるQAエンジニアになります。"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;