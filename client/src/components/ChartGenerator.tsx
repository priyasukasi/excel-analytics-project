
import { useState, useEffect, useRef } from "react";
import { BarChart3, LineChart, PieChart, Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface ChartGeneratorProps {
  data: any;
}

export const ChartGenerator = ({ data }: ChartGeneratorProps) => {
  const [chartType, setChartType] = useState("bar");
  const [xAxis, setXAxis] = useState("");
  const [yAxis, setYAxis] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (data && data.columns.length > 0) {
      setXAxis(data.columns[0]);
      setYAxis(data.columns[1]);
    }
  }, [data]);

  useEffect(() => {
    if (data && xAxis && yAxis && canvasRef.current) {
      generateChart();
    }
  }, [data, chartType, xAxis, yAxis]);

  const generateChart = async () => {
    if (!canvasRef.current || !data) return;

    // Dynamic import of Chart.js
    const { Chart, registerables } = await import('chart.js');
    Chart.register(...registerables);

    // Destroy existing chart
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const chartData = {
      labels: data.data.map((item: any) => item[xAxis]),
      datasets: [{
        label: yAxis,
        data: data.data.map((item: any) => item[yAxis]),
        backgroundColor: chartType === 'pie' 
          ? [
              '#3B82F6', '#8B5CF6', '#EF4444', '#10B981', '#F59E0B',
              '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
            ]
          : 'rgba(59, 130, 246, 0.8)',
        borderColor: chartType === 'pie' 
          ? [
              '#3B82F6', '#8B5CF6', '#EF4444', '#10B981', '#F59E0B',
              '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
            ]
          : '#3B82F6',
        borderWidth: 2,
        tension: chartType === 'line' ? 0.4 : undefined,
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#E5E7EB'
          }
        },
        title: {
          display: true,
          text: `${yAxis} by ${xAxis}`,
          color: '#E5E7EB',
          font: {
            size: 16,
            weight: 'bold' as const
          }
        }
      },
      scales: chartType === 'pie' ? {} : {
        x: {
          ticks: {
            color: '#9CA3AF'
          },
          grid: {
            color: '#374151'
          }
        },
        y: {
          ticks: {
            color: '#9CA3AF'
          },
          grid: {
            color: '#374151'
          }
        }
      }
    };

    chartInstanceRef.current = new Chart(ctx, {
      type: chartType as any,
      data: chartData,
      options
    });
  };

  const downloadChart = () => {
    if (!canvasRef.current) return;
    
    const link = document.createElement('a');
    link.download = `chart-${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL();
    link.click();
    
    toast.success('Chart downloaded successfully!');
  };

  if (!data) {
    return (
      <div className="text-center py-12">
        <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-400 mb-2">No Data Available</h3>
        <p className="text-gray-500">Please upload an Excel file first to generate charts.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Generate Interactive Charts</h2>
        <p className="text-gray-400 text-lg">
          Customize your visualization and create stunning charts from your data
        </p>
      </div>

      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-white font-medium mb-2">Chart Type</label>
            <Select value={chartType} onValueChange={setChartType}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                <SelectItem value="bar">Bar Chart</SelectItem>
                <SelectItem value="line">Line Chart</SelectItem>
                <SelectItem value="pie">Pie Chart</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">X-Axis</label>
            <Select value={xAxis} onValueChange={setXAxis}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {data.columns.map((column: string) => (
                  <SelectItem key={column} value={column}>{column}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Y-Axis</label>
            <Select value={yAxis} onValueChange={setYAxis}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {data.columns.map((column: string) => (
                  <SelectItem key={column} value={column}>{column}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button
              onClick={downloadChart}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        <div className="relative h-96 bg-gray-900/50 rounded-xl p-4">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
          <h3 className="text-white font-semibold mb-4">Data Preview</h3>
          <div className="text-sm text-gray-300">
            <p><strong>File:</strong> {data.filename}</p>
            <p><strong>Columns:</strong> {data.columns.length}</p>
            <p><strong>Rows:</strong> {data.data.length}</p>
          </div>
        </Card>

        <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
          <h3 className="text-white font-semibold mb-4">Chart Options</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>• Interactive hover tooltips</p>
            <p>• Responsive design</p>
            <p>• Export as PNG or PDF</p>
            <p>• Customizable colors</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
