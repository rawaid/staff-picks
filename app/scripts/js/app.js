$(document).foundation();

var vm = new Vue({
  el: '#app',
  data: {
    Items: [],
    endpoint: 'http://player.vimeo.com/video/',
    showVid: ''
  },
  mounted: function (){
    var self = this;
    $.ajax({
      url: "http://vimeo.com/api/v2/channel/staffpicks/videos.json",
      dataType: 'json',
      method: 'GET',
      context: document.body,
      success: function(data){
        self.Items = data;
      },
      error: function(error) {
        self.showVid = 'error';
      }
    });
  },
  methods: {
    show: function(Item){
      this.showVid = 'false';
      this.selected = Item;
      this.showVid = 'true';

      $(document).ready(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
      });
    }
  }
});
