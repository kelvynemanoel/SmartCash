# 🪙 SmartCash - Dashboard de Controle Financeiro

> O jeito inteligente e prático de controlar suas finanças pessoais.


<img width="754.4" height="348" alt="image" aling="center" src="https://github.com/user-attachments/assets/9b39cad0-577a-4066-b5e5-1a80a922dd5b"/>  <img width="196.99" height="348" alt="image" aling="center" src="https://github.com/user-attachments/assets/e657a4dc-40e8-4b86-9be4-bcd6326cc597"/>

O **SmartCash** é uma aplicação web de controle financeiro desenvolvida para ajudar os usuários a gerenciar suas receitas e despesas de forma intuitiva. Com uma interface limpa e responsiva, o sistema calcula automaticamente o saldo total com base nas transações inseridas e salva os dados localmente no navegador, garantindo que as informações não sejam perdidas ao recarregar a página. Esse projeto faz parte da entrega da segunda fase do programa Trends IT 2026.

O projeto está hospedado no link: https://kelvynemanoel.github.io/SmartCash/ 


---

## ✨ Funcionalidades

* **Visão Geral do Saldo:** Painel dinâmico que exibe o saldo atual, total de receitas e total de despesas.
* **Cadastro de Transações:** Formulário simples para adicionar novas movimentações (entradas ou saídas) com descrição e valor.
* **Histórico e Extrato:** Lista detalhada de todas as transações, com identificação visual de cores para facilitar a leitura (verde para receitas, vermelho para despesas).
* **Remoção de Registros:** Opção de excluir transações individuais do extrato, recalculando o saldo automaticamente.
* **Persistência de Dados:** Uso do `localStorage` para manter o histórico de transações salvo no dispositivo do usuário.
* **Design Responsivo:** Interface fluída que se adapta perfeitamente a diferentes tamanhos de tela (desktop, tablets e smartphones).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias fundamentais do desenvolvimento web (Front-end), sem a necessidade de frameworks externos, focando em performance e domínio da linguagem:

* **HTML5:** Estrutura semântica do projeto.
* **CSS3:** Estilização com variáveis globais (`:root`), Flexbox para alinhamento de componentes e `@media queries` para responsividade avançada.
* **JavaScript (Vanilla):** Lógica de negócios, manipulação do DOM, métodos de iteração de arrays (`map`, `filter`, `reduce`) e integração com a Web Storage API.
* **Tabler Icons:** Biblioteca de ícones via CDN para enriquecer a interface do usuário.

---

## 📐 Planejamento e Arquitetura

O desenvolvimento do SmartCash foi guiado por princípios de organização de código e usabilidade, adotando as seguintes documentações e processos:

1. **Analisando o Projeto:** Entendendo o projeto e buscando referências de projetos, estudo de público e dos requisitos.
2. [**Definição de Requisitos:**](https://docs.google.com/document/d/1k1qw7QrX99wHnuYpPjgxb3wpieUKMil0NVdg6KDDmus/edit?usp=sharing) Preparação da Documentação de Requisitos, processo necessário para garantir que o necessário estará funcionando no ato da entrega do projeto.
3. [**Wireframe:**](https://www.figma.com/design/eg3QWMClRf8b2qp2WOmxrX/SmartCash?node-id=0-1&t=V8qgP3mLJFXQ29k2-1) Design da interface projetada no Figma, visando usabilidade e autenticidade visual.
4. [**Trello - Planejamento de Tarefas:**](https://trello.com/invite/b/6a22ede7290116755de7fd62/ATTI7fd3b30fa5014c91c58b6e148a4ea446F966CFBC/fase-2-trendsit) Planejamento do quadro de tarefas, etapa ideal para definir e garantir o tempo de execução de cada tarefa, assim como alinhar as entregas semanais.

---

## 🚀 Como Executar o Projeto

Como se trata de uma aplicação estática baseada puramente em tecnologias front-end (Client-side), não é necessário nenhum processo de build ou servidor complexo para rodá-la.

### Pré-requisitos
* Um navegador web atualizado (Google Chrome, Firefox, Edge, etc.).
* [Git](https://git-scm.com/) instalado na sua máquina (opcional, para clonar o repositório).

### Passos para rodar localmente

1. Clone este repositório em sua máquina local:
   ```bash
   git clone https://github.com/kelvynemanoel/SmartCash.git
