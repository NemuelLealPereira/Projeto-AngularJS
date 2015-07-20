/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("listaTelefonica").service("operadorasAPI", function ($http){
    this.getOperadoras = function (){
        return $http.get("http://localhost/Projetos/AngularJS/ProjAngular/public_html/js/Operadoras.json");
   } 
});
