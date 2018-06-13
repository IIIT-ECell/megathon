# Working repository for Megathon 2018's site

Built with Jekyll and Bootstrap 4

## Testing locally

1. [Install jekyll](https://jekyllrb.com/docs/installation/) and associated dependencies, like bundler, Ruby, etc.
2. Fork and clone the repository. For solely local testing, just cloning will do.
3. cd into the repo folder and run `bundle exec jekyll serve --baseurl=""`. See [jekyll docs](https://jekyllrb.com/docs/usage/) for more details.
4. Navigate to `localhost:4000/` (by default)

## Contribution guideline

### Git Workflow

https://musescore.org/en/handbook/developers-handbook/finding-your-way-around/git-workflow

#### Summary

1. Fork on GitHub (click Fork button) (if you don't have master access)
2. Clone to computer, preferably use SSH URL (`git clone git@github.com:you/MuseScore.git`)
3. Don't forget to cd into your repo: (`cd MuseScore/`)
4. Set up remote upstream (`git remote add upstream git://github.com/musescore/MuseScore.git`) (for forks)
5. Create a branch for new issue (`git checkout -b 404-new-feature`)
6. Develop on issue branch. [Time passes, the main MuseScore repository accumulates new commits]
7. Commit changes to your local issue branch. (`git add . ; git commit -m 'commit message'`)
8. Fetch upstream (`git fetch upstream`) (for those with master access, fetch origin)
9. Update local master (`git checkout master; git merge upstream/master`)
10. Rebase issue branch (`git checkout 404-new-feature; git rebase master`)
11. Repeat steps 6-11 until dev is complete
12. Push branch to GitHub (`git push origin 404-new-feature`)
13. Start your browser, go to your GitHub repo, switch to "404-new-feature" branch and press the [Pull Request] button

After having made a Pull Request don't pull/merge anymore, it'll mess up the commit history. If you (have to) rebase, use 'push --force' (`git push --force`) to send it up to your GitHub repository, this will update the PR too. Be careful not to do this while the core team is working on merging in your PR.

### Keeping gh-pages up to date with master

[This should work](https://gist.github.com/mandiwise/44d1edce18f2ffb14f63)

```
// Reference: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/

$ git add .
$ git status // to see what changes are going to be commited
$ git commit -m 'Some descriptive commit message'
$ git push origin master

$ git checkout gh-pages // go to the gh-pages branch
$ git rebase master // bring gh-pages up to date with master
$ git push origin gh-pages // commit the changes
$ git checkout master // return to the master branch
```

Main changes are incorporated from branches into master, then into gh-pages. Ideally.
