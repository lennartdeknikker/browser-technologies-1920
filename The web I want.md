# The Web I Want
*Chris James - august 20th, 2018*

**Slow loading web pages might seem like a first world problem. Instead it mostly affects those in developing nations. Satellite internet connection is really bad in comparison to what we have.**

![Internet Speeds](images/internet&#32;speeds.png)

**A lot of times, these loading processes could easily be optimized by progressive enhancement. The internet is supposed to be accessible for everyone.**

## 20ish years ago
Internet traffic has increased a lot, even for the simplest pages, while in the past 20 years, in actual content delivery, nothing has changed.

## 10-15 years ago
CSS came. Where HTML simply describes a document of content and then it is styled using this thing called CSS. This also made websites more accesible, in some ways it also made them easier to develop. CSS wasn’t widely supported yet and it was still hard to make consistent experiences.

When Gmail came, people realized the web could be used for actual applications. Negative side-effect was that people started to think simple promotional websites had to have a lot of JavaScript as well.

## 5 years-ish till present
Present misconceptions:
- A lot of people think you need every web technology under the sun to deliver text.
- Frontend-developers need to know frameworks. You’re mocked if you just write the bare minimum JS that’s needed.
- Page refreshing is a massive problem for users and must be avoided.
- DX before UX

Right now you seed a lot of people building SPAs and struggling with performance issues due to underlying technical choices. In most of these cases, a simpler website would suffice.

## Lessons
- For delivering content, HTML is just enough.
- JS is bad for low power devices, low bandwidth and requires more effort to remain accessible and fast.
- New frameworks and tools cost a lot of effort to learn, while most of the time it’s having a bad effect on the UX.
- Websites should do everything it needs to with just HTML and CSS.
  
## Result, the web I want:
- Semantic, accessible HTML
- CSS to make things look pretty
- Small images
- Websites ready to read after 10kb
- Websites that are usable without JS.
  
## When to use JS
Aim for progressive enhancement with JS. Websites should still work without JS. SPA’s should not be used for simple consumer websites.

It’s your responsibility as a developer to take a stand. These things can help:
- inform them how Amazon learned that every 100ms in page load cost them a 1% of sales.
- Inform them carousels make their product catalogue slow and annoying, while it’s also expensive to make.
- Let them know that they will reach more people with a website that works on old hardware and bad connections

“If I told the builder of my home to make it out of straw, I would hope she would convince me otherwise.”

## Conclusion
- Take a look at the performance tab in your tools and cut away the cruft you thought was necessary.
- Take pride in making lean, accessible, simpler to execute websites
- Remember the goal of most websites is delivering useful content

Then we might not have to buy new laptops every 2 years and people less fortunate than you have a chance of actually using the web; the way it was intended.

## Full Article
https://dev.to/quii/the-web-i-want-43o