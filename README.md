# staff-picks

Application built for the Vimeo "Staff Picks" code test. Made using Vue.js + SCSS + foundation! To test, you can pull the repo and you should be able to just run "gulp watch" and have the app launch with browser-sync.

# Was the question/problem clear? Did you feel like something was missing or not explained correctly?
The problem was pretty straight forward, I had no issues understanding it.

#How much time did you spend on each part: understanding, designing, coding, testing?
I spent around 6 and a half hours working on the app. I spent around an hour "understanding" which consisted of me thinking about the problem and what technologies to use to tackle it. I decided to go with Vue.js, I actually never used Vue before this project but since I'm so used to using Angular.js in my current job and the syntax and methodology seemed so similar, the transition was pretty seamless and I actually had a lot of fun making the app in Vue. I spent about five hours actually designing/coding the app. I ran into some issues with Vue, particularly due to following some older examples that used the older Vue instance method "ready" instead of "mounted" which was throwing an error in my app. Besides that, styling the iframe for the embed took a while to get it to look how I wanted it to. Lastly, I spent about 30 minutes testing - I put in gibberish for the ajax URL and put in a v-if statement to display an error message if the feed didn't return data. Besides that, testing involved making sure the app looked good on resizing, but that was also a part of the design/dev process.

#What would you have done differently if you have more time or resources?
If I had more time, I would've used SASS mixins for some of the styling, mainly for colors or breakpoints, would've liked to add more animations to make it a little sleeker, and would've liked to try building this in Angular or React. I would have liked to utilize all the thumbnail sizes as well, I think in some breakpoints the image quality suffers slightly, but given the time constraints I chose to go with the largest image and scale down.

#Are there any bottlenecks with your solution? if so, what are they and what can you do to fix them/minimize their impact? 
I can't think of any bottlenecks really, not to say that my app is perfect by any means, but that the app is rather simple so the performance doesn't really have anything to be that negatively affected by. Perhaps minifying the code for a production release, or maybe since this is my first Vue app, there's a better instantion method to use than "mounted". I originally wasn't displaying thumbnail images and was embedding iframes for every video, so I think switching to thumbnails and only embedding iframes for whichever video the user selected had a performance boost.

#How would the system scale for more users/visitors?
I think caching the feed and minifying code would be steps in the right direction for scaling the system.

#How would your solution cope if the API was slow or broke or returned incorrect data?
As I said earlier, there's an error message displayed if the data doesn't come back properly. It's not a particularly useful message since it just essentially says "this isn't working now, try again later", but given the scenario I think it's fine. A slow API isn't really handled by my solution, though I think adding loading animations and a message if it took a while would be the best solution for that.






