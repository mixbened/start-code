# START.CODE

## Setup Development

### install dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Deployment

Deploys to Heroku Services with automatic Deployment from Github.

Leading Branch is master. So for Production Deployment, just push to Github.

```
git add .

git commit -m 'feat: ...'

git push -u origin master
```

## Application

### API Data Structures

#### Courses

Course Details are created and stored in Organisators Eventbrite Account.

Courses are loaded from the Eventbrite API. Information coming in:

https://www.eventbrite.com/platform/api#/reference/event/list/list-events-by-organization

When clicking on a specific Course, the Application makes another request and getting information for a specific ID.

This information has to be structured in the Eventbrite description in a very specific way. We load the event description as raw HTML and split it into raw strings that are displayed in another way than the HTML coming in. Also there is another call to the venue endpoint, to receive the name from an ID.

Eventbrite information has to be structured like:

All Paragraphs (new lines)

* instructor
* whats the content
* for who
* what to bring
* goals of the course
* count lessons
* duration of lesson
* price

#### Posts

* title
* content
* picUrl
* date
* author

