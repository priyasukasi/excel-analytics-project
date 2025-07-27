
import { BarChart, Download, Shield, Sparkles, Upload, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Smart File Upload",
      description: "Drag and drop Excel files with automatic column detection and validation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart,
      title: "Advanced Charting",
      description: "Create interactive 2D and 3D charts with customizable axes and styling",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Insights",
      description: "Get intelligent data analysis and trend predictions automatically",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Download,
      title: "Export & Share",
      description: "Download charts as PNG or PDF and share with your team",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security with encrypted data storage",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with role-based access and sharing controls",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Data Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform your Excel data into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
