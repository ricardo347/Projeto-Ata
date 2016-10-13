﻿function $_global_clientforms() {
    if ("undefined" == typeof g_all_modules) g_all_modules = {};
    g_all_modules["clientforms.js"] = {
        version: {
            rmj: 16,
            rmm: 0,
            rup: 5708,
            rpr: 1210
        }
    };
    typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkBegin_clientforms.js");
    SPClientForms = {};
    SPClientForms.ClientFormManager = function () {
        var a = {};
        this.RegisterClientForm = function (b) {
            if (!a[b]) a[b] = new SPClientForms.ClientForm(b)
        };
        this.GetClientForm = function (b) {
            return a[b]
        }
    };
    SPClientForms.ClientFormManager.GetClientForm = function (b) {
        return typeof a != "undefined" ? a.GetClientForm(b) : null
    };
    SPClientForms.ClientFormManager.RegisterClientForm = function (b) {
        typeof a != "undefined" && a.RegisterClientForm(b)
    };
    SPClientForms.ClientFormManager.SubmitClientForm = function (b) {
        SP != null && SP.QoS != null && SP.QoS.WriteUserEngagement("ClientForm_Save_Click");
        var a = SPClientForms.ClientFormManager.GetClientForm(b);
        return a != null && a.SubmitClientForm()
    };
    SPClientForms.ClientForm = function (r) {
        var f = this,
            k = false,
            l = r,
            a = window[r + "FormCtx"],
            g = a != null ? a.FormControlMode : SPClientTemplates.ClientControlMode.Invalid,
            m = l + "ClientFormPlaceholder",
            n = document.getElementById(m),
            v = l + "ClientFormTopContainer",
            w = document.getElementById(v);
        if (n == null || !SPClientTemplates.Utility.IsValidControlMode(g)) {
            k = true;
            this.SubmitClientForm = function () { };
            this.RenderClientForm = function () { };
            this.NotifyControlEvent = function () { };
            return
        }
        var e = null;
        if (a.SubmitButtonID != null && a.SubmitButtonID != "") e = document.getElementById(a.SubmitButtonID);
        var j = "",
            i = 0,
            x = "ClientFormPostBackValue_" + a.ListAttributes.Id + "_",
            b = {
                CurrentValue: {},
                Validators: {},
                ValidationErrors: {},
                ValidationErrorDisplayed: {}
            },
            c = {
                Init: {},
                Error: {},
                Focus: {},
                GetValue: {},
                HasValueChanged: {}
            };
        this.RenderClientForm = function () {
            if (k) return;
            var t = a.ListData,
                m = a.ListSchema,
                e = {};
            e.ControlMode = g;
            e.FormUniqueId = l;
            e.FieldControlModes = a.FieldControlModes;
            e.BaseViewID = SPClientTemplates.Utility.ControlModeToString(g);
            e.ListTemplateType = a.ListAttributes.ListTemplateType.toString();
            e.ListData = {
                Items: [t]
            };
            e.ListSchema = {
                Field: []
            };
            for (var v in m) e.ListSchema.Field.push(m[v]);
            e.Templates = SPClientTemplates.TemplateManager.GetTemplates(e);
            s(e);
            SPClientTemplates.Utility.GetPropertiesFromPageContextInfo(e);
            if (a.CSRCustomLayout) SPClientRenderer.Render(w, e);
            else {
                e.Templates.View = RenderViewTemplate;
                e.Templates.Body = RenderGroupTemplateDefault;
                e.Templates.Group = RenderItemTemplateDefault;
                e.Templates.Item = RenderFieldTemplateDefault;
                e.Templates.Header = e.Templates.Footer = "";
                for (var r in m) {
                    e.ListSchema = {
                        Field: [m[r]]
                    };
                    var u = l + a.ListAttributes.Id + r;
                    SPClientRenderer.RenderReplace(document.getElementById(u), e)
                }
            }
            var i = "";
            for (var f in m) {
                var x = m[f];
                if (x.FieldType == "Attachments") j = f;
                d("Init", f) && c.Init[f]();
                if (a.FieldControlModes[f] == SPClientTemplates.ClientControlMode.EditForm || a.FieldControlModes[f] == SPClientTemplates.ClientControlMode.NewForm) {
                    if (typeof b.ValidationErrors[f] == "undefined") b.ValidationErrors[f] = false;
                    if (typeof b.ValidationErrorDisplayed[f] == "undefined") b.ValidationErrorDisplayed[f] = false;
                    if (a.ValidationErrors != null && a.ValidationErrors[f] != null) {
                        if (i == "" && d("Focus", f)) i = f;
                        h(f, new SPClientForms.ClientValidation.ValidationResult(true, a.ValidationErrors[f]))
                    }
                }
            }
            if (i == "" && typeof a.InitialFocus != "undefined") i = a.InitialFocus;
            SPClientForms_ClientFormInitFocusCallback = function () {
                EnsureScriptFunc("SP.js", "SP.ClientContext", function () {
                    d("Focus", i) && c.Focus[i]()
                })
            };
            _spBodyOnLoadFunctionNames.push("SPClientForms_ClientFormInitFocusCallback");
            if (g == SPClientTemplates.ClientControlMode.EditForm) {
                var p = a.ListData.owshiddenversion;
                !isNaN(Number(p)) && q("owshiddenversion", String(p))
            }
            if (typeof a.AttachmentWarningMessage != "undefined" && a.AttachmentWarningMessage != "") {
                var o = document.createElement("SPAN");
                o.className = "ms-formvalidation ms-csrformvalidation";
                o.innerHTML = '<span role="alert">' + STSHtmlEncode(a.AttachmentWarningMessage) + "<br/></span>";
                n.appendChild(o)
            }
        };

        function s(b) {
            b.FormContext = new ClientFormContext;
            b.FormContext.webAttributes = a.WebAttributes;
            b.FormContext.itemAttributes = a.ItemAttributes;
            b.FormContext.listAttributes = a.ListAttributes;
            b.FormContext.registerInitCallback = function (b, a) {
                f.NotifyControlEvent(SPClientForms.FormManagerEvents.Event_OnControlInitializedCallback, b, a)
            };
            b.FormContext.registerFocusCallback = function (b, a) {
                f.NotifyControlEvent(SPClientForms.FormManagerEvents.Event_OnControlFocusSetCallback, b, a)
            };
            b.FormContext.registerValidationErrorCallback = function (b, a) {
                f.NotifyControlEvent(SPClientForms.FormManagerEvents.Event_OnControlValidationError, b, a)
            };
            b.FormContext.registerGetValueCallback = function (b, a) {
                f.NotifyControlEvent(SPClientForms.FormManagerEvents.Event_GetControlValueCallback, b, a)
            };
            b.FormContext.updateControlValue = function (b, a) {
                f.NotifyControlEvent(SPClientForms.FormManagerEvents.Event_OnControlValueChanged, b, a)
            };
            b.FormContext.registerClientValidator = function (b, a) {
                f.NotifyControlEvent(SPClientForms.FormManagerEvents.Event_RegisterControlValidator, b, a)
            };
            b.FormContext.registerHasValueChangedCallback = function (b, a) {
                f.NotifyControlEvent(SPClientForms.FormManagerEvents.Event_GetHasValueChangedCallback, b, a)
            }
        }

        function o(a, b, c) {
            q(a, b);
            u(a, b, c)
        }

        function q(a, c) {
            p(a, c);
            b.CurrentValue[a] = c
        }

        function u(a, g, f) {
            var e = typeof b.ValidationErrors[a] != "undefined" ? b.ValidationErrors[a] : false,
                d = null,
                c = e;
            if (b.Validators[a] != null) {
                d = b.Validators[a].ValidateField(g);
                c = d.validationError
            } else c = false;
            if (c != e) i = e ? i - 1 : i + 1;
            b.ValidationErrors[a] = c;
            f && (c || b.ValidationErrorDisplayed[a]) && h(a, d)
        }

        function t() {
            var c = new SPClientForms.ClientValidation.ValidationResult;
            for (var a in b.ValidationErrors) {
                b.ValidationErrors[a] = false;
                b.ValidationErrorDisplayed[a] = false;
                h(a, c)
            }
        }

        function p(e, d) {
            var b = x + e,
                c = document.getElementById(b);
            if (c != null) c.value = d;
            else {
                var a = document.createElement("INPUT");
                a.id = b;
                a.name = b;
                a.value = d;
                a.type = "hidden";
                n.appendChild(a)
            }
        }

        function h(e, a) {
            if (a == null) return;
            if (d("Error", e)) {
                c.Error[e](a);
                b.ValidationErrorDisplayed[e] = a.validationError
            }
        }

        function d(a, b) {
            return a == null || a == "" || b == null || b == "" ? false : c[a] != null && c[a][b] != null && typeof c[a][b] == "function"
        }
        this.NotifyControlEvent = function (e, d, a) {
            if (k || e == null || d == null || a == null) return;
            switch (e) {
                case SPClientForms.FormManagerEvents.Event_OnControlInitializedCallback:
                    if (typeof a == "function") c.Init[d] = a;
                    return;
                case SPClientForms.FormManagerEvents.Event_OnControlValidationError:
                    if (typeof a == "function") c.Error[d] = a;
                    return;
                case SPClientForms.FormManagerEvents.Event_OnControlFocusSetCallback:
                    if (typeof a == "function") c.Focus[d] = a;
                    return;
                case SPClientForms.FormManagerEvents.Event_GetControlValueCallback:
                    if (typeof a == "function") c.GetValue[d] = a;
                    return;
                case SPClientForms.FormManagerEvents.Event_OnControlValueChanged:
                    o(d, a, false);
                    return;
                case SPClientForms.FormManagerEvents.Event_RegisterControlValidator:
                    if (b.Validators[d] == null) b.Validators[d] = a;
                    else b.Validators[d].MergeValidators(a);
                    return;
                case SPClientForms.FormManagerEvents.Event_GetHasValueChangedCallback:
                    if (typeof a == "function") c.HasValueChanged[d] = a;
                    return
            }
        };
        this.SubmitClientForm = function () {
            if (k || g == SPClientTemplates.ClientControlMode.DisplayForm) return false;
            var n = "";
            for (var l in c.GetValue) {
                o(l, c.GetValue[l](), true);
                if (n == "" && b.ValidationErrors[l] && d("Focus", l)) n = l
            }
            if (i > 0) {
                window.frameElement != null && typeof window.frameElement.autoSize == "function" && window.frameElement.autoSize();
                n != "" && c.Focus[n]();
                return true
            }
            if (!a.PostBackRequired && j != "")
                if (d("HasValueChanged", j) && c.HasValueChanged[j]()) a.PostBackRequired = true;
            var f;
            if (!a.PostBackRequired) EnsureScriptFunc("SP.js", "SP.ClientContext", function () {
                f = q();
                for (var g in b.CurrentValue) {
                    var c = new SP.ListItemFormUpdateValue;
                    c.set_fieldName(g);
                    c.set_fieldValue(b.CurrentValue[g]);
                    f.allFormValues.push(c)
                }
                if (!a.ItemAttributes.ExternalListItem) {
                    if (typeof a.ItemContentTypeName != "undefined" && a.ItemContentTypeName != "") {
                        var e = new SP.ListItemFormUpdateValue;
                        e.set_fieldName("ContentType");
                        e.set_fieldValue(a.ItemContentTypeName);
                        f.allFormValues.push(e)
                    }
                    if (typeof a.ItemContentTypeId != "undefined" && a.ItemContentTypeId != "") {
                        var d = new SP.ListItemFormUpdateValue;
                        d.set_fieldName("ContentTypeId");
                        d.set_fieldValue(a.ItemContentTypeId);
                        f.allFormValues.push(d)
                    }
                }
                f.updateScope = new SP.ExceptionHandlingScope(f.context);
                f.updateScopeDispose = f.updateScope.startScope();
                var i = new URI(ajaxNavigate.get_href());
                f.allFormValues = f.item.validateUpdateListItem(f.allFormValues, a.UploadMode, i.getQueryParameter("CheckInComment"));
                f.updateScopeDispose.dispose();
                if (a.ListAttributes.BaseType == 1) {
                    f.itemPropScope = new SP.ExceptionHandlingScope(f.context);
                    f.itemPropScopeDispose = f.itemPropScope.startScope();
                    var h = a.ItemAttributes.FsObjType;
                    if (h == SPClientTemplates.FileSystemObjectType.File) f.fileObj = f.item.get_file();
                    else if (h == SPClientTemplates.FileSystemObjectType.Folder) f.fileObj = f.item.get_folder();
                    f.fileObj != null && f.fileObj.retrieve("ServerRelativeUrl");
                    f.itemPropScopeDispose.dispose()
                }
                f.context.executeQueryAsync()
            });
            else p("SubmitClientForm", "true");
            if (e != null) e.disabled = true;
            return !a.PostBackRequired;

            function q() {
                var f, e, b = SPClientTemplates.Utility.InitContext(a.WebAttributes.WebUrl);
                b.add_requestSucceeded(function (b, a) {
                    u(b, a)
                });
                b.add_requestFailed(function (b, a) {
                    v(b, a)
                });
                var c = b.get_web().get_lists().getById(a.ListAttributes.Id);
                if (g == SPClientTemplates.ClientControlMode.NewForm) {
                    var d = new SP.ListItemCreationInformation;
                    d.set_folderUrl(a.NewItemRootFolder);
                    d.set_underlyingObjectType(a.ItemAttributes.FsObjType);
                    e = c.addItem(d)
                } else e = c.getItemById(a.ItemAttributes.Id);
                return {
                    context: b,
                    list: c,
                    item: e,
                    fileObj: null,
                    allFormValues: [],
                    itemPropScope: null,
                    itemPropScopeDispose: null,
                    updateScope: null,
                    updateScopeDispose: null
                }
            }

            function u() {
                if (e != null) e.disabled = false;
                var g = "",
                    k = false;
                for (var u in f.allFormValues) {
                    var j = f.allFormValues[u],
                        a = j.get_fieldName();
                    if (j.get_hasException()) {
                        k = true;
                        var o = j.get_errorMessage(),
                            p = new SPClientForms.ClientValidation.ValidationResult(true, o);
                        if (g == "" && d("Focus", a)) g = a;
                        i++;
                        b.ValidationErrors[a] = true;
                        b.ValidationErrorDisplayed[a] = true;
                        h(a, p)
                    } else {
                        b.ValidationErrors[a] = false;
                        b.ValidationErrorDisplayed[a] = false;
                        h(a, new SPClientForms.ClientValidation.ValidationResult)
                    }
                }
                if (f.updateScope != null && f.updateScope.get_hasException()) {
                    t();
                    k = true;
                    var q = f.updateScope.get_serverErrorCode();
                    if (q == -2130575257) r();
                    else {
                        var l = f.updateScope.get_errorMessage(),
                            n = new SPClientForms.ClientValidation.ValidationResult(true, l);
                        SPFormControl_AppendValidationErrorMessage(m, n)
                    }
                }
                if (!k) setTimeout(s, 0);
                else {
                    window.frameElement != null && typeof window.frameElement.autoSize == "function" && window.frameElement.autoSize();
                    g != "" && d("Focus", g) && c.Focus[g]()
                }
            }

            function v() {
                if (e != null) e.disabled = false;
                var a = Strings.STS.L_SPClientFormSubmitGeneralError,
                    b = new SPClientForms.ClientValidation.ValidationResult(true, a);
                SPFormControl_AppendValidationErrorMessage(m, b);
                window.frameElement != null && typeof window.frameElement.autoSize == "function" && window.frameElement.autoSize()
            }

            function s() {
                var c = a.RedirectInfo,
                    k = f.fileObj != null && f.itemPropScope != null && !f.itemPropScope.get_hasException();
                if (c.popUI && window.frameElement != null && typeof window.frameElement.commitPopup == "function") {
                    var e = Nav.getUrlKeyValue("DialogRedirectUrl");
                    if (e != null && e != "") window.frameElement.commitPopup(e);
                    else {
                        var l = {
                            newFileUrl: a.ItemAttributes.Url,
                            isFolder: a.ItemAttributes.FsObjType == 1,
                            newFileSize: a.ItemAttributes.FileSize,
                            newFileIcon: a.ItemAttributes.FileIcon
                        };
                        window.frameElement.commitPopup(l)
                    }
                    return
                }
                var d = c != null ? c.redirectUrl : "";
                if (a.ListAttributes.BaseType == 1)
                    if (k && f.fileObj.get_serverRelativeUrl() != "") d = f.fileObj.get_serverRelativeUrl();
                    else if (c != null && c.listRootFolderUrl != "") d = c.listRootFolderUrl;
                var b = Nav.getUrlKeyValue("Source");
                b = b == null || b == "" ? Nav.getUrlKeyValue("NextPage") : b;
                b = b == null || b == "" ? Nav.getUrlKeyValue("NextUsing") : b;
                if (Boolean(b)) {
                    var h = new URI(ajaxNavigate.get_href()),
                        i = new URI(b),
                        g = i.getAuthority(),
                        j = g == null || g == "";
                    if (!j && (h.getScheme().toLowerCase() !== i.getScheme().toLowerCase() || h.getAuthority().toLowerCase() !== g.toLowerCase())) b = null
                }
                d = b != null && b != "" ? b : d;
                Nav.navigate(d)
            }

            function r() {
                var a = [];
                a.push('<span class="ms-formvalidation ms-csrformvalidation">');
                a.push('<span role="alert">');
                a.push(STSHtmlEncode(Strings.STS.L_SPClientFormSubmitDuplicateFile));
                a.push("<br/></span>");
                a.push("</span>");
                a.push('<div class="ms-core-form-bottomButtonBox" id="dlgDivButton">');
                a.push('<button id="ms-OKBtnDismissDlg" class="ms-ButtonHeightWidth" onclick="DismissErrDlg(this)">');
                a.push(STSHtmlEncode(SP.Res.okButtonCaption));
                a.push("</button></div>");
                var d = a.join(""),
                    b = document.createElement("DIV");
                b.className = "s4-dlg-err";
                b.innerHTML = d;
                var e = {
                    html: b,
                    title: Strings.STS.L_ErrorDialog_Title,
                    dialogReturnValueCallback: function () {
                        Nav.navigate(window.location.href)
                    }
                },
                    f = new SP.UI.ModalDialog.showModalDialog(e),
                    c = document.getElementById("ms-OKBtnDismissDlg");
                c != null && c.focus()
            }
        }
    };
    SPClientForms_ClientFormInitFocusCallback = null;
    (function () {
        function a() {
            var a = {
                Templates: {
                    Fields: {
                        Text: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPField_FormDisplay_Default,
                            EditForm: SPFieldText_Edit,
                            NewForm: SPFieldText_Edit
                        },
                        Number: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPField_FormDisplay_Default,
                            EditForm: SPFieldNumber_Edit,
                            NewForm: SPFieldNumber_Edit
                        },
                        Integer: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPField_FormDisplay_Default,
                            EditForm: SPFieldNumber_Edit,
                            NewForm: SPFieldNumber_Edit
                        },
                        Boolean: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPField_FormDisplay_DefaultNoEncode,
                            EditForm: SPFieldBoolean_Edit,
                            NewForm: SPFieldBoolean_Edit
                        },
                        Note: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPFieldNote_Display,
                            EditForm: SPFieldNote_Edit,
                            NewForm: SPFieldNote_Edit
                        },
                        Currency: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPField_FormDisplay_Default,
                            EditForm: SPFieldNumber_Edit,
                            NewForm: SPFieldNumber_Edit
                        },
                        File: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPFieldFile_Display,
                            EditForm: SPFieldFile_Edit,
                            NewForm: SPFieldFile_Edit
                        },
                        Calculated: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPField_FormDisplay_Default,
                            EditForm: SPField_FormDisplay_Empty,
                            NewForm: SPField_FormDisplay_Empty
                        },
                        Choice: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPField_FormDisplay_Default,
                            EditForm: SPFieldChoice_Edit,
                            NewForm: SPFieldChoice_Edit
                        },
                        MultiChoice: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPField_FormDisplay_Default,
                            EditForm: SPFieldMultiChoice_Edit,
                            NewForm: SPFieldMultiChoice_Edit
                        },
                        Lookup: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPFieldLookup_Display,
                            EditForm: SPFieldLookup_Edit,
                            NewForm: SPFieldLookup_Edit
                        },
                        LookupMulti: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPFieldLookup_Display,
                            EditForm: SPFieldLookup_Edit,
                            NewForm: SPFieldLookup_Edit
                        },
                        Computed: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPField_FormDisplay_Default,
                            EditForm: SPField_FormDisplay_Default,
                            NewForm: SPField_FormDisplay_Default
                        },
                        URL: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPFieldUrl_Display,
                            EditForm: SPFieldUrl_Edit,
                            NewForm: SPFieldUrl_Edit
                        },
                        User: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPFieldUser_Display,
                            EditForm: SPClientPeoplePickerCSRTemplate,
                            NewForm: SPClientPeoplePickerCSRTemplate
                        },
                        UserMulti: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPFieldUserMulti_Display,
                            EditForm: SPClientPeoplePickerCSRTemplate,
                            NewForm: SPClientPeoplePickerCSRTemplate
                        },
                        DateTime: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPFieldDateTime_Display,
                            EditForm: SPFieldDateTime_Edit,
                            NewForm: SPFieldDateTime_Edit
                        },
                        Attachments: {
                            View: RenderFieldValueDefault,
                            DisplayForm: SPFieldAttachments_Default,
                            EditForm: SPFieldAttachments_Default,
                            NewForm: SPFieldAttachments_Default
                        }
                    }
                }
            };
            SPClientTemplates.TemplateManager._RegisterDefaultTemplates(a)
        }
        ExecuteOrDelayUntilScriptLoaded(a, "clienttemplates.js")
    })();
    SPClientForms.FormManagerEvents = {
        Event_OnControlValueChanged: 1,
        Event_OnControlInitializedCallback: 2,
        Event_OnControlFocusSetCallback: 3,
        Event_GetControlValueCallback: 4,
        Event_OnControlValidationError: 5,
        Event_RegisterControlValidator: 6,
        Event_GetHasValueChangedCallback: 7
    };
    g_SPFieldUser_ImnIdx = 0;
    ClientFormContext_InitializePrototype();
    SPClientForms.ClientValidation = function () { };
    SPClientForms.ClientValidation.ValidatorSet = function () {
        this._registeredValidators = []
    };
    SPClientForms.ClientValidation.ValidatorSet.prototype.RegisterValidator = function (a) {
        this._registeredValidators.push(a)
    };
    SPClientForms.ClientValidation.ValidatorSet.prototype.ValidateField = function (c) {
        for (var b in this._registeredValidators) {
            var a = this._registeredValidators[b].Validate(c);
            if (a.validationError) return a
        }
        return new SPClientForms.ClientValidation.ValidationResult
    };
    SPClientForms.ClientValidation.ValidatorSet.prototype.MergeValidators = function (a) {
        if (typeof a._registeredValidators != "undefined") this._registeredValidators = this._registeredValidators.concat(a._registeredValidators)
    };
    SPClientForms.ClientValidation.RequiredValidator = function () { };
    SPClientForms.ClientValidation.RequiredValidator.prototype.Validate = function (a) {
        a = SPClientTemplates.Utility.Trim(a);
        var b = false;
        if (a === "[]" || a === "") b = true;
        var c = b ? Strings.STS.L_SPClientRequiredValidatorError : "";
        return new SPClientForms.ClientValidation.ValidationResult(b, c)
    };
    SPClientForms.ClientValidation.RequiredFileValidator = function () { };
    SPClientForms.ClientValidation.RequiredFileValidator.prototype.Validate = function (a) {
        a = SPClientTemplates.Utility.Trim(a);
        var b = a.length != 0 ? a.lastIndexOf(".") == 0 : true,
            c = b ? Strings.STS.L_SPClientRequiredValidatorError : "";
        return new SPClientForms.ClientValidation.ValidationResult(b, c)
    };
    SPClientForms.ClientValidation.RequiredUrlValidator = function () { };
    SPClientForms.ClientValidation.RequiredUrlValidator.prototype.Validate = function (d) {
        var a = "",
            e = ", ",
            b = d.indexOf(e);
        if (b != -1) a = SPClientTemplates.Utility.Trim(d.substr(0, b));
        var c = a === "" || a.toLowerCase() === "http://",
            f = c ? Strings.STS.L_SPClientRequiredValidatorError : "";
        return new SPClientForms.ClientValidation.ValidationResult(c, f)
    };
    SPClientForms.ClientValidation.RequiredRichTextValidator = function () { };
    SPClientForms.ClientValidation.RequiredRichTextValidator.prototype.Validate = function (a) {
        a = SPClientTemplates.Utility.Trim(a);
        var c = a === "",
            b = a.length;
        if (b >= 11 && a.substr(0, 5).toLowerCase() == "<div>" && a.substr(b - 6, 6).toLowerCase() == "</div>") {
            var e = SPClientTemplates.Utility.Trim(a.substring(5, b - 6));
            c = e === ""
        }
        var d = c ? Strings.STS.L_SPClientRequiredValidatorError : "";
        return new SPClientForms.ClientValidation.ValidationResult(c, d)
    };
    SPClientForms.ClientValidation.MaxLengthUrlValidator = function (a) {
        this._maxLength = a
    };
    SPClientForms.ClientValidation.MaxLengthUrlValidator.prototype.Validate = function (d) {
        var c = "",
            e = ", ",
            a = d.indexOf(e);
        if (a != -1) c = SPClientTemplates.Utility.Trim(d.substr(0, a));
        var b = c.length > this._maxLength,
            f = b ? StBuildParam(Strings.STS.L_SPClientMaxLengthFieldError, this._maxLength) : "";
        return new SPClientForms.ClientValidation.ValidationResult(b, f)
    };
    SPClientForms.ClientValidation.ValidationResult = function (b, a) {
        if (typeof a != "undefined") this.errorMessage = a;
        if (typeof b != "undefined") this.validationError = b
    };
    SPClientFormsClientValidationValidationResult_InitializePrototype();
    if (typeof a == "undefined") var a = new SPClientForms.ClientFormManager;
    typeof Sys != "undefined" && Sys != null && Sys.Application != null && Sys.Application.notifyScriptLoaded();
    typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function" && NotifyScriptLoadedAndExecuteWaitingJobs("clientforms.js");
    typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkEnd_clientforms.js")
}
var SPClientForms, SPClientForms_ClientFormInitFocusCallback;

