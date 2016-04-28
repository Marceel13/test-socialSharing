var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        new FastClick(document.body);
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {}
};

app.initialize();

function ups(){ 
    alert("Ups!, no hay menú :("); 
}

function openOptions(){
    console.log("menu obert");
    document.getElementById("containerShare").className = "centerContent transition";
}

function closeOptions(){
    console.log("dew");
    document.getElementById("containerShare").className = "bottomContent transition";
}

function share(expr){
    switch (expr) {
      case "Twitter":
          console.log("twitter");
          window.plugins.socialsharing.shareViaFacebook('Message and link via Twitter', null /* img */, 'http://www.phonegapspain.com',function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
          console.log("ja no va be");
            closeOptions();
        break;
      case "Facebook":
          console.log("Facebook");
        window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
          console.log("ja no va be");
            closeOptions();
        break;
      case "WhatsApp":
          console.log("whatsapp");
            window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
          console.log("ja no va be");
            closeOptions();
        break;
      default:
        console.log("");
    }
}