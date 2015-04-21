$(document).ready(function(event) {

  var HalfCardView = Backbone.View.extend({
    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3 id='<%= id %>'><%= title %></h3><h3><%= content %></h3><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });

  var data = {title: "First Halfsies", content: "I am 1/2.", id: 'happy'}
  var newCard = new HalfCardView(data);

  var dataTwo = {title: "Second Halfsies", content: "I am 2/2. Buahahahha", id: 'sad'};
  var anotherCard = new HalfCardView(dataTwo);


  var LogoView = Backbone.View.extend({
    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h1 id='<%= id %>'><%= brand %></h1><span class='close'>(x) dismiss</span>"),
    initialize: function(input) {
      this.render(input);
    },
    render: function(input) {
      this.$el.html(this.template(input));
      console.log(this.$el);
      // $('body').append(this.$el);
      var row = $('.row')[2];
      $(row).append(this.$el);
    },

  });

  var input = {brand:"Hail to the Meek!", id = "who"};
  var logo = new LogoView(input);

  var input2 = {brand:"Maximize Human Capital!", id = "where"};
  var logo2 = new LogoView(input2);

  var input3 = {brand:"Death to Death to Smoochy!", id = "why"};
  var logo3 = new LogoView(input3);


});