function SPField_FormDisplay_Default(a) {
    return SPField_FormDisplay_Core(a, true)
}

function SPField_FormDisplay_DefaultNoEncode(a) {
    return SPField_FormDisplay_Core(a, false)
}

function SPField_FormDisplay_Core(d, e) {
    if (d == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(d);
    if (a == null || a.fieldSchema == null || a.fieldValue == null) return "";
    var b = a.fieldValue;
    if (e) b = STSHtmlEncode(b);
    var c = a.fieldSchema.Direction;
    return c != null && c.toLowerCase() != "none" ? '<span dir="' + STSHtmlEncode(c) + '">' + b + "</span>" : b
}

function SPField_FormDisplay_Empty() {
    return ""
}

function SPFieldText_Edit(g) {
    if (g == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(g);
    if (a == null || a.fieldSchema == null) return "";
    var b, f = a.fieldValue != null ? a.fieldValue : "",
        d = a.fieldName + "_" + a.fieldSchema.Id + "_$TextField";
    if (a.fieldSchema.Required) {
        var e = new SPClientForms.ClientValidation.ValidatorSet;
        e.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator);
        a.registerClientValidator(a.fieldName, e)
    }
    a.registerInitCallback(a.fieldName, i);
    a.registerFocusCallback(a.fieldName, function () {
        if (b != null) {
            b.focus();
            if (browseris.ie8standard) {
                var a = b.createTextRange();
                a.collapse(true);
                a.moveStart("character", 0);
                a.moveEnd("character", 0);
                a.select()
            }
        }
    });
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        SPFormControl_AppendValidationErrorMessage(d, a)
    });
    a.registerGetValueCallback(a.fieldName, function () {
        return b == null ? "" : b.value
    });
    a.updateControlValue(a.fieldName, f);
    var j = a.fieldSchema.IMEMode == "" ? "" : 'style="ime-mode : ' + STSHtmlEncode(a.fieldSchema.IMEMode) + '"',
        c = '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">';
    c += '<input type="text" value="' + STSHtmlEncode(f) + '" maxlength="' + STSHtmlEncode(a.fieldSchema.MaxLength) + '" ';
    c += 'id="' + STSHtmlEncode(d) + '" title="' + STSHtmlEncode(a.fieldSchema.Title);
    if (a.fieldSchema.Required) c += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
    c += '" ' + j;
    c += ' class="ms-long ms-spellcheck-true" />';
    c += "<br /></span>";
    return c;

    function i() {
        b = document.getElementById(d);
        b != null && AddEvtHandler(b, "onchange", h)
    }

    function h() {
        b != null && a.updateControlValue(a.fieldName, b.value)
    }
}

