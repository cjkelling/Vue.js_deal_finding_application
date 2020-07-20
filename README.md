### The Project:
The goal of this project was to create a web application that allows a user to
search for offers on products from a variety of retailers. Offer data and
retailer data are obtained via an API call. This data is displayed in a gallery
view which shows all available offers to the user. Each offer is selectable and
when clicked will display a detailed view of that offer. This is all done using
a Single Page Application via Vue.js, so there are no route changes or
additional API calls done during the use of this application unless the page is
manually reloaded.

The back-end API was built using Rails(5.2.2), Ruby(2.5.3), and it utilizes a
sqlite3 database. The API has two endpoints. A GET request to ‘/api/v1/offers’
will return JSON data of all offers and their associated retailers. A PATCH
request to ‘api/v1/offers/:id’ will update the offer's record associated with
the id given in the parameters to show the offer has been viewed. This endpoint
is used to keep a count of each time the offer is viewed on the front-end. The
API is fully tested using RSpec.

The front-end application is built using Vue(2.6.11), Vue-Router(3.2.0),
Vuex(3.4.0), and Axios(0.19.2). This Vue application is broken down into
components, one for each aspect of the application. These components allow for
seamless rendering and manipulation of elements in the DOM, which enables this
application to work as a Single Page Application. The Vue application is fully
tested using Jest.

This project was begun on Monday, July 13th, and finished on Monday, July 20th.

### Setup:
As per instructions from the company, initial installation is as follows:

1. Ensure XCode and Command Line Tools are installed
2. Install [brew](http://brew.sh/)
3. Install the following brew packages
```
#!sh
brew install git node pcre rbenv ruby-build sqlite3
```
4. Ensure your rbenv profile is setup per the instructions printed during brew
install, and possibly restart your terminal
5. cd to the project root directory (where Gemfile is) and setup ruby
```
#!sh
cd [project_directory]
rbenv install 2.5.3
rbenv rehash
gem install bundler
```
6. Initialize the application
```
#!sh
bundle install
rake db:migrate
rake db:test:prepare
rake db:seed
```

The above instructions will set up the Ruby on Rails back-end API and seed your
sqlite3 database. To set up the front-end you will need to install Vue.js. To
get Vue you will need to install Node.js and npm, which can both be downloaded
at https://www.npmjs.com/get-npm. Once npm is ready:

```
npm install -g @vue/cli
```
This will give you access to Vue commands and enable you to run the Vue server.

### Starting the Applications:
When first opening the application you will be in the Rails API directory. To
start the server run ‘rails s’ in your terminal. This Rails server must be
running before the Vue application is started in order for the Vue application
to work. Once the Rails server is running, open a second terminal and
'cd vue_app'. This will move you into the Vue application. Here you must run
'npm run serve' to start the Vue server. If successful, the terminal will tell
you that your Vue application can be accessed at http://localhost:8080/. This
will be the only route needed to view and interact with the application. My time
working with this application utilized Chrome, but I did not test other browsers
to verify compatibility.

### Testing:
While in the Rails API directory, run ‘rspec’ to run the full back-end RSpec
test suite. To run the front-end tests, move to the Vue directory and run
‘npm run test:unit’ to run the full front-end Jest test suite.

### Estimated Time to Complete Project
For this project I had to use Ruby on Rails for my back-end, but was allowed to
<<<<<<< HEAD
use any front-end JavaScript framework. Knowing that the company uses Vue.js, I
felt it was best to use Vue for this assignment. I had not used Vue prior to
this assignment, so I knew that much of the beginning days would be spent
learning that framework. My initial thought was to spend a day setting up the
back-end, 2 days learning Vue, and 2 to 3 days writing the code for the
front-end. This timeline would take me about a week to complete, so my goal was
to have this project finished and turned in exactly one week after receiving it.
=======
use any front-end JavaScript framework. Knowing that the company
uses Vue.js, I felt it was best to use Vue for this assignment. I had not
used Vue prior to this assignment, so I knew that much of the beginning days
would be spent learning that framework. My initial thought was to spend a day
setting up the back-end, 2 days learning Vue, and 2 to 3 days writing the code
for the front-end. This timeline would take me about a week to complete, so my
goal was to have this project finished and turned in exactly one week after
receiving it.
>>>>>>> 441a9b9a018277ccbd195a656862575f320e7a40

### Problem Areas
There are two options for installing the Vue-CLI using npm:
  - 'npm install -g vue-cli', which supports the CLI version 2.9
  - 'npm install -g @vue/cli', which installs CLI version 4.6
I felt that the newer version of the CLI would be better, but I was also finding
less documentation on it. As a new Vue user, I chose version 2.9 because it had
better documentation. This caused unforeseen issues for me, as I was having
difficulties getting Jest to work properly. This caused many hours of headache
as I tried to figure out the compatibility issues and it ultimately made me
switch to the newer 4.9 version of the CLI many days after I started the
project. Upgrading the CLI to version 4.6 ultimately fixed all compatibility
problems I was having.

### My Process
Upon receiving this project, my first step was to read the ReadMe document.
This document explained the minimum requirements and also the nice to have
features for the assignment. I did not understand every part of these
requirements at first, so my next step was to go through the code that already
existed. There was not much to look through, but reading the database CSV files
cleared up what kind of tables I would need for my back-end and it cleared up
the confusion I had upon first reading the ReadMe.

Wanting to make some progress early, I tackled the back-end first. This was set
up using Ruby on Rails, which I have done many projects in and am quite familiar
with. As expected, this did not take long and I had my API functioning as
intended by the first day. All that was required initially was one endpoint for
a GET request.

I felt my front-end design should emulate the look and feel of what the company
is already doing. It would not make sense to have a completely different
experience for the customer, so I spent time analyzing the application that
already exists for the company in order to gain design inspiration.

After a day of Vue video tutorials I felt comfortable starting my front-end
project. Vue uses components and the idea was similar to the concept of modules
that I was used to in Rails. Each module uses a template, script,
styling format. I got lost a few times and spent another day on video tutorials
but I was ultimately able to gain a firmer understanding of the functionality
that Vue gives me as a framework.

### Future Iterations
This project is still at a very early stage. Additional features include having
user login functionality and user specific abilities. A user should be able to
save the offers they want to use. There could be a section for frequently used
offers that they want immediate access to and another section that shows the
offers they have accepted but may not want to use repeatedly.

### Final Thoughts
Ultimately, the Vue features I was able to incorporate in this project include
Vue Router(for Single Page Application support), Vuex(for state control), and
Axios(for HTTP request support). My total comprehension of Vue is still at an
introductory level, as I have only been doing it for one week, but I feel very
proud of the progress I was able to make for this project. Being able to take on
a project with no prior knowledge was challenging and fun. There is still a lot
of work that could be done on this project to make it a fully operational
application, but for the given time-frame and my starting knowledge, I am
satisfied with the final product.
