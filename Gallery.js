import React, { useState, useRef } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function handleFiles(files) {
    if (!files) return;
    const validFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
    validFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages(prevImages => [...prevImages, {
          id: Date.now() + Math.random(),
          url: e.target.result
        }]);
      };
      reader.readAsDataURL(file);
    });
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }

  function handleDeleteImage(id) {
    setImages(prev => prev.filter(img => img.id !== id));
  }

  return (
    <div className="card bg-white rounded-xl p-6 shadow-lg text-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-indigo-600">📸 Gallery</h3>
          <p className="text-sm mt-1 text-gray-600">Click + or drag images here</p>
        </div>
        <button
          className="px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg bg-indigo-500 hover:bg-indigo-600 text-white"
          onClick={() => fileInputRef.current?.click()}
        >
          <span>+</span>
          Add Image
        </button>
      </div>

      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 rounded-xl transition-all duration-200 ${
          isDragging ? 'bg-indigo-50 border-2 border-dashed border-indigo-300' : ''
        }`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
        onDrop={handleDrop}
      >
        {images.map((img) => (
          <div key={img.id} className="relative group aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <img
              src={img.url}
              alt={`Gallery image ${img.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <button
              onClick={() => handleDeleteImage(img.id)}
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg"
              title="Delete image"
            >
              🗑️
            </button>
          </div>
        ))}

        {images.length === 0 && (
          <p className="text-gray-400 text-center py-8 col-span-full">
            No images added yet. Click "Add Image" or drag images here to get started!
          </p>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}

export default Gallery;

