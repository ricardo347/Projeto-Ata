﻿function $_global_autofill() {
    if ("undefined" == typeof g_all_modules) g_all_modules = {};
    g_all_modules["autofill.js"] = {
        version: {
            rmj: 16,
            rmm: 0,
            rup: 5708,
            rpr: 1210
        }
    };
    typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkBegin_autofill.js");
    SPClientAutoFill.SPClientAutoFillDict = {};
    SPClientAutoFill.CurrentOpenAutoFillMenuOwnerID = "";
    SPClientAutoFill.MenuOptionType = {
        Option: 0,
        Footer: 1,
        Separator: 2,
        Loading: 3
    };
    SPClientAutoFill.KeyProperty = "AutoFillKey";
    SPClientAutoFill.ImageUrlProperty = "ImageUrl";
    SPClientAutoFill.DisplayTextProperty = "AutoFillDisplayText";
    SPClientAutoFill.SubDisplayTextProperty = "AutoFillSubDisplayText";
    SPClientAutoFill.TitleTextProperty = "AutoFillTitleText";
    SPClientAutoFill.MenuOptionTypeProperty = "AutoFillMenuOptionType";
    SPClientAutoFill.prototype = {
        TextElementId: "",
        AutoFillContainerId: "",
        AutoFillMenuId: "",
        VisibleItemCount: 5,
        CurrentFocusOption: -1,
        AutoFillMinTextLength: 4,
        AutoFillTimeout: 250,
        AutoFillCallbackTimeoutID: "",
        FuncOnAutoFillClose: null,
        FuncPopulateAutoFill: null,
        AllOptionData: {},
        PopulateAutoFill: function (d, f) {
            if (d != null) {
                var h = d.length,
                    i = document.getElementById(this.TextElementId),
                    c = document.getElementById(this.AutoFillContainerId);
                if (c != null) {
                    this.FuncOnAutoFillClose = f == null ? null : f;
                    var a = [];
                    a.push('<ul class="sp-autoFill-scroll" id="');
                    a.push(STSHtmlEncode(this.AutoFillMenuId));
                    a.push('" onmouseover="SPClientAutoFill_OnAutoFillMouseOver(event)">');
                    for (var b = 0; b < h; b++) {
                        var e = d[b];
                        a.push(SPClientAutoFill.BuildMenuItem(e, b));
                        var g = e[SPClientAutoFill.KeyProperty];
                        if (g != "") this.AllOptionData[g] = e
                    }
                    a.push("</ul>");
                    c.innerHTML = a.join("");
                    this.CurrentFocusOption = -1;
                    this.UpdateAutoFillPosition();
                    c.style.display = "block";
                    this.SetAutoFillHeight();
                    SPClientAutoFill.CurrentOpenAutoFillMenuOwnerID = this.TextElementId
                }
            } else this.CloseAutoFill(null)
        },
        IsAutoFillOpen: function () {
            a:;
            return SPClientAutoFill.CurrentOpenAutoFillMenuOwnerID == this.TextElementId
        },
        SetAutoFillHeight: function () {
            a:;
            var c = document.getElementById(this.AutoFillMenuId);
            if (c == null) return;
            var a = c.childNodes;
            if (a == null || a.length <= this.VisibleItemCount) return;
            for (var e = 0, d = 0, b = 0; b < a.length; b++) {
                if (d >= this.VisibleItemCount) break;
                e += a[b].offsetHeight;
                if (a[b].className != "ms-core-menu-separator") d++
            }
            c.style.height = String(e) + "px";
            if (browseris.chrome && Boolean(ajaxNavigate.get_search().match(RegExp("[?&]IsDlg=1")))) window.frameElement != null && typeof window.frameElement.autoSize == "function" && window.frameElement.autoSize()
        },
        SelectAutoFillOption: function (b) {
            if (b != null) {
                var a = b.getAttribute("data-sp-optionValue");
                a != null && a != "" && this.CloseAutoFill(this.AllOptionData[a])
            }
        },
        FocusAutoFill: function () {
            a:; this.UpdateAutoFillMenuFocus(true)
        },
        BlurAutoFill: function () {
            a:;
            var c = document.getElementById(this.AutoFillMenuId);
            if (c != null) {
                var a = c.getElementsByTagName("a");
                if (a == null || a.length == 0) return;
                var b = this.CurrentFocusOption;
                b >= 0 && b < a.length && RemoveCssClassFromElement(a[b].parentNode, "ms-core-menu-itemSelected")
            }
        },
        CloseAutoFill: function (b) {
            this.FuncOnAutoFillClose != null && this.FuncOnAutoFillClose(this.TextElementId, b);
            var a = document.getElementById(this.AutoFillContainerId);
            a.style.display = "none";
            a.innerHTML = "";
            this.AllOptionData = {};
            this.CurrentFocusOption = -1;
            this.FuncOnAutoFillClose = null;
            SPClientAutoFill.CurrentOpenAutoFillMenuOwnerID = ""
        },
        UpdateAutoFillMenuFocus: function (c) {
            var d = document.getElementById(this.AutoFillMenuId);
            if (d != null) {
                var b = d.getElementsByTagName("a");
                if (b == null || b.length == 0) return;
                var a = this.CurrentFocusOption;
                0 <= a && a < b.length && RemoveCssClassFromElement(b[a].parentNode, "ms-core-menu-itemSelected");
                if (a != b.length - 1 || !c) this.CurrentFocusOption = c ? a + 1 : a - 1;
                if (this.CurrentFocusOption <= -1) {
                    this.CurrentFocusOption = -1;
                    var f = document.getElementById(this.TextElementId);
                    f != null && f.focus()
                } else {
                    var e = b[this.CurrentFocusOption],
                        g = e.parentNode;
                    e.focus();
                    AddCssClassToElement(g, "ms-core-menu-itemSelected")
                }
            }
        },
        UpdateAutoFillPosition: function () {
            a:;
            var b = document.getElementById(this.TextElementId),
                a = document.getElementById(this.AutoFillContainerId); a.style.top = b.parentNode.offsetHeight.toString() + "px"
        }
    };
    SPClientAutoFill.GetAutoFillObjFromInput = function (b) {
        if (b == null) return null;
        var a = b.id;
        return typeof SPClientAutoFill.SPClientAutoFillDict[a] != "undefined" ? SPClientAutoFill.SPClientAutoFillDict[a] : null
    };
    SPClientAutoFill.GetAutoFillObjFromContainer = function (c) {
        var b = null,
            a = c;
        while (a != null && a.nodeName.toLowerCase() != "body") {
            b = a.getAttribute("InputElementId");
            if (b != null && b != "") break;
            a = a.parentNode
        }
        return typeof SPClientAutoFill.SPClientAutoFillDict[b] != "undefined" ? SPClientAutoFill.SPClientAutoFillDict[b] : null
    };
    SPClientAutoFill.GetAutoFillMenuItemFromOption = function (b) {
        var a = b;
        while (a != null && a.nodeName.toLowerCase() != "body") {
            if (a.getAttribute("data-sp-autoFillMenuItem") == "true") return a;
            a = a.parentNode
        }
        return null
    };
    SPClientAutoFill.BuildAutoFillSeparatorMenuItem = function () {
        a:;
        var a = {}; a[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Separator;
        return a
    };
    SPClientAutoFill.BuildAutoFillFooterMenuItem = function (b) {
        var a = {};
        a[SPClientAutoFill.DisplayTextProperty] = b;
        a[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Footer;
        return a
    };
    SPClientAutoFill.BuildAutoFillLoadingSuggestionsMenuItem = function () {
        a:;
        var a = {}; a[SPClientAutoFill.MenuOptionTypeProperty] = SPClientAutoFill.MenuOptionType.Loading;
        return a
    };
    SPClientAutoFill.BuildMenuItem = function (a, g) {
        var c = a[SPClientAutoFill.KeyProperty],
            f = a[SPClientAutoFill.ImageUrlProperty],
            b = a[SPClientAutoFill.DisplayTextProperty],
            d = a[SPClientAutoFill.SubDisplayTextProperty],
            e = a[SPClientAutoFill.TitleTextProperty];
        switch (a[SPClientAutoFill.MenuOptionTypeProperty]) {
            case SPClientAutoFill.MenuOptionType.Footer:
                return SPClientAutoFill.BuildMenuItemFooter(b);
            case SPClientAutoFill.MenuOptionType.Separator:
                return SPClientAutoFill.BuildMenuItemSeparator();
            case SPClientAutoFill.MenuOptionType.Loading:
                return SPClientAutoFill.BuildMenuItemLoading();
            case SPClientAutoFill.MenuOptionType.Option:
            default:
                if (c != "") return SPClientAutoFill.BuildMenuItemOption(c, b, d, e, String(g), f)
        }
        return ""
    };
    SPClientAutoFill.BuildMenuItemSeparator = function () {
        a:;
        return '<li class="ms-core-menu-separator" onclick="CancelEvent(event); return false;"><hr class="ms-core-menu-separatorHr"/></li>'
    };
    SPClientAutoFill.BuildMenuItemFooter = function (b) {
        var a = [];
        a.push('<li class="ms-core-menu-footer" onclick="CancelEvent(event); return false;">');
        a.push('<div class="ms-textSmall" unselectable="on">');
        a.push(STSHtmlEncode(b));
        a.push("</div></li>");
        return a.join("")
    };
    SPClientAutoFill.BuildMenuItemLoading = function () {
        a:;
        var a = []; a.push('<li class="ms-core-menu-loading" onclick="CancelEvent(event); return false;">'); a.push('<div unselectable="on"><img class="sp-autoFill-loadingImg" alt="'); a.push(STSHtmlEncode(Strings.STS.L_SPClientPeoplePickerWaitImgAlt)); a.push('" src='); a.push('"/_layouts/15/images/gears_anv4.gif?rev=44"'); a.push("/></div></li>");
        return a.join("")
    };
    SPClientAutoFill.BuildMenuItemOption = function (d, c, b, g, h, f) {
        if (d == null || d == "") return "";
        var a = [];
        a.push('<li class="ms-core-menu-item"');
        a.push(' data-sp-autoFillMenuItem="true" data-sp-optionValue="');
        a.push(STSHtmlEncode(d));
        a.push('" title="');
        a.push(STSHtmlEncode(g));
        a.push('" onclick="SPClientAutoFill_OnAutoFillOptionClick(event);"');
        a.push(' onmousedown="SPClientAutoFill_OnAutoFillOptionMousedown(event);">');
        var e = !SP.ScriptUtility.isNullOrEmptyString(f);
        if (e) {
            a.push('<div class="ms-table ms-core-tableNoSpace">');
            a.push('<div class="ms-tableRow">');
            a.push('<div class="ms-tableCell">');
            a.push('<span class="ms-peopleux-userImgWrapper sp-autoFill-imageWrapper">');
            a.push('<img class="ms-peopleux-userImg ms-verticalAlignTop sp-autoFill-image" src="');
            a.push(f);
            a.push('">');
            a.push("</span></div>");
            a.push('<div class="ms-tableCell ms-verticalAlignTop">')
        }
        a.push('<a class="ms-core-menu-link" onclick="return false;" data-sp-optionPosition="');
        a.push(STSHtmlEncode(h));
        a.push('" onkeydown="SPClientAutoFill_OnAutoFillOptionKeyDown(event)" href="#">');
        if (c != null && c != "") {
            a.push('<div class="ms-core-menu-label" unselectable="on">');
            a.push(STSHtmlEncode(c));
            a.push("</div>")
        }
        if (b != null && b != "") {
            a.push('<div class="ms-core-menu-sublabel ms-metadata" unselectable="on">');
            a.push(STSHtmlEncode(b));
            a.push("</div>")
        }
        a.push("</a>");
        e && a.push("</div></div></div>");
        a.push("</li>");
        return a.join("")
    };
    typeof Sys != "undefined" && Sys != null && Sys.Application != null && Sys.Application.notifyScriptLoaded();
    typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function" && NotifyScriptLoadedAndExecuteWaitingJobs("autofill.js");
    typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkEnd_autofill.js")
}

function ULSlwk() {
    var a = {};
    a.ULSTeamName = "Microsoft SharePoint Foundation";
    a.ULSFileName = "autofill.commentedjs";
    return a
}

function SPClientAutoFill(e, c, d) {
    this.TextElementId = e;
    this.AutoFillContainerId = c;
    this.AutoFillMenuId = c + "_MenuList";
    this.FuncPopulateAutoFill = d;
    var b = document.getElementById(this.TextElementId),
        a = document.getElementById(this.AutoFillContainerId);
    a.setAttribute("InputElementId", this.TextElementId);
    b.setAttribute("AutoFillContainerId", this.AutoFillContainerId);
    this.UpdateAutoFillPosition();
    if (fRightToLeft) a.style.right = "-1px";
    else a.style.left = "-1px";
    AddEvtHandler(b, "onkeyup", SPClientAutoFill_OnAutoFillTextBoxKeyUp);
    AddEvtHandler(b, "onkeydown", SPClientAutoFill_OnAutoFillTextBoxKeyDown);
    SPClientAutoFill.SPClientAutoFillDict[this.TextElementId] = this
}

function SPClientAutoFill_OnAutoFillMouseOver(a) {
    if (a == null) a = window.event;
    var c = GetEventSrcElement(a),
        b = SPClientAutoFill.GetAutoFillObjFromContainer(c);
    if (b == null) return;
    b.BlurAutoFill()
}

function SPClientAutoFill_OnAutoFillTextBoxKeyDown(c) {
    if (c == null) c = window.event;
    var a = false,
        f = GetEventKeyCode(c),
        i = GetEventSrcElement(c),
        b = SPClientAutoFill.GetAutoFillObjFromInput(i);
    if (b == null) return !a;
    var g = document.getElementById(b.AutoFillContainerId);
    if (g != null && g.style.display != "none") {
        var h = document.getElementById(b.AutoFillMenuId);
        if (h != null) {
            var d = null,
                e = h.getElementsByTagName("a");
            if (e != null && e.length > 0) d = e[0].parentNode;
            if (f == 40 || f == 9) {
                a = true;
                b.FocusAutoFill()
            } else if (f == 13) {
                a = true;
                d != null && b.SelectAutoFillOption(d)
            }
        }
    }
    a && CancelEvent(c);
    return !a
}

function SPClientAutoFill_OnAutoFillTextBoxKeyUp(c) {
    if (c == null) c = window.event;
    var b = GetEventSrcElement(c);
    if (b == null) return;
    var a = SPClientAutoFill.GetAutoFillObjFromInput(b);
    if (a != null) {
        if (a.AutoFillCallbackTimeoutID != "") {
            clearTimeout(parseInt(a.AutoFillCallbackTimeoutID));
            a.AutoFillCallbackTimeoutID = ""
        }
        a.UpdateAutoFillPosition();
        var d = setTimeout(function () {
            a:;
            var d = b.value,
                c = d.length; c >= a.AutoFillMinTextLength && a.FuncPopulateAutoFill(b)
        }, a.AutoFillTimeout);
        a.AutoFillCallbackTimeoutID = String(d)
    }
}

function SPClientAutoFill_OnAutoFillOptionClick(b) {
    if (b == null) b = window.event;
    var d = GetEventSrcElement(b),
        a = SPClientAutoFill.GetAutoFillMenuItemFromOption(d);
    if (a == null) return;
    var c = SPClientAutoFill.GetAutoFillObjFromContainer(a);
    c != null && c.SelectAutoFillOption(a)
}

function SPClientAutoFill_OnAutoFillOptionMousedown(a) {
    CancelEvent(a);
    return false
}

function SPClientAutoFill_OnAutoFillOptionKeyDown(b) {
    if (b == null) b = window.event;
    var d = GetEventSrcElement(b),
        c = SPClientAutoFill.GetAutoFillObjFromContainer(d);
    if (c == null) return true;
    var a = GetEventKeyCode(b);
    if (a == 13) d != null && c.SelectAutoFillOption(d.parentNode);
    else if (a == 27) c.CloseAutoFill(null);
    else if (b.shiftKey && a == 9 || a == 38) c.UpdateAutoFillMenuFocus(false);
    else (a == 9 || a == 40) && c.UpdateAutoFillMenuFocus(true);
    CancelEvent(b);
    return false
}
$_global_autofill();