function SPFieldNumber_Edit(g) {
    if (g == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(g);
    if (a == null || a.fieldSchema == null) return "";
    var b, k = "_$" + a.fieldSchema.FieldType + "Field",
        d = a.fieldName + "_" + a.fieldSchema.Id + k,
        f = a.fieldValue != null ? a.fieldValue : "",
        h = a.fieldSchema.ShowAsPercentage ? "%" : "",
        l = a.fieldSchema.IMEMode == "" ? "" : 'style="ime-mode : ' + STSHtmlEncode(a.fieldSchema.IMEMode) + '" ',
        e = new SPClientForms.ClientValidation.ValidatorSet;
    a.fieldSchema.Required && e.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator);
    a.registerClientValidator(a.fieldName, e);
    a.registerInitCallback(a.fieldName, j);
    a.registerFocusCallback(a.fieldName, function () {
        b != null && b.focus()
    });
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        SPFormControl_AppendValidationErrorMessage(d, a)
    });
    a.registerGetValueCallback(a.fieldName, function () {
        return b == null ? "" : b.value
    });
    a.updateControlValue(a.fieldName, f);
    var c = '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">';
    c += '<input type="text" value="' + STSHtmlEncode(f) + '" id="' + STSHtmlEncode(d);
    c += '" title="' + STSHtmlEncode(a.fieldSchema.Title);
    if (a.fieldSchema.Required) c += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
    c += '" ';
    c += 'size="11" class="ms-input" ' + l + "/>" + STSHtmlEncode(h);
    c += "<br /></span>";
    return c;

    function j() {
        b = document.getElementById(d);
        b != null && AddEvtHandler(b, "onchange", i)
    }

    function i() {
        b != null && a.updateControlValue(a.fieldName, b.value)
    }
}

function SPFieldBoolean_Edit(g) {
    if (g == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(g);
    if (a == null || a.fieldSchema == null) return "";
    var b, e = a.fieldName + "_" + a.fieldSchema.Id + "_$BooleanField",
        i = a.fieldValue != null ? a.fieldValue : "0",
        f = Boolean(Number(i)) ? 'checked="checked"' : "";
    a.registerInitCallback(a.fieldName, h);
    a.registerGetValueCallback(a.fieldName, d);
    a.registerFocusCallback(a.fieldName, function () {
        b != null && b.focus()
    });
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        SPFormControl_AppendValidationErrorMessage(e, a)
    });
    a.updateControlValue(a.fieldName, Boolean(f) ? "1" : "0");
    var c = '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">';
    c += '<input type="checkbox" id="' + STSHtmlEncode(e);
    c += '" title="' + STSHtmlEncode(a.fieldSchema.Title);
    if (a.fieldSchema.Required) c += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
    c += '" ' + f + "/>";
    c += "<br /></span>";
    return c;

    function h() {
        b = document.getElementById(e);
        b != null && AddEvtHandler(b, "onchange", d)
    }

    function d() {
        return b != null && Boolean(b.checked) ? "1" : "0"
    }
}

function SPFieldNote_Display(a) {
    return a.CurrentFieldValue == null ? "" : a.CurrentFieldValue
}

