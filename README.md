# Mother's Soccer Score API

## The idea

In my last project : [Mother’s Soccer]([https://github.com/rqphy/Motherssoccer](https://github.com/rqphy/Motherssoccer)), I created a 3d football game. To make it competitive I need to create a scoreboard.

Here we go, let’s make a small rest API with Node.js and Express!

## The API

### GET

First of all, I need to create a route to get a list of the best scores. It should be easy, just a simple SELECT. I’ll add a query to provide a limit thought. The route will be ``/list/[length]``.

I’ll set the default length to 5 because that’s what I need in Mother’s Soccer.

### POST

Now how do we add scores? Well, let’s just do an INSERT. In the DTO, I’ll have a score (obviously), a name and a date (not sure it will be useful but I’ll add it anyway). Good, I need to check the parameters before sending them to the database. The score is just a number and the date isn’t provided by the user. I’ll check the name thought. Let’s use a RegEx that accepts the letters from a to z.

## Some issues

### The Host

The API is completed, I just need to host it… Oh. Well I couldn’t find a free Node server. As I mentioned on the original repo, I had only 1 week to create the game and the API. I ran out of time and couldn’t find a free server to host my API.

The scoreboard is working fine because I recreated it in PHP. It was quick and I was able to host it fast.


## How does it work

### To get a list of the top scorers :

#### Route parameter :

length : (number, default: 5) length of the list

```bash
/[api_key]/list/[length]
```

## POST

### To add a new scorer :

#### Body parameters

name : (string, [a-zA-Z], length: 3) name of the scorer

score : (number) score

```bash
/[api_key]/new
```
