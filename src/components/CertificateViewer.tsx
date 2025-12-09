import { motion } from "motion/react";
import { X, Download, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface CertificateViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl: string;
  issuer: string;
}

export function CertificateViewer({ isOpen, onClose, title, imageUrl, issuer }: CertificateViewerProps) {
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, "_")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-zinc-900 border border-zinc-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <div>
            <h3 className="text-xl">{title}</h3>
            <p className="text-sm text-zinc-400 mt-1">Issued by {issuer}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 p-4 border-b border-zinc-800 bg-zinc-900/50">
          <button
            onClick={handleZoomOut}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            disabled={zoom <= 0.5}
          >
            <ZoomOut className="w-4 h-4" />
            Zoom Out
          </button>
          <span className="text-sm text-zinc-400 min-w-[60px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            disabled={zoom >= 2}
          >
            <ZoomIn className="w-4 h-4" />
            Zoom In
          </button>
          <div className="h-6 w-px bg-zinc-700 mx-2" />
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>

        {/* Certificate Image */}
        <div className="overflow-auto max-h-[calc(90vh-200px)] p-6 bg-zinc-950/50">
          <div className="flex items-center justify-center min-h-[400px]">
            <motion.img
              src={imageUrl}
              alt={title}
              className="max-w-full h-auto rounded-lg shadow-2xl"
              style={{ transform: `scale(${zoom})` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