function SPFieldNote_Edit(i) {
    if (i == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(i);
    if (a == null || a.fieldSchema == null) return "";
    var b, g, c = a.fieldName + "_" + a.fieldSchema.Id + "_$TextField",
        d = "";
    if (!a.fieldSchema.AppendOnly) d = i.CurrentFieldValue == null ? "" : i.CurrentFieldValue;
    var r = c + "_topDiv",
        L = a.fieldSchema.NumberOfLines * 14,
        N = a.fieldSchema.InitialFocus ? 2 : 0,
        e, f, h = c + "_inplacerte",
        G = h + "_label",
        j = c + "_spSave",
        n = a.fieldSchema.Direction,
        l = a.listAttributes.Direction,
        p = n != "none" && n != "" ? n : l != "none" && l != "" ? l : "",
        K = browseris.ie5up && (browseris.win32 || browseris.win64bit),
        m = K && !IsAccessibilityFeatureEnabled(),
        o = STSHtmlEncode(a.fieldSchema.Direction),
        u = p == "" ? "" : ' dir="' + STSHtmlEncode(p) + '"',
        M = a.fieldSchema.RichTextMode == SPClientTemplates.RichTextMode.FullHtml,
        k = a.fieldSchema.RichTextMode == SPClientTemplates.RichTextMode.Compatible;
    if (a.fieldSchema.Required) {
        var t = new SPClientForms.ClientValidation.ValidatorSet;
        t.RegisterValidator(new SPClientForms.ClientValidation.RequiredRichTextValidator);
        a.registerClientValidator(a.fieldName, t)
    }
    if (!a.fieldSchema.RichText) {
        B();
        return J()
    } else if (k) {
        z();
        return I()
    } else if (M) {
        v();
        return A()
    } else return "";

    function B() {
        a.registerInitCallback(a.fieldName, F);
        a.registerFocusCallback(a.fieldName, function () {
            b != null && b.focus()
        });
        a.registerValidationErrorCallback(a.fieldName, function (a) {
            SPFormControl_AppendValidationErrorMessage(c, a)
        });
        a.registerGetValueCallback(a.fieldName, s);
        a.updateControlValue(a.fieldName, d)
    }

    function F() {
        b = document.getElementById(c);
        b != null && AddEvtHandler(b, "onchange", q)
    }

    function s() {
        return b == null ? "" : b.value
    }

    function q() {
        b != null && a.updateControlValue(a.fieldName, b.value)
    }

    function J() {
        var b = '<span dir="' + o + '">';
        b += '<textarea rows="' + STSHtmlEncode(a.fieldSchema.NumberOfLines) + '" cols="20" id="';
        b += STSHtmlEncode(c) + '" title="' + STSHtmlEncode(a.fieldSchema.Title);
        if (a.fieldSchema.Required) b += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
        b += '" class="ms-long"' + u + ">" + STSHtmlEncode(d) + "</textarea>";
        b += "<br /></span>";
        return b
    }

    function z() {
        a.registerInitCallback(a.fieldName, E);
        a.registerFocusCallback(a.fieldName, H);
        a.registerValidationErrorCallback(a.fieldName, function (a) {
            SPFormControl_AppendValidationErrorMessage(c, a)
        });
        a.registerGetValueCallback(a.fieldName, C);
        a.updateControlValue(a.fieldName, d)
    }

    function E() {
        b = document.getElementById(c);
        g = document.getElementById(c + "_spSave");
        if (m) {
            RTE_ConvertTextAreaToRichEdit(c, a.fieldSchema.RestrictedMode, a.fieldSchema.AllowHyperlink, p, a.webAttributes.LCID, null, true, null, null, null, SPClientTemplates.Utility.RichTextModeToString(a.fieldSchema.RichTextMode), a.webAttributes.WebUrl, null, null, null, null, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
            if (d == "") d = "<DIV></DIV>";
            if (g_oExtendedRichTextSupport != null && g_oExtendedRichTextSupport.editors != null && g_oExtendedRichTextSupport.editors[c] != null) {
                var h = g_oExtendedRichTextSupport.editors[c];
                if (h != null && h.overrides != null) h.overrides.SaveSelection = D
            }
        } else {
            var l = k ? "nsrichtext" : "nsfullrichtext",
                n = k ? STSHtmlEncode(Strings.STS.L_RichTextHelpLink) : STSHtmlEncode(Strings.STS.L_FullRichTextHelpLink),
                j = document.createElement("BR"),
                i = document.createElement("BR"),
                f = document.createElement("SPAN");
            f.className = "ms-formdescription";
            if (b != null) {
                var e = b.parentNode;
                e = e != null ? e.parentNode : null;
                if (e != null) {
                    e.appendChild(j);
                    e.appendChild(f);
                    f.innerHTML = "<a href=\"javascript:HelpWindowKey('" + l + "')\">" + n + "</a>";
                    e.appendChild(i)
                }
                AddEvtHandler(b, "onchange", q)
            }
        }
    }

    function H() {
        if (m) RTE_GiveEditorFirstFocus(c);
        else b != null && b.focus()
    }

    function C() {
        if (m) {
            RTE_TransferIFrameContentsToTextArea(c);
            if (b != null) b.value = d;
            if (g != null) return g.value
        }
        return s()
    }

    function D(f) {
        RTE_TransferIFrameContentsToTextArea(c);
        if (g != null) {
            if (g.value != d) d = g.value;
            a.updateControlValue(a.fieldName, d)
        }
        if (b != null) b.value = d;
        var e = RTE_GetEditorDocument(f);
        if (e != null) {
            if (g_rgrngRTETextEditorSelection != null) g_rgrngRTETextEditorSelection[f] = e.selection.createRange();
            if (g_rgstRTETextEditorSelectionType != null) g_rgstRTETextEditorSelectionType[f] = e.selection.type
        }
    }

    function I() {
        var b = '<span dir="' + o + '">';
        b += '<span dir="' + STSHtmlEncode(Strings.STS.L_RichTextDir) + '">';
        b += '<textarea rows="' + STSHtmlEncode(a.fieldSchema.NumberOfLines) + '" cols="20" id="' + STSHtmlEncode(c) + '" ';
        b += 'title="' + STSHtmlEncode(a.fieldSchema.Title);
        if (a.fieldSchema.Required) b += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
        b += '" class="ms-long"' + u + ">";
        b += STSHtmlEncode(d) + "</textarea>";
        b += '<input type="hidden" id="' + STSHtmlEncode(c + "_spSave") + '" /></span></span>';
        return b
    }

    function v() {
        a.registerInitCallback(a.fieldName, y);
        a.registerValidationErrorCallback(a.fieldName, function (a) {
            SPFormControl_AppendValidationErrorMessage(r, a)
        });
        a.registerGetValueCallback(a.fieldName, w);
        a.updateControlValue(a.fieldName, d)
    }

    function y() {
        e = document.getElementById(h);
        if (e != null) {
            e.AllowEmbedding = "True";
            e.InputFieldId = j;
            if (a.webAttributes.AllowScriptableWebParts && a.webAttributes.PermissionCustomizePages) {
                e.AllowScriptWebParts = "True";
                e.EmbeddingWPId = a.fieldSchema.ScriptEditorAdderId
            }
            var b = a.listAttributes.ListTemplateType;
            if (a.fieldSchema.RichTextMode != SPClientTemplates.RichTextMode.ThemeHtml && b != 119 && b != 301 && b != 108) e.UseInlineStyle = "True"
        }
        if (typeof _spRteScriptLoaded != "undefined" && _spRteScriptLoaded) RTE.Canvas.fixRegion(h, false);
        else {
            if (typeof _spRteFieldEditableRegionIds == "undefined" || _spRteFieldEditableRegionIds == null) _spRteFieldEditableRegionIds = [];
            _spRteFieldEditableRegionIds.push(h)
        }
        f = document.getElementById(j);
        if (f != null && f.value == "") f.value = e.innerHTML
    }

    function w() {
        x();
        return f != null ? f.value : ""
    }

    function x() {
        RTE.RichTextEditor.transferContentsToInputField(h, false)
    }

    function A() {
        var c = STSHtmlEncode(G),
            f = '<input type="hidden" id="' + STSHtmlEncode(j) + '" />',
            e = '<input type="hidden" name="ms-rtefocuselementid" id="ms-rtefocuselementid" value="" />',
            b = '<span dir="' + o + '">';
        b += '<div class="ms-rtestate-field ms-rtefield" id="' + STSHtmlEncode(r) + '">';
        b += '<div id="' + c + '" style="display:none">';
        b += STSHtmlEncode(Strings.STS.L_RichTextHiddenLabelText);
        b += " " + STSHtmlEncode(a.fieldSchema.Title);
        if (a.fieldSchema.Required) b += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
        b += '</div><div class="ms-rtestate-write ms-rteflags-' + String(N) + '" id="' + STSHtmlEncode(h) + '" ';
        b += 'style="min-height:' + String(L) + 'px" aria-labelledby="' + c + '" contentEditable="true">';
        b += d + '</div><div style="clear : both;"></div></div>';
        b += '<span dir="ltr">' + f + e + "</span></span>";
        return b
    }
}

function SPFieldFile_Display(k) {
    if (k == null) return "";
    var c = SPClientTemplates.Utility.GetFormContextForCurrentField(k);
    if (c == null || c.fieldSchema == null || c.fieldValue == null || c.itemAttributes == null) return "";
    var b = c.fieldValue,
        i = c.itemAttributes.FsObjType;
    if (i == SPClientTemplates.FileSystemObjectType.File) {
        var g = b.FileUrl,
            h = b.BaseName,
            f = b.File_x0020_Type_progid,
            d = b.serverurl_progid,
            e = c.listAttributes.DefaultItemOpen;
        h = h == null ? "" : STSHtmlEncode(h);
        g = g == null ? "" : STSHtmlEncode(g);
        f = f == null ? "" : STSHtmlEncode(f);
        e = e == null ? "" : STSHtmlEncode(e);
        d = d == null ? "" : STSHtmlEncode(d);
        var a = "";
        a += '<a rel="sp_DialogLinkNavigate" href="' + g + '" ';
        a += "onmousedown=\"return VerifyHref(this, event, '" + e;
        a += "', '" + f + "', '" + d;
        a += "')\" onclick=\"DispDocItemExWithServerRedirect(this, event, 'FALSE', 'FALSE', 'FALSE', '";
        a += f + "', '" + e + "', '" + d;
        a += "'); return false;\">" + h + "</a>";
        return a
    } else if (i == SPClientTemplates.FileSystemObjectType.Folder) {
        if (b == null) return "";
        var j = '<a rel="sp_DialogLinkNavigate" href="' + STSHtmlEncode(b.FolderUrl) + '">';
        j += STSHtmlEncode(b.FolderName) + "</a>";
        return j
    }
    return ""
}

function SPFieldFile_Edit(k) {
    if (k == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(k);
    if (a == null || a.fieldSchema == null) return "";
    var c, d = a.fieldValue != null ? a.fieldValue : "",
        e = a.fieldName + "_" + a.fieldSchema.Id + "_$onetidIOFile",
        f = "",
        j = a.itemAttributes.FsObjType == SPClientTemplates.FileSystemObjectType.File,
        i = a.itemAttributes.FsObjType == SPClientTemplates.FileSystemObjectType.Folder;
    if (a.fieldSchema.Required) {
        var h = new SPClientForms.ClientValidation.ValidatorSet;
        h.RegisterValidator(new SPClientForms.ClientValidation.RequiredFileValidator);
        a.registerClientValidator(a.fieldName, h)
    }
    a.registerInitCallback(a.fieldName, n);
    a.registerFocusCallback(a.fieldName, function () {
        c != null && c.focus()
    });
    a.registerValidationErrorCallback(a.fieldName, l);
    a.registerGetValueCallback(a.fieldName, function () {
        return c == null ? "" : SPClientTemplates.Utility.Trim(c.value) + f
    });
    a.updateControlValue(a.fieldName, d);
    var b = "";
    if (j) {
        var g = d.lastIndexOf(".");
        f = g != -1 ? d.substring(g) : "";
        var o = g != -1 ? d.substring(0, g) : d;
        b = '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '"><span dir="ltr">';
        b += '<input type="text" value="' + STSHtmlEncode(o) + '" maxlength="251" id="' + STSHtmlEncode(e) + '" ';
        b += 'title="' + STSHtmlEncode(a.fieldSchema.Title);
        if (a.fieldSchema.Required) b += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
        b += '" class="ms-input" size="35" />';
        b += '<span class="ms-fileField-fileExt">' + f + "</span></span><br /></span>";
        return b
    } else if (i) {
        b = '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">';
        b += '<input type="text" value="' + STSHtmlEncode(d) + '" maxlength="256" id="' + STSHtmlEncode(e) + '" ';
        b += 'title="' + STSHtmlEncode(a.fieldSchema.Title);
        if (a.fieldSchema.Required) b += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
        b += '" class="ms-long" size="35" />';
        b += "<br /></span>";
        return b
    }
    return "";

    function n() {
        c = document.getElementById(e);
        c != null && AddEvtHandler(c, "onchange", m)
    }

    function m() {
        c != null && a.updateControlValue(a.fieldName, SPClientTemplates.Utility.Trim(c.value) + f)
    }

    function l(d) {
        if (j || i) {
            if (c == null) c = document.getElementById(e);
            if (c != null) {
                var a = c.parentNode;
                if (a != null) {
                    var b = e + "_parentSpan";
                    a.id = b;
                    SPFormControl_AppendValidationErrorMessage(b, d)
                }
            }
        }
    }
}

function SPFieldChoice_Edit(b) {
    if (b == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(b);
    if (a == null || a.fieldSchema == null) return "";
    if (a.fieldSchema.Required) {
        var d = new SPClientForms.ClientValidation.ValidatorSet;
        d.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator);
        a.registerClientValidator(a.fieldName, d)
    }
    var c = a.fieldSchema.FormatType;
    return c == SPClientTemplates.ChoiceFormatType.Radio ? SPFieldChoice_Radio_Edit(b) : c == SPClientTemplates.ChoiceFormatType.Dropdown ? SPFieldChoice_Dropdown_Edit(b) : ""
}

function SPFieldChoice_Dropdown_Edit(v) {
    if (v == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(v);
    if (a == null || a.fieldSchema == null) return "";
    var g = a.fieldName + "_" + a.fieldSchema.Id,
        p = g + "_$DropDownChoice",
        d = a.fieldSchema.FillInChoice,
        q = "",
        h = "",
        k = "",
        m = "",
        o = "",
        f, l, c, b, e = "",
        n = a.fieldSchema.Choices;
    e = a.fieldValue != null ? a.fieldValue : "";
    var s = w(e),
        u = e == "" || !s && !d,
        j = !d || u || s;
    a.registerInitCallback(a.fieldName, A);
    a.registerFocusCallback(a.fieldName, z);
    a.registerValidationErrorCallback(a.fieldName, y);
    a.registerGetValueCallback(a.fieldName, r);
    a.updateControlValue(a.fieldName, e);
    if (d) return '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">' + x() + "</span>";
    else return '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">' + t() + "<br /></span>";

    function x() {
        o = g + "_FillInTable";
        m = g + "_$FillInChoice";
        h = g + "_FillInButton";
        k = g + "_DropDownButton";
        q = STSHtmlEncode(g + "_Radio");
        var f = a.fieldSchema.Title;
        if (a.fieldSchema.Required) f += " " + Strings.STS.L_RequiredField_Text;
        var u = !j ? STSHtmlEncode(e) : "",
            s = !j ? 'checked="checked" ' : "",
            r = j ? 'checked="checked" ' : "",
            p = STSHtmlEncode(StBuildParam(Strings.STS.L_FillInChoiceFillInLabel, f)),
            l = STSHtmlEncode(StBuildParam(Strings.STS.L_FillInChoiceDropdownTitle, f)),
            i = STSHtmlEncode(k),
            c = '<tr><td><span title="' + l + '">';
        c += '<input id="' + i + '" type="radio" name="' + q + '" value="DropDownButton" ' + r + "/>";
        c += '</span><label class="ms-hidden" for="' + i + '">' + l + "</label>";
        c += t() + "</td></tr>";
        var n = STSHtmlEncode(h),
            d = '<tr><td><span class="ms-RadioText" title="' + p + '">';
        d += '<input id="' + n + '" type="radio" name="' + q + '" value="FillInButton" ' + s + "/>";
        d += '<label for="' + n + '">' + STSHtmlEncode(Strings.STS.L_ChoiceFillInDisplayText) + "</label></span></td></tr>";
        var b = "<tr><td>&#160;&#160;&#160;";
        b += '<input type="text" maxlength="';
        b += String(255);
        b += '" id="' + STSHtmlEncode(m);
        b += '" tabindex="-1" value="' + u + '" title="' + p + '" /></td></tr>';
        return '<table id="' + STSHtmlEncode(o) + '" cellpadding="0" cellspacing="1">' + c + d + b + "</table>"
    }

    function t() {
        var c = false,
            b = '<select id="' + STSHtmlEncode(p) + '" title="' + STSHtmlEncode(a.fieldSchema.Title);
        if (a.fieldSchema.Required) b += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
        b += '" class="ms-RadioText">';
        if (u) b += '<option value="" selected="selected" ></option>';
        for (var d = 0; d < n.length; d++) {
            var h = n[d],
                g = STSHtmlEncode(h),
                f = !c && e == h ? 'selected="selected" ' : "";
            c = c ? true : f != "";
            b += '<option value="' + g + '" ' + f + ">" + g + "</option>"
        }
        b += "</select>";
        return b
    }

    function A() {
        b = document.getElementById(p);
        b != null && AddEvtHandler(b, "onchange", i);
        if (d) {
            f = document.getElementById(h);
            l = document.getElementById(k);
            c = document.getElementById(m);
            b != null && AddEvtHandler(b, "onclick", function () {
                SetChoiceOption(k)
            });
            if (f != null) {
                AddEvtHandler(f, "onclick", i);
                f.parentNode != null && AddEvtHandler(f.parentNode, "onclick", function () {
                    SetFocusOnControl(m)
                })
            }
            l != null && AddEvtHandler(l, "onclick", i);
            if (c != null) {
                AddEvtHandler(c, "onchange", i);
                AddEvtHandler(c, "onclick", function () {
                    SetChoiceOption(h)
                });
                AddEvtHandler(c, "onfocus", function () {
                    SetChoiceOption(h)
                })
            }
        }
    }

    function z() {
        if (d && !j && c != null) c.focus();
        else b != null && b.focus()
    }

    function y(a) {
        if (d) SPFormControl_AppendValidationErrorMessage(o, a);
        else SPFormControl_AppendValidationErrorMessage(p, a)
    }

    function i() {
        a.updateControlValue(a.fieldName, r())
    }

    function r() {
        return !d ? b != null ? b.value : "" : f.checked && c != null ? SPClientTemplates.Utility.Trim(c.value) : l.checked && b != null ? b.value : ""
    }

    function w(b) {
        for (var a in n)
            if (b == n[a]) return true;
        return false
    }
}

function SPFieldChoice_Radio_Edit(q) {
    if (q == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(q);
    if (a == null || a.fieldSchema == null) return "";
    var i = a.fieldSchema.Choices,
        m = a.fieldSchema.FillInChoice,
        e = [],
        k = [],
        p = a.fieldName + "_" + a.fieldSchema.Id,
        n = p + "_ChoiceRadioTable",
        h = p + "_$RadioButtonChoiceField",
        l = STSHtmlEncode(h),
        d = "",
        f = "",
        c, b, g = a.fieldValue != null ? a.fieldValue : "";
    a.registerInitCallback(a.fieldName, v);
    a.registerFocusCallback(a.fieldName, u);
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        SPFormControl_AppendValidationErrorMessage(n, a)
    });
    a.registerGetValueCallback(a.fieldName, o);
    a.updateControlValue(a.fieldName, g);
    return '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">' + s() + "</span>";

    function s() {
        var c = "",
            b = "";
        if (m) {
            f = h + "FillInText";
            d = h + "FillInRadio";
            var k = a.fieldSchema.Title;
            if (a.fieldSchema.Required) k += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
            var i = STSHtmlEncode(Strings.STS.L_ChoiceFillInDisplayText),
                p = STSHtmlEncode(StBuildParam(Strings.STS.L_FillInChoiceFillInLabel, k)),
                j = r(g),
                q = !j ? STSHtmlEncode(g) : "",
                o = !j ? 'checked="checked" ' : "",
                e = STSHtmlEncode(d);
            c = '<tr><td><span class="ms-RadioText" title="' + i + '">';
            c += '<input id="' + e + '" type="radio" name="' + l + '" value="FillInButton" ' + o + "/>";
            c += '<label for="' + e + '">' + i + "</label></span></td></tr>";
            b = '<tr><td>&#160;&#160;&#160;<input type="text" maxlength="';
            b += String(255);
            b += '" id="' + STSHtmlEncode(f) + '" ';
            b += 'tabindex="-1" value="' + q + '" title="' + p + '" /></td></tr>'
        }
        return '<table id="' + STSHtmlEncode(n) + '" cellpadding="0" cellspacing="1">' + t() + c + b + "</table>"
    }

    function t() {
        for (var a = "", d = false, b = 0; b < i.length; b++) {
            var j = i[b],
                c = STSHtmlEncode(j),
                e = STSHtmlEncode(h + String(b));
            k.push(e);
            var f = !d && g == j ? 'checked="checked" ' : "";
            d = d ? true : f != "";
            a += '<tr><td><span class="ms-RadioText" title="' + c + '">';
            a += '<input id="' + e + '" type="radio" name="' + l + '" value="' + c + '" ' + f + "/>";
            a += '<label for="' + e + '">' + c + "</label></span></td></tr>"
        }
        return a
    }

    function v() {
        for (var g = 0; g < k.length; g++) {
            var h = k[g],
                a = document.getElementById(h);
            if (a != null) {
                e.push(a);
                AddEvtHandler(a, "onclick", j)
            }
        }
        if (m) {
            c = document.getElementById(d);
            if (c != null) {
                AddEvtHandler(c, "onclick", j);
                c.parentNode != null && AddEvtHandler(c.parentNode, "onclick", function () {
                    SetFocusOnControl(f)
                })
            }
            b = document.getElementById(f);
            if (b != null) {
                AddEvtHandler(b, "onchange", j);
                AddEvtHandler(b, "onclick", function () {
                    SetChoiceOption(d)
                });
                AddEvtHandler(b, "onpaste", function () {
                    SetChoiceOption(d)
                });
                AddEvtHandler(b, "onkeypress", function () {
                    SetChoiceOption(d)
                })
            }
        }
    }

    function u() {
        if (c != null && c.checked && b != null) b.focus();
        else
            for (var d = 0; d < e.length; d++) {
                var a = e[d];
                if (a != null && a.checked) {
                    a.focus();
                    return
                }
            }
    }

    function j() {
        a.updateControlValue(a.fieldName, o())
    }

    function o() {
        if (c != null && c.checked && b != null) return SPClientTemplates.Utility.Trim(b.value);
        else
            for (var d = 0; d < e.length; d++) {
                var a = e[d];
                if (a != null && a.checked) return a.value
            }
        return ""
    }

    function r(b) {
        for (var a in i)
            if (b == i[a]) return true;
        return false
    }
}

function SPFieldMultiChoice_Edit(u) {
    if (u == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(u);
    if (a == null || a.fieldSchema == null) return "";
    var c = "__Fill_;_In__",
        o = a.fieldSchema.FillInChoice,
        p = [],
        i = [],
        m = a.fieldName + "_" + a.fieldSchema.Id,
        s = m + "_MultiChoiceTable",
        g = "",
        k = "",
        e, d, b = {},
        l = "",
        j = a.fieldSchema.MultiChoices;
    l = a.fieldValue ? a.fieldValue : "";
    var h = l == "" ? [] : l.split(";#");
    b[c] = c;
    for (var q = 0; q < j.length; q++) b[j[q]] = 0;
    for (var f = 0; f < h.length; f++) {
        if (h[f] == "") continue;
        if (typeof b[h[f]] == "undefined")
            if (o && b[c] == c) b[c] = h[f];
            else b[c] = b[c] + ";#" + h[f];
        else b[h[f]]++
    }
    if (a.fieldSchema.Required) {
        var t = new SPClientForms.ClientValidation.ValidatorSet;
        t.RegisterValidator(new SPClientForms.ClientValidation.RequiredFileValidator);
        a.registerClientValidator(a.fieldName, t)
    }
    a.registerInitCallback(a.fieldName, y);
    a.registerFocusCallback(a.fieldName, w);
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        SPFormControl_AppendValidationErrorMessage(s, a)
    });
    a.registerGetValueCallback(a.fieldName, r);
    a.updateControlValue(a.fieldName, l);
    return '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">' + v() + "</span>";

    function v() {
        var e = "",
            d = "";
        if (o) {
            k = m + "FillInText";
            g = m + "FillInRadio";
            var i = a.fieldSchema.Title;
            if (a.fieldSchema.Required) i += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
            var h = STSHtmlEncode(Strings.STS.L_ChoiceFillInDisplayText),
                l = STSHtmlEncode(StBuildParam(Strings.STS.L_FillInChoiceFillInLabel, i)),
                n = b[c] == c ? "" : STSHtmlEncode(b[c]),
                j = b[c] == c ? "" : 'checked="checked" ',
                f = STSHtmlEncode(g);
            e = '<tr><td><span class="ms-RadioText" title="' + h + '">';
            e += '<input id="' + f + '" type="checkbox" ' + j + "/>";
            e += '<label for="' + f + '">' + h + "</label></span></td></tr>";
            d = '<tr><td>&#160;&#160;&#160;<input type="text" maxlength="';
            d += String(255);
            d += '" id="' + STSHtmlEncode(k);
            d += '" tabindex="-1" value="' + n + '" title="' + l + '" /></td></tr>'
        }
        return '<table id="' + STSHtmlEncode(s) + '" cellpadding="0" cellspacing="1">' + x() + e + d + "</table>"
    }

    function x() {
        for (var a = "", c = 0; c < j.length; c++) {
            var d = j[c],
                g = STSHtmlEncode(d),
                h = m + "_MultiChoiceOption_" + String(c),
                e = STSHtmlEncode(h),
                f = "";
            if (b[d] > 0) {
                b[d]--;
                f = 'checked="checked" '
            }
            p.push(h);
            a += '<tr><td><span class="ms-RadioText" title="' + g + '">';
            a += '<input id="' + e + '" type="checkbox" ' + f + "/>";
            a += '<label for="' + e + '">' + g + "</label></span></td></tr>"
        }
        return a
    }

    function y() {
        for (var b = 0; b < p.length; b++) {
            var c = p[b],
                a = document.getElementById(c);
            if (a != null) {
                i.push(a);
                AddEvtHandler(a, "onclick", n)
            }
        }
        if (o) {
            e = document.getElementById(g);
            if (e != null) {
                AddEvtHandler(e, "onclick", n);
                e.parentNode != null && AddEvtHandler(e.parentNode, "onclick", function () {
                    ChangeFillinTextTabindex(k, g)
                })
            }
            d = document.getElementById(k);
            if (d != null) {
                AddEvtHandler(d, "onchange", n);
                AddEvtHandler(d, "onclick", function () {
                    SetChoiceOption(g)
                });
                AddEvtHandler(d, "onfocus", function () {
                    SetChoiceOption(g)
                })
            }
        }
    }

    function w() {
        if (i.length > 1) {
            var a = i[0];
            a != null && a.focus()
        }
    }

    function n() {
        a.updateControlValue(a.fieldName, r())
    }

    function r() {
        for (var a = "", b = false, c = 0; c < i.length; c++) {
            var f = i[c];
            if (f != null && f.checked) {
                b = true;
                a += ";#";
                a += j[c]
            }
        }
        if (e != null && e.checked && d != null && d.value != "") {
            if (b) a += ";#";
            b = true;
            a += SPClientTemplates.Utility.Trim(d.value)
        }
        a += b ? ";#" : "";
        return a
    }
}

function SPFieldDateTime_Display(b) {
    var a = SPField_FormDisplay_Default(b);
    return a == "" ? "" : a + "&#160;"
}

function SPFieldDateTime_Edit(t) {
    if (t == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(t);
    if (a == null || a.fieldSchema == null) return "";
    var b = a.fieldSchema,
        D = b.CalendarType,
        F = STSHtmlEncode(b.Direction),
        n = b.DisplayFormat == SPClientTemplates.DateTimeDisplayFormat.DateTime,
        G = b.DisplayFormat == SPClientTemplates.DateTimeDisplayFormat.DateOnly,
        H = b.DisplayFormat == SPClientTemplates.DateTimeDisplayFormat.TimeOnly,
        B = n || G,
        w = n || H,
        c, f, e, d = a.fieldName + "_" + b.Id + "_$DateTimeField",
        p = STSHtmlEncode(d + "TopTable"),
        g = STSHtmlEncode(d + "Date"),
        A = STSHtmlEncode(d + "DateDatePickerImage"),
        u = STSHtmlEncode(d + "DateDatePickerFrame"),
        l = STSHtmlEncode(d + "DateHours"),
        j = STSHtmlEncode(d + "DateMinutes"),
        o = a.fieldValue == null ? "" : a.fieldValue,
        k = y(o),
        q = k.Date,
        z = k.Hour,
        v = k.Minute;
    if (a.fieldSchema.Required) {
        var s = new SPClientForms.ClientValidation.ValidatorSet;
        s.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator);
        a.registerClientValidator(a.fieldName, s)
    }
    a.registerInitCallback(a.fieldName, E);
    a.registerFocusCallback(a.fieldName, function () {
        c != null && c.focus()
    });
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        SPFormControl_AppendValidationErrorMessage(p, a)
    });
    a.registerGetValueCallback(a.fieldName, r);
    a.updateControlValue(a.fieldName, o);
    var h = '<span dir="' + F + '">';
    h += '<table id="' + p + '" border="0" cellpadding="0" cellspacing="0"><tr>';
    if (B) h += C();
    if (w) h += x();
    h += "</tr></table></span>";
    return h;

    function y(c) {
        var a = {
            Hour: "0",
            Minute: "0",
            Date: SPClientTemplates.Utility.Trim(c)
        };
        if (c == null || c == "") return a;
        var e = c.lastIndexOf(b.TimeSeparator);
        if (e == -1 || e == c.length - 1) return a;
        var g = c.substring(e + 1);
        if (isNaN(Number(g))) return a;
        a.Minute = g;
        var d = c.substring(0, e),
            f = d.lastIndexOf(" ");
        if (f == -1 || f == d.length - 1) return a;
        var h = d.substring(f + 1);
        if (isNaN(Number(h))) return a;
        a.Hour = h;
        a.Date = d.substring(0, f);
        return a
    }

    function C() {
        var d = _spPageContextInfo.webServerRelativeUrl;
        if (d == null) d = "";
        if (d.endsWith("/")) d = d.substring(0, d.length - 1);
        d += "/_layouts/15/";
        var c = '<td class="ms-dtinput"><label for="' + g + '" style="display:none">';
        c += STSHtmlEncode(StBuildParam(Strings.STS.L_DateTimeFieldDateLabel, a.fieldName)) + "</label>";
        c += '<input type="text" value="' + STSHtmlEncode(q) + '" maxlength="45" id="' + g + '" ';
        c += 'title="' + STSHtmlEncode(a.fieldSchema.Title);
        if (a.fieldSchema.Required) c += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
        c += '" class="ms-input" AutoPostBack="0" /></td>';
        c += '<td class="ms-dtinput" ><a href="#" onclick="clickDatePicker(\'' + g + "', '";
        c += STSHtmlEncode(d) + "iframe.aspx?cal=" + STSHtmlEncode(String(D));
        c += "&lcid=" + STSHtmlEncode(b.LocaleId) + "&langid=" + STSHtmlEncode(b.LanguageId);
        c += "&tz=" + STSHtmlEncode(b.TimeZoneDifference) + "&ww=" + STSHtmlEncode(b.WorkWeek);
        c += "&fdow=" + STSHtmlEncode(b.FirstDayOfWeek) + "&fwoy=" + STSHtmlEncode(b.FirstWeekOfYear);
        c += "&hj=" + STSHtmlEncode(b.HijriAdjustment) + "&swn=" + STSHtmlEncode(b.ShowWeekNumber);
        c += "&minjday=" + STSHtmlEncode(b.MinJDay) + "&maxjday=" + STSHtmlEncode(b.MaxJDay);
        c += "&date=', '" + STSHtmlEncode(q) + "', event); return false;\" >";
        c += '<img id="' + A + '" src="/_layouts/15/images/calendar_25.gif?rev=44" border="0" ';
        c += 'alt="' + STSHtmlEncode(Strings.STS.L_DateTimeFieldSelectTitle) + '"></img></a></td>';
        c += '<td><iframe id="' + u + '" src="/_layouts/15/images/blank.gif?rev=44" frameborder="0" ';
        c += 'scrolling="no" style="display:none; position:absolute; width:200px; z-index:101;" ';
        c += 'title="' + STSHtmlEncode(Strings.STS.L_DateTimeFieldSelectTitle) + '"></iframe></td>';
        return c
    }

    function x() {
        var k = "";
        if (!a.fieldSchema.HoursMode24) k = 'dir="' + (fRightToLeft ? "rtl" : "ltr") + '"';
        var f = '<label for="' + l + '" style="display:none">';
        f += STSHtmlEncode(StBuildParam(Strings.STS.L_DateTimeFieldDateHoursLabel, a.fieldName)) + "</label>";
        f += '<select id="' + l + '" ' + k + ">";
        for (var n = b.HoursOptions, e = 0; e < n.length; e++) f += m(String(e), n[e], e == Number(z));
        f += "</select>";
        var p = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"],
            d = '<label for="' + j + '" style="display:none">';
        d += STSHtmlEncode(StBuildParam(Strings.STS.L_DateTimeFieldDateMinutesLabel, a.fieldName)) + "</label>";
        d += '<select id="' + j + '" ' + k + ">";
        for (var c = Number(v), o = c % 5 != 0, g = 0; g < 12; g++) {
            var h = p[g];
            d += m(h, h, c == Number(h));
            if (o && c > g * 5 && c < g * 5 + 5) {
                var i = String(c);
                if (c < 10) i = "0" + i;
                d += m(String(c), i, true)
            }
        }
        d += "</select>";
        return '<td class="ms-dttimeinput" nowrap="nowrap">' + f + "&nbsp;" + d + "</td>"
    }

    function m(d, c, b) {
        var a = '<option value="' + String(d) + '"';
        if (b) a += ' selected="selected"';
        a += ">";
        a += String(c);
        a += "</option>";
        return a
    }

    function E() {
        if (typeof window.g_strDateTimeControlIDs == "undefined") window.g_strDateTimeControlIDs = [];
        window.g_strDateTimeControlIDs["SP" + a.fieldName] = g;
        c = document.getElementById(g);
        if (c != null) {
            AddEvtHandler(c, "onchange", i);
            c.clientcontrolonvaluesetfrompicker = i
        }
        f = document.getElementById(l);
        f != null && AddEvtHandler(f, "onchange", i);
        e = document.getElementById(j);
        e != null && AddEvtHandler(e, "onchange", i)
    }

    function i() {
        a.updateControlValue(a.fieldName, r())
    }

    function r() {
        var a = c != null ? SPClientTemplates.Utility.Trim(c.value) : "",
            d = f != null && e != null ? f.value + b.TimeSeparator + e.value : "";
        return n && a == "" ? "" : SPClientTemplates.Utility.Trim(a + " " + d)
    }
}

