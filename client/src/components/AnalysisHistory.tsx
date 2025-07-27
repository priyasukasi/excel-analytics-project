
import { useState } from "react";
import { BarChart3, Calendar, Download, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const AnalysisHistory = () => {
  const [analyses] = useState([
    {
      id: 1,
      filename: "Sales_Data_Q1.xlsx",
      chartType: "Bar Chart",
      createdAt: "2024-01-15",
      columns: ["Date", "Sales", "Region"],
      status: "completed"
    },
    {
      id: 2,
      filename: "Revenue_Analysis.xlsx",
      chartType: "Line Chart",
      createdAt: "2024-01-12",
      columns: ["Month", "Revenue", "Profit"],
      status: "completed"
    },
    {
      id: 3,
      filename: "Product_Performance.xlsx",
      chartType: "Pie Chart",
      createdAt: "2024-01-10",
      columns: ["Product", "Units_Sold", "Category"],
      status: "completed"
    },
    {
      id: 4,
      filename: "Marketing_ROI.xlsx",
      chartType: "Bar Chart",
      createdAt: "2024-01-08",
      columns: ["Campaign", "Spend", "Conversions"],
      status: "processing"
    }
  ]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Analysis History</h2>
        <p className="text-gray-400 text-lg">
          View and manage your previous data analyses and charts
        </p>
      </div>

      <div className="grid gap-6">
        {analyses.map((analysis) => (
          <Card key={analysis.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-xl ${
                  analysis.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  <BarChart3 className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-white font-semibold text-lg">{analysis.filename}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {analysis.createdAt}
                    </span>
                    <span>{analysis.chartType}</span>
                    <span>{analysis.columns.length} columns</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {analysis.status === 'completed' ? (
                  <>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </>
                ) : (
                  <div className="flex items-center text-yellow-400">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400 mr-2"></div>
                    Processing...
                  </div>
                )}
                
                <Button size="sm" variant="outline" className="border-red-600 text-red-400 hover:bg-red-600/20">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex flex-wrap gap-2">
                {analysis.columns.map((column, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                  >
                    {column}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {analyses.length === 0 && (
        <div className="text-center py-12">
          <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-400 mb-2">No Analysis History</h3>
          <p className="text-gray-500">Your analysis history will appear here once you start creating charts.</p>
        </div>
      )}
    </div>
  );
};
