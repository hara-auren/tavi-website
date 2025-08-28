import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Page not found</p>
        <a 
          href="/" 
          className="text-primary hover:underline"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFound; 