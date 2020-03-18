# Opdracht 1.1 - Breek het Web
## 7. Cookies niet accepteren
**We kennen ze allemaal; de cookie-meldingen waar we allemaal snel doorheen klikken, en waarvan niemand precies weet wat ze nou eigenlijk doen. Wat nou als er mensen zijn die ze wel (deels) uitzetten? Pech voor analytics, of gaat er meer stuk? Waarom wel/niet? Wat vind je van de cookiewet, en levert die wet voordelen op voor eindgebruikers? Bedenk ook meteen een betere oplossing voor het probleem, nu je toch bezig bent.**

### Onderzoek
Zoals betoogd door Chris James in het artikel 'The Web I Want' die we voor deze week hebben gelezen, zou ook naar mijn mening voor veel websites JavaScript niet nodig moeten zijn om de content van een website weer te geven.

Helaas is dat voor veel websites niet het geval. Je zou verwachten dat voor grote websites met veel gebruikers hier wel rekening mee gehouden zou worden, maar dat blijkt niet altijd het geval. De site van de KLM bijvoorbeeld, is zonder JavaScript niet te gebruiken. Dat is vreemd, omdat vluchten van over de hele wereld, ook met slechtere internetverbindingen geboekt zouden moeten kunnen worden.

Een andere website waar ik geprobeerd heb cookies uit te schakelen was Delpher.nl. Deze website stopt volledig met werken wanneer cookies niet worden toegestaan. De pagina gaat zichzelf zelfs constant blijven refreshen in een poging cookies te bereiken. Wanneer je vervolgens ook de JS uitschakelt, blijven de belangrijkste functionaliteiten in de website verder wel gewoon werken.

Volgens mij betekent dat dat het probleem makkelijk op te lossen zou zijn, door de code door te laten lopen wanneer cookies niet gevonden kunnen worden. Waarschijnlijk hebben de makers daar simpelweg niet over nagedacht.

Op zoek naar websites die hier wel goed in slagen, heb ik geprobeerd wel wat gecompliceerde websites te zoeken die op het eerste oog afhankelijk lijken te zijn van JavaScript. Github en Google blijken prima te werken zonder cookies of JavaScript

### Context
De invoering van de cookiewet heeft als gevolg gehad dat mensen wel meer zijn na gaan denken over de gevolgen van bijvoorbeeld 'tracking cookies.' Ook als je de pop-ups negeert of geen toestemming geeft om deze te gebruiken, bleken vorig jaar uit een onderzoek van de NOS veel websites nog steeds surfgedrag van hun gebruikers te volgen [(1)](https://nos.nl/op3/artikel/2273929-gevolgd-op-internet-honderden-websites-schenden-je-privacy.html).

Het lijkt geslaagd te zijn mensen meer bewust te maken van de gevolgen wanneer zij op websites toestemming geven tot het gebruik van hun gegevens. Desalniettemin klikken de meeste gebruikers de pop-ups vaak achteloos weg en waren er aanvankelijk veel onduidelijkheden over de noodzaak voor het geven van toestemming. 

Volgens de Guardian zijn de popups vooral een tijdelijk resultaat van de plotselinge komst van de wetgeving. Er vind al meer standaardisering plaats van toestemmingsvragen doordat bedrijven gebruik maken van templates of kant en klare tools. Vervelend aan de toestemmingsvragen is wel dat er een cookie nodig is om dergelijke voorkeuren op te slaan. Zodoende blijven de toestemmingsvragen terugkeren wanneer een gebruiker op een ander medium of in een andere browser dezelfde website bezoekt.
Tot nog toe is daar nog geen goede oplossing voor. [(2)](https://www.theguardian.com/technology/askjack/2018/jul/05/what-should-i-do-about-all-the-gdpr-pop-ups-on-websites)

1. https://nos.nl/op3/artikel/2273929-gevolgd-op-internet-honderden-websites-schenden-je-privacy.html
2. https://www.theguardian.com/technology/askjack/2018/jul/05/what-should-i-do-about-all-the-gdpr-pop-ups-on-websites

## 6. Javascript volledig uit
**Browsen met JavaScript gewoon helemaal uit; waarom niet? Hoe makkelijk is dit voor eindgebruikers zelf in te stellen? Doen mensen dit ook echt? Is het Web überhaupt nog bruikbaar dan? Wat vind jij zelf? Waar leg je de grens van wat nog acceptabel is en wat niet? Hoe graag wil je je helemaal niet druk hoeven maken over deze vraag?**

