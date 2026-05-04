import { Link } from "react-router";
import { Book, Music, Video, Sparkles, ArrowRight, Clapperboard } from "lucide-react";
import { Button } from "../components/ui/button";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* 헤더 */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
              <Sparkles className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                퀸즈미라클 크리에이티브
              </h1>
              <p className="text-sm text-gray-500">모든 창작 도구를 한곳에</p>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 영역 */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* 히어로 섹션 */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            창작의 모든 것, 한곳에서
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            책 쓰기부터 음악 만들기, 숏츠 영상, 동영상 플랫폼까지<br/>
            퀸즈미라클과 함께 당신의 창작을 시작하세요
          </p>
        </div>

        {/* 앱 카드들 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 퀸즈북 메이커 */}
          <Link to="/book" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Book className="text-white" size={48} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                퀸즈북 메이커
              </h3>
              
              <p className="text-gray-600 mb-6">
                책을 쉽게 쓰고, 챕터를 관리하고, 아름다운 PDF로 다운로드하세요
              </p>
              
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  챕터별 글쓰기
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  표지 디자인
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  PDF 다운로드
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                책 만들기 시작
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Link>

          {/* 퀸즈 뮤직 스튜디오 */}
          <Link to="/music" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Music className="text-white" size={48} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                퀸즈 뮤직 스튜디오
              </h3>

              <p className="text-gray-600 mb-6">
                피아노와 드럼으로 음악을 만들고 녹음해보세요
              </p>

              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  피아노 연주
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  드럼 비트
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  녹음 & 재생
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                음악 만들기 시작
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Link>

          {/* 퀸즈 숏츠 메이커 */}
          <Link to="/shorts" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Clapperboard className="text-white" size={48} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                퀸즈 숏츠 메이커
              </h3>

              <p className="text-gray-600 mb-6">
                텍스트만 입력하면 AI가 자동으로 숏츠 영상을 만들어줘요
              </p>

              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  자동 영상 생성
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  배경음악 추가
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  자막 자동 생성
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
                숏츠 만들기 시작
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Link>

          {/* 퀸즈미라클 BIZ */}
          <Link to="/biz" className="group">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Video className="text-white" size={48} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                퀸즈미라클 BIZ
              </h3>
              
              <p className="text-gray-600 mb-6">
                실제 유튜브 영상 26개가 담긴 동영상 플랫폼
              </p>
              
              <ul className="space-y-2 mb-6 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  롱폼 5개
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  숏츠 21개
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  카테고리 필터
                </li>
              </ul>
              
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                영상 보러가기
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </Link>
        </div>

        {/* 특징 섹션 */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            왜 퀸즈미라클인가요?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold mb-2">간편함</h4>
              <p className="text-gray-600">
                복잡한 설치 없이 바로 시작하세요
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="text-xl font-bold mb-2">무료</h4>
              <p className="text-gray-600">
                모든 기능을 무료로 이용하세요
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold mb-2">시니어 친화적</h4>
              <p className="text-gray-600">
                누구나 쉽게 사용할 수 있어요
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            지금 바로 시작하세요!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            회원가입 없이, 무료로 모든 기능을 사용할 수 있습니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                책 만들기
              </Button>
            </Link>
            <Link to="/music">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                음악 만들기
              </Button>
            </Link>
            <Link to="/shorts">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                숏츠 만들기
              </Button>
            </Link>
            <Link to="/biz">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                영상 보기
              </Button>
            </Link>
          </div>
        </div>

        {/* 푸터 */}
        <footer className="mt-16 text-center text-gray-600">
          <p className="text-sm">
            © 2024 퀸즈미라클아틀리에 | 건강기능식품 · 화장품 · 패션&속옷 · 해외구매대행
          </p>
          <p className="text-sm mt-2">
            유튜브: 퀸즈미라클 · 명언한입 | 출간: 총 114권 (부크크 72권, 유페이퍼 39권, 작가와 1권, 아마존 2권)
          </p>
        </footer>
      </main>
    </div>
  );
}
