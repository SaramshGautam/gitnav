# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Dataset Description

## LINK : https://huggingface.co/datasets/lewtun/github-issues

- **url**: API endpoint for accessing details about this specific pull request.
- **repository_url**: API endpoint for the repository to which the pull request belongs.
- **labels_url**: API endpoint to fetch labels that have been applied to the pull request.
- **comments_url**: API endpoint to retrieve comments on this pull request.
- **events_url**: API endpoint to fetch event data associated with the pull request.
- **html_url**: Direct URL to view this pull request on the GitHub website.
- **id**: A unique identifier assigned to this pull request by GitHub.
- **node_id**: Another unique identifier used within the GitHub system.
- **number**: The sequential number assigned to the pull request within the repository.
- **title**: The title of the pull request, summarizing the changes or purpose.
- **user**: Details about the user who created the pull request, including their username (login), user ID, and node ID.
- **labels**: Labels attached to the pull request for categorization and filtering (empty in this case).
- **state**: The current state of the pull request, which is 'open'.
- **locked**: Indicates whether the pull request is locked to prevent further comments.
- **assignee**: User assigned to review or work on the pull request (none in this case).
- **assignees**: List of users assigned to the pull request (empty in this case).
- **milestone**: Milestone that the pull request might be a part of (none in this case).
- **comments**: The number of comments on the pull request (appears empty, but should be an integer).
- **created_at**: Timestamp for when the pull request was created.
- **updated_at**: Timestamp for the last update made to the pull request.
- **closed_at**: Timestamp for when the pull request was closed, if it has been closed (NaT indicates not applicable as it's still open).
- **author_association**: Describes the relationship of the author to the repository; 'MEMBER' indicates a member of the organization that owns the repository.
- **active_lock_reason**: Reason provided for why the pull request might be locked (not applicable here).
- **pull_request**: Contains metadata about the pull request, like URLs to fetch more specific data.
- **body**: Descriptive text accompanying the pull request, providing details about the changes proposed.
- **timeline_url**: API endpoint to fetch the timeline of events for this pull request.
- **performed_via_github_app**: Indicates whether the pull request was performed via a GitHub app (not applicable here).
- **is_pull_request**: Confirms that this entry is a pull request.
