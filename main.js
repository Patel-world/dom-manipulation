var element = document.querySelector("body > div")



fetch('data.json')
  .then((response) => response.json())
  .then((data) =>{
    
    console.log(data)
data.forEach(e => {
    element.innerHTML+=`<div class="card" style="width: 18rem;">
    <img src="${e.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <sup>${e.price.split('\n')[0]}</sup>
      <p class="card-text">${e.title}</p>
    </div>
  </div>`
});
    
  });

 

