import requestQuoteImg from "../assets/requestQuoteImg.jpeg"

const RequestQuote = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        
        {/* Left Image */}
        <div className="h-full">
          <img 
            src={requestQuoteImg} 
            alt="Workers" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Request Quote
          </h2>
          
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Name */}
            <input 
              type="text" 
              placeholder="Name *"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            
            {/* Email */}
            <input 
              type="email" 
              placeholder="Email *"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            
            {/* Freight Type */}
            <select 
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option>Select Freight</option>
              <option>Sea</option>
              <option>Air</option>
              <option>Road</option>
            </select>
            
            {/* Distance */}
            <input 
              type="text" 
              placeholder="Distance/Km *"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            
            {/* Weight */}
            <input 
              type="text" 
              placeholder="Kilo *"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            
            {/* Height */}
            <input 
              type="text" 
              placeholder="Centimeter *"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Submit Button (Full Width) */}
            <div className="sm:col-span-2">
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
