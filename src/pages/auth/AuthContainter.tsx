import { useState } from "react";
import Auth from "./Auth";
import SignUp from "./SignUp";

export default function AuthContainer() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen perspective">
      <div
        className={`relative w-96 h-96 transform transition-transform duration-700 transform-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <Auth />
          <button
            onClick={() => setIsFlipped(true)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
          >
            Cadastrar-se
          </button>
        </div>
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          <SignUp />
          <button
            onClick={() => setIsFlipped(false)}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded"
          >
            Voltar para login
          </button>
        </div>
      </div>
    </div>
  );
}