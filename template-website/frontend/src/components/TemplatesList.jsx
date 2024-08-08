import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const TemplatesList = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/templates");
    const result = await response.json();
    console.log(result);
    setTemplates(result);
    setLoading(false);
  };
  
  useEffect(() => {
    
    fetchData();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <div key={template._id} className="border p-4 rounded-lg shadow-lg">
          <img
            src={template.imageUrl}
            alt={template.title}
            className="w-full h-32 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{template.title}</h2>
          <p className="text-gray-600 mb-4">{template.description}</p>
          <div className="flex justify-between items-center">
            <a
              href={template.previewUrl}
              className="text-blue-500 hover:underline"
            >
              Preview
            </a>
            <a
              href={template.downloadUrl}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplatesList;
