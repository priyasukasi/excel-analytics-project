import React from "react";
import { useAuth } from "../hooks/useAuth";

const FileUpload = () => {
  const { user } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Upload your Excel file</h2>
      {/* Your upload form here */}
    </div>
  );
};

export default FileUpload;