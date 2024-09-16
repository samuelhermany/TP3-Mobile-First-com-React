import React from "react";

export default function App() {
  return (
    <div className="page-container">
      <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2.5rem)', textAlign: 'center' }}>
        Desenvolvimento Front-End com Frameworks
      </h2>
      <h3 style={{ fontSize: 'clamp(1.2rem, 1.8vw, 2rem)', textAlign: 'center' }}>
        Mobile-First UI com React
      </h3>
      <h4 style={{ fontSize: 'clamp(1rem, 1.5vw, 1.8rem)', textAlign: 'center' }}>
        Diferença entre responsividade e adaptabilidade
      </h4>
      <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)', textAlign: 'justify', textIndent: '20px', padding: "0 20px" }}>
        A responsividade refere-se à capacidade de um site ou aplicativo ajustar sua interface com base no tamanho da tela do dispositivo, proporcionando uma experiência de usuário consistente em dispositivos móveis, tablets e desktops.
      </p>
      <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)', textAlign: 'justify', textIndent: '20px', padding: "0 20px" }}>
        A adaptabilidade, por outro lado, envolve criar interfaces específicas para diferentes resoluções, onde o layout não necessariamente se ajusta de forma fluida, mas muda radicalmente com base em pontos de interrupção predefinidos.
      </p>
      <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.2rem)', textAlign: 'justify', textIndent: '20px', padding: "0 20px" }}>
        Em suma, a responsividade usa layouts fluídos e flexíveis, enquanto a adaptabilidade usa designs fixos para resoluções específicas.
      </p>
    </div>
  );
}