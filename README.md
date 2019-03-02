<h3 align="center">Action Badges</h3>
<p align="center">A README badge service for GitHub Actions<p>
<p align="center"><img src="https://action-badges.now.sh/JasonEtco/action-badges?workflow=Test my code" /> <a href="https://codecov.io/gh/JasonEtco/action-badges/"><img src="https://badgen.now.sh/codecov/c/github/JasonEtco/action-badges" alt="Codecov"></a></p>

## Usage

```md
![badge](https://action-badges.now.sh/JasonEtco/example-repo)

# Specify a check suite (the name of a workflow)
![badge](https://action-badges.now.sh/JasonEtco/example-repo?workflow=test-on-push)
```

**Note:** This service only works for public repositories! It cannot read the status of your private repos.

## How it works

When the `/:owner/:repo` endpoint is requested, the app makes a request to the GitHub API to get the list of check suites created by the GitHub Actions app. It then calculates the status based on the sum conclusion of the check suites and responds with some SVG code (thanks to [badgen](https://github.com/amio/badgen)).

