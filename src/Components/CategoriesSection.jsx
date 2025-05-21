import {
    ShoppingCart,
    Palette,
    Axe,
    Users,
    ClipboardList,
    GraduationCap,
    Cpu,
    Share2,
    FileText,
    Code,
  } from "lucide-react"
  
  export default function CategoriesSection() {
    const categories = [
      { name: "Electrician", jobs: 7, icon: ShoppingCart },
      { name: "Painter", jobs: 8, icon: Palette },
      { name: "Plumber", jobs: 5, icon: Axe },
      { name: "Cleaner", jobs: 4, icon: Users },
      { name: "Shifting", jobs: 2, icon: ClipboardList },
      { name: "Tutor", jobs: 8, icon: GraduationCap },
      { name: "Technology", jobs: 5, icon: Cpu },
      { name: "Social Media", jobs: 7, icon: Share2 },
      { name: "Content Writer", jobs: 8, icon: FileText },
      { name: "Software", jobs: 8, icon: Code },
    ]
  
    return (
      <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-purple-100 rounded-full text-xs font-medium text-purple-800 mb-4">
              CATEGORIES
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by categories</h2>
            <p className="text-gray-600">The digital marketing solution provider for Ford Dealers</p>
          </div>
  
          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
                    <p className="text-xs text-green-600">{category.jobs} jobs available</p>
                  </div>
                </div>
              )
            })}
          </div>
  
          {/* Pagination Dots */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2, 3, 4].map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${index === 0 ? "bg-gray-800" : "bg-gray-300"}`}
              />
            ))}
          </div> */}
        </div>
      </section>
    )
  }
  

