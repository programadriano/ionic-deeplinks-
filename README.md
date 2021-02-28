# Ionic Deeplinks

Projeto desenvolvido para demonstramos como trabalhar com deeplinks em um projeto desenvolvido em Ionic.

## Configuração

Para trabalhar com Deeplink foi necessário instalar os seguintes plugins no projeto:

```TypeScript
ionic cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME={nome do projeto} --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST={url que sera chamada}

npm install @ionic-native/deeplinks 
```


Exemplo de como esta configurando as variaveis nesse projeto:

```TypeScript
ionic cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=ionicdeeplink --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=tadriano.com
```

## Testar o projeto

Para testar o projeto sera necessário utlizar um emulador ou executar ele em um device. 

Com o projeto rodando, você precisa criar uma página HTML para chamar o seu link. Para esse exemplo eu utilizei o site *w3schools*. A seguir você tem o link de uma página HTML configurada com as variaveis do meu projeto:

```TypeScript
https://www.w3schools.com/code/tryit.asp?filename=GO3XTE12VDBC
```

## Resultado
[![IMAGE_ALT](https://img.youtube.com/vi/Yl22wDeIBt4/0.jpg)](https://www.youtube.com/watch?v=Yl22wDeIBt4)

