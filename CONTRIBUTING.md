# Contribution workflow

This is a personal portfolio repository used to practise Docs as Code.

## Before making a change

1. Create or choose a GitHub issue.
2. Update the local `main` branch with `git pull --ff-only origin main`.
3. Create a separate branch for the issue.

Example:

```bash
git switch -c docs/issue-12-improve-about-page
```

## Before opening a pull request

1. Review the changed files with `git status` and `git diff`.
2. Build the site with `npm run docs:build`.
3. Preview the production build with `npm run docs:preview`.
4. Commit and push the branch.

## Pull request

- Explain what changed and why.
- Link the issue with `Closes #<issue-number>`.
- Check the **Files changed** tab.
- Wait for the automated VitePress build to pass.
- Merge only when the content and build are correct.
