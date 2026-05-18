# Debug Session: posting-content-error

Status: OPEN

## Symptom
- Posting content from Postiz fails in Railway.
- Related evidence currently includes `railwaydeploylogs.md` and user screenshots.

## Scope
- Environment: Railway deployment
- Area: posting flow, media generation flow, backend callback/API flow

## Initial Hypotheses
- H1: The posting request reaches the backend, but the social provider API returns a permission or payload error.
- H2: The agent/posting flow fails earlier because image generation or media upload fails, and posting never executes cleanly.
- H3: The deployed Railway instance is missing required env/config for the target provider, so the provider call is built incorrectly at runtime.
- H4: The backend handles the failure but returns only a generic UI message, while the actionable error is hidden in a narrower log window than the current excerpt.
- H5: A reconnect/redeploy mismatch exists, where frontend state and backend/provider state are out of sync during the final posting step.

## Evidence Log
- Pending targeted log extraction

## Next Step
- Extract the specific posting-time log window and classify the failure path before making any code changes.
