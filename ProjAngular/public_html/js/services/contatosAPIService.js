/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module("listaTelefonica").factory("contatosAPI", function ($http, config){
    var _getContatos = function (){
        return $http.get(config.baseURL + "/contatos.json");
    };
    
    var _getOperadoras = function (){
        return $http.get(config.baseURL + "/Operadoras.json");
    };
    
    var _saveContato = function (contato){
        return $http.post(config.baseURL + "/contatos.json", contato);
    };
    
    return{
        getContatos: _getContatos,
        getOperadoras: _getOperadoras,
        saveContato: _saveContato
    }; 
});