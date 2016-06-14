# Compass check-in reprise

> Serves a series of checkin forms from the `forms` folder, and emails the results to the recipients.

compass-checkin-node it's a reasonably simple node app that its supposed to replace the current checkins.
It serves a rendered version for each JSON in the ‘forms’ folder. When the form get POSTed, it sends an email to the recipients defined in the same json.


`forms` defines checkin forms, and the email recipients.
`name` is a required field for every form element, and should be unique.

## example:

if we create the file `forms/pirate.json` the app will serve it at `/pirate` ;

```json
{
  "title": "Pirate Check in",
  "name":"hello_pirates",
  "recipients": [
    {
      "name":"guybrush",
      "email":"guybrush.threepwood@mi.com"
    }
  ],
  "fields": [
    {
      "name": "id",
      "type": "text",
      "label": "Pirate Identifier",
      "required": true
    },
    {
      "name":"spacer1",
      "type": "hr"
    },
    {
      "type": "paragraph",
      "text": "Please provide information about your pirate's behavior and mood:"
    },
    {
      "name": "arr",
      "type": "radio",
      "label": "ARRR",
      "required":false
    }
  ]
}

```

### available form fields :

- text : a simple text input
- hr : an horiziontal line separator
- paragraph : a text block, use this to add long descriptions
- checkbox : a checkbox item
- range : a range slider
- textarea : a text area field
- radio : a radio button (pair)

## build:
```
 git clone git@github.com:turinggroup/compass-checkin-node.git
 cd compass-checkin-node
 npm install
```

## develop:
run `gulp serve`. The server will auto reload when changing any file. Keep in mind that editing the views (JSX) will require a browser refresh to see the changes.
