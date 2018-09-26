const model={
  Dogs:[
    {
      clickCount: 0,
      name: 'Arlo',
      imgSrc: 'img/arlo.jpg',
      //imgAttribution,
    },
    {
      clickCount: 0,
      name: 'Aspen',
      imgSrc: 'img/aspen.jpg',
      //imgAttribution,
    },
    {
      clickCount: 0,
      name: 'max',
      imgSrc: 'img/max.jpg',
      //imgAttribution,
    },
    {
      clickCount: 0,
      name: 'Jack',
      imgSrc: 'img/jack.jpg',
      //imgAttribution,
    },
    {
      clickCount: 0,
      name: 'bindi',
      imgSrc: 'img/bindi.jpg',
      //imgAttribution,
    }
  ],
  //currentDog: null
}

let octopus ={

 init: function(){
   currentDog = model.Dogs[0]
   dogview.init();
   doglist.init();
 },

 clicked: function () {
   currentDog.clickCount++;
   dogview.rendercount()

 },

setDog: function(dog){
currentDog=dog
dogview.render()
dogview.rendercount()

}


}


var dogview ={

init: function () {
  this.dogelem = document.getElementById('Dog')
  this.dogelemname = document.getElementById('Dog-name')
  this.dogelemcount = document.getElementById('Dog-count')
  this.dogelemimg = document.getElementById('Dog-img')
  this.render();
  this.rendercount();

  this.dogelemimg.addEventListener('click' , function () {
    octopus.clicked();

  });
},

render: function (){
  this.dogelemimg.src=currentDog.imgSrc;
  this.dogelemname.textContent=currentDog.name;

},

rendercount: function () {
 this.dogelemcount.textContent=currentDog.clickCount;
},

}

var doglist = {
  init: function(){
    this.listdog= document.getElementById('Dog-list')
    this.render()

  },

 render: function () {
   var i, elem
   for(i=0;i < model.Dogs.length;i++){
   elem= document.createElement('li')
   elem.textContent =model.Dogs[i].name
   this.listdog.appendChild(elem);
   elem.addEventListener('click', function (dog) {
     return function(){
     octopus.setDog(dog)


     //console.log(i)
   };
}(model.Dogs[i]));

 }




 }

}







octopus.init()
