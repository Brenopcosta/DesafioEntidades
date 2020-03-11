"use strict";

var facts = [
    ['gabriel', 'endereço', 'av rio branco, 109', true],
    ['joão', 'endereço', 'rua alice, 10', true],
    ['joão', 'endereço', 'rua bob, 88', true],
    ['joão', 'telefone', '234-5678', true],
    ['joão', 'telefone', '91234-5555', true],
    ['joão', 'telefone', '234-5678', false],
    ['gabriel', 'telefone', '98888-1111', true],
    ['gabriel', 'telefone', '56789-1010', true],
  ];

  var schema = [
    ['endereço', 'cardinality', 'one'],
    ['telefone', 'cardinality', 'many']
];

function retornaTodosOsFatosDoTipoOne(facts,entidade){
    var saidaFato = [];
    var pessoasChecadas = [];
    for(var iterator = facts.length -1 ; iterator >= 0; iterator--){
        if(facts[iterator][1] == entidade && !( elementoEstaNoArray([facts[iterator][0],facts[iterator][1]], pessoasChecadas)) && facts[iterator][3]){
            pessoasChecadas.push([facts[iterator][0],facts[iterator][1]]);
            saidaFato.push(facts[iterator]);            
        }
    }
    return saidaFato;
}

function elementoEstaNoArray(elemento,arrayz){
    var i ;
    for(i=0; i<arrayz.length; i++){
        if(elemento[0]==arrayz[i][0] && elemento[1]==arrayz[i][1] )
        return true;
    }
    return false;
}

function retornaTodosOsFatosDoTipoMany(facts,entidade){
    var saidaFato = [];
    for(var iterator = facts.length -1 ; iterator >= 0; iterator--){
        if(facts[iterator][1] == entidade && facts[iterator][3]){
            saidaFato.push(facts[iterator]);
        }
    }
    return saidaFato
}

function factSchema ( facts , schema){
    todosOsFatos = [];
    for(var i = 0 ; i<schema.length; i++){
        if(schema[i][2] == 'one'){
            todosOsFatos.push(retornaTodosOsFatosDoTipoOne(facts,schema[i][0]));
        }
        else{
            todosOsFatos.push(retornaTodosOsFatosDoTipoMany(facts,schema[i][0]));
        }
    }
    return todosOsFatos;
}
    





