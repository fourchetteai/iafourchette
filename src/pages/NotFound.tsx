
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Utilisateur a tenté d'accéder à une route inexistante:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-iafourchette-blue/10">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Oups ! Cette page n'existe pas
        </p>
        <Button asChild className="button-primary">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
