import { Cloud, Wind, Droplets, Eye, Gauge, Sun } from "lucide-react"

export default function WeatherStatus() {
  return (
    <div className="bg-gradient-to-br bg-[#8B1D3D] p-4 rounded-lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-xl font-medium mb-1">Current Status</h1>
        <p className="text-rose-200 text-sm mb-4">Last updated 2025 - 02-07 04:30</p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Cloud className="w-12 h-12 text-white" />
                <div>
                  <div className="text-3xl font-semibold text-white">25°C</div>
                  <div className="text-rose-200">Partly cloudy</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-rose-200">
                  <Wind className="w-5 h-5" />
                  <span>Wind: 18 km/h NNE</span>
                </div>
                <div className="flex items-center gap-3 text-rose-200">
                  <Wind className="w-5 h-5" />
                  <span>Wind: 18 km/h NNE</span>
                </div>
                <div className="flex items-center gap-3 text-rose-200">
                  <Droplets className="w-5 h-5" />
                  <span>Precipitation: 0 mm</span>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="space-y-4">
              <div>
                <div className="text-2xl text-white">Feels like: 27.4°C</div>
                <div className="text-rose-200">77°F / 81.2°F</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-rose-200">
                  <Eye className="w-5 h-5" />
                  <span>Visibility: 10 km</span>
                </div>
                <div className="flex items-center gap-3 text-rose-200">
                  <Gauge className="w-5 h-5" />
                  <span>Pressure: 1009 mb</span>
                </div>
                <div className="flex items-center gap-3 text-rose-200">
                  <Sun className="w-5 h-5" />
                  <span>UV Index: 0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

