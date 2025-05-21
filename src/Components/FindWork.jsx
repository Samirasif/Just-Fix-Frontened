import { LockKeyhole, FileText, User } from "lucide-react";

const FindWork = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
       
        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          ~Find the best Talent for your work
        </h1>
        <div className="w-full h-px bg-gray-200 mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {/* Create a Client Account */}
          <div className="p-6 rounded-lg border border-gray-200 flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <LockKeyhole className="text-blue-500 h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium text-lg text-gray-900">
                Create a Client Account
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                First you have to create a account here
              </p>
            </div>
          </div>

          {/* Post a job */}
          <div className="p-6 rounded-lg border border-gray-200 flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="text-blue-500 h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium text-lg text-gray-900">Post a job</h3>
              <p className="text-gray-500 text-sm mt-1">
                First you have to create a account here
              </p>
            </div>
          </div>

          {/* Hire a talent */}
          <div className="p-6 rounded-lg border border-gray-200 flex items-start gap-4">
            <div className="relative">
              <div className="bg-green-100 p-3 rounded-lg">
                <User className="text-green-500 h-6 w-6" />
              </div>
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                HIRED
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg text-gray-900">
                Hire a talent for work
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                First you have to create a account here
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image Section */}
        <div className="relative bg-blue-50 rounded-lg p-6 flex items-center justify-center">
          {/* Decorative SVGs */}
          <div className="absolute top-4 right-16 text-gray-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="absolute bottom-16 right-4 text-gray-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Image */}
          <img
            src="/src/assets/getService.jpeg"
            alt="Professional working on laptop"
            width={400}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FindWork;
