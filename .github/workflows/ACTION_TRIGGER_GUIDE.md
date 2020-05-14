### Actions deploy guide

In order to trigger `deploy-to-demo` action you should execute the following curl:

`curl -H "Accept: application/vnd.github.everest-preview+json" \`  
`-H "Authorization: token <ACCESS_TOKEN>" \`  
`--request POST \`  
`--data '{"event_type": "deploy-to-demo"}' \`  
`https://api.github.com/repos/akveo/ngx-admin/dispatches`

This curl expects `ACCESS_TOKEN` input parameter
<br>`ACCESS_TOKEN`: A personal access token. Creating a [personal access token guide](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)  
