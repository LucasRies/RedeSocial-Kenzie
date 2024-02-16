import {posts} from "./database.js"

function handleModals() {
    const open = document.querySelectorAll('.postList__open');
    const modals = document.querySelector('.postList__modal');
  
    open.forEach((button, index) => {
      button.addEventListener("click", () => {
       
        criarCard(Number(button.id))
        modals.showModal();
      });
    });

    closeModals()
  }

  function closeModals() {
    const close = document.querySelectorAll('.postList__modalClose')
    const modals = document.querySelectorAll('.postList__modal');    

    close.forEach((button, index) => {
        button.addEventListener('click', ()=> {
            modals[index].close()
        })
    })

  }
  
  handleModals();


  /* 
            
              <div class="container">
                <div class="postList__header">
                  <img class="postList__img" src="./src/assets/img/user5.svg" alt="Iris Silva" />
                  <div>
                    <h2 class="postList__name">Iris Silva</h2>
                    <p class="postList__profission">Front end Engineer</p>
                  </div>
                </div>
                <h2 class="postList__titles">
                  Empresa de Tecnologia da Informação abre vagas para programa de
                  estágio
                </h2>
                <h1>A Framework Digital, empresa mineira especializada em Tecnologia da
                  Informação, irá iniciar o seu sexto programa de estágio, com o prazo
                  de inscrições entre os dias 08 e 28 de agosto. O programa é
                  conhecido como Framework Padawans, com inspiração nos filmes Star
                  Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar
                  cavaleiros Jedi, que compõem o lado bom da força.</h1>
              </div>
                <button class="postList__modalClose">X</button>                                
                
              

*/
function criarCard(id){  
    posts.forEach(post => {
        
    if(post.id == id) {
      let container = document.querySelector('.postList__modalContainer')
      container.innerHTML = ''
      let header = document.createElement('div');
      let img = document.createElement('img');
      let div = document.createElement('div');
      let name = document.createElement('h2');
      let profission = document.createElement('p');
      let titles = document.createElement('h2');
      let postText = document.createElement('h1');
      let button = document.createElement('button');    
  
  
          
      header.classList.add('postList__header');
      
      
      img.classList.add('postList__img');
      img.src = post.img;
  
      name.classList.add('postList__name');
      name.innerText = post.user;
  
      profission.classList.add('postList__profission');
      profission.innerText = post.stack;    
          
      titles.classList.add('postList__titles');
      titles.innerText = post.title;
  
      //button.classList.add('postList__modalClose');
      //button.innerText = ('X');
      
      postText.classList.add('postList__postText')
      postText.innerHTML = post.text;    
      
      header.append(img, div, button);
  
      div.append(name, profission);
      container.append(header, titles, postText);
      console.log(container)
      
    }
    
    
  })  
}
  