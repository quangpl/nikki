# Nikki

A web based IDE written in NodeJS. **For Real**.

![having fun here](https://raw.githubusercontent.com/odino/nikki/master/bin/images/nikki.gif?token=328420__eyJzY29wZSI6IlJhd0Jsb2I6b2Rpbm8vbmlra2kvbWFzdGVyL2Jpbi9pbWFnZXMvbmlra2kuZ2lmIiwiZXhwaXJlcyI6MTQwMzk4MDA4N30%3D--df43445fcfba173ae878bc6447c1169b61bc59cf)

## Installation

The recommended way to install nikki is to do it
globally:

```
npm install -g nikki
```

## Usage

Once you have it installed globally you can simply
start nikki from the command line:

```
nikki
```

This command will start nikki on port `9123`: now simply open
your beloved browser at `localhost:9123`
and you will see that nikki shows you a list of files in `/` (no jokes):
to open a new project, simply specify it in the URL, for
example `http://localhost:9123/home/odino/my-project`.

If you wish to start nikki on another port, simply specify it
once you start the IDE:

```
nikki --port 80
```

## Support

Nikki should work on all modern browser but, to be sure,
*just use chrome man* :)

## Development

You can contribute to nikki by simply forking this repo and
running it locally; `cd` into nikki's root, run `npm install`
and `bower install` and launch the app with:

```
gulp develop
```

## License

For the ones who care, nikki is released under the MIT license.

## Are you for real?

"Kinda", "Why not?" and "Let's just have fun" are all valid
answers to this question.