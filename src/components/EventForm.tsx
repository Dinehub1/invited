
import { useState } from "react";
import { Calendar, Clock, MapPin, Image as ImageIcon, X } from "lucide-react";

interface EventFormProps {
  onSubmit: (event: any) => void;
}

const EventForm = ({ onSubmit }: EventFormProps) => {
  const [image, setImage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Event Title"
          className="input-field text-2xl font-semibold"
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
            <input
              type="date"
              className="input-field pl-12"
              required
            />
          </div>
          
          <div className="relative">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
            <input
              type="time"
              className="input-field pl-12"
              required
            />
          </div>
        </div>
        
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
          <input
            type="text"
            placeholder="Location"
            className="input-field pl-12"
            required
          />
        </div>
        
        <textarea
          placeholder="Description"
          className="input-field min-h-[120px] resize-none"
          required
        />
        
        <div className="relative">
          {image ? (
            <div className="relative rounded-lg overflow-hidden">
              <img src={image} alt="Event" className="w-full h-48 object-cover" />
              <button
                type="button"
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex items-center justify-center w-full h-48 border-2 border-dashed border-input rounded-lg cursor-pointer hover:border-ring transition-colors"
              >
                <div className="flex flex-col items-center space-y-2 text-secondary">
                  <ImageIcon className="w-8 h-8" />
                  <span>Upload Event Image</span>
                </div>
              </label>
            </div>
          )}
        </div>
      </div>
      
      <button type="submit" className="btn-primary w-full">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
