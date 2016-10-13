/// <reference path="_references.js" />
// Run your custom code when the DOM is ready.
$(document).ready(function () {

    // Specify the unique ID of the DOM element where the
    // picker will render.

    //initializePeoplePicker('peoplePickerParticipantes');
    
});

// Render and initialize the client-side People Picker.
function initializePeoplePickerParticipantes(peoplePickerElementId) {

    // Create a schema to store picker properties, and set the properties.
    var schema = {};
    schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
    schema['SearchPrincipalSource'] = 15;
    schema['ResolvePrincipalSource'] = 15;
    schema['AllowMultipleValues'] = true;
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
function getUserInfoParticipantes() {

    // Get the people picker object from the page.
    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerParticipantes_TopSpan;

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

function ensureUserSuccess() {
    $('#userId').html(this.user.get_id());
    return "retornado com sucesso";
}

function onFail(sender, args) {
    alert('Query failed. Error: ' + args.get_message());
}