
import { useState } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import EventDetail from "../components/EventDetail";
import { PlusCircle } from "lucide-react";

const mockEvents = [
  {
    id: 1,
    title: "Cocktail Night",
    date: "Sun, February 16, 6:00 PM",
    time: "6:00 PM",  // Added the required time property
    location: "907, Bhanwar Kua Road, Indore, Madhya Pradesh",
    image: "public/lovable-uploads/5e8aaadb-5310-412b-addb-60cd2f24a4a8.png"
  }
];

const Index = () => {
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof mockEvents[0] | null>(null);

  return (
    <div className="min-h-screen animate-fade-in">
      {selectedEvent ? (
        <EventDetail
          {...selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      ) : (
        <div className="p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight">
                  {showCreateEvent ? "Create New Event" : "Upcoming"}
                </h1>
              </div>
              
              <button
                onClick={() => setShowCreateEvent(!showCreateEvent)}
                className="btn-primary flex items-center space-x-2"
              >
                {showCreateEvent ? (
                  <span>View Events</span>
                ) : (
                  <>
                    <PlusCircle className="w-5 h-5" />
                    <span>Create Event</span>
                  </>
                )}
              </button>
            </div>

            {showCreateEvent ? (
              <div className="animate-fade-up">
                <EventForm onSubmit={console.log} />
              </div>
            ) : mockEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
                {mockEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                    onClick={() => setSelectedEvent(event)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-xl text-white/80 mb-6">
                  No Upcoming Events
                </h2>
                <button
                  onClick={() => setShowCreateEvent(true)}
                  className="btn-primary"
                >
                  Create Event
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
