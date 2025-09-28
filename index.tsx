import React from 'react';

const PuzzlePage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="border-2 border-purple-500 rounded-xl p-8 max-w-md w-full
                     shadow-lg shadow-purple-500/50 
                     bg-gradient-to-br from-background to-muted/50
                     text-center">
        
        {/* Título SENHA com efeito neon */}
        <h1 className="text-6xl md:text-7xl font-bold mb-8 
                      text-purple-400 
                      drop-shadow-[0_0_15px_rgba(192,132,252,0.7)]
                      animate-pulse">
          SENHA
        </h1>
        
        {/* Container das pistas */}
        <div className="space-y-4 text-foreground/90">
          <p className="text-lg">O primeiro, o triplo de meio de um homem.</p>
          <p className="text-lg">O segundo, o guardião do meio entre zero e dez.</p>
          <p className="text-lg">O terceiro, o espelho do primeiro dobrado.</p>
          <p className="text-lg">O último, o penúltimo antes do fim.</p>
        </div>
      </div>
    </div>
  );
};

export default PuzzlePage;
