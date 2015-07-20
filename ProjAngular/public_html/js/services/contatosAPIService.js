/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module("listaTelefonica").factory("contatosAPI", function ($http){
    var _getContatos = function (){
        return $http.get("http://localhost/Projetos/AngularJS/ProjAngular/public_html/js/contatos.json");
    };
    
    var _getOperadoras = function (){
        return $http.get("http://localhost/Projetos/AngularJS/ProjAngular/public_html/js/Operadoras.json");
    };
    
    var _saveContato = function (contato){
        return $http.post("http://localhost/Projetos/AngularJS/ProjAngular/public_html/js/contatos.json", contato);
    };
    
    return{
        getContatos: _getContatos,
        getOperadoras: _getOperadoras,
        saveContato: _saveContato
    }; 
});