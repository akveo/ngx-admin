### Actions deploy guide

In order to trigger workflow action you should execute the following curl ([docs](https://docs.github.com/en/rest/actions/workflows#create-a-workflow-dispatch-event)):

```
curl \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token <ACCESS_TOKEN>" \
  https://api.github.com/repos/akveo/ngx-admin/actions/workflows/<WORKFLOW_ID>/dispatches \
  -d '{"ref":"<REF>","inputs":{"name":"Mona the Octocat","home":"San Francisco, CA"}}'
```

Parameters:

- `WORKFLOW_ID` - the workflow id or its file name (e.g. `azureCliDeploy.yml`)
- `ACCESS_TOKEN`: A personal access token. Creating a [personal access token guide](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
- `REF`: Required. The git reference for the workflow. The reference can be a branch or tag name. ('demo')
