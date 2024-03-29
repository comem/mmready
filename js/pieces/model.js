//***************************************************************************//
//*******************           Model                 ***********************//
//***************************************************************************//

//!\ LES POST DELETE ET PUT n'ont pas l'attr RESPONSE
//   ainsi que fail et error
var MyInitModel = Backbone.Model.extend();
var MyModel = Backbone.Model.extend({
    parse: function(response) {
        // to do if statut fail/error un gros if pour le statut
        
        if (typeof response.data != "undefined") {
            if (typeof response.data.response != "undefined") {
                response = response.data.response;
            } else {
                response = response.data;
            }
        }
        return response;
    }
});

var CheckOut = MyInitModel.extend({
    urlRoot: CHECKOUT
});

var Nav = MyInitModel.extend({
    
});

var Plugin = MyModel.extend({
    value: function () {
        return this.get("value");
    },
    type: function () {
        return this.get("type");
    },
    class: function () {
        return this.get("class");
    },
    ccid: function(){
        return this.get("id");
    }
});

var LoginModel = MyModel.extend({
    urlRoot: LOGIN,
    parse: function(response){
        console.log("IN parse of LoginModel");
        if (response.status === 'success') {
                    
                } else if (response.status === "error") {
                    alert(response.message);
                    return;
                } else if ((response.status === "fail")) {
                    alert(response.data.auth);
                    return;
                }else{
                    alert("Problème indéterminé");
                }
    }
});

var LogoutModel = MyModel.extend({
    urlRoot: LOGOUT
});






//--------------------------------------------

var Artist = MyModel.extend({
    urlRoot: ARTISTS
});

var Event = MyModel.extend({
    urlRoot: EVENTS,
    formatDate: function() {
        var dateStart = this.get("start_date_hour");
        var attrDateStart = atomDateStartUTC(dateStart);
        this.set(attrDateStart);

        if (this.get("ending_date_hour") != null) {
            var attrDateEnd = atomDateEndUTC(this.get("ending_date_hour"));
            this.set(attrDateEnd);
        }
    },
    initialize: function() {
        this.formatDate();
    },
    parse: function(response) {
        // to do if statut fail/error
        if (typeof response.data != "undefined") {
            if (typeof response.data.response != "undefined") {
                response = response.data.response;
            } else {
                response = response.data;
            }
        }
      
        return response;
        
    }

});

var EventType = MyModel.extend({
    urlRoot: EVENT_TYPES
});

var Genre = MyModel.extend({
    urlRoot: GENRES
});

var Gift = MyModel.extend({
    urlRoot: GIFTS
});

//!\ requêtes complexes liées avec Artists-> check DOC
var Illustration = MyModel.extend({
    urlRoot: ILLUS
});

var Image = MyModel.extend({
    urlRoot: IMAGES
});

var Instrument = MyModel.extend({
    urlRoot: INSTRUS
});

var Link = MyModel.extend({
    urlRoot: LINKS
});

var Musician = MyModel.extend({
    urlRoot: MUSICIANS
});

var Performer = MyModel.extend({
    urlRoot: PERFORMERS
});

var Representer = MyModel.extend({
    urlRoot: REPRESENTERS
});

var Ticket = MyModel.extend({
    urlRoot: TICKETS
});
var Ticket_Cat = MyModel.extend({
    urlRoot: TICKET_CATS
});

var Paginate = MyModel.extend();

