# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `LoginForm` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Header` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Note Cycles

### Notes API Request Actions

* `fetchAllProjects`
  0. invoked from `AllProjects` `didMount`/`willReceiveProps`
  0. `GET /api/notes` is called.
  0. `receiveAllProjects` is set as the success callback.

* `createProject`
  0. invoked from start a project button `onClick`
  0. `POST /api/notes` is called.
  0. `receiveSingleProject` is set as the success callback.

* `fetchSingleProject`
  0. invoked from `ProjectDetail` `didMount`/`willReceiveProps`
  0. `GET /api/notes/:id` is called.
  0. `receiveSingleNote` is set as the success callback.

* `updateProject`
  0. invoked from `ProjectForm` `onSubmit`
  0. `POST /api/notes` is called.
  0. `receiveSingleNote` is set as the success callback.

* `destroyProject`
  0. invoked from delete project button `onClick`
  0. `DELETE /api/notes/:id` is called.
  0. `removeNote` is set as the success callback.

### Rewards API Response Actions

* `receiveAllRewards`
  0. invoked from an API callback

* `receiveSingleReward`
  0. invoked from an API callback

* `removeReward`
  0. invoked from an API callback

## Backers Cycles

### Backers API Request Actions


* `createBackers`
  0. invoked from reward buy button `onClick`
  0. `POST /api/projects/:currentUser_id/:Reward_id` is called.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when there is text
  0. `GET /api/projects` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. The `SearchSuggestion` reducer updates `suggestions` in the application's state.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. The `SearchSuggestion` reducer resets `suggestions` in the application's state.
