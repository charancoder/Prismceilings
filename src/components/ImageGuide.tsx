import { Info } from 'lucide-react';

export default function ImageGuide() {
  return (
    <div className="glass-card p-6 mt-8 mb-4">
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 rounded-full bg-white/10">
          <Info size={20} />
        </div>
        <h3 className="text-xl font-medium">How to Replace Images</h3>
      </div>
      
      <p className="text-gray-300 mb-4">
        To replace the existing images with your own design images, follow these steps:
      </p>
      
      <ol className="list-decimal pl-5 space-y-3 text-gray-300">
        <li>
          <strong>Upload your images:</strong> Use the "Upload Asset" feature in the Mocha editor to upload your ceiling design images.
        </li>
        <li>
          <strong>Get the image URL:</strong> After uploading, you'll receive a public URL for each image (like "https://mocha-cdn.com/[your-image-id]/img1.jpeg").
        </li>
        <li>
          <strong>Update the code:</strong> In the Home.tsx file, find the services array and replace the "image" property values with your new image URLs.
        </li>
        <li>
          <strong>Example:</strong> We've already replaced one image with your uploaded img1.jpeg for the "Aluminium Grid False Ceiling" service.
        </li>
      </ol>
      
      <div className="bg-gray-800/50 p-4 rounded-md mt-4 overflow-x-auto">
        <pre className="text-sm text-gray-300">
          {`
{
  title: "Your Service Name",
  description: "Your service description goes here.",
  image: "https://mocha-cdn.com/your-image-id/your-image-name.jpeg"
}
          `.trim()}
        </pre>
      </div>
      
      <p className="text-gray-400 mt-4 text-sm">
        Note: Make sure your images are appropriately sized and optimized for web display.
        Recommended dimensions: 600px × 400px or similar aspect ratio.
      </p>
    </div>
  );
}