function SPFieldUrl_Display(g) {
    if (g == null) return "";
    var b = SPClientTemplates.Utility.GetFormContextForCurrentField(g);
    if (b == null || b.fieldSchema == null) return "";
    var c = b.fieldSchema.Direction,
        e = c != null && c.toLowerCase() != "none",
        d = e ? '<span dir="' + STSHtmlEncode(c) + '">' : "",
        f = e ? "</span>" : "",
        h = b.fieldValue != null ? b.fieldValue : "",
        a = SPClientTemplates.Utility.ParseURLValue(h);
    if (b.fieldSchema.DisplayFormat == SPClientTemplates.UrlFormatType.Hyperlink) {
        if (a.URL != "" && a.URL != "http://") return d + '<a href="' + STSHtmlEncode(a.URL) + '" target="_blank">' + STSHtmlEncode(a.Description) + "</a>" + f
    } else if (b.fieldSchema.DisplayFormat == SPClientTemplates.UrlFormatType.Image)
        if (a.URL != "" && a.URL != "http://") return d + '<img src="' + STSHtmlEncode(a.URL) + '" alt="' + STSHtmlEncode(a.Description) + '"/>' + f;
    return ""
}

function SPFieldUrl_Edit(n) {
    if (n == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(n);
    if (a == null || a.fieldSchema == null) return "";
    var m = a.fieldValue != null ? a.fieldValue : "",
        l = SPClientTemplates.Utility.ParseURLValue(m),
        s = l.URL,
        q = l.Description,
        c, d, g = a.fieldName + "_" + a.fieldSchema.Id,
        e = g + "_$UrlFieldUrl",
        o = STSHtmlEncode(g + "_$UrlControlId"),
        h = g + "_$UrlFieldDescription",
        r = a.fieldSchema.IMEMode == "" ? "" : 'style="ime-mode : ' + STSHtmlEncode(a.fieldSchema.IMEMode) + '" ',
        f = new SPClientForms.ClientValidation.ValidatorSet;
    a.fieldSchema.Required && f.RegisterValidator(new SPClientForms.ClientValidation.RequiredUrlValidator);
    f.RegisterValidator(new SPClientForms.ClientValidation.MaxLengthUrlValidator(255));
    a.registerClientValidator(a.fieldName, f);
    a.registerInitCallback(a.fieldName, p);
    a.registerFocusCallback(a.fieldName, function () {
        c != null && c.focus()
    });
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        SPFormControl_AppendValidationErrorMessage(e, a)
    });
    a.registerGetValueCallback(a.fieldName, j);
    a.updateControlValue(a.fieldName, m);
    var i = STSHtmlEncode(e),
        b = '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '"><span class="ms-formdescription">';
    b += STSHtmlEncode(Strings.STS.L_UrlFieldTypeText) + '&#160;(<a id="' + o + '" ';
    b += "href=\"javascript:TestURL('" + i + '\')" target="_self">';
    b += STSHtmlEncode(Strings.STS.L_UrlFieldClickText) + "</a>)<br /></span>";
    b += '<input dir="ltr" type="text" value="' + STSHtmlEncode(s) + '" id="' + i + '" title="';
    b += STSHtmlEncode(a.fieldSchema.Title);
    if (a.fieldSchema.Required) b += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
    b += '" class="ms-long" ' + r + "/><br />";
    b += '<span class="ms-formdescription">' + STSHtmlEncode(Strings.STS.L_UrlFieldTypeDescription) + "&#160;<br /></span>";
    b += '<input type="text" maxlength="';
    b += String(255);
    b += '" id="' + STSHtmlEncode(h) + '" title="';
    b += STSHtmlEncode(Strings.STS.L_UrlFieldDescriptionTitle) + '" value="' + STSHtmlEncode(q) + '" class="ms-long" /><br /></span>';
    return b;

    function p() {
        c = document.getElementById(e);
        d = document.getElementById(h);
        if (c != null) {
            AddEvtHandler(c, "onchange", k);
            AddEvtHandler(c, "onfocus", function () {
                c.select()
            })
        }
        d != null && AddEvtHandler(d, "onchange", k)
    }

    function k() {
        a.updateControlValue(a.fieldName, j())
    }

    function j() {
        var b = c != null ? SPClientTemplates.Utility.Trim(c.value) : "";
        if (b == "" || b == "http://") return "";
        var a = b.replace(/\,/g, ",,");
        a += ", ";
        if (d != null) a += d.value;
        return a
    }
}
var g_SPFieldUser_ImnIdx;

