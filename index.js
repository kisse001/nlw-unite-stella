let participantes = [
  {
  nome: "Stella Lacerda",
  email: "stella@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 21, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
},
 {
  nome: "Ana Souza",
  email: "ana@gmail.com",
  dataInscricao: new Date(2024, 0, 3, 18, 23),
  dataCheckIn: new Date(2024, 1, 5, 20, 20)
},
 {
  nome: "Diego Fernandes",
  email: "diego@gmail.com",
  dataInscricao: new Date(2024, 2, 1, 19, 40),
  dataCheckIn: new Date(2024, 2, 1, 20, 20)
},
 {
  nome: "joao Santos",
  email: "joao@gmail.com",
  dataInscricao: new Date(2024, 1, 2, 15, 20),
  dataCheckIn: new Date(2024, 3, 25, 20, 00)
},
 {
  nome: "Paula Costa",
  email: "paula@gmail.com",
  dataInscricao: new Date(2024, 6, 12, 19, 21),
  dataCheckIn: new Date(2024, 2, 25, 3, 20)
},
 {
  nome: "Maria Oliveira",
  email: "maria@gmail.com",
  dataInscricao: new Date(2024, 7, 22, 12, 23),
  dataCheckIn: new Date(2024, 8, 10, 14, 07)
},
 {
  nome: "Gabriel Almeida",
  email: "gabriel@gmail.com",
  dataInscricao: new Date(2024, 13, 2, 09, 20),
  dataCheckIn: new Date(2024, 4, 25, 21, 57)
},
 {
  nome: "Carlos Lima",
  email: "carlos@gmail.com",
  dataInscricao: new Date(2024, 5, 16, 23, 40),
  dataCheckIn: new Date(2024, 2, 30, 09, 07)
},
 {
  nome: "Cida Paiva",
  email: "cida@gmail.com",
  dataInscricao: new Date(2024, 9, 12, 04, 30),
  dataCheckIn: new Date(2024, 6, 10, 20, 50)
},
 {
  nome: "Camilla Couto",
  email: "camilla@gmail.com",
  dataInscricao: new Date(2024, 12, 27, 06, 17),
  dataCheckIn: new Date(2024, 9, 3, 22, 04)
},
]


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
    
        Confirmar check-in
      </button>
    `
  }
  return `
    <tr>
        <td>
          <strong>
          ${participante.nome}
          </strong>
          <br>
          <small> 
            ${participante.email}
          </small>
          </td>
        <td>${dataInscricao}</td> 
        <td>${dataCheckIn}</td>
      </tr>
      
  `
}


const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

 atualizarLista(participantes)

  const adicionarParticipante = (event) =>{
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target)

    const participante = {
      nome: dadosDoFormulario.get('nome'),
      email: dadosDoFormulario.get('email'),
      dataInscricao: new Date(),
      dataCheckIn: null

    }

    const participanteExiste = participantes.find(
      (p) => p.email == participante.email
     
    )

    if(participanteExiste) {
      alert('Email já cadastrado!')
      return
    }
  participantes = [participante,...participantes]
  atualizarLista(participantes)

    event.target.querySelector('[name="nome]').value = ""
    event.target.querySelector('[name="email]').value = ""
  }

  const fazerCheckIn = (event) => {

      const mensagemConfirmacao = 'tem certeza que deseja fazer o check-in?'

      if(confirm(mensagemConfirmacao)== false) {
        return 

      }

      const participante = participantes.find((p) =>{
        return p.email == event.target.dataset.email
      })
      participante.dataCheckIn = new Date()

    atualizarLista(participantes)
}