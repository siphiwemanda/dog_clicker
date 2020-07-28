const model={
  Dogs:[
    {
      clickCount: 0,
      name: 'Arlo',
      imgSrc: 'img/arlo.jpg',
    },
    {
      clickCount: 0,
      name: 'Aspen',
      imgSrc: 'img/aspen.jpg',
    },
    {
      clickCount: 0,
      name: 'max',
      imgSrc: 'img/max.jpg',
    },
    {
      clickCount: 0,
      name: 'Jack',
      imgSrc: 'img/jack.jpg',
    },
    {
      clickCount: 0,
      name: 'bindi',
      imgSrc: 'img/bindi.jpg',
    }
  ],
};

const dogview ={
init: function () {
  this.dogelem = document.getElementById('Dog');
  this.dogelemname = document.getElementById('Dog-name');
  this.dogelemcount = document.getElementById('Dog-count');
  this.dogelemimg = document.getElementById('Dog-img');
  this.render();
  this.rendercount();
  this.dogelemimg.addEventListener('click' , function () {
    controler.clicked();

  });
},

render: function (){
  this.dogelemimg.src=currentDog.imgSrc;
  this.dogelemname.textContent=currentDog.name;
},


rendercount: function () {
 this.dogelemcount.textContent=currentDog.clickCount;
},
};
const doglist = {
  init: function(){
    this.listdog= document.getElementById('Dog-list');
    this.render()
  },

 render: function () {
   let i, elem;
   for(i=0;i < model.Dogs.length;i++){
   elem= document.createElement('li');
   elem.textContent =model.Dogs[i].name;
   this.listdog.appendChild(elem);
   elem.addEventListener('click', function (dog) {
     return function(){
       controler.setDog(dog)
   };
}(model.Dogs[i]));

 }
 }
};
let controler ={

 init: function(){
   currentDog = model.Dogs[0];
   dogview.init();
   doglist.init();
 },

 clicked: function () {
   currentDog.clickCount++;
   dogview.rendercount()
 },

setDog: function(dog){
currentDog=dog;
dogview.render();
dogview.rendercount()
}
};
controler.init();
