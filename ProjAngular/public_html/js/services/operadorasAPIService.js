/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("listaTelefonica").service("operadorasAPI", function ($http, config){
    this.getOperadoras = function (){
        return $http.get(config.baseURL + "/Operadoras.json");
   }; 
});
