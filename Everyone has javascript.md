# Everyone has JavaScript, right?
*Stuart Langridge*

**This article shows why it’s important to have your website work without JavaScript. It shows what obstacles could result in serving your webpage without JS and why progressive enhancement should be implemented in every website that uses JS.
Possible obstacles**

- “All your users are non-JS while they're downloading your JS” — Jake Archibald
- Internet connection could go down before the JS is loaded.
- Sometimes, http requests don’t complete and the browser remains hanging forever loading a page.
- Some corporate firewalls still block JS.
- ISP’s or mobile operators can interfere with downloaded JS.
- Microbrowsers, creating previews in social apps for example don’t always wait for the JS to boot up.
- Some people still switch off their JS.
- On slow connections like 2G chrome will disable all scripting.
- Some services or users have addons or plugins installed that inject scripts or alter the DOM in ways that might interfere with your scripts.
- CDN’s can go down. A minute downtime a month can still hit a lot of users.
- Not all browsers support the JS you wrote.
 
## Full article
https://kryogenix.org/code/browser/everyonehasjs.html
