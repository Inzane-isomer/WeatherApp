Allow me to walk through my thoughts and design considerations in the process of building WeatherApp. 

Setup and technology: 
My previous technology experience has had me build client facing React.js, React Native and NodeJs applications. As such I haven't had too much practical experience with TypeScript. 
My first point of call in this aspect was to learn some of the nuances and differences as well as the best practices for TS-based projects (of which I hope to have done decently in this). 

Along with the above, it's been a couple years since I've built a React Web application and boy am I surprised by how much the environment has changed! This was my first experience with Vite as I was surprised to see that Create-React-App has been completely deprecated in favour of NextJs, thankfully, Vite was quite unobtrusive to use. 

In my previous experience, I also quite liked using CSS-in-JS libraries for the benefits of modularity of component-based frameworks like React and the simplification of potentially nightmarish CSS bugs. JSS was a library I had quite extensive experience using but because of the use of Typescript, I thought it may not be the best solution to introduce a whole lot of vanilla JavaScript into the app so I went with Styled-Components which is another library I had previous experience using. 

I have, however, come to regret using Styled-Components as it didn't quite give me the flexibility I was looking for and seems to lag a bit behind libraries like Tailwind (which has seemingly become the favourite pick of modern React developers). It has also made testing the frontend components a lot harder than I expected. 

Other considerations and challenges:
WeatherStack Api: I quickly delved into the documentation of the API and built a proof-of-concept so I could start building out the necessary data models and design some of the frontend components. There were 2 endpoints I would only need to use as they would provide historical, forecast and the current weather which would provide everything necessary. 

However I noticed that WeatherStack no longer provides those endpoints on the free-tier of their service. I investigated their API to try and pull the data a different way but was unable to retrieve it. 
In the API's stead, I built a mocked response object based on their documentation and retrieved that data instead.
 
I left my original API endpoint in the code to demonstrate how I would've retrieved the same information using Fetch if it was available. 

Location searches: Since the endpoints I required were unavailable , I could not use a dynamic location search. The API had a fuzzy search-like endpoint that would return a location based on a partial city-name to aid in searching, however I would've instead chosen to use a library-based React solution to solve this since using the API would introduce significant slowdowns to the results of that search; using something like a lookup enum in the code to potentially aid in this process. 

Time: There were nice-to-haves I would've loved to implement (such as a mobile responsive design. I had set the foundations for it) but I unfortunately ran out of time. 