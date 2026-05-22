import { FileText, Hammer, CheckSquare, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#F6F7F9] fixed inset-0 overflow-hidden flex items-center justify-center font-sans">
      
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-card {
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }
        .delay-5 { animation-delay: 0.7s; }
      `}</style>

      <div className="absolute top-[30%] right-[-10%] w-[300px] h-16 bg-[#DCE4F2] rounded-full rotate-[8deg]"></div>
      <div className="absolute top-[42%] right-[-20%] w-[500px] h-16 bg-[#DCE4F2] rounded-full"></div>
      <div className="absolute top-[54%] right-[-10%] w-[300px] h-16 bg-[#DCE4F2] rounded-full"></div>

      <div className="absolute top-[50%] left-[-18%] w-80 h-16 bg-[#DCE4F2] rounded-full -rotate-[10deg]"></div>
      <div className="absolute top-[60%] left-[-21%] w-[450px] h-16 bg-[#DCE4F2] rounded-full"></div>
      <div className="absolute top-[72%] left-[-12%] w-[500px] h-16 bg-[#DCE4F2] rounded-full"></div>

      <div className="relative w-full max-w-6xl flex flex-col md:flex-row z-10 px-10">
        
        <div className="flex-1 pr-10 ml-15 -mt-3 animate-card">
          <h1 className="text-[3.5rem] leading-[1.1] tracking-tight text-[#868CA2] font-light">
            A single platform to <br />
            <span className="font-semibold text-[#5E6482]">manage</span> every part of 
            your <span className="font-semibold text-[#5E6482]">legal work</span>
          </h1>
          <p className="mt-8 text-[1.1rem] text-[#5665F0] max-w-md leading-relaxed font-medium">
            Track matters, coordinate schedules, manage <br/> clients, centralize documents, and handle communication - all in one system.
          </p>
        </div>

        <div className="flex-1 relative h-[600px] w-full mt-10 md:mt-0">
          
          <div className="absolute top-[40%] right-[60%] animate-card delay-1">
            <div className="bg-[#3746F5] text-white w-[280px] h-[64px] px-4 rounded-full flex items-center justify-center gap-3 shadow-xl rotate-[10deg] transform transition-transform hover:scale-105 cursor-default">
              <DollarSign size={24} />
              <span className="text-xl font-medium">Billing</span>
            </div>
          </div>

          <div className="absolute top-[55%] right-[100%] md:right-[130%] animate-card delay-2">
            <div className="bg-[#DF7934] text-white w-[260px] h-[68px] px-4 rounded-full flex items-center justify-center gap-3 shadow-xl rotate-[-13deg] transform transition-transform hover:scale-105 cursor-default">
              <Hammer size={24} />
              <span className="text-xl font-medium">Matters</span>
            </div>
          </div>

          <div className="absolute top-[60%] right-[30%] md:right-[70%] animate-card delay-3">
            <div className="bg-[#A3AEE5] rounded-[30px] flex items-center gap-3 shadow-xl rotate-[5deg] w-[290px] h-[76px] pl-6 pr-3 transform transition-transform hover:scale-105 cursor-default">
              <div className="w-[4px] h-[46px] bg-[#DF7934] rounded-full flex-shrink-0"></div>
              <div className="w-11 h-11 bg-white rounded-full flex-shrink-0 overflow-hidden ml-1">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="John Doe" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col ml-1">
                <span className="text-[#34354A] font-semibold text-sm">John Doe - Portal</span>
                <span className="text-[#6C719C] text-[10px] leading-tight mt-1">
                  Hey! Could you please review a <br/> document for me?
                </span>
                <span className="text-[#868CA2] text-[9px] mt-0">MAT-2233 - 2 h ago</span>
              </div>
            </div>
          </div>

          <div className="absolute top-[80%] right-[70%] md:right-[100%] animate-card delay-4">
            <div className="bg-[#2C2B3E] text-[#DF7934] w-[260px] h-[64px] px-4 rounded-full flex items-center justify-center gap-3 shadow-xl rotate-[-4deg] transform transition-transform hover:scale-105 cursor-default">
              <CheckSquare size={24} />
              <span className="text-xl font-medium">Tasks</span>
            </div>
          </div>

          <div className="absolute top-[80%] right-[8%] md:right-[30%] animate-card delay-5">
            <div className="bg-[#2C2B3E] text-[#DF7934] w-[280px] h-[64px] px-4 rounded-full flex items-center justify-center gap-3 shadow-xl -rotate-[10deg] transform transition-transform hover:scale-105 cursor-default z-20">
              <FileText size={24} />
              <span className="text-xl font-medium">Documents</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}