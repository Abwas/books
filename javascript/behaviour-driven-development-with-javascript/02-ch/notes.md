# 2. The Mechanics of BDD

* Escrever as especificações (feito pelo product owner)
* Criar um UML para modelar os requerimentos do sistema

## 2.1 Começando com Jasmine

* Fazer o download da última versão do fw BDD [Jasmine](https://github.com/jasmine/jasmine/tree/master/dist)
* Descompacte o zip e renomeie a pasta
* Abra o arquivo `SpecRunner.html`

**Estrutura de pastas**

* `lib`: vai conter os códigos de terceiros
* `spec`: vai conter os seus testes
* `src` : vai conter seu código de produção

## 2.2 You should code a spec

* Sempre comece com os testes
* Quebre as especificações nas menores partes possíveis para criação dos testes
* Geralmente falamos: "it **should** have a name". É comum o uso de **should**
* O objeto em teste é chamado SUT (Subject Under Test), nomenclatura derivada do TDD
* o SUT é importante pois cada *spec* dever conter um e apenas um SUT
* Adicione a referência dos arquivos de teste em `SpecRunner.html` na sua respectiva seção.
* Remova os arquivos e referências *default*
* Rode o teste e ele falhará - normal!
* Use as mensagens de erro para guiar o desenvolvimento da app - ex: *ReferenceError: Seminar is not defined*, logo, devemos definir `Seminar`!
* Crie agora o arquivo que vai para produção (não se esqueça de adicioná-lo no arquivo html)
* **dica**: sempre use *namespaces* para evitar o escopo global e *"use strict"*

## 2.3 Using an expectation

* Volte para o arquivo de teste para fazê-lo falhar
* Sem uma expectation, sabemos apenas que o teste não tem erros bobos, mas não temos certeza se está sendo criado as informações que necessitamos de fato
* implemete a `expectation` para verificar
* implemente a função para retornar o que é esperado

## 2.3 Baby Steps

* quanto menor os passos, mais rápido o feedback que você terá se está certo ou não
* o tamanho do passo é definido pela sua experiência
* tente adivinhar qual será o estado das notificações e quais as mensagens que serão retornadas

## 2.3.2 Red-Green-Refactor

* **Red-Green-Refactor** é o mantra do TDD/BDD
* Foque primeiro no desenvolvimento da interface da sua aplicação (fase *red*)
* Foque depois na implementação da sua aplicação (fase *green*)

## 2.3.3 Coding Error-Driven

* A partir das mensagens de erro você saberá qual o próximo passo a ser implementado na sua aplicação

## 2.4 Adding another spec