function SPFieldUserMulti_Display(f) {
    if (f == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(f);
    if (a == null || a.fieldSchema == null) return "";
    var l = a.fieldSchema.WithPicture,
        k = a.fieldSchema.DefaultRender,
        p = a.fieldSchema.EntitySeparator,
        o = a.fieldValue != null ? a.fieldValue : "",
        h = SPClientTemplates.Utility.TryParseInitialUserValue(o);
    if (!k && !l) {
        var e = a.fieldSchema.UserDisplayUrl;
        if (e == null || e == "") return "";
        for (var d = a.fieldSchema.Direction, i = d != null && d.toLowerCase() != "none", m = i ? '<span dir="' + STSHtmlEncode(d) + '">' : "", n = i ? "</span>" : "", b = m, j = true, g = 0; g < h.length; g++) {
            if (!j) b += ";&#160;";
            var c = h[g];
            if (c.lookupValue != null && c.lookupValue != "" && c.lookupId != null && c.lookupId != "" && parseInt(c.lookupId) > -1) {
                b += '<a href="';
                b += STSHtmlEncode(e);
                b += "?ID=";
                b += STSHtmlEncode(c.lookupId);
                b += '&RootFolder=*">';
                b += STSHtmlEncode(c.lookupValue);
                b += "</a>";
                j = false
            }
        }
        return b + n
    }
    return SPFieldUser_Display(f)
}

function SPFieldUser_Display(rCtx) {
    if (rCtx == null) return "";
    var _myData = SPClientTemplates.Utility.GetFormContextForCurrentField(rCtx);
    if (_myData == null || _myData.fieldSchema == null) return "";
    var withPicture = _myData.fieldSchema.WithPicture,
        defaultRender = _myData.fieldSchema.DefaultRender,
        withPictureDetail = _myData.fieldSchema.WithPictureDetail,
        pictureOnly = _myData.fieldSchema.PictureOnly,
        _entitySeparatorChar = _myData.fieldSchema.EntitySeparator,
        renderCallbackFunc = _myData.fieldSchema.RenderCallback,
        controlMaxWidth = _myData.fieldSchema.MaxWidth,
        _userSecretValue = "***",
        _value = _myData.fieldValue != null ? _myData.fieldValue : "",
        _userValues = SPClientTemplates.Utility.TryParseInitialUserValue(_value),
        fieldDirection = _myData.fieldSchema.Direction,
        dirSpan = fieldDirection != null && fieldDirection.toLowerCase() != "none",
        dirStart = dirSpan ? '<span dir="' + STSHtmlEncode(fieldDirection) + '">' : "",
        dirEnd = dirSpan ? "</span>" : "",
        res = dirStart,
        bFirst = true,
        ProfilePicture_Suffix_Small = "_SThumb",
        ProfilePicture_Suffix_Medium = "_MThumb",
        ProfilePicture_Suffix_Large = "_LThumb",
        strPicSize = _myData.fieldSchema.PictureSize,
        pictureSize = strPicSize != null && strPicSize != "None" ? strPicSize.substring(5) : null,
        DefaultPictureSize = "36px",
        SmallThumbnailThreshold = 48;
    if (!defaultRender && !withPicture) {
        for (var p = 0; p < _userValues.length; p++) {
            if (!bFirst) res += ";&#160;";
            bFirst = false;
            res += _userValues[p].lookupValue.replace(/\,\,/g, ",")
        }
        return res + dirEnd
    }
    if (defaultRender && !withPicture) {
        var uLength = _userValues.length;
        if (uLength > 1) res += "<div>";
        for (var q = 0; q < _userValues.length; q++) {
            if (uLength > 1) res += '<div class="ms-vb">';
            var uValue = _userValues[q];
            if (uValue.lookupId == _userSecretValue) res += uValue.lookupId;
            else res += BuildUserDisplayLink(uValue, _myData.fieldSchema)
        }
        if (uLength > 1) res += "</div>";
        return res + dirEnd
    }
    if (!defaultRender && withPicture) {
        res += "<div>";
        for (var m = 0; m < _userValues.length; m++) {
            var userValue = _userValues[m];
            if (userValue.lookupId == _userSecretValue) continue;
            res += '<div class="ms-table ms-core-tableNoSpace"><div class="ms-tableRow">';
            if (pictureSize == null) pictureSize = DefaultPictureSize;
            res += '<div class="ms-tableCell ms-verticalAlignTop">';
            res += GetPresence(userValue, _myData.fieldSchema, false);
            res += "</div>";
            res += '<div class="ms-tableCell ms-verticalAlignTop"><div class="ms-peopleux-userImgDiv">';
            res += GetPicture(userValue, _myData.fieldSchema);
            res += "</div></div>";
            if (withPictureDetail) {
                var detailsMaxWidth = 150;
                if (controlMaxWidth != null && typeof controlMaxWidth != "undefined") {
                    detailsMaxWidth = controlMaxWidth - 10 - parseInt(pictureSize) - 11;
                    if (detailsMaxWidth < 0) detailsMaxWidth = 0
                }
                res += '<div class="ms-tableCell ms-vb-user ms-peopleux-userdetails ms-noList ms-verticalAlignTop"><ul style="max-width:' + String(detailsMaxWidth) + 'px">';
                res += '<li><div class="ms-noWrap' + (parseInt(pictureSize) >= 48 ? " ms-textLarge" : "") + '">';
                res += BuildUserTitle(userValue, _myData.fieldSchema);
                res += "</div></li>";
                if (renderCallbackFunc != null || typeof renderCallbackFunc != "undefined") {
                    var result = eval(renderCallbackFunc + "(rCtx);");
                    res += "<li>";
                    res += STSHtmlEncode(result);
                    res += "</li>"
                } else if (userValue.jobTitle != null && userValue.jobTitle != "") {
                    var detailLine = userValue.jobTitle;
                    if (userValue.department != null || userValue.department != "") detailLine += ", " + STSHtmlEncode(userValue.department);
                    res += '<li><div class="ms-metadata ms-textSmall ms-peopleux-detailuserline ms-noWrap" title="' + STSHtmlEncode(detailLine) + '">';
                    res += STSHtmlEncode(detailLine);
                    res += "</div></li>"
                }
                res += "</ul></div>"
            }
            res += "</div></div>"
        }
        res += "</div>";
        return res + dirEnd
    }
    return res + dirEnd;

    function GetPictureThumbnailUrl(a, b) {
        var c = a.substr(0, a.lastIndexOf("."));
        return c.endsWith(ProfilePicture_Suffix_Medium) ? b == ProfilePicture_Suffix_Medium ? a : a.replace(ProfilePicture_Suffix_Medium, b) : a
    }

    function GetUserPhotoUrl(d, f, b) {
        var a = [];
        a.push("/_layouts/15/userphoto.aspx");
        a.push("?size=");
        a.push(encodeURIComponent(f));
        if (Boolean(d.email)) {
            a.push("&accountname=");
            a.push(encodeURIComponent(d.email))
        }
        if (Boolean(b)) {
            a.push("&url=");
            a.push(encodeURIComponent(b));
            try {
                var e = new URI(b),
                    c = e.getQueryParameter("t");
                if (Boolean(c)) {
                    a.push("&t=");
                    a.push(encodeURIComponent(c))
                }
            } catch (g) { }
        }
        return a.join("")
    }

    function GetPicture(b, f) {
        var a = "",
            d = UserLink(b);
        a += GetPresence(b, f, true);
        a += d.length > 0 ? d : '<span class="ms-peopleux-imgUserLink">';
        a += '<span class="ms-peopleux-userImgWrapper" style="width:' + pictureSize + "; height:" + pictureSize + '">';
        a += '<img class="ms-peopleux-userImg ms-verticalAlignTop" style="min-width:' + pictureSize + "; min-height:" + pictureSize + "; ";
        a += "clip:rect(0px, " + pictureSize + ", " + pictureSize + ", 0px); max-width:" + pictureSize + '" src="';
        var e = pxToNum(pictureSize) < SmallThumbnailThreshold ? "S" : "M";
        if (b.picture == null || b.picture == "") {
            if (_spPageContextInfo.crossDomainPhotosEnabled) a += GetUserPhotoUrl(b, e, "");
            else a += "/_layouts/15/images/person.gif?rev=44";
            a += '" alt="';
            a += STSHtmlEncode(StBuildParam(Strings.STS.L_UserFieldPictureAlt1, b.title));
            if (_myData.fieldSchema.Required) a += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
            a += '" />'
        } else {
            var c = b.picture;
            if (parseInt(pictureSize) <= SmallThumbnailThreshold) c = GetPictureThumbnailUrl(b.picture, ProfilePicture_Suffix_Small);
            if (!_spPageContextInfo.crossDomainPhotosEnabled || c.startsWith("/") || c.toLowerCase().startsWith(getHostUrl(window.location.href))) a += STSHtmlEncode(c);
            else a += GetUserPhotoUrl(b, e, c);
            a += '" alt="';
            a += STSHtmlEncode(StBuildParam(Strings.STS.L_UserFieldPictureAlt2, b.title));
            a += '" />'
        }
        a += "</span>";
        if (d.length > 0) a += "</a>";
        return a
    }

    function UserLink(b) {
        var a = "";
        if (b.lookupValue != null && b.lookupValue != "" && b.lookupId != null && b.lookupId != "" && parseInt(b.lookupId) > -1) {
            var c = "ms-peopleux-userdisplink ms-subtleLink" + (pxToNum(pictureSize) > 0 ? " ms-peopleux-imgUserLink" : "");
            a += '<a onclick="GoToLinkOrDialogNewWindow(this); return false;" class="';
            a += c;
            a += '" href="';
            a += STSHtmlEncode(_myData.fieldSchema.ListFormUrl);
            a += "?PageType=4&ListId=";
            a += STSHtmlEncode(_myData.fieldSchema.UserInfoListId);
            a += "&ID=";
            a += STSHtmlEncode(b.lookupId);
            a += '">'
        }
        return a
    }

    function GetPresence(n, m, l) {
        var j = SPClientTemplates.PresenceIndicatorSize.Square_10px,
            f = "ms-spimn-img",
            b = "ms-spimn-presenceWrapper",
            k = "ms-imnlink",
            g = pictureSize != null ? parseInt(pictureSize) : 0,
            i = "",
            d = "",
            e = "",
            a = "";
        if (m.Presence) {
            if (l) {
                b = f = "ms-hide";
                i = 'tabIndex="-1"'
            } else {
                var c = j,
                    h = j;
                if (g > 0) {
                    if (g == 72) c = SPClientTemplates.PresenceIndicatorSize.Bar_8px;
                    else c = SPClientTemplates.PresenceIndicatorSize.Bar_5px;
                    h = String(g)
                } else b += " ms-imnImg";
                f += String.format(" ms-spimn-presence-disconnected-{0}x{1}x32", c, h);
                b += String.format(" ms-spimn-imgSize-{0}x{1}", c, h);
                d = String.format('<span class="{0}">', b);
                e = '<span class="ms-imnSpan">';
                k += " ms-spimn-presenceLink"
            }
            a += e + '<a href="#" onclick="IMNImageOnClick(event); return false;" class="' + k + '" ' + i + ">" + d;
            a += '<img title="" alt="';
            a += STSHtmlEncode(Strings.STS.L_UserFieldNoUserPresenceAlt);
            a += '" name="imnmark" class="' + f + '" ShowOfflinePawn="1" src=/_layouts/15/images/spimn.png sip="';
            a += STSHtmlEncode(n.sip);
            a += '" id="imn';
            a += STSHtmlEncode(String(g_SPFieldUser_ImnIdx));
            a += ',type=sip" />' + (d.length > 0 ? "</span>" : "") + "</a>" + (e.length > 0 ? "</span>" : "");
            g_SPFieldUser_ImnIdx++
        }
        return a
    }

    function BuildUserTitle(b, c) {
        var a = "";
        a += '<span class="ms-noWrap ms-imnSpan">';
        a += GetPresence(b, c, true);
        a += UserLink(b);
        a += STSHtmlEncode(b.title.replace(/\,\,/g, ","));
        a += "</a></span>";
        return a
    }

    function BuildUserDisplayLink(c, b) {
        var a = "";
        a += "<nobr>";
        a += GetPresence(c, b, false);
        a += BuildUserTitle(c, b);
        a += "</nobr>";
        return a
    }
}

function SPClientPeoplePickerCSRTemplate(u) {
    if (u == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(u);
    if (a == null || a.fieldSchema == null) return "";
    var g, n = a.fieldSchema.ErrorMessage,
        c, k, j;
    if (typeof a.fieldSchema.UserNoQueryPermission != "undefined" && Boolean(a.fieldSchema.UserNoQueryPermission)) {
        var i = '<span class="ms-descriptiontext">';
        i += STSHtmlEncode(Strings.STS.L_SPClientPeoplePickerNoPermission);
        i += "</span>";
        return i
    }
    var d = a.fieldSchema.ServerContainerId != null ? a.fieldSchema.ServerContainerId : a.fieldName + "_" + a.fieldSchema.Id + "_$ClientPeoplePicker",
        m = d + "_EditorInput",
        q = d + "_AutoFillDiv",
        o = d + "_NotificationSpan",
        r = d + "_ResolvedList",
        s = d + "_WaitImage",
        p = d + "_InitialHelpText",
        f = d + "_HiddenInput",
        x = a.fieldSchema.ServerInputName != null ? STSHtmlEncode(a.fieldSchema.ServerInputName) : f;
    a.fieldSchema.TopLevelElementId = d;
    a.fieldSchema.EditorElementId = m;
    a.fieldSchema.AutoFillElementId = q;
    a.fieldSchema.NotificationElementId = o;
    a.fieldSchema.ResolvedListElementId = r;
    a.fieldSchema.InitialHelpTextElementId = p;
    a.fieldSchema.WaitImageId = s;
    a.fieldSchema.HiddenInputId = f;
    var e = Strings.STS.L_SPClientPeoplePickerDefaultHelpText;
    if (a.fieldSchema.AllowMultipleValues) e = Strings.STS.L_SPClientPeoplePickerMultiUserDefaultHelpText;
    var h = a.fieldSchema.InitialHelpText;
    if (h != null && h != "") e = h;
    if (a.fieldSchema.AllowOnlyEmailAddresses) e = Strings.STS.L_SPClientPeoplePickerMultiUserEmailOnlyHelpText;
    var l = STSHtmlEncode(e);
    if (a.fieldSchema.Title != null && a.fieldSchema.Title != "") l = STSHtmlEncode(a.fieldSchema.Title);
    a.registerInitCallback(a.fieldName, function () {
        v(A)
    });
    a.registerFocusCallback(a.fieldName, function () {
        c != null && c.focus()
    });
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        if (g != null) g.ShowErrorMessage(a.errorMessage);
        else n = a.errorMessage
    });
    a.registerGetValueCallback(a.fieldName, function () {
        return j != null ? j.value : ""
    });
    if (a.fieldSchema.Required && typeof a.registerClientValidator == "function") {
        var t = new SPClientForms.ClientValidation.ValidatorSet;
        t.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator);
        a.registerClientValidator(a.fieldName, t)
    }
    var B = a.fieldSchema.InPlaceEditMode ? "ms-grid" : "sp-peoplepicker-topLevel",
        y = a.fieldSchema.InPlaceEditMode ? 'style="padding-left:3px;padding-top:1px;cursor:text;height:100%;border-width:1px;position:relative;min-width:' + (a.fieldSchema.Width - 8).toString() + 'px"' : "",
        z = a.fieldSchema.InPlaceEditMode ? "" : e,
        w = a.fieldSchema.InPlaceEditMode ? 'style="margin:0px"' : "",
        b = '<div dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">';
    b += '<div class="' + B + '" id="' + STSHtmlEncode(d) + '" title="' + l + '"' + y + "/>";
    b += '<input id="' + STSHtmlEncode(f) + '" name="' + STSHtmlEncode(x) + '" type="hidden" />';
    b += '<div id="' + STSHtmlEncode(q) + '" class="sp-peoplepicker-autoFillContainer"></div>';
    b += '<span id="' + STSHtmlEncode(p) + '" class="sp-peoplepicker-initialHelpText ';
    b += 'ms-helperText">' + STSHtmlEncode(z) + "</span>";
    b += '<img class="sp-peoplepicker-waitImg" id="' + STSHtmlEncode(s) + '" alt="';
    b += STSHtmlEncode(Strings.STS.L_SPClientPeoplePickerWaitImgAlt) + '" src=';
    b += '"/_layouts/15/images/gears_anv4.gif?rev=44"/>';
    b += '<span id="' + STSHtmlEncode(r) + '" class="sp-peoplepicker-resolveList"></span>';
    b += '<span id="' + STSHtmlEncode(o) + '" aria-live="polite" style="visibility:hidden;position:absolute;width:0px;display:inline-block;"></span>';
    b += '<input type="text" class="sp-peoplepicker-editorInput" size="1" autocomplete="off" value="" ';
    b += 'id="' + STSHtmlEncode(m) + '" title="' + l + '"' + w + ' autocorrect="off" autocapitalize="off" /></div>';
    b += "</div></div>";
    if (a.fieldSchema.Description != null && a.fieldSchema.Description != "") b += '<span class="ms-metadata">' + STSHtmlEncode(a.fieldSchema.Description) + "</span>";
    return b;

    function A() {
        k = document.getElementById(d);
        k != null && AddEvtHandler(k, "onclick", SPClientPeoplePicker_OnClick);
        c = document.getElementById(m);
        if (c != null) {
            AddEvtHandler(c, "onblur", SPClientPeoplePicker_OnEditorBlur);
            AddEvtHandler(c, "oncopy", SPClientPeoplePicker_OnEditorCopy);
            AddEvtHandler(c, "onpaste", SPClientPeoplePicker_OnEditorPaste);
            AddEvtHandler(c, "onfocus", SPClientPeoplePicker_OnEditorFocus);
            AddEvtHandler(c, "onkeyup", SPClientPeoplePicker_OnEditorKeyUp);
            AddEvtHandler(c, "onkeydown", SPClientPeoplePicker_OnEditorKeyDown);
            AddEvtHandler(c, "onkeypress", SPClientPeoplePicker_OnEditorKeyPress)
        }
        j = document.getElementById(f);
        g = new SPClientPeoplePicker(a.fieldSchema);
        g.SetInitialValue(a.fieldValue, n)
    }

    function v(b) {
        var a;
        try {
            a = typeof SPClientPeoplePicker
        } catch (c) {
            a = "undefined"
        }
        EnsureScript("clientpeoplepicker.js", a, b)
    }
}

