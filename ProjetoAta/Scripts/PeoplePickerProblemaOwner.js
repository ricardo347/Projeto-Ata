﻿/// <reference path="_references.js" />
// Run your custom code when the DOM is ready.
// Render and initialize the client-side People Picker.
function initializePeoplePickerProblemaOwner(peoplePickerElementId) {

    // Create a schema to store picker properties, and set the properties.
    var schema = {};
    schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
    schema['SearchPrincipalSource'] = 15;
    schema['ResolvePrincipalSource'] = 15;
    schema['AllowMultipleValues'] = false;
    schema['MaximumEntitySuggestions'] = 50;
    schema['Width'] = '280px';

    SPClientPeoplePicker_InitStandaloneControlWrapper()
    // Render and initialize the picker. 
    // Pass the ID of the DOM element that contains the picker, an array of initial
    // PickerEntity objects to set the picker value, and a schema that defines
    // picker properties.
    SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
}

// Query the picker for user information.
function getUserInfoProblemaOwner() {

    // Get the people picker object from the page.
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerProblemaOwner_TopSpan;

    // Get information about all users.
    var users = peoplePicker.GetAllUserInfo();
    
    var userInfo = '';
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        for (var userProperty in user) {
            userInfo += userProperty + ':  ' + user[userProperty] + '<br>';
        }
    }
    return users;
}

// Get the user ID.
function getUserId(loginName) {
    var teste = "";
    var context = new SP.ClientContext.get_current();
    this.user = context.get_web().ensureUser(loginName);
    context.load(this.user);
    context.executeQueryAsync(
         Function.createDelegate(null, ensureUserSuccess),
         Function.createDelegate(null, onFail)
    );    
}

function ensureUserSuccess() {
    $('#userId').html(this.user.get_id());
    return "retornado com sucesso";
}

function onFail(sender, args) {
    alert('Query failed. Error: ' + args.get_message());
}