import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            紹介
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-lg leading-relaxed text-gray-700 space-y-6">
              <p>
                私は丁寧な性格と誠実な態度を基に、ソフトウェア品質を保証するQAエンジニアを目標としています。
                ユーザーの立場から問題を発見し改善点を提案する過程で大きなやりがいを感じ、実際のサービス品質向上に貢献したいと思います。
              </p>
              
              <p>
                現在はソフトウェアテスト理論と自動化ツールを学習し、小さな実習プロジェクトを通じて経験を積み重ねています。
                初めてのキャリアを準備する段階ですが、迅速に適応しチームの一員として貢献できるよう着実に成長しています。
              </p>
              
              <p>
                継続的な学習と向上心を持って専門性を高め、
                信頼性の高い高品質なソフトウェア開発に貢献していきたいと考えています。
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">細心さ</h3>
                  <p className="text-gray-600">小さな詳細も見逃さない丁寧な検証</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">コミュニケーション</h3>
                  <p className="text-gray-600">開発チームとの円滑な協業とフィードバック</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">学習</h3>
                  <p className="text-gray-600">新しい技術と手法への情熱</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;