# lddblist

a node app that simply takes a csv of movies, searches lddb.com to see if there are any laser disc results, and outputs a csv of the titles that came back positive, with links to their search page. lddb doesn't seem to have an api so here we are.

## installation

```
  git clone
  npm install
```

## running
    
create a file called input.csv in the lddblist folder that is a list of movies you want to search. e.g.:

```
carrie
fire walk with me
the babadook
evil dead
```

run `node index.js`

after a few moments you should have a new file called `output.csv` that will contain a list of all movies that came back positive, and a link to their search page. 

```
carrie, https://www.lddb.com/search.php?search=carrie&sort=title&format=ld
evil dead, https://www.lddb.com/search.php?search=evil+dead&sort=title&format=ld
fire walk with me, https://www.lddb.com/search.php?search=fire+walk+with+me&sort=title&format=ld
```

This program doesn't do any deeper validation that seeing if search results came back, so there is a chance for you to get false positives, but this is a good first pass if you're trying to look for a filmmakers LD filmography.
