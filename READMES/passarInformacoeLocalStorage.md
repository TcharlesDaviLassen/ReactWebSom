## `react-router-dom`, você ainda pode fazê-lo, mas é importante ter em mente que isso pode limitar suas opções e pode não ser a abordagem mais ideal em muitos casos. Uma alternativa é usar o armazenamento local (localStorage) para persistir temporariamente os dados que você deseja compartilhar entre as páginas. No entanto, esta abordagem também tem suas limitações.

Aqui está um exemplo de como você pode passar informações entre páginas usando o localStorage:

Primeira Página:

```jsx
import React from 'react';

function PrimeiraPagina() {
  const descricaoServico = 'Descrição do Serviço'; // Sua descrição de serviço

  const handleButtonClick = () => {
    localStorage.setItem('descricaoServico', descricaoServico);
    window.location.href = './segundaPagina.html'; // Substitua pela URL da segunda página
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Ir para a Segunda Página</button>
    </div>
  );
}

export default PrimeiraPagina;
```

### Segunda Página:

```jsx
import React, { useEffect, useState } from 'react';

function SegundaPagina() {
  const [descricaoServico, setDescricaoServico] = useState('');

  useEffect(() => {
    const descricao = localStorage.getItem('descricaoServico');
    if (descricao) {
      setDescricaoServico(descricao);
      localStorage.removeItem('descricaoServico'); // Remova os dados após a leitura, se necessário
    }
  }, []);

  return (
    <div>
      <h2>Descrição do Serviço Selecionado:</h2>
      <p>{descricaoServico}</p>
    </div>
  );
}

export default SegundaPagina;
```

Neste exemplo, a primeira página define a descrição do serviço e a armazena no localStorage antes de redirecionar para a segunda página. A segunda página lê a descrição do serviço do localStorage quando é carregada.

No entanto, essa abordagem tem algumas desvantagens:

Segurança: O localStorage não é uma maneira segura de armazenar dados confidenciais, pois os dados podem ser acessados por meio das ferramentas de desenvolvedor do navegador.

Limitações de Domínio: O localStorage está limitado ao domínio do site, o que significa que não é possível compartilhar dados entre domínios diferentes.

Complexidade: O código para gerenciar o localStorage e garantir que os dados sejam removidos após a leitura pode se tornar complexo e propenso a erros.

Redirecionamento: O redirecionamento usando window.location.href fará com que a página seja recarregada, o que pode não ser desejável em todas as situações.

Se possível, considere a utilização de um sistema de roteamento como o react-router-dom, pois ele oferece mais flexibilidade e uma maneira mais robusta de lidar com a navegação e a passagem de informações entre páginas em um aplicativo React.