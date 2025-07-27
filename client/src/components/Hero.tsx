
import { ArrowRight, BarChart3, FileSpreadsheet, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75"></div>
            <div className="relative bg-white p-4 rounded-full">
              <FileSpreadsheet className="w-12 h-12 text-purple-600" />
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Excel Analytics
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Platform
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your Excel data into stunning interactive charts and insights. 
          Upload, analyze, and visualize with AI-powered intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-xl backdrop-blur-sm bg-white/10 border-white/20"
          >
            View Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
            <BarChart3 className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Interactive Charts</h3>
            <p className="text-gray-300">Create stunning 2D and 3D visualizations from your Excel data</p>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
            <Zap className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Insights</h3>
            <p className="text-gray-300">Get intelligent analysis and recommendations powered by AI</p>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
            <FileSpreadsheet className="w-10 h-10 text-pink-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Easy Upload</h3>
            <p className="text-gray-300">Simple drag-and-drop interface for .xls and .xlsx files</p>
          </div>
        </div>
      </div>
    </div>
  );
};
