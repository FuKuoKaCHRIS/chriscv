import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ウェブアプリケーションテスト自動化",
      description: "Seleniumを活用したE2Eテストシナリオ構築および自動化プロジェクトです。主要なユーザーフローのリグレッションテストを自動化し、テスト効率を向上させました。",
      tags: ["Selenium", "JavaScript", "テスト自動化"],
      githubUrl: "https://github.com/username/project1",
      status: "完成"
    },
    {
      id: 2,
      title: "モバイルアプリテストケース設計",
      description: "Android/iOSハイブリッドアプリに対する体系的なテストケース設計および実行プロジェクトです。デバイス別互換性とユーザビリティテストを中心に進めました。",
      tags: ["モバイルテスト", "テストケース", "互換性テスト"],
      githubUrl: "https://github.com/username/project2",
      status: "進行中"
    },
    {
      id: 3,
      title: "APIテストツール開発",
      description: "REST APIエンドポイントに対する自動化されたテストツールを開発しました。PostmanとNewmanを活用してCI/CDパイプラインに統合可能なテスト環境を構築しました。",
      tags: ["APIテスト", "Postman", "CI/CD"],
      githubUrl: "https://github.com/username/project3",
      status: "計画中"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case '完成': return 'bg-green-100 text-green-800';
      case '進行中': return 'bg-blue-100 text-blue-800';
      case '計画中': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            プロジェクト
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            QAエンジニアとして進めた主要プロジェクトです
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-50 text-primary-700 text-sm rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                  
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                    詳しく見る
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">さらに多くのプロジェクトはGitHubで確認できます</p>
          <a 
            href="https://github.com/username" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            GitHubプロフィールを訪問
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;