function SPClientPeoplePicker_InitStandaloneControlWrapper(b, d, c) {
    var a;
    try {
        a = typeof SPClientPeoplePicker
    } catch (e) {
        a = "undefined"
    }
    EnsureScript("clientpeoplepicker.js", a, function () {
        SPClientPeoplePicker.InitializeStandalonePeoplePicker(b, d, c)
    })
}

function SPFieldLookup_Display(k) {
    if (k == null) return "";
    var b = SPClientTemplates.Utility.GetFormContextForCurrentField(k);
    if (b == null || b.fieldSchema == null) return "";
    var d = b.fieldValue;
    if (d == null || d == "") return "";
    var j = true,
        h = b.fieldSchema.DependentLookup,
        m = "; ",
        n = b.fieldSchema.BaseDisplayFormUrl,
        l = STSHtmlEncode(b.fieldSchema.LookupListId),
        e = b.fieldSchema.Direction,
        i = e != null && e.toLowerCase() != "none",
        o = i ? '<span dir="' + STSHtmlEncode(e) + '">' : "",
        p = i ? "</span>" : "",
        a = o,
        c = [];
    if (b.fieldSchema.AllowMultipleValues) c = SPClientTemplates.Utility.ParseMultiLookupValues(d);
    else c.push(SPClientTemplates.Utility.ParseLookupValue(d));
    for (var f = 0; f < c.length; f++) {
        var g = c[f];
        if (g.LookupId == "0") continue;
        if (!j) a += m;
        j = false;
        if (!h) {
            a += '<a href="';
            a += n;
            a += "&ListId=";
            a += l;
            a += "&ID=";
            a += STSHtmlEncode(g.LookupId);
            a += '&RootFolder=*">'
        }
        a += STSHtmlEncode(g.LookupValue);
        if (!h) a += "</a>"
    }
    return a + p
}

function SPFieldLookup_Edit(b) {
    if (b == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(b);
    if (a == null || a.fieldSchema == null) return "";
    if (a.fieldSchema.Throttled) {
        var d = String(a.fieldSchema.MaxQueryResult),
            f = a.fieldSchema.Required ? STSHtmlEncode(StBuildParam(Strings.STS.L_LookupFieldRequiredLookupThrottleMessage, d)) : STSHtmlEncode(StBuildParam(Strings.STS.L_LookupFieldLookupThrottleMessage, d)),
            c = '<span style="vertical-align:middle">';
        c += f;
        c += "</span>";
        return c
    }
    if (a.fieldSchema.Required) {
        var e = new SPClientForms.ClientValidation.ValidatorSet;
        e.RegisterValidator(new SPClientForms.ClientValidation.RequiredValidator);
        a.registerClientValidator(a.fieldName, e)
    }
    return a.fieldSchema.AllowMultipleValues ? SPFieldLookupMulti_Edit(b) : SPFieldLookup_DropDown_Edit(b)
}

function SPFieldLookup_DropDown_Edit(j) {
    if (j == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(j);
    if (a == null || a.fieldSchema == null) return "";
    var b, e = a.fieldName + "_" + a.fieldSchema.Id + "_$LookupField",
        f = a.fieldValue != null ? a.fieldValue : "",
        i = SPClientTemplates.Utility.ParseLookupValue(f),
        d = i.LookupId == "0";
    if (d) f = "";
    var h = {},
        c = a.fieldSchema.Choices;
    a.registerInitCallback(a.fieldName, m);
    a.registerFocusCallback(a.fieldName, function () {
        b != null && b.focus()
    });
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        SPFormControl_AppendValidationErrorMessage(e, a)
    });
    a.registerGetValueCallback(a.fieldName, g);
    a.updateControlValue(a.fieldName, f);
    return k();

    function m() {
        b = document.getElementById(e);
        b != null && AddEvtHandler(b, "onchange", l)
    }

    function l() {
        b != null && a.updateControlValue(a.fieldName, g())
    }

    function g() {
        return b == null ? "" : b.value == "0" || b.value == "" ? "" : b.value + ";#" + h[b.value]
    }

    function k() {
        var b = '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">';
        b += '<select id="' + STSHtmlEncode(e) + '" title="' + STSHtmlEncode(a.fieldSchema.Title);
        if (a.fieldSchema.Required) b += " " + STSHtmlEncode(Strings.STS.L_RequiredField_Text);
        b += '">';
        if (!a.fieldSchema.Required && c.length > 0) {
            var j = d ? 'selected="selected" ' : "";
            b += "<option " + j + 'value="0">' + STSHtmlEncode(Strings.STS.L_LookupFieldNoneOption) + "</option>"
        }
        for (var f = 0; f < c.length; f++) {
            h[c[f].LookupId] = c[f].LookupValue;
            var k = !d && i.LookupId == c[f].LookupId,
                g = k ? 'selected="selected" ' : "";
            b += "<option " + g + 'value="' + STSHtmlEncode(c[f].LookupId) + '">';
            b += STSHtmlEncode(c[f].LookupValue) + "</option>"
        }
        b += "</select><br/></span>";
        return b
    }
}

