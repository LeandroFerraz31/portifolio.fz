import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Atualiza e pega o contador
    fetch("https://api.countapi.xyz/update/leandro-ferraz/portfolio/?amount=1")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch((error) => console.error("Erro ao obter contador:", error));
  }, []);

  return (
    <p className="text-sm text-gray-500 mt-4">
      👀 Já tivemos <span className="font-semibold">{count}</span> visitantes!
    </p>
  );
};

export default VisitorCounter;
