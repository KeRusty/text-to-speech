## Obtain authentication credentials.

    MAKE SURE THE API IS RUNNING BEFORE ATTEMPTING TO USE THIS

    Create local credentials by running the following command

    * Go to API Manager -> Credentials
    * Click "New Credentials", and create a service account or [click here](https://console.cloud.google.com/project/_/apiui/credential/serviceaccount)
    * Download the JSON for this service account, and set the `GOOGLE_APPLICATION_CREDENTIALS`
    environment variable to point to the file containing the JSON credentials.

    Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable:

     Mac OSX or Linux:

        export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/[FILE_NAME].json"

    Windows (Command Prompt):

        set GOOGLE_APPLICATION_CREDENTIALS=/path/to/service_account_file.json

    Windows (PowerShell):

        $env:GOOGLE_APPLICATION_CREDENTIALS="/path/to/service_account_file.json"


## Before Running

Please have the API Running at [http://localhost:3000](http://localhost:3000)

### `npm install`

This will install the app<br />

### `npm start`

Runs the app in the development mode.<br />

Keep in mind to run it in [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

