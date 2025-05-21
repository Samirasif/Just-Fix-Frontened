import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const bookingFormSchema = z.object({
  serviceCategory: z.string({
    required_error: "Please select a service category.",
  }),
  service: z.string({
    required_error: "Please select a specific service.",
  }),
  date: z.date({
    required_error: "Please select a date for the service.",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  notes: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

const serviceCategories = [
  { id: "electrical", name: "Electrical" },
  { id: "plumbing", name: "Plumbing" },
  { id: "painting", name: "Painting" },
  { id: "cleaning", name: "Cleaning" },
  { id: "landscaping", name: "Landscaping" },
  { id: "carpentry", name: "Carpentry" },
];

const servicesByCategory = {
  electrical: [
    { id: "electrical-repair", name: "Electrical Repair" },
    { id: "lighting-installation", name: "Lighting Installation" },
    { id: "circuit-installation", name: "Circuit Installation" },
    { id: "electrical-safety-inspection", name: "Electrical Safety Inspection" },
  ],
  plumbing: [
    { id: "leak-repair", name: "Leak Repair" },
    { id: "drain-cleaning", name: "Drain Cleaning" },
    { id: "faucet-installation", name: "Faucet Installation" },
    { id: "water-heater-service", name: "Water Heater Service" },
  ],
  painting: [
    { id: "interior-painting", name: "Interior Painting" },
    { id: "exterior-painting", name: "Exterior Painting" },
    { id: "cabinet-refinishing", name: "Cabinet Refinishing" },
    { id: "deck-staining", name: "Deck Staining" },
  ],
  cleaning: [
    { id: "deep-cleaning", name: "Deep Cleaning" },
    { id: "regular-cleaning", name: "Regular Cleaning" },
    { id: "move-out-cleaning", name: "Move-out Cleaning" },
    { id: "carpet-cleaning", name: "Carpet Cleaning" },
  ],
  landscaping: [
    { id: "lawn-mowing", name: "Lawn Mowing" },
    { id: "garden-planting", name: "Garden Planting" },
    { id: "tree-trimming", name: "Tree Trimming" },
    { id: "irrigation-installation", name: "Irrigation Installation" },
  ],
  carpentry: [
    { id: "furniture-assembly", name: "Furniture Assembly" },
    { id: "custom-shelving", name: "Custom Shelving" },
    { id: "deck-construction", name: "Deck Construction" },
    { id: "door-installation", name: "Door Installation" },
  ],
};

const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];

const Bookings = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [step, setStep] = useState(1);
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      notes: "",
      terms: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toast.success("Booking submitted successfully! A professional will contact you shortly.");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    setValue("serviceCategory", value);
    setValue("service", "");
  };

  const nextStep = async () => {
    const currentStepFields = {
      1: ["serviceCategory", "service"],
      2: ["date", "timeSlot"],
    }[step];

    const result = await trigger(currentStepFields);
    if (result) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="container py-10 md:py-16 mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Book a Professional</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between mb-6">
          <div className={`flex-1 text-center ${step >= 1 ? "font-bold" : "text-gray-400"}`}>
            <div className={`h-2 ${step >= 1 ? "bg-blue-500" : "bg-gray-200"}`}></div>
            <p className="mt-2">Service Selection</p>
          </div>
          <div className={`flex-1 text-center ${step >= 2 ? "font-bold" : "text-gray-400"}`}>
            <div className={`h-2 ${step >= 2 ? "bg-blue-500" : "bg-gray-200"}`}></div>
            <p className="mt-2">Schedule</p>
          </div>
          <div className={`flex-1 text-center ${step >= 3 ? "font-bold" : "text-gray-400"}`}>
            <div className={`h-2 ${step >= 3 ? "bg-blue-500" : "bg-gray-200"}`}></div>
            <p className="mt-2">Details</p>
          </div>
        </div>
        
        <div className="mt-6 border-t-4 border-blue-500 bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">
              {step === 1 && "Select a Service"}
              {step === 2 && "Choose Date & Time"}
              {step === 3 && "Complete Your Booking"}
            </h2>
            <p className="text-gray-600 mb-6">
              {step === 1 && "Choose the category and specific service you need"}
              {step === 2 && "Pick a convenient date and time for your service"}
              {step === 3 && "Provide your address and any additional information"}
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Category
                    </label>
                    <select
                      {...register("serviceCategory")}
                      onChange={handleCategoryChange}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select a category</option>
                      {serviceCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <p className="text-sm text-gray-500 mt-1">
                      Choose the type of service you need
                    </p>
                    {errors.serviceCategory && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.serviceCategory.message}
                      </p>
                    )}
                  </div>
                  
                  {selectedCategory && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Specific Service
                      </label>
                      <select
                        {...register("service")}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Select a service</option>
                        {servicesByCategory[selectedCategory]?.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                      <p className="text-sm text-gray-500 mt-1">
                        Select the specific service you need
                      </p>
                      {errors.service && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.service.message}
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Date
                    </label>
                    <input
                      type="date"
                      {...register("date", { valueAsDate: true })}
                      min={format(new Date(), "yyyy-MM-dd")}
                      max={format(new Date(new Date().setDate(new Date().getDate() + 30)), "yyyy-MM-dd")}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Select a date within the next 30 days
                    </p>
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.date.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time Slot
                    </label>
                    <select
                      {...register("timeSlot")}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    <p className="text-sm text-gray-500 mt-1">
                      Choose a convenient time for the service
                    </p>
                    {errors.timeSlot && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.timeSlot.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Address
                    </label>
                    <input
                      {...register("address")}
                      placeholder="Enter your full address"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Provide the complete address where the service will be performed
                    </p>
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      {...register("notes")}
                      placeholder="Any special instructions or details (optional)"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows={3}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Add any specific information that might be helpful
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      {...register("terms")}
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the terms of service and privacy policy.
                    </label>
                  </div>
                  {errors.terms && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.terms.message}
                    </p>
                  )}
                  
                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      Previous
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;