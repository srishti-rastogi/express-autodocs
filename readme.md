<img src="https://res.cloudinary.com/prafulla98/image/upload/v1598888740/Express%20AutoDocs/ezgif.com-gif-maker_3_ec8j0s.gif" width="100%"/>
<p align="center">
<br>
<br>
<a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/Contributions-Welcome-informational?style=for-the-badge&logo=github&logoColor=white&labelColor=black" alt="Contributions"/></a> <img src="https://img.shields.io/github/license/pika1998/express-autodocs?style=for-the-badge&labelColor=black"> <img src="https://img.shields.io/github/v/release/pika1998/express-autodocs?style=for-the-badge&labelColor=black">
</p>
<br>

# 💡 Introduction

This action automatically scans for express APIs in your codebase and generates a documentation website

<br>

# How to add to your workflow ❔

To add this action to your workflow simply modify your workflows **main.yml** file.

```yml
# This is a basic workflow to help you get started with Express AutoDocs Action

name: Express AutoDocs.

# This specifies when the action should occur
on:
  push:
    branches: [master]

jobs:
  generate_docs_job:
    runs-on: ubuntu-latest
    name: Generating Docs
    steps:
      # this step checks out the master branch of your repo using checkout action.
      - name: Checks out the repository
        id: checksout-repository
        uses: actions/checkout@v2
        with:
          repository: ""
      # this step generates the docs
      - name: Generating Docs.
        id: reading-file
        uses: Pika1998/express-autodocs@v0.0.1
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.reading-file.outputs.time }}"
```

<br>

# ⚙️ Configurations

Following are the parameters which you can modify to make this action suitable for your codebase.

| Parameters      | Description                                                                                                                         | Default Value    |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| appName         | The name of the app variable                                                                                                        | app              |
| routerName      | The name of the router variable                                                                                                     | router           |
| docsTitle       | The title of the documentation page                                                                                                 | Documentation    |
| server-filepath | The path of the base index file where APIs are defined                                                                              | server.js        |
| outputFormat    | The format in which assets are deployed <br/> **markdown** - To generate MD files <br/> **standard** - To generate HTML & CSS Files | standard         |
| outputBranch    | The branch in which the generated docs are deployed                                                                                 | express-autodocs |

<br>

# Describing your APIs

You can easily add description to your APIs using JSON in comments in the following way

**Adding API descriptions**

```js
/*  
{
    "description":"Checks for token and gets the logged in user",
    "inputs":{
        "x-auth-token":"The JWT Token in header"
    },
    "label":"Public",
    "outputs":{
        "user":"The user object stored in database",
    }
}
*/
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => {
      res.json(user);
    });
});
```

# 🗃️ Example Output

<img src="https://res.cloudinary.com/prafulla98/image/upload/v1599465979/Express%20AutoDocs/express-autodocs-standard1_dtvoj8.png" width='100%'><img src="https://res.cloudinary.com/prafulla98/image/upload/v1599465979/Express%20AutoDocs/express-autodocs-standard2_owbp3q.png" width='100%'>

# ⏱️ Changelog

Check the [CHANGELOG.md](CHANGELOG.md) to view the changes done to this action over time

# ⭐ Contribute

Contributions to this action are most welcomed. please check the [Contributions Guide](CONTRIBUTING.md) for more details.

# 🤗 Sponser This Project

<a href="https://www.buymeacoffee.com/prafulla98" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" width="45%" ></a>

<a href="https://www.patreon.com/prafulla">
<img src="https://feministlibrary.co.uk/wp-content/uploads/2016/05/become_a_patron_button@2x.png" width="45%">
</a>
