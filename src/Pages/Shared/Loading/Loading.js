import React from "react";

const Loading = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div
          className="w-14 h-14 border-4 border-dashed rounded-full animate-spin border-theme-primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </section>
  );
};

export default Loading;
