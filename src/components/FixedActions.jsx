import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <a
        href="https://wa.me/919460604101"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-md text-white"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="tel:+919460604101"
        className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-md text-white"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default FloatingContact;
