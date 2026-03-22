import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-5xl flex justify-between items-center mb-8">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-foreground/80 hover:text-blue-600 transition-colors font-medium border border-transparent hover:border-blue-600/30 px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
        <a 
          href="/Cresumepdf.pdf" 
          download="Pragati_Patel_Resume.pdf"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </div>
      
      <div className="w-full max-w-5xl bg-foreground/5 rounded-2xl border border-foreground/10 overflow-hidden shadow-2xl" style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}>
        <iframe 
          src="/Cresumepdf.pdf" 
          className="w-full h-full border-0"
          title="Resume PDF Viewer"
        />
      </div>
    </div>
  );
}
