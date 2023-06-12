var images = ['img/ProjectWeb/Imagem9.png', 'img/ProjectWeb/Imagem1.png', 'img/ProjectWeb/Imagem3.png', 
'img/ProjectWeb/Imagem2.png', 'img/ProjectWeb/Imagem4.png', 'img/ProjectWeb/Imagem5.png', 
'img/ProjectWeb/Imagem6.png', 'img/ProjectWeb/Imagem7.png','img/ProjectWeb/Imagem8.png']; 
var num = 0;

function nextSlide() {
    var slider = document.getElementById('slide');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prevSlide() {
    var slider = document.getElementById('slide');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

setInterval(nextSlide, 3000);


function writeTitle(){
    function activeWorld(element){
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        arrText.forEach((letra, i) =>{
            setTimeout(()=>{
                element.innerHTML += letra;
            }, 75 * i);
        })
    }
    const title = document.querySelector('.digitando');
    activeWorld(title);
}
writeTitle();

function menuMobile(){
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');
    
    
    activeMenu.addEventListener('click',()=>{
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });

}
menuMobile();

function aboutMe(){
    const divExperience = document.querySelectorAll('.experience_content div'); 
    const liExperience = document.querySelectorAll('.experience_content ul li'); 
    const divEducation = document.querySelectorAll('.education_content div'); 
    const liEducation = document.querySelectorAll('.education_content ul li'); 

    divEducation[0].classList.add('active');
    liEducation[0].classList.add('active');
    divExperience[0].classList.add('active');
    liExperience[0].classList.add('active');
    
    function slideShow(index){
        divExperience.forEach((div)=>{
            div.classList.remove('active')
        });
        liExperience.forEach((buttom)=>{
            buttom.classList.remove('active');
        })
        divExperience[index].classList.add('active');
        liExperience[index].classList.add('active');
    }
    
    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('active')
        });
        liEducation.forEach((buttom)=>{
            buttom.classList.remove('active');
        })
        divEducation[index].classList.add('active');
        liEducation[index].classList.add('active');
    }
    
    liExperience.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow(index);
        })
    });
    
    liEducation.forEach((event, index) => {
        event.addEventListener('click', () =>{
            slideShow2(index);
        })
    });
}

aboutMe();

document.addEventListener('DOMContentLoaded', function() {
    var designImages = ['img/ProjectMED/img1.jpg', 'img/ProjectMED/img3.jpg', 
    'img/ProjectMED/img4.jpg', 'img/ProjectMED/img5.jpg', 'img/ProjectMED/img6.jpg', 'img/ProjectMED/img7.jpg'];
    var graphicImages = ['img/ProjectTriplex/img13-tri.jpg', 'img/ProjectTriplex/img2-tri.jpg', 
    'img/ProjectTriplex/img1-tri.jpg', 'img/ProjectTriplex/img4-tri.jpg'
  , 'img/ProjectTriplex/img5-tri.jpg', 'img/ProjectTriplex/img6-tri.jpg', 
  'img/ProjectTriplex/img7-tri.jpg', 'img/ProjectTriplex/img8-tri.jpg'
, 'img/ProjectTriplex/img9-tri.jpg', 'img/ProjectTriplex/img10-tri.jpg', 
'img/ProjectTriplex/img11-tri.jpg', 'img/ProjectTriplex/img12-tri.jpg'];
    var currentImages = [];
    var num = 0;
    var intervalId;
  
    const buttons = document.querySelectorAll('.projects_models ul li');
    const imageContainer = document.querySelector('.projects_storage ul');
  
    function removeActiveClass() {
      buttons.forEach((button) => {
        button.classList.remove('active');
        button.style.backgroundColor = "#222";
        button.style.color = "#707070";
      });
    }
  
    function createImageElement(src) {
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      var image = document.createElement('img');
      image.src = src;
      link.appendChild(image);
      listItem.appendChild(link);
      return listItem;
    }
  
    function changeImage() {
      var images = document.querySelectorAll('.projects_storage ul li');
      images.forEach((image, index) => {
        image.style.display = 'none';
      });
      if (num < currentImages.length) {
        images[num].style.display = 'block';
        num++;
      } else {
        num = 0;
      }
    }
  
    buttons.forEach((button) => {
      button.addEventListener('click', function() {
        removeActiveClass();
        this.classList.add('active');
        this.style.backgroundColor = "#dc3545";
        this.style.color = "#151515";
        var className = this.classList[0];
        if (className === 'design') {
          currentImages = designImages;
        } else if (className === 'graphic') {
          currentImages = graphicImages;
        }
        clearInterval(intervalId);
        imageContainer.innerHTML = '';
        currentImages.forEach((imageSrc) => {
          var imageElement = createImageElement(imageSrc);
          imageContainer.appendChild(imageElement);
        });
        num = 0;
        changeImage();
        intervalId = setInterval(changeImage, 3000);
      });
    });
  
    currentImages = designImages;
    imageContainer.innerHTML = '';
    currentImages.forEach((imageSrc) => {
      var imageElement = createImageElement(imageSrc);
      imageContainer.appendChild(imageElement);
    });
    changeImage();
    intervalId = setInterval(changeImage, 3000);
  });


//contato
document.getElementById('contato-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var nome = document.getElementById('nome').value;
  var assunto = document.getElementById('assunto').value;
  var mensagem = document.getElementById('mensagem').value;

  var link = "mailto:lucascherri12@gmail.com"
           + "?subject=" + encodeURIComponent(assunto)
           + "&body=" + encodeURIComponent("De: " + nome + "\n\n" + mensagem + "\n\n")
  ;

  window.location.href = link;
}, false);

  







