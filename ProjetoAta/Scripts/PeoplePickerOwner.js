var usuario;
/// <reference path="_references.js" />
$(document).ready(function () {
    
    // Specify the unique ID of the DOM element where the
    // picker will render.
}); 

// Render and initialize the client-side People Picker.
function initializePeoplePickerOwner(peoplePickerElementId) {

    // Create a schema to store picker properties, and set the properties.
    var schema = {};
    schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
    schema['SearchPrincipalSource'] = 15;
    schema['ResolvePrincipalSource'] = 15;
    schema['AllowMultipleValues'] = false;
    schema['MaximumEntitySuggestions'] = 50;
    schema['Width'] = '280px';
    ''
    // Render and initialize the picker. 
    // Pass the ID of the DOM element that contains the picker, an array of initial
    // PickerEntity objects to set the picker value, and a schema that defines
    // picker properties.
    SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
}

// Query the picker for user information.
function getUserInfoOwner() {
    // Get the people picker object from the page.
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerOwner_TopSpan;

    // Get information about all users.
    var users = peoplePicker.GetAllUserInfo();
    var userInfo = '';
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        for (var userProperty in user) {
            userInfo += userProperty + ':  ' + user[userProperty] + '<br>';
        }
    }
    //console.log(users);
    return users;
}

// Get the user ID.
function getUserIdOwner(loginName) {
    
}

function ensureUserSuccessOwner() {
    $('#userId').html(this.user.get_id());
    usuario = this.user.get_id();
}

function onFailOwner(sender, args) {
    alert('Query failed. Error: ' + args.get_message());
}