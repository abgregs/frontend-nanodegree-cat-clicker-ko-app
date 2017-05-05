// our list of cats
var initialCats = [
  {
    name: 'Josh',
    clickCount: 0,
    imgSrc: 'img/cat0.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['The Dude']
  },
  {
    name: 'Dori',
    clickCount: 0,
    imgSrc: 'img/cat1.jpg',
    imgAttribution: 'https://www.flickr.com/photos/wjlonien/24160496342/',
    nicknames: ['Smarty Pants']
  },
  {
    name: 'Charles',
    clickCount: 0,
    imgSrc: 'img/cat2.jpg',
    imgAttribution: 'https://www.flickr.com/photos/stephanlenhoff/3346933613',
    nicknames: ['Handsome']
  },
  {
    name: 'Jackson',
    clickCount: 0,
    imgSrc: 'img/cat3.jpg',
    imgAttribution: 'https://www.flickr.com/photos/48904813@N04/4480686437',
    nicknames: ['Fuzzy']
  },
  {
    name: 'Louis',
    clickCount: 0,
    imgSrc: 'img/cat4.jpg',
    imgAttribution: 'https://www.flickr.com/photos/105567585@N06/10946247446/',
    nicknames: ['Sleepy']
  }
];

// cat constructor
var Cat = function(data) {

  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  // update the level of the cat based on number of clicks on the cat image
  this.level = ko.computed(function (){
      if (this.clickCount() >= 0 && this.clickCount() <= 10) {
        return 'Newborn';
      }
      else if (this.clickCount() > 10 && this.clickCount() <= 25) {
        return 'Infant';
      }
      else if (this.clickCount() >  25) {
        return 'Teen';
      }



  }, this);
};

// our view model where we will perform operations such as updating the current cat and counting the # of clicks
var viewModel = function() {
  var self = this;

  // place to store list of cats
  this.catList = ko.observableArray([]);

  // get list of cats and add them to array
  initialCats.forEach(function (catItem){
    self.catList.push(new Cat(catItem));
  });

  // show the first cat
  this.currentCat = ko.observable(this.catList()[0]);

  // show the cat that gets clicked on
  this.changeCurrentCat = function(clickedCat) {
    self.currentCat(clickedCat);
  }

  // add to the number of clicks for the current cat each time the cat image is clicked
  this.incrementCounter = function () {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }

};



ko.applyBindings(new viewModel);
