# Layout Tools

Utilità per lo sviluppo di layout.

Versione 3

## Installazione

Installare lo script con npm:

```shell
npm i --save-dev m-layout-tools
```

Aggiungere quindi alla pagina desiderata:

```html
<script src="[path_to_layout_tools]/layout_tools-min.js" data-fw="__framework__"></script>
```
in cui `__framework__` corrisponde alla sigla del framework utilizzato: **bootstrap3**, **bootstrap4**, **foundation6**, ecc. Se non inserito, il default è `bootstrap4`. 

## Uso

Lo script aggiunge in alto a sinistra nella pagina un indicatore del breakpoint css attivo. Espandendolo con un clic vengono visualizzati:

* un pulsante per rendere invisibile il tool (per renderlo nuovamente visibile è necessario posizione il cursore sopra il pulsante, che in hover diventa semitrasparante, e fare clic di nuovo. Se presente viene nascosta anche la barra di debug di Symfony. Opzionalmente, si può decidere di rimuovere completamente il markup di layout tools (e la barra di Symfony) per i casi in cui siano necessario eliminarli completamente per demo, documentazione ecc... 
* la dimensione del viewport
* userAgent, pixel density e dimensioni dello schermo
* un pulsante per l'attivazione di uno script per la verifica delle immagini responsive caricate tramite il tag `picture`
