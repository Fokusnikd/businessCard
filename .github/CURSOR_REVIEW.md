# Cursor review setup

The `Cursor Atomic Design review` workflow runs on non-draft PRs into `main`, on opening,
reopening, new commits and marking ready for review. It currently accepts only PRs authored
and triggered by the repository owner from a branch in the same repository. Forks and bots
are skipped. This is a trusted personal-repository workflow, not a sandbox for untrusted PR code.

## One-time setup

1. Commit `.github/workflows/cursor-review.yml`, `.github/prompts/atomic-review.md` and this
   guide to the repository. Keep the instruction in the PR branch as well.
2. Generate a Cursor API key in your Cursor dashboard, using the same account as the subscription.
   Add it as repository secret `CURSOR_API_KEY` in Settings → Secrets and variables → Actions.
   Never put the key in a commit, issue, PR comment or chat.
3. Check usage and billing in Cursor. Turn off on-demand usage if you want to stop at the
   included allowance. Annual payment is not an unlimited CI budget; the workflow timeout
   limits duration, not monetary spend. No extra usage is enabled by these files.
4. Optionally set Actions variable `CURSOR_MODEL` to an available Cursor CLI model ID.
   If unset, CLI selects its default. Check `agent --list-models` for your account.
5. Open a PR from a working branch into `main`. Direct pushes to `main` do not run PR review.
   GitHub must permit the workflow's `contents: write` and `pull-requests: write` permissions.

## Result

Cursor modifies only source files and relevant project context. Separate workflow steps
check scope, unchanged Git HEAD, completion marker, lint and build. Then a regular
fast-forward push adds a `refactor: apply Cursor architecture review` commit to the same
PR branch. No empty commit is created when no fix is needed. A PR comment mentions the
owner, links the reviewed SHA, summarizes the agent report, and says it is ready for review.
Merging remains manual. If the PR changed during review, the stale result is not pushed.
Errors produce a failure comment with a run link; available reports are retained for 7 days.

The bot push uses GITHUB_TOKEN and does not recursively trigger another review. Validation
of the edited code happens in the current run. Other push-triggered CI workflows will not
automatically run from that bot push; configure them separately if adding required checks.

To retry a failed run, use Actions → failed run → Re-run failed jobs (only if its PR SHA
is still current). To pause the automation, disable this workflow in Actions.

## Acceptance still requiring a live run

Configuration syntax is locally checked. Before relying on the automation, run a real PR:
verify Cursor authentication and model availability, a successful refactor commit, a green
build/lint, the completion comment, and manual review of preserved visuals and behavior.
An AI completion marker is not proof that every architectural decision is correct.

Sources: https://cursor.com/docs/cli/github-actions,
https://cursor.com/docs/cli/headless,
https://cursor.com/help/account-and-billing/overages.
