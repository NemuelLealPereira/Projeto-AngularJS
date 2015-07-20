/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http){

    $scope.app = "Lista Telefonica";                
    $scope.contatos = [];                
    $scope.operadoras = [];

    // só scope se for invocar diretamente pela view assim então pode usar var

    var carregarContatos = function () {
        $http.get("http://localhost/Projetos/AngularJS/ProjAngular/public_html/js/contatos.json").success(function(data) {
            $scope.contatos = data;
        }).error(function(data){ // apresenta na tela o erro
            $scope.message = "Aconteceu um problema: " + data;
        });                        
    };

    var carregarOperacoes = function () {
        $http.get("http://localhost/Projetos/AngularJS/ProjAngular/public_html/js/operadoras.json").success(function(data) {
             $scope.operadoras = data;
        });                       
    };


    $scope.adicionarContato = function(contato) {
        //$scope.contatos.push(angular.copy(contato));
        contato.data = new Date();

        $http.post("http://localhost/Projetos/AngularJS/ProjAngular/public_html/js/contatos.json", contato).success(function(data) {
            console.log(contato);    
            console.log($http.post("http://localhost/Projetos/AngularJS/ProjAngular/public_html/js/contatos.json", contato));   
            delete $scope.contato;
            $scope.contatoForm.$setPristine(); // setando pristine na validação dos campos para não aparecer as mensagens de erro depois de adicionar algo.
            // Essa linha de código não é ideal pois está lendo $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone})
            //console.log($scope.telefone); 
            carregarContatos();                       
        });                   
    };


    $scope.apagarContatos = function (contatos){
        // devo estudar filter  desvendando a linguagem JavaScripts arrays 9
        $scope.contatos = contatos.filter(function (contato){
            if (!contato.selecionado)
                return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };    

    carregarContatos();
    carregarOperacoes(); 
}); // a function recebe scope que faz a mediação entre view e contoller

