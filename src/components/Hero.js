import React from 'react';

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-100">
              <img 
                src={process.env.PUBLIC_URL + '/profile.jpg'} 
                alt="ジョ ジェウクプロフィール写真" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idyAxNiBoLTE2IHRleHQtZ3JheS00MDAiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDIwIDIwIj4KPHBhdGggZmlsbFJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCA5YTMgMyAwIDEwMC02IDMgMyAwIDAwMCA2em0tNyA5YTcgNyAwIDExMTQgMEgzeiIgY2xpcFJ1bGU9ImV2ZW5vZGQiIC8+Cjwvc3ZnPgo='
                }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            こんにちは、<span className="text-primary-600">ジョ ジェウク</span>です
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light">
            QAエンジニアを目指す志望者
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              お問い合わせ
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              プロジェクトを見る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;