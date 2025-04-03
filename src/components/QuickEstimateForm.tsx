
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const QuickEstimateForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    cabinetType: '',
    name: '',
    email: '',
    phone: '',
    contactTime: '',
    startDate: '',
    zipCode: '',
    description: '',
    zoomConsultation: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    
    toast({
      title: "Estimate Request Submitted",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      cabinetType: '',
      name: '',
      email: '',
      phone: '',
      contactTime: '',
      startDate: '',
      zipCode: '',
      description: '',
      zoomConsultation: false,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-charcoal-900">Request a Free Estimate</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cabinet Type */}
          <div>
            <label htmlFor="cabinetType" className="block text-sm font-medium text-charcoal-700 mb-1">
              Type of cabinetry*
            </label>
            <select
              id="cabinetType"
              name="cabinetType"
              value={formData.cabinetType}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-redwood-500 focus:border-redwood-500"
              required
            >
              <option value="">Please choose an option</option>
              <option value="kitchen">Kitchen Cabinets</option>
              <option value="bathroom">Bathroom Vanities</option>
              <option value="custom">Custom Built-ins</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-1">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-redwood-500 focus:border-redwood-500"
              required
            />
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1">
              Your Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-redwood-500 focus:border-redwood-500"
              required
            />
          </div>
          
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-1">
              Your Phone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-redwood-500 focus:border-redwood-500"
              required
            />
          </div>
          
          {/* Best time to contact */}
          <div>
            <label htmlFor="contactTime" className="block text-sm font-medium text-charcoal-700 mb-1">
              Best Time to be Contacted
            </label>
            <select
              id="contactTime"
              name="contactTime"
              value={formData.contactTime}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-redwood-500 focus:border-redwood-500"
            >
              <option value="">Please choose an option</option>
              <option value="morning">Morning (9am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 5pm)</option>
              <option value="evening">Evening (5pm - 8pm)</option>
            </select>
          </div>
          
          {/* Start date */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-charcoal-700 mb-1">
              When are you planning to start this project?
            </label>
            <select
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-redwood-500 focus:border-redwood-500"
            >
              <option value="">Please choose an option</option>
              <option value="asap">As soon as possible</option>
              <option value="1month">1-4 weeks</option>
              <option value="3months">1-3 months</option>
              <option value="6months">4-6 months</option>
              <option value="planning">Just planning</option>
            </select>
          </div>
          
          {/* ZIP Code */}
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-charcoal-700 mb-1">
              Your ZIP Code*
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-redwood-500 focus:border-redwood-500"
              required
            />
          </div>
          
          {/* File upload */}
          <div>
            <label htmlFor="fileUpload" className="block text-sm font-medium text-charcoal-700 mb-1">
              Upload reference images (optional)
            </label>
            <input
              type="file"
              id="fileUpload"
              name="fileUpload"
              onChange={handleFileChange}
              className="w-full text-sm text-charcoal-500 
                         file:mr-4 file:py-2 file:px-4 file:rounded-md 
                         file:border-0 file:text-sm file:font-semibold 
                         file:bg-redwood-50 file:text-redwood-700 
                         hover:file:bg-redwood-100"
              accept="image/*"
              multiple
            />
          </div>
        </div>
        
        {/* Project description */}
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium text-charcoal-700 mb-1">
            Describe Your Project*
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-redwood-500 focus:border-redwood-500"
            required
          />
        </div>
        
        {/* Zoom consultation checkbox */}
        <div className="mt-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="zoomConsultation"
                name="zoomConsultation"
                type="checkbox"
                checked={formData.zoomConsultation}
                onChange={handleCheckboxChange}
                className="focus:ring-redwood-500 h-4 w-4 text-redwood-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="zoomConsultation" className="font-medium text-charcoal-700">
                I want to have a free FaceTime/Zoom consultation
              </label>
            </div>
          </div>
        </div>
        
        {/* Submit button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full redwood-btn py-3"
          >
            Calculate Your Project
          </button>
          <p className="text-xs text-charcoal-500 mt-4 text-center">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </form>
    </div>
  );
};

export default QuickEstimateForm;