function SPFieldLookupMulti_Edit(y) {
    if (y == null) return "";
    var a = SPClientTemplates.Utility.GetFormContextForCurrentField(y);
    if (a == null || a.fieldSchema == null) return "";
    for (var e = a.fieldName + "_" + a.fieldSchema.Id, b = e + "_MultiLookup", x = b + "_topTable", q = b + "_data", l = b + "_initial", B = {}, i = a.fieldSchema.Choices, F = SPClientTemplates.Utility.BuildLookupValuesAsString(i, true, true), G = i.length, h = 0; h < G; h++) B[i[h].LookupId] = i[h].LookupValue;
    var d, k = b + "_m",
        r = e + "_AddButton",
        n = e + "_RemoveButton",
        o = e + "_SelectResult",
        j = e + "_SelectCandidate",
        p, m, f, c, g, E, C, H = a.fieldValue != null ? a.fieldValue : "",
        D = SPClientTemplates.Utility.ParseMultiLookupValues(H),
        w = SPClientTemplates.Utility.BuildLookupValuesAsString(D, true, false);
    a.registerInitCallback(a.fieldName, A);
    a.registerFocusCallback(a.fieldName, function () {
        c != null && c.focus()
    });
    a.registerValidationErrorCallback(a.fieldName, function (a) {
        SPFormControl_AppendValidationErrorMessage(x, a)
    });
    a.registerGetValueCallback(a.fieldName, u);
    a.updateControlValue(a.fieldName, w);
    return z();

    function A() {
        function a() {
            if (typeof window[k] == "undefined") window[k] = new MasterGroup;
            d = window[k];
            g = document.getElementById(b);
            E = document.getElementById(q);
            C = document.getElementById(l);
            p = document.getElementById(r);
            p != null && AddEvtHandler(p, "onclick", function () {
                return v()
            });
            m = document.getElementById(n);
            m != null && AddEvtHandler(m, "onclick", function () {
                return s()
            });
            f = document.getElementById(o);
            if (f != null) {
                AddEvtHandler(f, "ondblclick", function () {
                    return s()
                });
                AddEvtHandler(f, "onchange", function () {
                    GipSelectResultItems(d)
                })
            }
            c = document.getElementById(j);
            if (c != null) {
                AddEvtHandler(c, "ondblclick", function () {
                    return v()
                });
                AddEvtHandler(c, "onchange", function () {
                    GipSelectCandidateItems(d)
                })
            }
            GipInitializeGroup(d, "", j, o, "", r, n, q, l, b, 0, true, true)
        }
        ExecuteOrDelayUntilScriptLoaded(a, "groupeditempicker.js")
    }

    function t() {
        g != null && a.updateControlValue(a.fieldName, u())
    }

    function u() {
        if (g == null || typeof GipSplit == "undefined") return "";
        for (var a = "", c = GipSplit(g.value), b = 0; b + 1 < c.length; b++) {
            if (a != "") a += ";#";
            a += c[b++];
            a += ";#";
            a += c[b].replace(/;/g, ";;")
        }
        return a
    }

    function v() {
        GipAddSelectedItems(d);
        t();
        return false
    }

    function s() {
        GipRemoveSelectedItems(d);
        t();
        return false
    }

    function z() {
        var e = a.fieldSchema.Title,
            c = '<span dir="' + STSHtmlEncode(a.fieldSchema.Direction) + '">';
        c += '<input id="' + STSHtmlEncode(b) + '" type="hidden" />';
        c += '<input id="' + STSHtmlEncode(q) + '" type="hidden" value="' + STSHtmlEncode(F) + '" />';
        c += '<input id="' + STSHtmlEncode(l) + '" type="hidden" value="' + STSHtmlEncode(w) + '" />';
        c += '<table id="' + STSHtmlEncode(x) + '" class="ms-long" cellpadding="0" cellspacing="0" border="0"><tr>';
        c += '<td class="ms-input"><select id="' + STSHtmlEncode(j) + '" multiple="multiple" ';
        c += 'title="' + STSHtmlEncode(StBuildParam(Strings.STS.L_LookupMultiFieldCandidateAltText, e)) + '" ';
        var d = Boolean(a.fieldSchema.UseMinWidth) ? "min-width" : "width";
        c += 'style="' + d + ':143px; height:125px; overflow:scroll;"></select></td>';
        c += '<td style="padding-left:10px">';
        c += '<td align="center" valign="middle" class="ms-input ms-noWrap">';
        c += '<input type="button" id="' + STSHtmlEncode(r) + '" class="ms-ButtonHeightWidth" value="';
        c += STSHtmlEncode(Strings.STS.L_LookupMultiFieldAddButtonText) + ' &gt;" /><br /><br />';
        c += '<input type="button" id="' + STSHtmlEncode(n) + '" class="ms-ButtonHeightWidth" value="&lt; ';
        c += STSHtmlEncode(Strings.STS.L_LookupMultiFieldRemoveButtonText) + '" /></td>';
        c += '<td style="padding-left:10px"><td class="ms-input">';
        c += '<select id="' + STSHtmlEncode(o) + '" multiple="multiple" ';
        c += 'title="' + STSHtmlEncode(StBuildParam(Strings.STS.L_LookupMultiFieldResultAltText, e)) + '" ';
        c += 'style="' + d + ':143px;height:125px;overflow:scroll;"></select>';
        c += "</td></tr></table></span>";
        return c
    }
}

function SPFieldAttachments_Default(o) {
    if (o == null) return "";
    var b = SPClientTemplates.Utility.GetFormContextForCurrentField(o);
    if (b == null || b.fieldSchema == null || b.fieldValue == null) return "";
    var d, h = "attachmentsToBeRemovedFromServer";
    b.registerInitCallback(b.fieldName, function () {
        typeof ShowAttachmentRows == "function" && ShowAttachmentRows()
    });
    b.registerHasValueChangedCallback(b.fieldName, q);
    var a = "";
    a += '<table border="0" cellpadding="0" cellspacing="0" id="idAttachmentsTable">';
    if (b.fieldValue != "")
        for (var n = b.fieldValue.Attachments, r = STSHtmlEncode(b.fieldValue.UrlPrefix), k = STSHtmlEncode(Strings.STS.L_DeleteVersion_Text), f = 0; f < n.length; f++) {
            var e = n[f],
                m = STSHtmlEncode(e.FileName),
                j = STSHtmlEncode(e.RedirectUrl),
                i = STSHtmlEncode(e.AttachmentId),
                c = STSHtmlEncode(e.FileTypeProgId);
            if (c == "") c = "null";
            var l = b.listAttributes.DefaultItemOpen ? "1" : "0";
            a += '<tr id="';
            a += i;
            a += '"><td class="ms-vb"><span dir="ltr">';
            a += '<a tabindex="1" onmousedown="return VerifyHref(this, event, \'';
            a += l;
            a += "', '";
            a += c;
            a += "', '";
            a += j;
            a += "'); return false;\" onclick=\"DispDocItemExWithServerRedirect(this, event, 'FALSE', 'FALSE', 'FALSE', '";
            a += c;
            a += "', '";
            a += l;
            a += "', '";
            a += j;
            a += '\'); return false;" href="';
            a += r;
            a += m;
            a += '">';
            a += m;
            a += "</a></span></td>";
            if (b.controlMode == SPClientTemplates.ClientControlMode.EditForm) {
                a += '<td class="ms-propertysheet"><img alt="';
                a += k;
                a += '" src="';
                a += "/_layouts/15/images/rect.gif?rev=44";
                a += '">&nbsp;<a tabindex="1" href="javascript:void(0)" ';
                a += "onclick=\"RemoveAttachmentFromServer('";
                a += i;
                a += "', 1); return false;\">&nbsp;";
                a += k;
                a += "</a></td>"
            }
            a += "</tr>"
        }
    a += "</table>";
    var g = document.getElementById("csrAttachmentUploadDiv");
    if (g != null && (b.controlMode == SPClientTemplates.ClientControlMode.NewForm || b.controlMode == SPClientTemplates.ClientControlMode.EditForm)) g.innerHTML = p();
    return a;

    function p() {
        var b = STSHtmlEncode(Strings.STS.L_FileUploadToolTip_text),
            a = "";
        a += '<input type="hidden" name="';
        a += h;
        a += '"/><input type="hidden" name="RectGifUrl" value="';
        a += "/_layouts/15/images/rect.gif?rev=44";
        a += '"/>';
        a += '<span id="partAttachment" style="display:none">';
        a += '<table cellspacing="0" cellpadding="0" border="0" width="100%">';
        a += '<tbody><tr><td class="ms-descriptiontext" style="padding-bottom: 8px;" colspan="4" valign="top">';
        a += STSHtmlEncode(Strings.STS.L_AttachmentsUploadDescription);
        a += '</td></tr><tr><td width="190px" class="ms-formlabel" valign="top" height="50px">';
        a += b;
        a += '</td><td class="ms-formbody" valign="bottom" height="15" id="attachmentsOnClient">';
        a += '<span dir="ltr"><input type="file" name="fileupload0" id="onetidIOFile" class="ms-fileinput" size="56" title="';
        a += b;
        a += '" /></span></td></tr><tr><td class="ms-formline" colspan="4" height="1"></td>';
        a += '</tr><tr><td colspan="4" height="10"></td></tr><tr>';
        a += '<td class="ms-attachUploadButtons" colspan="4">';
        a += '<input class="ms-ButtonHeightWidth" id="attachOKbutton" type="button" onclick="OkAttach()" value="';
        a += STSHtmlEncode(Strings.STS.L_OkButtonCaption);
        a += '"/>';
        a += '<span id="idSpace" class="ms-SpaceBetButtons"></span>';
        a += '<input class="ms-ButtonHeightWidth" id="attachCancelButton" type="button" onclick="CancelAttach()" value="';
        a += STSHtmlEncode(Strings.STS.L_CancelButtonCaption);
        a += '" accesskey="';
        a += STSHtmlEncode(Strings.STS.L_SelectForeColorKey_TEXT);
        a += '" /></td></tr></tbody></table></span>';
        return a
    }

    function q() {
        if (typeof FileUploadLocalFileCount != "undefined" && FileUploadLocalFileCount > 0) return true;
        if (d == null) d = document.getElementsByName(h)[0];
        return d != null && d.value != "" ? true : false
    }
}

function SPFormControl_AppendValidationErrorMessage(f, d) {
    var e = "Error_" + f,
        b = document.getElementById(e);
    b != null && b.parentNode != null && b.parentNode.removeChild(b);
    if (!d.validationError) return;
    var c = document.getElementById(f);
    if (c == null || c.parentNode == null) return;
    var a = document.createElement("SPAN");
    a.id = e;
    a.className = "ms-formvalidation ms-csrformvalidation";
    a.innerHTML = '<span role="alert">' + STSHtmlEncode(d.errorMessage) + "<br/></span>";
    c.parentNode.appendChild(a)
}

function ClientFormContext(a) {
    if (a != null) {
        this.fieldValue = a.fieldValue;
        this.fieldSchema = a.fieldSchema;
        this.fieldName = a.fieldName;
        this.controlMode = a.controlMode;
        this.webAttributes = a.webAttributes;
        this.itemAttributes = a.itemAttributes;
        this.listAttributes = a.listAttributes;
        this.registerInitCallback = a.registerInitCallback;
        this.registerFocusCallback = a.registerFocusCallback;
        this.registerValidationErrorCallback = a.registerValidationErrorCallback;
        this.registerGetValueCallback = a.registerGetValueCallback;
        this.updateControlValue = a.updateControlValue;
        this.registerClientValidator = a.registerClientValidator;
        this.registerHasValueChangedCallback = a.registerHasValueChangedCallback
    } else {
        this.registerInitCallback = function () { };
        this.registerFocusCallback = function () { };
        this.registerValidationErrorCallback = function () { };
        this.registerGetValueCallback = function () { };
        this.updateControlValue = function () { };
        this.registerClientValidator = function () { };
        this.registerHasValueChangedCallback = function () { }
    }
}

function ClientFormContext_InitializePrototype() {
    ClientFormContext.prototype = {
        fieldValue: null,
        fieldSchema: null,
        fieldName: "",
        controlMode: 0,
        webAttributes: null,
        itemAttributes: null,
        listAttributes: null,
        registerInitCallback: null,
        registerFocusCallback: null,
        registerValidationErrorCallback: null,
        registerGetValueCallback: null,
        updateControlValue: null,
        registerClientValidator: null,
        registerHasValueChangedCallback: null
    }
}

function SPClientFormsClientValidationValidationResult_InitializePrototype() {
    SPClientForms.ClientValidation.ValidationResult.prototype.errorMessage = "";
    SPClientForms.ClientValidation.ValidationResult.prototype.validationError = false
}
$_global_clientforms();