import { useState } from "react";
import { Link } from "react-router";
import { Home, Sparkles, Download, Wand2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";

export function ShortsCreator() {
  const [text, setText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!text.trim()) {
      alert("텍스트를 입력해주세요!");
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedVideo("https://www.youtube.com/embed/dQw4w9WgXcQ");
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-green-500 to-teal-500 p-3 rounded-xl">
              <Sparkles className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                퀸즈 숏츠 메이커
              </h1>
              <p className="text-sm text-gray-500">AI로 자동 숏츠 영상 만들기</p>
            </div>
          </div>
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <Home size={18} />
              홈으로
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6">숏츠 내용 입력</h2>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="숏츠로 만들고 싶은 내용을 입력하세요..."
              className="min-h-[300px] mb-6"
            />
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !text.trim()}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-lg py-6"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="animate-spin mr-2" size={20} />
                  생성 중...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2" size={20} />
                  숏츠 영상 만들기
                </>
              )}
            </Button>
          </Card>

          <Card className="p-8 bg-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6">미리보기</h2>
            {generatedVideo ? (
              <div className="space-y-6">
                <div className="aspect-[9/16] bg-black rounded-2xl overflow-hidden">
                  <iframe
                    src={generatedVideo}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                  <Download className="mr-2" size={18} />
                  영상 다운로드
                </Button>
              </div>
            ) : (
              <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Sparkles size={64} className="mx-auto mb-4 opacity-30" />
                  <p>텍스트를 입력하고<br/>숏츠 영상을 만들어보세요</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
}