//--------OLD----------------------------
//var Artist = MyModelNestedCollection.extend({
//    urlRoot: ARTISTS+"-new",
//    nested: 'musicians'
////    defaults: function () {return {
////        instruments: new Instruments()
////    }},
////    initialize: function(attrs, options){ //CHabloz n'a pas ça
////               
////        MyModelNestedCollection.prototype.initialize.apply(this, arguments),
////        console.log("Nouveau Musician créé. Name: "+this.get('name'));
////    }
//    
//});
//
//var LangFR = MyModel.extend({ //A paufiner mais la requete fonctionne il faut juste etre au clair avec les attributs recus
//    urlRoot: LANGS+"/fr",
//    initialize: function(attrs, opt){
//        console.log(" -------- Initialize de LangFR");
//        console.log(attrs);
//    }
////    parse: function(attrs, opt){
////        if (typeof attrs.status != "success") {
////            console.log("Le statut de LangFR N'EST PAS success");
////            console.log(attrs);
////            
////            console.log(attrs.mastring);
////            return attrs.mastring;
////        }else{
////        console.log("Le statut de LangFR EST success");
////        console.log(attrs);
////        console.log("response de parse de attrs.data : ");
////        console.log(attrs.data);
////        return attrs.data; 
////        }
////        
////    }
//});
//
//var Paginate = MyModel.extend({
//    //urlRoot: URLSERVEURinstruSuccess,    
//    initialize: function(attrs, opt){
//        console.log("Nouveau Paginate créé");
//        //console.log(attrs.name_de);
//        this.on('change', function(event){
//            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
//            return this;
//        });
//        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
//            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
//        });
//          }    
////    ,
////    printDetails: function(){
////        console.log("Instrument Name: "+this.get('name'));
////    },
////    validate: function(attrs){ //ou validateName, validateType, ... :  pour valider qu'un attr
////        if(!attrs.name){
////            return "Ein Name einsetzen";
////        }
////    }
//});
//
//
//
//var Instrument = MyModel.extend({
//    //urlRoot: URLSERVEURinstruSuccess,    
//    initialize: function(attrs, opt){
//        console.log("Nouvel Instrument créé");
//        //console.log(attrs.name_de);
//        this.on('change', function(event){
//            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
//            return this;
//        });
//        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
//            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
//        });
//          }    
////    ,
////    printDetails: function(){
////        console.log("Instrument Name: "+this.get('name'));
////    },
////    validate: function(attrs){ //ou validateName, validateType, ... :  pour valider qu'un attr
////        if(!attrs.name){
////            return "Ein Name einsetzen";
////        }
////    }
//});
//
//
//
//var Representer = MyModel.extend({
//    urlRoot: REPRESENTERS,    
//    initialize: function(){
//        console.log("Nouveau representer créé. Name: "+this.get('name'));
//        this.on('change', function(event){
//            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
//            return this;
//        });
//        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
//            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
//        });
//          }    
//
//});
//
//var Event_Type = MyModel.extend({
//    urlRoot: EVENT_TYPES,   
//    initialize: function(){
//        console.log("Nouveau Event_Type créé. Name: "+this.get('name'));
//        this.on('change', function(event){
//            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
//            return this;
//        });
//        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
//            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
//        });
//          }    
//
//});
//
//var Ticket_Cat = MyModel.extend({
//    urlRoot: TICKET_CATEGORIES,   
//    initialize: function(){
//        console.log("Nouveau Ticket_Cat créé. Name: "+this.get('name'));
//        this.on('change', function(event){
//            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
//            return this;
//        });
//        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
//            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
//        });
//          }    
//
//});
//
//
//var Genre = MyModel.extend({
//    urlRoot: GENRES,   
//    initialize: function(){
//        console.log("Nouveau Genre créé. Name: "+this.get('name'));
//        this.on('change', function(event){
//            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
//            return this;
//        });
//        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
//            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
//        });
//          }    
//
//});
//
//
//var Gift = MyModel.extend({
//    urlRoot: GIFTS,   
//    initialize: function(){
//        console.log("Nouveau Gift créé. Name: "+this.get('name'));
//        this.on('change', function(event){
//            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
//            return this;
//        });
//        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
//            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
//        });
//          }    
//
//});
//
//
//var Ticket = MyModel.extend({
//    urlRoot: TICKETS,   
//    initialize: function(){
//        console.log("Nouveau Ticket créé. Name: "+this.get('name'));
//        this.on('change', function(event){
//            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
//            return this;
//        });
//        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
//            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
//        });
//          }    
//
//});
//
//var Image = MyModel.extend({
//    urlRoot: "",   
//    initialize: function(){
//        console.log("Nouveau Image créé. Name: "+this.get('name'));
//        this.on('change', function(event){
//            console.log('Un événement "change" est survenu sur '+JSON.stringify(this.changed)+'. L objet entier en JSON:' +  JSON.stringify(event)); 
//            return this;
//        });
//        this.on('invalid', function(model, error){//si la mÃ©thode validate perÃ§oit un truc pas valide elle gÃ©nÃ¨re un Ã©vÃ¨nement "invalid"
//            console.log("Message d'erreur de validation: "+ error); // error contient la string qui est "returnÃ©e" par la fonction validate
//        });
//          }    
//
//});
