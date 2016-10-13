﻿function ULSnd3() {
    var o = new Object;
    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "SP.Runtime.js";
    return o;
}
if ("undefined" == typeof g_all_modules) g_all_modules = {};
g_all_modules["sp.runtime.js"] = {
    version: {
        rmj: 16,
        rmm: 0,
        rup: 5708,
        rpr: 1210
    }
};
typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkBegin_sp.runtime.js");
window.SP && typeof SP.ClientRuntimeContext == "function" && window.console && window.console.error && window.console.error("Error: SP.Runtime.js is already loaded");
Type.registerNamespace("SP");
if (typeof IEnumerator == "undefined") {
    var IEnumerator = function () { };
    IEnumerator.prototype = {
        get_current: null,
        moveNext: null,
        reset: null
    };
    IEnumerator.registerInterface("IEnumerator")
}
if (typeof IEnumerable == "undefined") {
    var IEnumerable = function () { };
    IEnumerable.prototype = {
        getEnumerator: null
    };
    IEnumerable.registerInterface("IEnumerable")
}
if (typeof IDisposable == "undefined") {
    var IDisposable = function () { };
    IDisposable.prototype = {
        dispose: null
    };
    IDisposable.registerInterface("IDisposable")
}
if (typeof SP.Guid == "undefined") {
    SP.Guid = function (a) {
        ULSnd3:; a = SP.Guid._normalizeGuidString$p(a);
        if (SP.Guid.isValid(a)) this._m_guidString$p$0 = a;
        else {
            this._m_guidString$p$0 = SP.Guid._emptyGuidString$p;
            throw Error.argument("guidText");
        }
    };
    SP.Guid.get_empty = function () {
        ULSnd3:;
        if (!SP.Guid._s_empty$p) SP.Guid._s_empty$p = new SP.Guid(SP.Guid._emptyGuidString$p);
        return SP.Guid._s_empty$p
    };
    SP.Guid.newGuid = function () {
        ULSnd3:;
        for (var a = "", c = 0; c < 32; c++) {
            var b = Math.floor(Math.random() * 16);
            switch (c) {
                case 8:
                    a += "-";
                    break;
                case 12:
                    b = 4;
                    a += "-";
                    break;
                case 16:
                    b = b & 3 | 8;
                    a += "-";
                    break;
                case 20:
                    a += "-"
            }
            a += SP.Guid._s_hexcode$p[b]
        }
        var d = new SP.Guid(a);
        return d
    };
    SP.Guid.isValid = function (b) {
        ULSnd3:;
        var a = new RegExp("^[{|\\(]?[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}[\\)|}]?$");
        return !!a.exec(b)
    };
    SP.Guid._normalizeGuidString$p = function (b) {
        ULSnd3:;
        var a; a = b.replace(" ", ""); a = a.replace("{", ""); a = a.replace("}", ""); a = a.toLowerCase();
        return a
    };
    SP.Guid.prototype = {
        _m_guidString$p$0: null,
        toString: function () {
            ULSnd3:;
            if (!arguments.length) return this._m_guidString$p$0;
            var a = arguments[0];
            if (a === "B") return "{" + this._m_guidString$p$0 + "}";
            else if (a === "D") return this._m_guidString$p$0;
            else throw Error.argument("format");
        },
        equals: function (a) {
            ULSnd3:;
            return !a ? false : this._m_guidString$p$0 === a.toString()
        },
        ToSerialized: function () {
            ULSnd3:;
            return this.toString()
        }
    };
    SP.Guid.registerClass("SP.Guid");
    SP.Guid._s_hexcode$p = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    SP.Guid._emptyGuidString$p = "00000000-0000-0000-0000-000000000000";
    SP.Guid._s_empty$p = null
}
if (typeof SP.ScriptUtility == "undefined") {
    SP.ScriptUtility = function () { };
    SP.ScriptUtility.isNullOrEmptyString = function (a) {
        ULSnd3:;
        var b = null;
        return a === b || typeof a === "undefined" || !a.length
    };
    SP.ScriptUtility.isNullOrUndefined = function (a) {
        ULSnd3:;
        var b = null;
        return a === b || typeof a === "undefined"
    };
    SP.ScriptUtility.isUndefined = function (a) {
        ULSnd3:;
        return typeof a === "undefined"
    };
    SP.ScriptUtility.truncateToInt = function (a) {
        ULSnd3:;
        return a > 0 ? Math.floor(a) : Math.ceil(a)
    };
    SP.ScriptUtility.registerClass("SP.ScriptUtility");
    SP.ScriptUtility.emptyString = ""
}
if (typeof SP.PermissionKind == "undefined") {
    SP.PermissionKind = function () { };
    SP.PermissionKind.prototype = {
        emptyMask: 0,
        viewListItems: 1,
        addListItems: 2,
        editListItems: 3,
        deleteListItems: 4,
        approveItems: 5,
        openItems: 6,
        viewVersions: 7,
        deleteVersions: 8,
        cancelCheckout: 9,
        managePersonalViews: 10,
        manageLists: 12,
        viewFormPages: 13,
        anonymousSearchAccessList: 14,
        open: 17,
        viewPages: 18,
        addAndCustomizePages: 19,
        applyThemeAndBorder: 20,
        applyStyleSheets: 21,
        viewUsageData: 22,
        createSSCSite: 23,
        manageSubwebs: 24,
        createGroups: 25,
        managePermissions: 26,
        browseDirectories: 27,
        browseUserInfo: 28,
        addDelPrivateWebParts: 29,
        updatePersonalWebParts: 30,
        manageWeb: 31,
        anonymousSearchAccessWebLists: 32,
        useClientIntegration: 37,
        useRemoteAPIs: 38,
        manageAlerts: 39,
        createAlerts: 40,
        editMyUserInfo: 41,
        enumeratePermissions: 63,
        fullMask: 65
    };
    SP.PermissionKind.registerEnum("SP.PermissionKind", false)
}
Type.registerNamespace("SP");
SP.IWebRequestExecutorFactory = function () { };
SP.IWebRequestExecutorFactory.registerInterface("SP.IWebRequestExecutorFactory");
SP.ClientRequestStatus = function () { };
SP.ClientRequestStatus.prototype = {
    active: 0,
    inProgress: 1,
    completedSuccess: 2,
    completedException: 3
};
SP.ClientRequestStatus.registerEnum("SP.ClientRequestStatus", false);
SP.IFromJson = function () { };
SP.IFromJson.registerInterface("SP.IFromJson");
SP.DateTimeKind = function () { };
SP.DateTimeKind.prototype = {
    unspecified: 0,
    utc: 1,
    local: 2
};
SP.DateTimeKind.registerEnum("SP.DateTimeKind", false);
SP.ArrayListEnumerator = function (a) {
    ULSnd3:; this.$8_0 = a; this.$M_0 = -1; this.$2I_0 = a.length; this.current = null
};
SP.ArrayListEnumerator.prototype = {
    $8_0: null,
    $M_0: 0,
    $2I_0: 0,
    get_current: function () {
        ULSnd3:;
        return this.$8_0[this.$M_0]
    },
    moveNext: function () {
        ULSnd3:;
        if (this.$2I_0 !== this.$8_0.length) throw Error.invalidOperation(SP.ResResources.getString("CollectionModified")); this.$M_0++; this.current = this.$8_0[this.$M_0];
        return this.$M_0 < this.$8_0.length
    },
    reset: function () {
        ULSnd3:; this.$M_0 = -1; this.current = null
    }
};
SP.BaseCollection = function () { };
SP.BaseCollection.prototype = {
    getEnumerator: function () {
        ULSnd3:;
        return new SP.BaseCollectionEnumerator(this)
    },
    get_count: function () {
        ULSnd3:;
        return 0
    },
    itemAtIndex: function () {
        ULSnd3:;
        return null
    }
};
SP.BaseCollectionEnumerator = function (a) {
    ULSnd3:; this.$1a_0 = a; this.$M_0 = -1
};
SP.BaseCollectionEnumerator.prototype = {
    $1a_0: null,
    $M_0: 0,
    get_current: function () {
        ULSnd3:;
        return this.$1a_0.itemAtIndex(this.$M_0)
    },
    moveNext: function () {
        ULSnd3:; this.$M_0++;
        return this.$M_0 < this.$1a_0.get_count()
    },
    reset: function () {
        ULSnd3:; this.$M_0 = -1
    }
};
SP.Base64EncodedByteArray = function () {
    ULSnd3:; this.fromJson = this.$3g_0; this.customFromJson = this.$3h_0;
    if (arguments.length > 0 && !SP.ScriptUtility.isNullOrEmptyString(arguments[0])) {
        var a = arguments[0];
        this.$3K_0(a)
    } else {
        this.$8_0 = [];
        this.$F_0 = 0
    }
};
SP.Base64EncodedByteArray.prototype = {
    $8_0: null,
    $F_0: 0,
    get_length: function () {
        ULSnd3:;
        return this.$F_0
    },
    $3K_0: function (a) {
        ULSnd3:; a = a.replace("\\u002f", "/"); a = a.replace("\\u002F", "/");
        var g = new RegExp("[^A-Za-z0-9+/=]", "g"); a = a.replace(g, "");
        var h = Math.ceil((a.length + 1) / 4),
            i = Math.ceil((h * 3 + 1) / 2); this.$8_0 = new Array(i);
        for (var c = 0; c < this.$8_0.length; c++) this.$8_0[c] = 0; this.$F_0 = 0;
        for (var b = 0; b < a.length; b += 4) {
            var j = a.charAt(b),
                k = a.charAt(b + 1),
                l = a.charAt(b + 2),
                m = a.charAt(b + 3),
                n = SP.Base64EncodedByteArray.$1R.indexOf(j),
                e = SP.Base64EncodedByteArray.$1R.indexOf(k),
                d = SP.Base64EncodedByteArray.$1R.indexOf(l),
                f = SP.Base64EncodedByteArray.$1R.indexOf(m),
                o = n << 2 | e >> 4,
                p = (e & 15) << 4 | d >> 2,
                q = (d & 3) << 6 | f;
            this.$1S_0(this.$F_0, o);
            this.$F_0++;
            if (d !== 64) {
                this.$1S_0(this.$F_0, p);
                this.$F_0++
            }
            if (f !== 64) {
                this.$1S_0(this.$F_0, q);
                this.$F_0++
            }
        }
    },
    toBase64String: function () {
        ULSnd3:;
        for (var a = new Sys.StringBuilder, c = 0, j = this.$F_0 % 3, k = this.$F_0 - j, b, d, i, e, f, g, h, c = 0; c < k; c += 3) {
            b = this.getByteAt(c);
            d = this.getByteAt(c + 1);
            i = this.getByteAt(c + 2);
            e = SP.Base64EncodedByteArray.$N[(b & 252) >> 2];
            f = SP.Base64EncodedByteArray.$N[(b & 3) << 4 | (d & 240) >> 4];
            g = SP.Base64EncodedByteArray.$N[(d & 15) << 2 | (i & 192) >> 6];
            h = SP.Base64EncodedByteArray.$N[i & 63];
            a.append(e);
            a.append(f);
            a.append(g);
            a.append(h)
        }
        switch (j) {
            case 2:
                b = this.getByteAt(c);
                d = this.getByteAt(c + 1);
                e = SP.Base64EncodedByteArray.$N[(b & 252) >> 2];
                f = SP.Base64EncodedByteArray.$N[(b & 3) << 4 | (d & 240) >> 4];
                g = SP.Base64EncodedByteArray.$N[(d & 15) << 2];
                h = SP.Base64EncodedByteArray.$N[64];
                a.append(e);
                a.append(f);
                a.append(g);
                a.append(h);
                break;
            case 1:
                b = this.getByteAt(c);
                e = SP.Base64EncodedByteArray.$N[(b & 252) >> 2];
                f = SP.Base64EncodedByteArray.$N[(b & 3) << 4];
                g = SP.Base64EncodedByteArray.$N[64];
                h = SP.Base64EncodedByteArray.$N[64];
                a.append(e);
                a.append(f);
                a.append(g);
                a.append(h)
        }
        return a.toString()
    },
    append: function (a) {
        ULSnd3:;
        if (!(this.$F_0 % 2)) this.$8_0[this.$F_0 / 2 + 1] = 0; this.$1S_0(this.$F_0, a); this.$F_0++
    },
    getByteAt: function (a) {
        ULSnd3:;
        if (a >= this.$F_0) throw Error.argumentOutOfRange("index");
        var c = Math.floor(a / 2),
            b = this.$8_0[c],
            d = a % 2;
        return !d ? b & 255 : (b & 65280) >> 8
    },
    setByteAt: function (a, b) {
        ULSnd3:;
        if (a >= this.$F_0) throw Error.argumentOutOfRange("index"); this.$1S_0(a, b)
    },
    $1S_0: function (c, d) {
        ULSnd3:;
        var b = Math.floor(c / 2),
            a = this.$8_0[b],
            e = c % 2;
        if (!e) a = (a & 65280) + (d & 255);
        else a = (d & 255) * 256 + (a & 255); this.$8_0[b] = a
    },
    $3g_0: function (a) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrUndefined(a)) return;
        if (SP.Base64EncodedByteArray.isInstanceOfType(a)) {
            var b = a;
            this.$F_0 = b.$F_0;
            this.$8_0 = b.$8_0
        }
    },
    $3h_0: function () {
        ULSnd3:;
        return false
    }
};
SP.ClientObjectPropertyConditionalScope = function (b, c, a, e, d) {
    ULSnd3:; SP.ClientObjectPropertyConditionalScope.initializeBase(this, [!b ? null : b.$0_0, d]);
    if (!b) throw Error.argumentNull("clientObject");
    if (a !== "GT" && a !== "LT" && a !== "EQ" && a !== "NE" && a !== "GE" && a !== "LE") throw Error.argumentOutOfRange("comparisonOperator");
    if (SP.ScriptUtility.isNullOrEmptyString(c)) throw Error.argumentNull("propertyName"); this.$1D_1 = b; this.$S_1 = c; this.$2A_1 = a; this.$2T_1 = e
};
SP.ClientObjectPropertyConditionalScope.prototype = {
    $1D_1: null,
    $S_1: null,
    $2A_1: null,
    $2T_1: null,
    $3B_0: function (c) {
        ULSnd3:;
        if (!this.$1D_1) throw SP.ConditionalScopeBase.$9();
        var b = new Sys.StringBuilder,
            a = SP.XmlWriter.create(b); a.writeStartElement("Test"); a.writeStartElement("Body"); a.writeStartElement(this.$2A_1); a.writeStartElement("ExpressionProperty"); a.writeAttributeString("Name", this.$S_1); a.writeStartElement("ExpressionConstant"); SP.DataConvert.writeValueToXmlElement(a, this.$1D_1, c); a.writeEndElement(); a.writeEndElement(); a.writeStartElement("ExpressionConstant"); SP.DataConvert.writeValueToXmlElement(a, this.$2T_1, c); a.writeEndElement(); a.writeEndElement(); a.writeEndElement(); a.writeEndElement(); a.close(); this.$1D_1 = null;
        return b
    }
};
SP.ClientDictionaryResultHandler = function (a) {
    ULSnd3:; this.fromJson = this.$3g_0; this.customFromJson = this.$3h_0; this.$2B_0 = a
};
SP.ClientDictionaryResultHandler.prototype = {
    $2B_0: null,
    $3g_0: function (e) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrUndefined(e)) return;
        var f = e,
            b = {},
            c = f;
        for (var d in c) {
            var a = {
                key: d,
                value: c[d]
            };
            if (typeof a.value !== "function" && a.key !== "_ObjectType_") b[a.key] = a.value
        }
        SP.DataConvert.fixupTypes(null, b); this.$2B_0.setValue(b)
    },
    $3h_0: function () {
        ULSnd3:;
        return false
    }
};
SP.ClientActionInstantiateObjectPathResult = function (a) {
    ULSnd3:; this.fromJson = this.$3g_0; this.customFromJson = this.$3h_0; this.$Z_0 = a
};
SP.ClientActionInstantiateObjectPathResult.prototype = {
    $Z_0: null,
    $3g_0: function (a) {
        ULSnd3:;
        if (!SP.ScriptUtility.isNullOrUndefined(a) && typeof a === "object") {
            var b = false;
            if (typeof a.IsNull === "boolean") b = a.IsNull;
            this.$Z_0.$1N_0 = b
        }
    },
    $3h_0: function () {
        ULSnd3:;
        return false
    }
};
SP.ClientObjectCollectionResult = function (a, b) {
    ULSnd3:; this.fromJson = this.$3g_0; this.customFromJson = this.$3h_0; this.$0_0 = a; this.$1k_0 = b
};
SP.ClientObjectCollectionResult.prototype = {
    $1k_0: null,
    $0_0: null,
    $3g_0: function (a) {
        ULSnd3:;
        if (!SP.ScriptUtility.isNullOrUndefined(a) && typeof a === "object")
            if (Array.isInstanceOfType(a)) SP.DataConvert.populateArray(this.$0_0, this.$1k_0, a);
            else {
                var b = a._Child_Items_;
                b && SP.DataConvert.populateArray(this.$0_0, this.$1k_0, b)
            }
    },
    $3h_0: function () {
        ULSnd3:;
        return false
    }
};
SP.ClientUtility = function () { };
SP.ClientUtility.urlPathEncodeForXmlHttpRequest = function (a) {
    ULSnd3:;
    return SP.ClientHttpUtility.$34(a, true, true)
};
SP.ClientUtility.getOrCreateObjectPathForConstructor = function (d, f, a) {
    ULSnd3:;
    if (!a || a.length < 1) throw Error.argumentNull("args");
    var b = 0;
    if (a[b] === d) b++;
    if (SP.ObjectPath.isInstanceOfType(a[b])) return a[b];
    for (var e = [], c = b; c < a.length; c++) e.push(a[c]);
    return new SP.ObjectPathConstructor(d, f, e)
};
SP.ClientUtility.$3Q = function (b) {
    ULSnd3:;
    var c = b.toLowerCase(),
        a = 0;
    if (c.startsWith("http://")) a = b.indexOf("/", 8);
    else if (c.startsWith("https://")) a = b.indexOf("/", 9);
    return a < 0 ? "/" : b.substr(a)
};
SP.ClientXElement = function () {
    ULSnd3:; this.fromJson = this.$3g_0; this.customFromJson = this.$3h_0
};
SP.ClientXElement.prototype = {
    $g_0: null,
    $3g_0: function (a) {
        ULSnd3:; this.$g_0 = a
    },
    $3h_0: function () {
        ULSnd3:;
        return false
    },
    get_element: function () {
        ULSnd3:;
        return this.$g_0
    },
    set_element: function (a) {
        ULSnd3:; this.$g_0 = a;
        return a
    }
};
SP.ClientXDocument = function () {
    ULSnd3:; this.fromJson = this.$3g_0; this.customFromJson = this.$3h_0
};
SP.ClientXDocument.prototype = {
    $g_0: null,
    $3g_0: function (a) {
        ULSnd3:; this.$g_0 = a
    },
    $3h_0: function () {
        ULSnd3:;
        return false
    },
    get_root: function () {
        ULSnd3:;
        return this.$g_0
    },
    set_root: function (a) {
        ULSnd3:; this.$g_0 = a;
        return a
    }
};
SP.DataConvert = function () { };
SP.DataConvert.writePropertiesToXml = function (a, g, c, e) {
    ULSnd3:;
    for (var b = 0; b < c.length; b++) {
        var d = c[b];
        a.writeStartElement("Property");
        a.writeAttributeString("Name", d);
        var f = SP.DataConvert.invokeGetProperty(g, d);
        SP.DataConvert.writeValueToXmlElement(a, f, e);
        a.writeEndElement()
    }
};
SP.DataConvert.populateDictionaryFromObject = function (f, a) {
    ULSnd3:;
    if (SP.ScriptUtility.isNullOrUndefined(a)) return;
    var e = a,
        b = e;
    for (var c in b) {
        var d = {
            key: c,
            value: b[c]
        };
        f[d.key] = d.value
    }
};
SP.DataConvert.fixupTypes = function (e, d) {
    ULSnd3:;
    var b = d;
    for (var c in b) {
        var a = {
            key: c,
            value: b[c]
        };
        if (!SP.ScriptUtility.isNullOrUndefined(a.value) && typeof a.value === "object") {
            var f = SP.DataConvert.fixupType(e, a.value);
            d[a.key] = f
        }
    }
};
SP.DataConvert.populateArray = function (b, c, a) {
    ULSnd3:; SP.DataConvert.$2U(b, c, a, null)
};
SP.DataConvert.$2U = function (f, d, c, g) {
    ULSnd3:;
    if (SP.ScriptUtility.isNullOrUndefined(c)) return;
    for (var a = 0; a < c.length; a++) {
        var b = c[a];
        if (SP.ScriptUtility.isNullOrUndefined(b)) {
            Array.add(d, b);
            continue
        }
        var e = SP.DataConvert.$2d(f, b, g);
        Array.add(d, e)
    }
};
SP.DataConvert.fixupType = function (a, b) {
    ULSnd3:;
    return SP.DataConvert.$2d(a, b, null)
};
SP.DataConvert.$3T = function (a) {
    ULSnd3:;
    var d = SP.DataConvert.$1z[a];
    if (d === 2) return true;
    if (d === 1) return false;
    for (var e = a.split("."), b = window, c = 0; c < e.length; c++) {
        b = b[e[c]];
        if (!b) {
            SP.DataConvert.$1z[a] = 1;
            return false
        }
    }
    SP.DataConvert.$1z[a] = 2;
    return true
};
SP.DataConvert.$2d = function (h, a, i) {
    ULSnd3:;
    var b = a;
    if (!SP.ScriptUtility.isNullOrUndefined(a) && typeof a === "object") {
        var e = a._ObjectType_;
        if (!SP.ScriptUtility.isNullOrUndefined(e)) {
            var c;
            if (SP.DataConvert.$3T(e)) c = Type.parse(e);
            else c = i;
            if (c) {
                b = new c(h);
                if (SP.IFromJson.isInstanceOfType(b)) {
                    var g = b;
                    !g.customFromJson(a) && g.fromJson(a)
                }
            }
        } else if (Array.isInstanceOfType(a))
            for (var f = a, d = 0; d < f.length; d++) f[d] = SP.DataConvert.fixupType(h, f[d])
    }
    return b
};
SP.DataConvert.writeDictionaryToXml = function (a, i, b, f, g) {
    ULSnd3:; !SP.ScriptUtility.isNullOrEmptyString(b) && a.writeStartElement(b);
    var d = i;
    for (var e in d) {
        var c = {
            key: e,
            value: d[e]
        };
        if (!f || Array.contains(f, c.key)) {
            a.writeStartElement("Property");
            a.writeAttributeString("Name", c.key);
            var h = c.value;
            SP.DataConvert.writeValueToXmlElement(a, h, g);
            a.writeEndElement()
        }
    } !SP.ScriptUtility.isNullOrEmptyString(b) && a.writeEndElement()
};
SP.DataConvert.writeValueToXmlElement = function (a, b, e) {
    ULSnd3:;
    if (SP.ScriptUtility.isNullOrUndefined(b)) a.writeAttributeString("Type", "Null");
    else if (SP.ClientObject.isInstanceOfType(b)) {
        var f = b;
        if (!f.get_path()) throw Error.create(SP.ResResources.getString("NoObjectPathAssociatedWithObject"));
        a.writeAttributeString("ObjectPathId", f.get_path().$4_0.toString());
        e.addClientObject(f)
    } else if (SP.ClientValueObject.isInstanceOfType(b)) {
        var g = b;
        a.writeAttributeString("TypeId", g.get_typeId());
        !g.customWriteToXml(a, e) && g.writeToXml(a, e)
    } else if (Object.getType(b) === Array) {
        a.writeAttributeString("Type", "Array");
        for (var l = b, h = 0; h < l.length; h++) {
            var o = l[h];
            a.writeStartElement("Object");
            SP.DataConvert.writeValueToXmlElement(a, o, e);
            a.writeEndElement()
        }
    } else if (Object.getType(b) === Date) {
        a.writeAttributeString("Type", "DateTime");
        var c = b,
            m = SP.DataConvert.getDateTimeKind(c),
            d;
        if (!m) {
            var p = c.getMonth() + 1;
            d = SP.DataConvert.$C(c.getFullYear().toString(), 4) + "-" + SP.DataConvert.$C(p.toString(), 2) + "-" + SP.DataConvert.$C(c.getDate().toString(), 2) + "T" + SP.DataConvert.$C(c.getHours().toString(), 2) + ":" + SP.DataConvert.$C(c.getMinutes().toString(), 2) + ":" + SP.DataConvert.$C(c.getSeconds().toString(), 2) + "." + SP.DataConvert.$C(c.getMilliseconds().toString(), 3)
        } else if (m === 2) {
            var q = c.getMonth() + 1;
            d = SP.DataConvert.$C(c.getFullYear().toString(), 4) + "-" + SP.DataConvert.$C(q.toString(), 2) + "-" + SP.DataConvert.$C(c.getDate().toString(), 2) + "T" + SP.DataConvert.$C(c.getHours().toString(), 2) + ":" + SP.DataConvert.$C(c.getMinutes().toString(), 2) + ":" + SP.DataConvert.$C(c.getSeconds().toString(), 2) + "." + SP.DataConvert.$C(c.getMilliseconds().toString(), 3);
            var n = c.getTimezoneOffset() / 60,
                r = n <= 0 ? "+" : "-";
            d = d + r + SP.DataConvert.$C(Math.floor(Math.abs(n)).toString(), 2) + ":" + SP.DataConvert.$C(Math.abs(c.getTimezoneOffset() % 60).toString(), 2)
        } else {
            var s = c.getUTCMonth() + 1;
            d = SP.DataConvert.$C(c.getUTCFullYear().toString(), 4) + "-" + SP.DataConvert.$C(s.toString(), 2) + "-" + SP.DataConvert.$C(c.getUTCDate().toString(), 2) + "T" + SP.DataConvert.$C(c.getUTCHours().toString(), 2) + ":" + SP.DataConvert.$C(c.getUTCMinutes().toString(), 2) + ":" + SP.DataConvert.$C(c.getUTCSeconds().toString(), 2) + "." + SP.DataConvert.$C(c.getUTCMilliseconds().toString(), 3) + "Z"
        }
        a.writeString(d)
    } else if (Object.getType(b) === String) {
        a.writeAttributeString("Type", "String");
        a.writeString(b.toString())
    } else if (Object.getType(b) === SP.Guid) {
        a.writeAttributeString("Type", "Guid");
        a.writeString(b.toString("B"))
    } else if (Object.getType(b) === SP.Base64EncodedByteArray) {
        a.writeAttributeString("Type", "Base64Binary");
        a.writeString(b.toBase64String())
    } else if (typeof b === "number" || typeof b === "object" && Number.isInstanceOfType(b)) {
        a.writeAttributeString("Type", "Number");
        a.writeString(b.toString())
    } else if (typeof b === "object") {
        a.writeAttributeString("Type", "Dictionary");
        var t = b,
            j = t;
        for (var k in j) {
            var i = {
                key: k,
                value: j[k]
            },
                u = i.value;
            if (SP.DataConvert.$3E(u)) {
                a.writeStartElement("Property");
                a.writeAttributeString("Name", i.key);
                SP.DataConvert.writeValueToXmlElement(a, i.value, e);
                a.writeEndElement()
            }
        }
    } else if (typeof b === "boolean") {
        a.writeAttributeString("Type", "Boolean");
        a.writeString(b ? "true" : "false")
    } else {
        a.writeAttributeString("Type", "Unspecified");
        a.writeString(b.toString())
    }
};
SP.DataConvert.$3E = function (a) {
    ULSnd3:;
    if (SP.ScriptUtility.isNullOrUndefined(a)) return true;
    if (SP.ClientObject.isInstanceOfType(a) || SP.ClientValueObject.isInstanceOfType(a)) return true;
    var b = Object.getType(a);
    if (b === Array || b === Date || b === SP.Guid || b === SP.Base64EncodedByteArray) return true;
    var c = typeof a;
    return c === "number" || c === "string" || c === "boolean" || c === "object" && Number.isInstanceOfType(a) ? true : false
};
SP.DataConvert.$C = function (a, b) {
    ULSnd3:;
    if (a.length >= b) return a;
    if (b - a.length >= SP.DataConvert.$2X.length) throw Error.argumentOutOfRange("len");
    return SP.DataConvert.$2X[b - a.length] + a
};
SP.DataConvert.$1x = function (a) {
    ULSnd3:;
    for (var c, b = 0, d = 0; d < a.length && a.charCodeAt(d) >= 65 && a.charCodeAt(d) <= 90; d++) b++;
    if (!b) c = a;
    else if (b === a.length) c = a.toLowerCase();
    else c = a.substr(0, b).toLowerCase() + a.substr(b);
    return c
};
SP.DataConvert.$2k = function (a) {
    ULSnd3:;
    return a.substr(0, 1).toLowerCase() + a.substr(1)
};
SP.DataConvert.invokeSetProperty = function (b, d, c) {
    ULSnd3:;
    var a = SP.DataConvert.$1x(d);
    if (b["set_" + a]) b["set_" + a](c);
    else {
        a = SP.DataConvert.$2k(d);
        b["set_" + a](c)
    }
};
SP.DataConvert.invokeGetProperty = function (c, d) {
    ULSnd3:;
    var a = SP.DataConvert.$1x(d),
        b;
    if (c["get_" + a]) b = c["get_" + a]();
    else {
        a = SP.DataConvert.$2k(d);
        b = c["get_" + a]()
    }
    return b
};
SP.DataConvert.specifyDateTimeKind = function (a, b) {
    ULSnd3:; SP.DataConvertUtil.specifyDateTimeKind(a, b)
};
SP.DataConvert.getDateTimeKind = function (a) {
    ULSnd3:;
    return SP.DataConvertUtil.getDateTimeKind(a)
};
SP.DataConvert.createUnspecifiedDateTime = function (f, d, g, e, b, c, a) {
    ULSnd3:;
    return SP.DataConvertUtil.createUnspecifiedDateTime(f, d, g, e, b, c, a)
};
SP.DataConvert.createUtcDateTime = function (a) {
    ULSnd3:;
    return SP.DataConvertUtil.createUtcDateTime(a)
};
SP.DataConvert.createLocalDateTime = function (a) {
    ULSnd3:;
    return SP.DataConvertUtil.createLocalDateTime(a)
};
SP.PageRequestFailedEventArgs = function (a, b) {
    ULSnd3:; SP.PageRequestFailedEventArgs.initializeBase(this); this.$i_1 = a; this.$h_1 = b
};
SP.PageRequestFailedEventArgs.prototype = {
    $h_1: null,
    $i_1: null,
    get_executor: function () {
        ULSnd3:;
        return this.$i_1
    },
    get_errorMessage: function () {
        ULSnd3:;
        return SP.ScriptUtility.isNullOrEmptyString(this.$h_1) ? "Cannot complete the request." : this.$h_1
    },
    get_isErrorPage: function () {
        ULSnd3:;
        if (this.$i_1.get_statusCode() !== 200) return true;
        var a = this.$i_1.getResponseHeader("SharePointError");
        return !SP.ScriptUtility.isNullOrEmptyString(a) ? true : false
    }
};
SP.PageRequestSucceededEventArgs = function (a) {
    ULSnd3:; SP.PageRequestSucceededEventArgs.initializeBase(this); this.$i_1 = a
};
SP.PageRequestSucceededEventArgs.prototype = {
    $i_1: null,
    get_executor: function () {
        ULSnd3:;
        return this.$i_1
    }
};
SP.PageRequest = function () {
    ULSnd3:; this.$$d_$3X_0 = Function.createDelegate(this, this.$3X_0)
};
SP.PageRequest.doPost = function (f, e, d, b, c) {
    ULSnd3:;
    var a = new SP.PageRequest; b && a.add_succeeded(b); c && a.add_failed(c); a.set_url(f); a.set_expectedContentType(d); a.post(e)
};
SP.PageRequest.doGet = function (e, d, b, c) {
    ULSnd3:;
    var a = new SP.PageRequest; b && a.add_succeeded(b); c && a.add_failed(c); a.set_url(e); a.set_expectedContentType(d); a.get()
};
SP.PageRequest.prototype = {
    $7_0: null,
    get_request: function () {
        ULSnd3:;
        if (!this.$7_0) this.$7_0 = new Sys.Net.WebRequest;
        return this.$7_0
    },
    get_url: function () {
        ULSnd3:;
        return this.get_request().get_url()
    },
    set_url: function (a) {
        ULSnd3:; this.get_request().set_url(a);
        return a
    },
    $1d_0: null,
    get_expectedContentType: function () {
        ULSnd3:;
        return SP.ScriptUtility.isNullOrEmptyString(this.$1d_0) ? "html" : this.$1d_0
    },
    set_expectedContentType: function (a) {
        ULSnd3:; this.$1d_0 = a;
        return a
    },
    post: function (a) {
        ULSnd3:; this.get_request().set_httpVerb("POST"); this.get_request().set_body(a); SP.ClientRequest.$2z(this.get_request()); this.get_request().add_completed(this.$$d_$3X_0); this.get_request().invoke()
    },
    "get": function () {
        ULSnd3:; this.get_request().set_httpVerb("GET"); SP.ClientRequest.$2z(this.get_request()); this.get_request().add_completed(this.$$d_$3X_0); this.get_request().invoke()
    },
    $E_0: null,
    get_$G_0: function () {
        ULSnd3:;
        if (!this.$E_0) this.$E_0 = new Sys.EventHandlerList;
        return this.$E_0
    },
    add_succeeded: function (a) {
        ULSnd3:; this.get_$G_0().addHandler("succeeded", a)
    },
    remove_succeeded: function (a) {
        ULSnd3:; this.get_$G_0().removeHandler("succeeded", a)
    },
    add_failed: function (a) {
        ULSnd3:; this.get_$G_0().addHandler("failed", a)
    },
    remove_failed: function (a) {
        ULSnd3:; this.get_$G_0().removeHandler("failed", a)
    },
    $3X_0: function (c) {
        ULSnd3:;
        var a = null,
            b = null;
        if (this.$E_0) {
            b = this.$E_0.getHandler("succeeded");
            a = this.$E_0.getHandler("failed")
        }
        var d = SP.ClientRequest.$2j(c, this.get_expectedContentType());
        if (d) a && a(this, new SP.PageRequestFailedEventArgs(c, d));
        else b && b(this, new SP.PageRequestSucceededEventArgs(c)); this.$E_0 = null
    }
};
SP.ResResources = function () { };
SP.ResResources.getString = function (a) {
    ULSnd3:;
    for (var d = [], c = 1; c < arguments.length; ++c) d[c - 1] = arguments[c];
    var b = "";
    if (window.SP && window.SP.Res) {
        a = SP.DataConvert.$1x(a);
        b = window.SP.Res[a]
    }
    if (SP.ScriptUtility.isNullOrEmptyString(b) && window.SP && window.SP.RuntimeRes) {
        a = SP.DataConvert.$1x(a);
        b = window.SP.RuntimeRes[a]
    }
    if (SP.ScriptUtility.isNullOrEmptyString(b)) b = a;
    return String.format.apply(null, [b].concat(d))
};
SP.XmlWriter = function (a) {
    ULSnd3:; this.$s_0 = []; this.$1_0 = a; this.$X_0 = true
};
SP.XmlWriter.create = function (a) {
    ULSnd3:;
    return new SP.XmlWriter(a)
};
SP.XmlWriter.prototype = {
    $1_0: null,
    $13_0: null,
    $X_0: false,
    $n_0: false,
    writeStartElement: function (a) {
        ULSnd3:; this.$21_0(); this.$1T_0(); Array.add(this.$s_0, a); this.$13_0 = a; this.$1_0.append("<"); this.$1_0.append(a); this.$X_0 = false; this.$n_0 = false
    },
    writeElementString: function (a, b) {
        ULSnd3:; this.$21_0(); this.$1T_0(); this.writeStartElement(a); this.writeString(b); this.writeEndElement()
    },
    writeEndElement: function () {
        ULSnd3:; this.$21_0();
        if (SP.ScriptUtility.isNullOrEmptyString(this.$13_0)) throw Error.invalidOperation();
        if (!this.$X_0) {
            this.$1_0.append(" />");
            this.$X_0 = true
        } else {
            this.$1_0.append("</");
            this.$1_0.append(this.$13_0);
            this.$1_0.append(">")
        }
        Array.removeAt(this.$s_0, this.$s_0.length - 1);
        if (this.$s_0.length > 0) this.$13_0 = this.$s_0[this.$s_0.length - 1];
        else this.$13_0 = null
    },
    $1T_0: function () {
        ULSnd3:;
        if (!this.$X_0) {
            this.$1_0.append(">");
            this.$X_0 = true
        }
    },
    writeAttributeString: function (a, b) {
        ULSnd3:;
        if (this.$X_0) throw Error.invalidOperation(); this.$1_0.append(" "); this.$1_0.append(a); this.$1_0.append('="'); this.$23_0(b, true); this.$1_0.append('"')
    },
    writeStartAttribute: function (a) {
        ULSnd3:;
        if (!this.$X_0) throw Error.invalidOperation(); this.$n_0 = true; this.$1_0.append(" "); this.$1_0.append(a); this.$1_0.append('="')
    },
    writeEndAttribute: function () {
        ULSnd3:;
        if (!this.$n_0) throw Error.invalidOperation(); this.$1_0.append('"'); this.$n_0 = false
    },
    writeString: function (a) {
        ULSnd3:;
        if (this.$n_0) {
            this.$23_0(a, true);
            this.$1_0.append(a)
        } else {
            this.$1T_0();
            this.$23_0(a, false)
        }
    },
    writeRaw: function (a) {
        ULSnd3:; this.$21_0(); this.$1T_0(); this.$1_0.append(a)
    },
    $21_0: function () {
        ULSnd3:;
        if (this.$n_0) throw Error.invalidOperation();
    },
    $23_0: function (c, d) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(c)) return;
        for (var b = 0; b < c.length; b++) {
            var a = c.charCodeAt(b);
            if (a === 62) this.$1_0.append("&gt;");
            else if (a === 60) this.$1_0.append("&lt;");
            else if (a === 38) this.$1_0.append("&amp;");
            else if (a === 34 && d) this.$1_0.append("&quot;");
            else if (a === 39 && d) this.$1_0.append("&apos;");
            else if (a === 9 && d) this.$1_0.append("&#09;");
            else if (a === 10) this.$1_0.append("&#10;");
            else if (a === 13) this.$1_0.append("&#13;");
            else this.$1_0.append(c.charAt(b).toString())
        }
    },
    close: function () { }
};
SP.ClientHttpUtility = function () { };
SP.ClientHttpUtility.$34 = function (e, j, k) {
    ULSnd3:;
    var c = "",
        b, d = 0,
        g = " \"%<>'&",
        h = null;
    if (e === h || typeof e === "undefined" || !e.length) return "";
    for (d = 0; d < e.length; d++) {
        var a = e.charCodeAt(d),
            f = e.charAt(d);
        if (j && (f === "#" || f === "?")) {
            c += e.substr(d);
            break
        }
        if (a <= 127) {
            if (k) c += f;
            else if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a >= 32 && a <= 95 && g.indexOf(f) < 0) c += f;
            else if (a <= 15) c += "%0" + a.toString(16).toUpperCase();
            else if (a <= 127) c += "%" + a.toString(16).toUpperCase()
        } else if (a <= 2047) {
            b = 192 | a >> 6;
            c += "%" + b.toString(16).toUpperCase();
            b = 128 | a & 63;
            c += "%" + b.toString(16).toUpperCase()
        } else if ((a & 64512) !== 55296) {
            b = 224 | a >> 12;
            c += "%" + b.toString(16).toUpperCase();
            b = 128 | (a & 4032) >> 6;
            c += "%" + b.toString(16).toUpperCase();
            b = 128 | a & 63;
            c += "%" + b.toString(16).toUpperCase()
        } else if (d < e.length - 1) {
            a = (a & 1023) << 10;
            d++;
            var i = e.charCodeAt(d);
            a |= i & 1023;
            a += 65536;
            b = 240 | a >> 18;
            c += "%" + b.toString(16).toUpperCase();
            b = 128 | (a & 258048) >> 12;
            c += "%" + b.toString(16).toUpperCase();
            b = 128 | (a & 4032) >> 6;
            c += "%" + b.toString(16).toUpperCase();
            b = 128 | a & 63;
            c += "%" + b.toString(16).toUpperCase()
        }
    }
    return c
};
SP.ClientConstants = function () { };
SP.ClientSchemaVersions = function () { };
SP.ClientErrorCodes = function () { };
SP.ClientAction = function (a, b, c) {
    ULSnd3:;
    if (!a) throw Error.argumentNull("context"); this.$I_0 = b; this.$B_0 = c; this.$4_0 = a.get_$1w_0()
};
SP.ClientAction.$z = function (c, b) {
    ULSnd3:;
    if (c && b)
        if (SP.ClientObject.isInstanceOfType(b)) {
            var a = b;
            if (a && a.$0_0 && a.$0_0 !== c) throw Error.invalidOperation(SP.ResResources.getString("NotSameClientContext"));
        }
};
SP.ClientAction.$1A = function (c, a) {
    ULSnd3:;
    if (c && a && a.length > 0)
        for (var b = 0; b < a.length; b++) SP.ClientAction.$z(c, a[b])
};
SP.ClientAction.prototype = {
    $4_0: 0,
    $I_0: null,
    $B_0: null,
    get_id: function () {
        ULSnd3:;
        return this.$4_0
    },
    get_path: function () {
        ULSnd3:;
        return this.$I_0
    },
    get_name: function () {
        ULSnd3:;
        return this.$B_0
    }
};
SP.ClientActionSetProperty = function (a, d, c) {
    ULSnd3:; SP.ClientActionSetProperty.initializeBase(this, [SP.ClientRuntimeContext.$2h(a), !a ? null : a.get_path(), d]);
    if (!a) throw Error.argumentNull("obj");
    if (!a.get_path() || !a.get_path().$j_0) throw Error.create(SP.ResResources.getString("NoObjectPathAssociatedWithObject")); SP.ClientAction.$z(a.$0_0, c); this.$2K_1 = d; this.$l_1 = c; this.$6_1 = new SP.SerializationContext(a.$0_0);
    var b; this.$1_1 = new Sys.StringBuilder; b = SP.XmlWriter.create(this.$1_1); this.$y_1(b, this.$6_1); b.close(); this.$l_1 = null
};
SP.ClientActionSetProperty.prototype = {
    $2K_1: null,
    $l_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function (a, b) {
        ULSnd3:; a.writeRaw(this.$1_1.toString()); b.$m_0(this.$6_1)
    },
    $y_1: function (a, b) {
        ULSnd3:; a.writeStartElement("SetProperty"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("ObjectPathId", this.$I_0.$4_0.toString()); a.writeAttributeString("Name", this.$2K_1); b.addObjectPath(this.$I_0); a.writeStartElement("Parameter"); SP.DataConvert.writeValueToXmlElement(a, this.$l_1, b); a.writeEndElement(); a.writeEndElement()
    }
};
SP.ClientActionSetStaticProperty = function (a, e, d, c) {
    ULSnd3:; SP.ClientActionSetStaticProperty.initializeBase(this, [a, null, d]);
    if (!a) throw Error.argumentNull("context"); SP.ClientAction.$z(a, c); this.$J_1 = e; this.$l_1 = c; this.$6_1 = new SP.SerializationContext(a);
    var b; this.$1_1 = new Sys.StringBuilder; b = SP.XmlWriter.create(this.$1_1); this.$y_1(b, this.$6_1); b.close(); this.$l_1 = null
};
SP.ClientActionSetStaticProperty.prototype = {
    $J_1: null,
    $l_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function (a, b) {
        ULSnd3:; a.writeRaw(this.$1_1.toString()); b.$m_0(this.$6_1)
    },
    $y_1: function (a, b) {
        ULSnd3:; a.writeStartElement("SetStaticProperty"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("TypeId", this.$J_1); a.writeAttributeString("Name", this.$B_0); a.writeStartElement("Parameter"); SP.DataConvert.writeValueToXmlElement(a, this.$l_1, b); a.writeEndElement(); a.writeEndElement()
    }
};
SP.ClientActionInvokeMethod = function (a, d, c) {
    ULSnd3:; SP.ClientActionInvokeMethod.initializeBase(this, [SP.ClientRuntimeContext.$2h(a), !a ? null : a.get_path(), d]);
    if (!a) throw Error.argumentNull("obj"); SP.ClientAction.$1A(a.$0_0, c); this.$5_1 = c;
    if (!a.get_path() || !a.get_path().$j_0) throw Error.create(SP.ResResources.getString("NoObjectPathAssociatedWithObject")); this.$c_1 = a.$2_0.$c_0; this.$6_1 = new SP.SerializationContext(a.$0_0);
    var b; this.$1_1 = new Sys.StringBuilder; b = SP.XmlWriter.create(this.$1_1); this.$y_1(b, this.$6_1); b.close(); this.$5_1 = null
};
SP.ClientActionInvokeMethod.prototype = {
    $5_1: null,
    $c_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function (a, b) {
        ULSnd3:; a.writeRaw(this.$1_1.toString()); b.$m_0(this.$6_1)
    },
    $y_1: function (a, c) {
        ULSnd3:; a.writeStartElement("Method"); a.writeAttributeString("Name", this.$B_0); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("ObjectPathId", this.$I_0.$4_0.toString()); !SP.ScriptUtility.isNullOrUndefined(this.$c_1) && a.writeAttributeString("Version", this.$c_1); c.addObjectPath(this.$I_0);
        if (this.$5_1 && this.$5_1.length > 0) {
            a.writeStartElement("Parameters");
            for (var b = 0; b < this.$5_1.length; b++) {
                var d = this.$5_1[b];
                a.writeStartElement("Parameter");
                SP.DataConvert.writeValueToXmlElement(a, d, c);
                a.writeEndElement()
            }
            a.writeEndElement()
        }
        a.writeEndElement()
    }
};
SP.ClientActionInvokeStaticMethod = function (a, e, d, c) {
    ULSnd3:; SP.ClientActionInvokeStaticMethod.initializeBase(this, [a, null, d]);
    if (!a) throw Error.argumentNull("context"); SP.ClientAction.$1A(a, c); this.$J_1 = e; this.$5_1 = c; this.$6_1 = new SP.SerializationContext(a);
    var b; this.$1_1 = new Sys.StringBuilder; b = SP.XmlWriter.create(this.$1_1); this.$y_1(b, this.$6_1); b.close(); this.$5_1 = null
};
SP.ClientActionInvokeStaticMethod.prototype = {
    $5_1: null,
    $J_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function (a, b) {
        ULSnd3:; a.writeRaw(this.$1_1.toString()); b.$m_0(this.$6_1)
    },
    $y_1: function (a, d) {
        ULSnd3:; a.writeStartElement("StaticMethod"); a.writeAttributeString("TypeId", this.$J_1); a.writeAttributeString("Name", this.$B_0); a.writeAttributeString("Id", this.$4_0.toString());
        if (this.$5_1 && this.$5_1.length > 0) {
            a.writeStartElement("Parameters");
            for (var b = 0; b < this.$5_1.length; b++) {
                var c = this.$5_1[b];
                a.writeStartElement("Parameter");
                SP.DataConvert.writeValueToXmlElement(a, c, d);
                a.writeEndElement()
            }
            a.writeEndElement()
        }
        a.writeEndElement()
    }
};
SP.ClientActionInstantiateObjectPath = function (a) {
    ULSnd3:; SP.ClientActionInstantiateObjectPath.initializeBase(this, [SP.ClientRuntimeContext.$2i(a), a, null])
};
SP.ClientActionInstantiateObjectPath.prototype = {
    $39_0: function (a, b) {
        ULSnd3:; a.writeStartElement("ObjectPath"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("ObjectPathId", this.$I_0.$4_0.toString()); b.addObjectPath(this.$I_0); a.writeEndElement()
    }
};
SP.ClientObject = function (a, b) {
    ULSnd3:;
    if (!a) throw Error.argumentNull("context"); this.$0_0 = a; this.$2_0 = new SP.ClientObjectData; this.$2_0.$Z_0 = b
};
SP.ClientObject.prototype = {
    $0_0: null,
    $2_0: null,
    get_context: function () {
        ULSnd3:;
        return this.$0_0
    },
    get_path: function () {
        ULSnd3:;
        return this.$2_0.$Z_0
    },
    get_objectVersion: function () {
        ULSnd3:;
        return this.$2_0.$c_0
    },
    set_objectVersion: function (a) {
        ULSnd3:; this.$2_0.$c_0 = a;
        return a
    },
    get_objectData: function () {
        ULSnd3:;
        return this.$2_0
    },
    checkUninitializedProperty: function (a) {
        ULSnd3:;
        if (this.get_serverObjectIsNull())
            if (this.get_path() && !SP.ScriptUtility.isNullOrEmptyString(this.get_path().get_$2l_0())) throw Error.create(SP.ResResources.getString("NamedServerObjectIsNull", this.get_path().get_$2l_0()));
            else throw Error.create(SP.ResResources.getString("ServerObjectIsNull")); var b = this.$2_0.get_properties()[a];
        if (SP.ScriptUtility.isUndefined(b)) throw Error.create(SP.ResResources.getString("NamedPropertyHasNotBeenInitialized", a));
    },
    $20_0: function (a) {
        ULSnd3:; this.$2_0 = a.$2_0
    },
    fromJson: function (a) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrUndefined(a)) {
            this.$2y_0();
            return
        }
        this.initPropertiesFromJson(a); this.initNonPropertiesFromJson(a)
    },
    initPropertiesFromJson: function (a) {
        ULSnd3:;
        var b = a._ObjectIdentity_;
        if (!SP.ScriptUtility.isNullOrUndefined(b)) {
            var d = b;
            if (!SP.ScriptUtility.isNullOrEmptyString(d)) {
                var c = new SP.ObjectPathIdentity(this.$0_0, d);
                if (this.$2_0.$Z_0) c.$4_0 = this.$2_0.$Z_0.$4_0;
                this.$2_0.$Z_0 = c;
                c.$1N_0 = false;
                this.$0_0.$2Z_0(c)
            }
            delete a._ObjectIdentity_
        }
        b = a._ObjectVersion_;
        if (!SP.ScriptUtility.isNullOrUndefined(b)) {
            var e = b;
            if (!SP.ScriptUtility.isNullOrEmptyString(e)) this.$2_0.$c_0 = e;
            delete a._ObjectVersion_
        }
        delete a._ObjectType_
    },
    initNonPropertiesFromJson: function () { },
    customFromJson: function () {
        ULSnd3:;
        return false
    },
    retrieve: function () {
        ULSnd3:;
        var a = this.get_$19_0();
        if (!arguments.length) a.selectAllProperties();
        else if (arguments.length === 1 && Array.isInstanceOfType(arguments[0]))
            for (var d = arguments[0], b = 0; b < d.length; b++) {
                var e = d[b];
                a.select(e)
            } else
            for (var c = 0; c < arguments.length; c++) {
                var f = arguments[c];
                a.select(f)
            }
    },
    refreshLoad: function () {
        ULSnd3:;
        var a = this.get_$19_0(); this.$2x_0(a)
    },
    isPropertyAvailable: function (a) {
        ULSnd3:;
        var b = this.$2_0.get_properties()[a];
        return !SP.ScriptUtility.isUndefined(b)
    },
    isObjectPropertyInstantiated: function (a) {
        ULSnd3:;
        var b = this.$2_0.get_clientObjectProperties()[a];
        return !SP.ScriptUtility.isUndefined(b)
    },
    get_$19_0: function () {
        ULSnd3:;
        var a = this.$2_0.$D_0;
        if (!a || a !== this.$0_0.get_pendingRequest().$P_0) {
            a = new SP.ClientQueryInternal(this, null, false, null);
            this.$2_0.$D_0 = a;
            this.$0_0.addQueryIdAndResultObject(a.$4_0, this);
            this.$0_0.addQuery(a);
            this.$0_0.$2a_0(this);
            this.$2x_0(a);
            this.loadExpandoFields()
        }
        return a
    },
    $2x_0: function (d) {
        ULSnd3:;
        var a = this.$2_0.get_properties();
        for (var b in a) {
            var c = {
                key: b,
                value: a[b]
            };
            d.select(c.key)
        }
    },
    loadExpandoFields: function () { },
    $24_0: function () {
        ULSnd3:; this.$2_0.$D_0 = null
    },
    $U_0: null,
    removeFromParentCollection: function () {
        ULSnd3:; this.$U_0 && this.$U_0.removeChild(this)
    },
    $2O_0: false,
    $2y_0: function () {
        ULSnd3:; this.$2O_0 = true
    },
    get_serverObjectIsNull: function () {
        ULSnd3:;
        if (this.$2O_0) return true;
        var a = this.get_path();
        return !a ? false : a.$1N_0
    },
    updateClientObjectPropertyType: function (b, a, f) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(b)) throw Error.argumentNull("propertyName");
        if (!a) throw Error.argumentNull("propertyValue");
        if (!f) return;
        if (!SP.ClientObject.isInstanceOfType(a)) throw Error.argument("propertyValue");
        var g = a;
        if (SP.ScriptUtility.isUndefined(this.$2_0.get_clientObjectProperties()[b])) throw Error.argument("propertyName");
        var d = f._ObjectType_;
        if (!SP.ScriptUtility.isNullOrEmptyString(d)) {
            var c = Type.parse(d);
            if (c && c !== Object.getType(a)) {
                var e = new c(this.$0_0);
                g.$30_0(e);
                this.$2_0.get_clientObjectProperties()[b] = e
            }
        }
    },
    $30_0: function (a) {
        ULSnd3:; this.$2_0.$1u_0 = a;
        if (this.$2_0.$O_0) this.$2_0.$O_0 = a; a.$20_0(this)
    },
    get_typedObject: function () {
        ULSnd3:;
        return !this.$2_0.$1u_0 ? this : this.$2_0.$1u_0
    }
};
SP.ClientObjectData = function () { };
SP.ClientObjectData.prototype = {
    $c_0: null,
    $K_0: null,
    get_properties: function () {
        ULSnd3:;
        if (!this.$K_0) this.$K_0 = {};
        return this.$K_0
    },
    $1Z_0: null,
    get_clientObjectProperties: function () {
        ULSnd3:;
        if (!this.$1Z_0) this.$1Z_0 = {};
        return this.$1Z_0
    },
    $1g_0: null,
    get_methodReturnObjects: function () {
        ULSnd3:;
        if (!this.$1g_0) this.$1g_0 = {};
        return this.$1g_0
    },
    $D_0: null,
    $1u_0: null,
    $O_0: null,
    $Z_0: null,
    $12_0: false,
    $1E_0: null,
    get_$10_0: function () {
        ULSnd3:;
        if (!this.$1E_0) this.$1E_0 = [];
        return this.$1E_0
    },
    set_$10_0: function (a) {
        ULSnd3:; this.$1E_0 = a;
        return a
    }
};
SP.ClientObjectCollection = function (b, a) {
    ULSnd3:; this.getEnumerator = this.$3i_1; SP.ClientObjectCollection.initializeBase(this, [b, a])
};
SP.ClientObjectCollection.prototype = {
    get_areItemsAvailable: function () {
        ULSnd3:;
        return this.$2_0.$12_0
    },
    $1J_1: null,
    retrieveItems: function () {
        ULSnd3:;
        if (!this.$1J_1) this.$1J_1 = new SP.ClientObjectPrototype(this.get_$19_0(), true);
        return this.$1J_1
    },
    $24_0: function () {
        ULSnd3:; SP.ClientObject.prototype.$24_0.call(this); this.$1J_1 = null
    },
    $3i_1: function () {
        ULSnd3:; this.$33_1();
        return new SP.ArrayListEnumerator(this.get_data())
    },
    getItemAtIndex: function (b) {
        ULSnd3:;
        return this.get_data()[b]
    },
    get_count: function () {
        ULSnd3:; this.$33_1();
        return this.get_data().length
    },
    get_$3F_1: function () {
        ULSnd3:;
        return this.$2_0.$12_0
    },
    $3a_1: function () {
        ULSnd3:; this.$2_0.$12_0 = true
    },
    $33_1: function () {
        ULSnd3:;
        if (!this.get_$3F_1()) throw Error.create(SP.ResResources.getString("CollectionHasNotBeenInitialized"));
    },
    get_data: function () {
        ULSnd3:;
        return this.$2_0.get_$10_0()
    },
    fromJson: function (d) {
        ULSnd3:; SP.ClientObject.prototype.fromJson.call(this, d);
        var b; b = d._Child_Items_;
        if (b) {
            this.$2_0.set_$10_0([]);
            this.$2_0.$12_0 = true;
            SP.DataConvert.$2U(this.$0_0, this.$2_0.get_$10_0(), b, this.get_childItemType());
            for (var c = this.$2_0.get_$10_0(), a = 0; a < c.length; a++)
                if (SP.ClientObject.isInstanceOfType(c[a])) {
                    var e = c[a];
                    e.$U_0 = this
                }
        }
    },
    addChild: function (a) {
        ULSnd3:; Array.add(this.get_data(), a);
        if (!a.$U_0) a.$U_0 = this; this.$2_0.$12_0 = true
    },
    removeChild: function (d) {
        ULSnd3:;
        if (!this.$2_0.get_$10_0()) return;
        var c = null;
        if (SP.ObjectPathIdentity.isInstanceOfType(d.get_path())) c = d.get_path();
        for (var b = this.$2_0.get_$10_0(), a = b.length - 1; a >= 0; a--)
            if (b[a] === d) {
                if (b[a].$U_0 === this) b[a].$U_0 = null;
                Array.removeAt(b, a)
            } else if (c && SP.ClientObject.isInstanceOfType(b[a]) && SP.ObjectPathIdentity.isInstanceOfType(b[a].get_path()) && c.$r_1 === b[a].get_path().$r_1) {
                if (b[a].$U_0 === this) b[a].$U_0 = null;
                Array.removeAt(b, a)
            }
    }
};
SP.ClientObjectList = function (c, b, a) {
    ULSnd3:; SP.ClientObjectList.initializeBase(this, [c, b]); this.$1X_2 = a
};
SP.ClientObjectList.prototype = {
    $1X_2: null,
    fromJson: function (a) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrUndefined(a)) {
            this.$2y_0();
            return
        }
        Array.clear(this.get_data());
        if (typeof a === "object") {
            var b;
            if (Array.isInstanceOfType(a)) b = a;
            else b = a._Child_Items_;
            var c = [];
            SP.DataConvert.$2U(this.$0_0, c, b, this.$1X_2);
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                SP.ClientObject.isInstanceOfType(e) && this.addChild(e)
            }
        }
        this.$3a_1()
    },
    get_childItemType: function () {
        ULSnd3:;
        return this.$1X_2
    },
    customFromJson: function () {
        ULSnd3:;
        return false
    }
};
SP.ClientObjectPrototype = function (a, b) {
    ULSnd3:; this.$D_0 = a; this.$p_0 = b
};
SP.ClientObjectPrototype.prototype = {
    $D_0: null,
    $p_0: false,
    retrieve: function () {
        ULSnd3:;
        if (this.$p_0)
            if (!arguments.length) this.$D_0.get_childItemQuery().selectAllProperties();
            else if (arguments.length === 1 && Array.isInstanceOfType(arguments[0]))
                for (var e = arguments[0], a = 0; a < e.length; a++) {
                    var g = e[a];
                    this.$D_0.get_childItemQuery().select(g)
                } else
                for (var b = 0; b < arguments.length; b++) {
                    var h = arguments[b];
                    this.$D_0.get_childItemQuery().select(h)
                } else if (!arguments.length) this.$D_0.selectAllProperties();
                else if (arguments.length === 1 && Array.isInstanceOfType(arguments[0]))
                    for (var f = arguments[0], c = 0; c < f.length; c++) {
                        var i = f[c];
                        this.$D_0.select(i)
                    } else
                    for (var d = 0; d < arguments.length; d++) {
                        var j = arguments[d];
                        this.$D_0.select(j)
                    }
    },
    $1P_0: null,
    retrieveObject: function (b) {
        ULSnd3:;
        if (!this.$1P_0) this.$1P_0 = {};
        var c = this.$1P_0[b];
        if (!SP.ScriptUtility.isNullOrUndefined(c)) return c;
        var d = false,
            a;
        if (this.$p_0) a = this.$D_0.get_childItemQuery().$1C_1(b);
        else a = this.$D_0.$1C_1(b);
        if (!a) {
            a = new SP.ClientQueryInternal(null, b, true, this.$D_0);
            d = true
        }
        c = new SP.ClientObjectPrototype(a, false);
        if (d)
            if (this.$p_0) this.$D_0.get_childItemQuery().selectSubQuery(a);
            else this.$D_0.selectSubQuery(a); this.$1P_0[b] = c;
        return c
    },
    $1O_0: null,
    retrieveCollectionObject: function (b) {
        ULSnd3:;
        if (!this.$1O_0) this.$1O_0 = {};
        var c = this.$1O_0[b];
        if (!SP.ScriptUtility.isNullOrUndefined(c)) return c;
        var d = false,
            a;
        if (this.$p_0) a = this.$D_0.get_childItemQuery().$1C_1(b);
        else a = this.$D_0.$1C_1(b);
        if (!a) {
            a = new SP.ClientQueryInternal(null, b, true, this.$D_0);
            d = true
        }
        c = new SP.ClientObjectCollectionPrototype(a, false);
        if (d)
            if (this.$p_0) this.$D_0.get_childItemQuery().selectSubQuery(a);
            else this.$D_0.selectSubQuery(a); this.$1O_0[b] = c;
        return c
    }
};
SP.ClientObjectCollectionPrototype = function (a, b) {
    ULSnd3:; SP.ClientObjectCollectionPrototype.initializeBase(this, [a, b])
};
SP.ClientObjectCollectionPrototype.prototype = {
    $1f_1: null,
    retrieveItems: function () {
        ULSnd3:;
        if (!this.$1f_1) this.$1f_1 = new SP.ClientObjectPrototype(this.$D_0, true);
        return this.$1f_1
    }
};
SP.ClientQueryProperty = function () { };
SP.ClientQueryProperty.prototype = {
    scalarProperty: false,
    scalarPropertySet: false,
    selectAll: false,
    selectAllSet: false,
    query: null
};
SP.ClientQueryInternal = function (a, d, c, b) {
    ULSnd3:; this.$K_1 = {}; this.$3U_1 = []; SP.ClientQueryInternal.initializeBase(this, [SP.ClientQueryInternal.$3O(a, b), c ? null : a.get_path(), d]);
    if (!c && (!a.get_path() || !a.get_path().$j_0)) throw Error.create(SP.ResResources.getString("NoObjectPathAssociatedWithObject"));
    if (c) {
        if (!b) throw Error.argumentNull("parentQuery");
        this.$1l_1 = b.$1l_1;
        this.$0_1 = b.$0_1
    } else {
        if (!a) throw Error.argumentNull("obj");
        this.$1l_1 = this;
        this.$0_1 = a.$0_0
    }
};
SP.ClientQueryInternal.$3O = function (a, b) {
    ULSnd3:;
    if (a) return a.$0_0;
    if (b) return b.$0_1;
    throw Error.argumentNull("parentQuery");
};
SP.ClientQueryInternal.prototype = {
    $1l_1: null,
    $0_1: null,
    $q_1: null,
    $1I_1: false,
    get_isChildItemQuery: function () {
        ULSnd3:;
        return this.$1I_1
    },
    $3b_1: function () {
        ULSnd3:; this.$1I_1 = true
    },
    select: function (b) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(b)) throw Error.argument("propertyName", SP.ResResources.getString("RequestEmptyQueryName"));
        var a = this.$K_1[b];
        if (SP.ScriptUtility.isNullOrUndefined(a)) {
            a = new SP.ClientQueryProperty;
            this.$K_1[b] = a
        } else if (a.query) throw Error.argument("propertyName"); a.scalarProperty = true; a.scalarPropertySet = true;
        return this
    },
    selectWithAll: function (b) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(b)) throw Error.argument("propertyName", SP.ResResources.getString("RequestEmptyQueryName"));
        var a = this.$K_1[b];
        if (SP.ScriptUtility.isNullOrUndefined(a)) {
            a = new SP.ClientQueryProperty;
            this.$K_1[b] = a
        }
        a.selectAllSet = true; a.selectAll = true;
        return this
    },
    $2M_1: false,
    selectAllProperties: function () {
        ULSnd3:; this.$2M_1 = true;
        return this
    },
    selectSubQuery: function (b) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(b.$B_0)) throw Error.argument("subQuery", SP.ResResources.getString("RequestEmptyQueryName"));
        var a = this.$K_1[b.$B_0];
        if (SP.ScriptUtility.isNullOrUndefined(a)) {
            a = new SP.ClientQueryProperty;
            a.query = b;
            this.$K_1[b.$B_0] = a
        } else {
            if (a.scalarPropertySet && a.scalarProperty) throw Error.argument("subQuery");
            if (a.query && a.query !== b) throw Error.argument("subQuery");
            a.query = b
        }
        return this
    },
    $1C_1: function (b) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(b)) throw Error.argumentNull("name");
        var a = this.$K_1[b];
        return a ? a.query : null
    },
    get_childItemQuery: function () {
        ULSnd3:;
        if (!this.$q_1) {
            this.$q_1 = new SP.ClientQueryInternal(null, "_Child_Items_", true, this);
            this.$q_1.$3b_1()
        }
        return this.$q_1
    },
    $38_1: function (a, b) {
        ULSnd3:; a.writeStartElement("Query"); this.$37_1(a, b); a.writeEndElement();
        if (this.$q_1) {
            a.writeStartElement("ChildItemQuery");
            this.$q_1.$37_1(a, b);
            a.writeEndElement()
        }
    },
    $37_1: function (a, g) {
        ULSnd3:; a.writeAttributeString("SelectAllProperties", this.$2M_1 ? "true" : "false"); a.writeStartElement("Properties");
        var c = this.$K_1;
        for (var d in c) {
            var f = {
                key: d,
                value: c[d]
            },
                e = f.key,
                b = this.$K_1[e];
            a.writeStartElement("Property");
            a.writeAttributeString("Name", e);
            b.scalarPropertySet && a.writeAttributeString("ScalarProperty", b.scalarProperty ? "true" : "false");
            b.selectAllSet && a.writeAttributeString("SelectAll", b.selectAll ? "true" : "false");
            b.query && b.query.$38_1(a, g);
            a.writeEndElement()
        }
        a.writeEndElement(); this.$1I_1
    },
    $39_0: function (a, b) {
        ULSnd3:; a.writeStartElement("Query"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("ObjectPathId", this.$I_0.$4_0.toString()); b.addObjectPath(this.$I_0); this.$38_1(a, b); a.writeEndElement()
    }
};
SP.WebRequestEventArgs = function (a) {
    ULSnd3:; SP.WebRequestEventArgs.initializeBase(this);
    if (!a) throw Error.argumentNull("webRequest"); this.$18_1 = a
};
SP.WebRequestEventArgs.prototype = {
    $18_1: null,
    get_webRequest: function () {
        ULSnd3:;
        return this.$18_1
    }
};
SP.ClientRequest = function (a) {
    ULSnd3:; this.$$d_$3I_0 = Function.createDelegate(this, this.$3I_0); this.$16_0 = []; this.$1L_0 = {};
    if (!a) throw Error.argumentNull("context"); this.$0_0 = a
};
SP.ClientRequest.get_nextSequenceId = function () {
    ULSnd3:;
    var a = SP.ClientRequest.$2W; SP.ClientRequest.$2W++;
    return a + 1073741824
};
SP.ClientRequest.$2z = function (g) {
    ULSnd3:;
    if (!SP.ScriptUtility.isUndefined(window._spPageContextInfo) && !SP.ScriptUtility.isUndefined(window._spFormDigestRefreshInterval) && !SP.ScriptUtility.isUndefined(window.UpdateFormDigest)) {
        var c = window._spPageContextInfo,
            d = c.webServerRelativeUrl,
            e = window._spFormDigestRefreshInterval;
        UpdateFormDigest(d, e)
    }
    var b = null,
        a = document.getElementsByName("__REQUESTDIGEST");
    if (a && a.length > 0 && a[0].tagName === "INPUT") {
        var f = a[0];
        b = f.value
    }
    if (!SP.ScriptUtility.isNullOrUndefined(b)) g.get_headers()["X-RequestDigest"] = b
};
SP.ClientRequest.$3P = function (a, b) {
    ULSnd3:;
    return !a ? b : typeof a._SPErrorCode_ === "number" ? a._SPErrorCode_ : b
};
SP.ClientRequest.$2j = function (a, d) {
    ULSnd3:;
    var b;
    if (!a.get_statusCode()) return null;
    if (a.get_aborted() || a.get_timedOut()) {
        if (typeof a._SPError_ === "string") b = a._SPError_;
        else b = SP.ResResources.getString("RequestAbortedOrTimedOut");
        return b
    }
    if (!a.get_responseAvailable()) {
        if (typeof a._SPError_ === "string") b = a._SPError_;
        else b = SP.ResResources.getString("RequestUnexpectedResponse");
        return b
    }
    if (a.get_statusCode() !== 200) {
        b = SP.ResResources.getString("RequestUnexpectedResponseWithStatus", a.get_statusCode(), a.get_statusText());
        return b
    }
    if (!SP.ScriptUtility.isNullOrEmptyString(d)) {
        var c = a.getResponseHeader("content-type");
        if (!c || c.toLowerCase().indexOf(d.toLowerCase()) < 0) {
            b = SP.ResResources.getString("RequestUnexpectedResponse");
            return b
        }
    }
    var e = a.getResponseHeader("SharePointError");
    if (!SP.ScriptUtility.isNullOrEmptyString(e)) {
        b = SP.ResResources.getString("RequestUnexpectedResponse");
        return b
    }
    return null
};
SP.ClientRequest.prototype = {
    $0_0: null,
    $7_0: null,
    get_webRequest: function () {
        ULSnd3:;
        if (!this.$7_0) {
            this.$7_0 = new Sys.Net.WebRequest;
            this.$7_0.set_httpVerb("POST");
            this.$7_0.get_headers()["Content-Type"] = "text/xml";
            var a = this.get_$32_0();
            this.$7_0.set_url(a);
            this.$7_0.set_timeout(this.$0_0.get_requestTimeout());
            if (this.$0_0.$w_0) {
                var b = this.$0_0.$w_0.createWebRequestExecutor();
                this.$7_0.set_executor(b)
            }
        }
        return this.$7_0
    },
    $V_0: null,
    get_$32_0: function () {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(this.$V_0)) {
            this.$V_0 = this.$0_0.$u_0;
            if (!this.$V_0.endsWith("/")) this.$V_0 += "/";
            this.$V_0 += this.$0_0.get_serviceRelativeUrl();
            this.$V_0 = this.$0_0.getRequestUrl(this.$V_0)
        }
        return this.$V_0
    },
    $2n_0: function () {
        ULSnd3:; this.$V_0 = null;
        var a = this.get_$32_0(); this.$7_0 && this.$7_0.set_url(a)
    },
    $a_0: 0,
    $E_0: null,
    get_$G_0: function () {
        ULSnd3:;
        if (!this.$E_0) this.$E_0 = new Sys.EventHandlerList;
        return this.$E_0
    },
    add_requestSucceeded: function (a) {
        ULSnd3:; this.get_$G_0().addHandler("succeeded", a)
    },
    remove_requestSucceeded: function (a) {
        ULSnd3:; this.get_$G_0().removeHandler("succeeded", a)
    },
    add_requestFailed: function (a) {
        ULSnd3:; this.get_$G_0().addHandler("failed", a)
    },
    remove_requestFailed: function (a) {
        ULSnd3:; this.get_$G_0().removeHandler("failed", a)
    },
    $P_0: null,
    $22_0: function (a) {
        ULSnd3:;
        if (this.$a_0) throw Error.create(SP.ResResources.getString("RequestHasBeenExecuted")); Array.add(this.$16_0, a); this.$P_0 = a
    },
    $d_0: null,
    $2a_0: function (a) {
        ULSnd3:;
        if (!this.$d_0) this.$d_0 = []; Array.add(this.$d_0, a)
    },
    $e_0: null,
    $3A_0: function (a) {
        ULSnd3:;
        if (!this.$e_0) this.$e_0 = []; Array.add(this.$e_0, a)
    },
    $1c_0: null,
    get_$25_0: function () {
        ULSnd3:;
        if (!this.$1c_0) this.$1c_0 = [];
        return this.$1c_0
    },
    $24_0: function () {
        ULSnd3:;
        if (this.$d_0) {
            for (var a = 0; a < this.$d_0.length; a++) {
                var c = this.$d_0[a];
                c.$24_0()
            }
            this.$d_0 = null
        }
        if (this.$e_0) {
            for (var b = 0; b < this.$e_0.length; b++) {
                var d = this.$e_0[b];
                d.$3R_0()
            }
            this.$e_0 = null
        }
    },
    $3H_0: function () {
        ULSnd3:;
        if (this.$a_0) throw Error.create(SP.ResResources.getString("RequestHasBeenExecuted")); this.$a_0 = 1;
        var a = this.$3C_0(); this.$24_0(); this.$0_0.$2c_0(new SP.WebRequestEventArgs(this.get_webRequest())); this.get_webRequest().add_completed(this.$$d_$3I_0); this.get_webRequest().set_body(a.toString()); this.get_webRequest().invoke()
    },
    $6_0: null,
    get_$3Y_0: function () {
        ULSnd3:;
        if (!this.$6_0) this.$6_0 = new SP.SerializationContext(this.$0_0);
        return this.$6_0
    },
    $3C_0: function () {
        ULSnd3:;
        var b = this.get_$3Y_0(),
            j = new Sys.StringBuilder,
            a = SP.XmlWriter.create(j); a.writeStartElement("Request"); a.writeAttributeString("xmlns", "http://schemas.microsoft.com/sharepoint/clientquery/2009"); a.writeAttributeString("SchemaVersion", SP.ClientSchemaVersions.currentVersion); a.writeAttributeString("LibraryVersion", "16.0.0.0"); !SP.ScriptUtility.isNullOrEmptyString(this.$0_0.get_applicationName()) && a.writeAttributeString("ApplicationName", this.$0_0.get_applicationName()); a.writeStartElement("Actions");
        for (var e = [], g = 0; g < this.$16_0.length; g++) {
            var c = this.$16_0[g];
            if (SP.ClientActionExecutionScopeStart.isInstanceOfType(c)) {
                var l = c;
                l.$3_1.$2Y_0(a, b);
                e.push(l.$3_1)
            } else if (SP.ClientActionExecutionScopeEnd.isInstanceOfType(c)) {
                var m = c;
                if (!e.length || e.pop() !== m.$3_1) throw SP.ExceptionHandlingScope.$9();
                m.$3_1.$36_0(a, b)
            } else c.$39_0(a, b)
        }
        if (e.length > 0) throw SP.ExceptionHandlingScope.$9(); a.writeEndElement(); a.writeStartElement("ObjectPaths");
        var k = {}; do {
            var d = [],
                h = b.$1j_0;
            for (var i in h) {
                var n = {
                    key: i,
                    value: h[i]
                };
                SP.ScriptUtility.isUndefined(k[n.key]) && Array.add(d, n.value.$4_0)
            }
            if (!d.length) break;
            for (var f = 0; f < d.length; f++) {
                var o = this.$0_0.$1i_0[d[f].toString()];
                o.$39_0(a, b);
                k[d[f].toString()] = o
            }
        } while (true); a.writeEndElement(); a.writeEndElement();
        return j
    },
    $1h_0: false,
    get_navigateWhenServerRedirect: function () {
        ULSnd3:;
        return this.$1h_0
    },
    set_navigateWhenServerRedirect: function (a) {
        ULSnd3:; this.$1h_0 = a;
        return a
    },
    $3D_0: function (b) {
        ULSnd3:;
        var a = SP.ClientRequest.$2j(b, "application/json");
        if (a) {
            this.$x_0(a, null, 0, null, null, null, null);
            return true
        }
        return false
    },
    $x_0: function (c, d, e, f, g, h, i) {
        ULSnd3:;
        var a = this.get_$G_0().getHandler("failed");
        if (a) {
            var b = new SP.ClientRequestFailedEventArgs(this, c, d, e, f, g, h, i);
            this.$7_0 && b.$31_2(this.$7_0.get_executor());
            a(this, b)
        }
    },
    $3I_0: function ($p0) {
        if (this.$3D_0($p0)) {
            this.$7_0 = null;
            return
        }
        var $v_0 = $p0.get_responseData(),
            $v_1 = SP.ClientRequest._validateJson($v_0);
        if (!$v_1) {
            var $v_7 = SP.ResResources.getString("RequestUnexpectedResponse");
            this.$a_0 = 3;
            this.$x_0($v_7, null, 0, null, null, null, null);
            this.$7_0 = null;
            return
        }
        $v_0 = SP.ParseJSONUtil.$2m($v_0);
        var $v_2 = eval($v_0),
            $v_3 = false;
        if (!$v_2 || SP.ScriptUtility.isNullOrUndefined($v_2.length) || !($v_2.length >= 1)) $v_3 = true;
        else {
            var $v_8 = $v_2[0];
            if (SP.ScriptUtility.isNullOrUndefined($v_8) || typeof $v_8 !== "object" || SP.ScriptUtility.isNullOrEmptyString($v_8.SchemaVersion) || SP.ScriptUtility.isNullOrEmptyString($v_8.LibraryVersion)) $v_3 = true
        }
        if ($v_3) {
            var $v_9 = SP.ResResources.getString("RequestUnexpectedResponse");
            this.$a_0 = 3;
            this.$x_0($v_9, null, 0, null, null, null, null);
            this.$7_0 = null;
            return
        }
        var $v_4 = $v_2[0];
        this.$0_0.$3d_0($v_4.SchemaVersion);
        this.$0_0.$3c_0($v_4.LibraryVersion);
        !SP.ScriptUtility.isNullOrEmptyString($v_4.TraceCorrelationId) && this.$0_0.$3e_0($v_4.TraceCorrelationId);
        var $v_5 = $v_4.ErrorInfo;
        if (!SP.ScriptUtility.isNullOrUndefined($v_5)) {
            var $v_A = $v_5.ErrorMessage,
                $v_B = $v_5.ErrorStackTrace,
                $v_C = $v_5.ErrorCode,
                $v_D = $v_5.ErrorTypeName,
                $v_E = $v_5.ErrorValue,
                $v_F = $v_5.ErrorDetails,
                $v_G = $v_5.TraceCorrelationId;
            $v_F = SP.DataConvert.fixupType(this.$0_0, $v_F);
            this.$a_0 = 3;
            if ($v_C === -2130575152 && !SP.ScriptUtility.isNullOrEmptyString($v_E) && this.$1h_0) window.navigate($v_E);
            else this.$x_0($v_A, $v_B, $v_C, $v_E, $v_D, $v_F, $v_G);
            this.$7_0 = null;
            return
        }
        this.$0_0.$1W_0 = true;
        try {
            for (var $v_H = 1; $v_H < $v_2.length; $v_H += 2) {
                var $v_I = $v_2[$v_H],
                    $v_J = this.$1L_0[$v_I.toString()],
                    $v_K = $v_2,
                    $v_L = $v_K[$v_H + 1];
                if (!SP.ScriptUtility.isNullOrUndefined($v_J) && !SP.ScriptUtility.isNullOrUndefined($v_L)) {
                    if (SP.ClientObject.isInstanceOfType($v_J) && typeof $v_L === "object") {
                        var $v_M = $v_L._ObjectType_;
                        if (!SP.ScriptUtility.isNullOrEmptyString($v_M)) {
                            var $v_N = Type.parse($v_M);
                            if ($v_N && $v_N !== Object.getType($v_J)) {
                                var $v_O = new $v_N(this.$0_0);
                                $v_J.$30_0($v_O);
                                $v_J = $v_O
                            }
                        }
                    }
                    if (SP.IFromJson.isInstanceOfType($v_J)) {
                        var $v_P = $v_J;
                        !$v_P.customFromJson($v_L) && $v_P.fromJson($v_L)
                    }
                    Array.isInstanceOfType($v_J) && SP.DataConvert.populateArray(this.$0_0, $v_J, $v_L)
                }
            }
        } finally {
            this.$0_0.$1W_0 = false
        }
        this.$a_0 = 2;
        var $v_6 = this.get_$G_0().getHandler("succeeded");
        $v_6 && $v_6(this, new SP.ClientRequestSucceededEventArgs(this));
        this.$7_0 = null
    },
    $2b_0: function (b, a) {
        ULSnd3:;
        if (this.$a_0) throw Error.create(SP.ResResources.getString("RequestHasBeenExecuted")); this.$1L_0[b.toString()] = a;
        if (SP.ClientObject.isInstanceOfType(a))
            if (a.$2_0.$O_0) this.$1L_0[b.toString()] = a.$2_0.$O_0
    }
};
SP.ClientRequestEventArgs = function (a) {
    ULSnd3:; SP.ClientRequestEventArgs.initializeBase(this); this.$7_1 = a
};
SP.ClientRequestEventArgs.prototype = {
    $7_1: null,
    get_request: function () {
        ULSnd3:;
        return this.$7_1
    }
};
SP.ClientRequestFailedEventArgs = function (h, g, e, f, d, b, c, a) {
    ULSnd3:; SP.ClientRequestFailedEventArgs.initializeBase(this, [h]); this.$2H_2 = g; this.$2P_2 = e; this.$1F_2 = f; this.$2F_2 = d; this.$2E_2 = b; this.$2D_2 = c; this.$1G_2 = a
};
SP.ClientRequestFailedEventArgs.prototype = {
    $2H_2: null,
    $2P_2: null,
    $1F_2: 0,
    $2F_2: null,
    $2E_2: null,
    $2D_2: null,
    $1G_2: null,
    $v_2: null,
    get_message: function () {
        ULSnd3:;
        return this.$2H_2
    },
    get_stackTrace: function () {
        ULSnd3:;
        return this.$2P_2
    },
    get_errorCode: function () {
        ULSnd3:;
        return this.$1F_2
    },
    get_errorValue: function () {
        ULSnd3:;
        return this.$2F_2
    },
    get_errorTypeName: function () {
        ULSnd3:;
        return this.$2E_2
    },
    get_errorDetails: function () {
        ULSnd3:;
        return this.$2D_2
    },
    get_errorTraceCorrelationId: function () {
        ULSnd3:;
        return this.$1G_2
    },
    get_webRequestExecutor: function () {
        ULSnd3:;
        return this.$v_2
    },
    $31_2: function (a) {
        ULSnd3:; this.$v_2 = a;
        if (this.$v_2) {
            if (SP.ScriptUtility.isNullOrEmptyString(this.$1G_2) && this.$v_2.get_responseAvailable()) this.$1G_2 = this.$v_2.getResponseHeader("SPRequestGuid");
            this.$1F_2 = SP.ClientRequest.$3P(this.$v_2, this.$1F_2)
        }
    }
};
SP.ClientRequestSucceededEventArgs = function (a) {
    ULSnd3:; SP.ClientRequestSucceededEventArgs.initializeBase(this, [a])
};
SP.FormDigestInfo = function () { };
SP.FormDigestInfo.prototype = {
    $f_0: null,
    get_digestValue: function () {
        ULSnd3:;
        return this.$f_0
    },
    set_digestValue: function (a) {
        ULSnd3:; this.$f_0 = a;
        return a
    },
    $14_0: 0,
    get_expiration: function () {
        ULSnd3:;
        return this.$14_0
    },
    set_expiration: function (a) {
        ULSnd3:; this.$14_0 = a;
        return a
    },
    $1Q_0: null,
    get_webServerRelativeUrl: function () {
        ULSnd3:;
        return this.$1Q_0
    },
    set_webServerRelativeUrl: function (a) {
        ULSnd3:; this.$1Q_0 = a;
        return a
    }
};
SP.ClientRuntimeContext = function (a) {
    ULSnd3:; this.$1i_0 = {};
    if (!a) throw Error.argumentNull("serverRelativeUrlOrFullUrl");
    if (!a.startsWith("/") && !a.toLowerCase().startsWith("http://") && !a.toLowerCase().startsWith("https://")) throw Error.argument("serverRelativeUrlOrFullUrl"); this.$u_0 = a
};
SP.ClientRuntimeContext.$2h = function (a) {
    ULSnd3:;
    if (!a) throw Error.argumentNull("obj");
    return a.$0_0
};
SP.ClientRuntimeContext.$2i = function (a) {
    ULSnd3:;
    if (!a) throw Error.argumentNull("objectPath");
    return a.$0_0
};
SP.ClientRuntimeContext.prototype = {
    $u_0: null,
    $2N_0: 0,
    $2G_0: false,
    get_isPageUrl: function () {
        ULSnd3:;
        return this.$2G_0
    },
    set_isPageUrl: function (a) {
        ULSnd3:;
        if (a && !this.$1H_0) throw Error.invalidOperation(); this.$2G_0 = a;
        return a
    },
    get_$1w_0: function () {
        ULSnd3:;
        var a = this.$2N_0; this.$2N_0++;
        return a
    },
    get_serviceRelativeUrl: function () {
        ULSnd3:;
        return "_vti_bin/client.svc/ProcessQuery"
    },
    get_url: function () {
        ULSnd3:;
        return this.$u_0
    },
    $1v_0: null,
    get_viaUrl: function () {
        ULSnd3:;
        return this.$1v_0
    },
    set_viaUrl: function (a) {
        ULSnd3:; this.$1v_0 = a;
        return a
    },
    getRequestUrl: function (b) {
        ULSnd3:;
        var a = this.$1v_0;
        if (!SP.ScriptUtility.isNullOrEmptyString(a)) {
            if (a.indexOf("?") < 0) a += "?";
            if (!a.endsWith("?") && !a.endsWith("&")) a += "&";
            a += "MS.SP.url=" + SP.ClientHttpUtility.$34(b, false, false);
            b = a
        }
        return b
    },
    $1H_0: false,
    get_formDigestHandlingEnabled: function () {
        ULSnd3:;
        return this.$1H_0
    },
    set_formDigestHandlingEnabled: function (a) {
        ULSnd3:; this.$1H_0 = a;
        return a
    },
    $2g_0: function () {
        ULSnd3:;
        var a = this.$u_0;
        if (!a.endsWith("/")) a += "/"; a += "_api/contextinfo"; a = this.getRequestUrl(a);
        return a
    },
    $3W_0: function (b) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(b) || b.indexOf("GetContextWebInformation") < 0 || b.indexOf("FormDigestTimeoutSeconds") < 0) return null;
        var c = this.parseObjectFromJsonString(b, true),
            d = c.d.GetContextWebInformation.FormDigestValue,
            e = c.d.GetContextWebInformation.FormDigestTimeoutSeconds,
            f = c.d.GetContextWebInformation.WebFullUrl,
            a = new SP.FormDigestInfo; a.$f_0 = d; a.$14_0 = +new Date + e * 750; a.$1Q_0 = SP.ClientUtility.$3Q(f);
        return a
    },
    $28_0: "Javascript Library",
    get_applicationName: function () {
        ULSnd3:;
        return this.$28_0
    },
    set_applicationName: function (a) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(a) || a.length > 128) throw Error.argumentOutOfRange("value"); this.$28_0 = a;
        return a
    },
    $29_0: null,
    get_clientTag: function () {
        ULSnd3:;
        return this.$29_0
    },
    set_clientTag: function (a) {
        ULSnd3:;
        if (!SP.ScriptUtility.isNullOrEmptyString(a) && a.length > 32) throw Error.argumentOutOfRange("value"); this.$29_0 = a;
        return a
    },
    $2C_0: false,
    get_disableReturnValueCache: function () {
        ULSnd3:;
        return this.$2C_0
    },
    set_disableReturnValueCache: function (a) {
        ULSnd3:; this.$2C_0 = a;
        return a
    },
    $w_0: null,
    get_webRequestExecutorFactory: function () {
        ULSnd3:;
        return this.$w_0
    },
    set_webRequestExecutorFactory: function (a) {
        ULSnd3:; this.$w_0 = a;
        return a
    },
    $7_0: null,
    get_pendingRequest: function () {
        ULSnd3:;
        if (!this.$7_0) this.$7_0 = new SP.ClientRequest(this);
        return this.$7_0
    },
    get_hasPendingRequest: function () {
        ULSnd3:;
        return !!this.$7_0 && !!this.$7_0.$P_0
    },
    $1W_0: false,
    add_executingWebRequest: function (a) {
        ULSnd3:; this.get_$G_0().addHandler("executingwebrequest", a)
    },
    remove_executingWebRequest: function (a) {
        ULSnd3:; this.get_$G_0().removeHandler("executingwebrequest", a)
    },
    onExecutingWebRequest: function (a) {
        ULSnd3:;
        if (a && a.$18_1) {
            if (!SP.ScriptUtility.isNullOrEmptyString(this.$t_0)) a.$18_1.get_headers().SPResponseGuid = this.$t_0;
            if (!SP.ScriptUtility.isNullOrEmptyString(this.get_clientTag())) a.$18_1.get_headers()["X-ClientService-ClientTag"] = this.get_clientTag()
        }
        var b = this.get_$G_0().getHandler("executingwebrequest"); b && b(this, a)
    },
    $2c_0: function (a) {
        ULSnd3:; this.onExecutingWebRequest(a)
    },
    $E_0: null,
    get_$G_0: function () {
        ULSnd3:;
        if (!this.$E_0) this.$E_0 = new Sys.EventHandlerList;
        return this.$E_0
    },
    add_requestSucceeded: function (a) {
        ULSnd3:; this.get_$G_0().addHandler("succeeded", a)
    },
    remove_requestSucceeded: function (a) {
        ULSnd3:; this.get_$G_0().removeHandler("succeeded", a)
    },
    add_requestFailed: function (a) {
        ULSnd3:; this.get_$G_0().addHandler("failed", a)
    },
    remove_requestFailed: function (a) {
        ULSnd3:; this.get_$G_0().removeHandler("failed", a)
    },
    add_beginningRequest: function (a) {
        ULSnd3:; this.get_$G_0().addHandler("beginningrequest", a)
    },
    remove_beginningRequest: function (a) {
        ULSnd3:; this.get_$G_0().removeHandler("beginningrequest", a)
    },
    $2L_0: 18e4,
    get_requestTimeout: function () {
        ULSnd3:;
        return this.$2L_0
    },
    set_requestTimeout: function (a) {
        ULSnd3:;
        if (a >= 0) this.$2L_0 = a;
        else throw Error.argumentOutOfRange("value");
        return a
    },
    $35_0: function () {
        ULSnd3:;
        var c = null,
            b = window._spPageContextInfo;
        if (b && b.webServerRelativeUrl === this.$u_0 && !SP.ScriptUtility.isUndefined(window._spFormDigestRefreshInterval) && !SP.ScriptUtility.isUndefined(b.updateFormDigestPageLoaded)) {
            var a = document.getElementsByName("__REQUESTDIGEST");
            if (a && a.length > 0 && a[0].tagName === "INPUT") c = a[0]
        }
        return c
    },
    executeQueryAsync: function (f, e) {
        ULSnd3:;
        var c = this.setPendingRequestToBeExecuted();
        if (!this.$1H_0) {
            this.executeClientRequestAsync(c, f, e);
            return
        }
        if (!SP.ClientRuntimeContext.$Q) SP.ClientRuntimeContext.$Q = {};
        var b = this.$2g_0();
        if (SP.ScriptUtility.isNullOrUndefined(SP.ClientRuntimeContext.$Q[b])) {
            var g = this.$35_0();
            if (g) {
                var h = window._spPageContextInfo;
                if (!SP.ScriptUtility.isNullOrUndefined(h)) {
                    SP.ClientRuntimeContext.$Q[b] = new SP.FormDigestInfo;
                    SP.ClientRuntimeContext.$Q[b].$f_0 = g.value;
                    SP.ClientRuntimeContext.$Q[b].$14_0 = h.updateFormDigestPageLoaded.getTime() + _spFormDigestRefreshInterval * .75
                }
            }
        }
        var i = new Date;
        if (SP.ClientRuntimeContext.$Q[b] && SP.ClientRuntimeContext.$Q[b].$14_0 > i.getTime()) {
            c.get_webRequest().get_headers()["X-RequestDigest"] = SP.ClientRuntimeContext.$Q[b].$f_0;
            this.executeClientRequestAsync(c, f, e)
        } else {
            var d = new Sys.Net.WebRequest;
            d.set_url(b);
            d.set_httpVerb("POST");
            d.get_headers().ACCEPT = "application/json;odata=verbose";
            d.set_timeout(this.get_requestTimeout());
            this.$2c_0(new SP.WebRequestEventArgs(d));
            if (this.$w_0) {
                var j = this.$w_0.createWebRequestExecutor();
                d.set_executor(j)
            }
            var a = this;
            d.add_completed(function (d) {
                ULSnd3:;
                if (d.get_aborted() || d.get_timedOut()) {
                    var h;
                    if (typeof d._SPError_ === "string") h = d._SPError_;
                    else h = SP.ResResources.getString("RequestAbortedOrTimedOut");
                    a.$x_0(c, d, h, e)
                } else if (!d.get_responseAvailable() || d.get_statusCode() !== 200 || SP.ScriptUtility.isNullOrEmptyString(d.getResponseHeader("content-type")) || d.getResponseHeader("content-type").toLowerCase().indexOf("json") < 0) {
                    var i;
                    if (typeof d._SPError_ === "string") i = d._SPError_;
                    else i = SP.ResResources.getString("UnknownResponseData");
                    a.$x_0(c, d, i, e)
                } else {
                    var g = a.$3W_0(d.get_responseData());
                    if (!g) a.$x_0(c, d, SP.ResResources.getString("UnknownResponseData"), e);
                    else {
                        var j = a.$35_0();
                        if (j) {
                            j.value = g.$f_0;
                            var k = window._spPageContextInfo;
                            if (!SP.ScriptUtility.isNullOrUndefined(k)) k.updateFormDigestPageLoaded = new Date
                        }
                        SP.ClientRuntimeContext.$Q[b] = g;
                        c.get_webRequest().get_headers()["X-RequestDigest"] = g.$f_0;
                        if (a.get_isPageUrl()) {
                            a.$u_0 = g.$1Q_0;
                            b = a.$2g_0();
                            SP.ClientRuntimeContext.$Q[b] = g;
                            c.$2n_0();
                            a.$7_0 && a.$7_0.$2n_0()
                        }
                        a.executeClientRequestAsync(c, f, e)
                    }
                }
            });
            d.invoke()
        }
    },
    $x_0: function (d, e, a, c) {
        ULSnd3:;
        if (c) {
            if (SP.ScriptUtility.isNullOrEmptyString(a)) a = SP.ResResources.getString("UnknownResponseData");
            var b = new SP.ClientRequestFailedEventArgs(d, a, null, 0, null, null, null, null);
            b.$31_2(e);
            c(this, b)
        }
    },
    setPendingRequestToBeExecuted: function () {
        ULSnd3:;
        var a = this.get_pendingRequest(); this.$7_0 = null;
        return a
    },
    executeClientRequestAsync: function (a, b, c) {
        ULSnd3:;
        if (this.$E_0) {
            var d = this.$E_0.getHandler("beginningrequest");
            d && d(this, new SP.ClientRequestEventArgs(a))
        } !SP.ScriptUtility.isNullOrUndefined(b) && a.add_requestSucceeded(b); !SP.ScriptUtility.isNullOrUndefined(c) && a.add_requestFailed(c);
        if (this.$E_0) {
            var e = this.$E_0.getHandler("succeeded");
            e && a.add_requestSucceeded(e);
            var f = this.$E_0.getHandler("failed");
            f && a.add_requestFailed(f)
        }
        a.$3H_0()
    },
    $1s_0: null,
    get_staticObjects: function () {
        ULSnd3:;
        if (!this.$1s_0) this.$1s_0 = {};
        return this.$1s_0
    },
    castTo: function (a, c) {
        ULSnd3:;
        if (!a) throw Error.argumentNull("obj"); SP.ClientAction.$z(this, a);
        var b;
        if (!c.inheritsFrom(SP.ClientObject)) throw Error.argument("type");
        if (a.$0_0 !== this) throw Error.invalidOperation();
        if (c.isInstanceOfType(a)) {
            b = new c(this, a.get_path());
            b.$20_0(a);
            return b
        }
        if (a.$2_0.$O_0 && c.isInstanceOfType(a.$2_0.$O_0)) {
            b = new c(this, a.get_path());
            b.$20_0(a);
            return b
        }
        if (!c.inheritsFrom(Object.getType(a))) throw Error.argument("type");
        if (a.$2_0.$O_0 && !c.inheritsFrom(Object.getType(a.$2_0.$O_0))) throw Error.argument("type"); b = new c(this, a.get_path()); b.$20_0(a);
        var d = null;
        if (!a.$2_0.$O_0) d = a;
        else d = a.$2_0.$O_0;
        if (d) {
            var e = [],
                i = this.get_pendingRequest().$1L_0,
                g = i;
            for (var h in g) {
                var j = {
                    key: h,
                    value: g[h]
                };
                j.value === a && Array.add(e, j.key)
            }
            for (var f = 0; f < e.length; f++) {
                var k = e[f];
                i[k] = b
            }
            a.$2_0.$O_0 = b
        }
        return b
    },
    addQuery: function (a) {
        ULSnd3:;
        if (!a) throw Error.argumentNull("query"); this.get_pendingRequest().$22_0(a)
    },
    $2a_0: function (a) {
        ULSnd3:; this.get_pendingRequest().$2a_0(a)
    },
    $2Z_0: function (a) {
        ULSnd3:; this.$1i_0[a.$4_0.toString()] = a
    },
    addQueryIdAndResultObject: function (b, a) {
        ULSnd3:;
        if (!a) throw Error.argumentNull("obj"); this.get_pendingRequest().$2b_0(b, a)
    },
    parseObjectFromJsonString: function (d, e) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrEmptyString(d)) return null;
        var a = SP.ParseJSONUtil.parseObjectFromJsonString(d),
            b;
        if (e) b = a;
        else if (Array.isInstanceOfType(a)) {
            var c = [];
            SP.DataConvert.populateArray(this, c, a);
            b = c
        } else b = SP.DataConvert.fixupType(this, a);
        return b
    },
    load: function (a) {
        ULSnd3:;
        if (!a) throw Error.argumentNull("clientObject"); SP.ClientAction.$z(this, a);
        var b = null;
        if (arguments.length === 2 && Array.isInstanceOfType(arguments[1])) b = arguments[1];
        else {
            for (var d = [], c = 1; c < arguments.length; c++) Array.add(d, arguments[c]);
            b = d
        }
        SP.DataRetrievalWithExpressionString.load(a, b)
    },
    loadQuery: function (a, b) {
        ULSnd3:;
        if (!a) throw Error.argumentNull("clientObjectCollection"); SP.ClientAction.$z(this, a);
        return SP.DataRetrievalWithExpressionString.loadQuery(a, b)
    },
    $1q_0: null,
    get_serverSchemaVersion: function () {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrUndefined(this.$1q_0)) throw Error.create(SP.ResResources.getString("NamedPropertyHasNotBeenInitialized", "ServerLibraryVersion"));
        return this.$1q_0
    },
    $3d_0: function (a) {
        ULSnd3:; this.$1q_0 = a
    },
    $1p_0: null,
    get_serverLibraryVersion: function () {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrUndefined(this.$1p_0)) throw Error.create(SP.ResResources.getString("NamedPropertyHasNotBeenInitialized", "ServerLibraryVersion"));
        return this.$1p_0
    },
    $3c_0: function (a) {
        ULSnd3:; this.$1p_0 = a
    },
    $2S_0: null,
    $t_0: null,
    get_traceCorrelationId: function () {
        ULSnd3:;
        return !SP.ScriptUtility.isNullOrEmptyString(this.$t_0) ? this.$t_0 : this.$2S_0
    },
    set_traceCorrelationId: function (a) {
        ULSnd3:;
        if (!SP.ScriptUtility.isNullOrEmptyString(a)) {
            if (!SP.Guid.isValid(a)) throw Error.argument("value");
            var b = new SP.Guid(a);
            this.$t_0 = b.toString("D")
        } else this.$t_0 = a;
        return a
    },
    dispose: function () { },
    $3e_0: function (a) {
        ULSnd3:; this.$2S_0 = a
    }
};
SP.SimpleDataTable = function () {
    ULSnd3:; this.fromJson = this.$3g_0; this.customFromJson = this.$3h_0
};
SP.SimpleDataTable.prototype = {
    $17_0: null,
    get_rows: function () {
        ULSnd3:;
        if (!this.$17_0) this.$17_0 = [];
        return this.$17_0
    },
    $3g_0: function (a) {
        ULSnd3:; this.$17_0 = []; SP.DataConvert.populateArray(null, this.$17_0, a.Rows)
    },
    $3h_0: function () {
        ULSnd3:;
        return false
    }
};
SP.ClientValueObject = function () { };
SP.ClientValueObject.prototype = {
    fromJson: function (a) {
        ULSnd3:; this.initPropertiesFromJson(a)
    },
    initPropertiesFromJson: function () { },
    customFromJson: function () {
        ULSnd3:;
        return false
    },
    writeToXml: function () { },
    customWriteToXml: function () {
        ULSnd3:;
        return false
    }
};
SP.ClientValueObjectCollection = function () {
    ULSnd3:; this.getEnumerator = this.$3i_1; SP.ClientValueObjectCollection.initializeBase(this)
};
SP.ClientValueObjectCollection.prototype = {
    $8_1: null,
    initPropertiesFromJson: function (b) {
        ULSnd3:;
        var a; a = b._Child_Items_;
        if (!a && this.get_childItemsName()) a = b[this.get_childItemsName()];
        if (a) {
            this.$8_1 = [];
            SP.DataConvert.populateArray(null, this.$8_1, a)
        }
    },
    get_childItemsName: function () {
        ULSnd3:;
        return null
    },
    get_count: function () {
        ULSnd3:;
        return !this.$8_1 ? 0 : this.$8_1.length
    },
    addChild: function (a) {
        ULSnd3:;
        if (!this.$8_1) this.$8_1 = []; Array.add(this.$8_1, a)
    },
    getItemAtIndex: function (a) {
        ULSnd3:;
        if (!this.$8_1 || a < 0 || a >= this.$8_1.length) throw Error.argumentOutOfRange("index");
        return this.$8_1[a]
    },
    $3i_1: function () {
        ULSnd3:;
        var a = this.$8_1;
        if (!a) a = [];
        return new SP.ArrayListEnumerator(a)
    },
    writeToXml: function (a, c) {
        ULSnd3:;
        if (this.$8_1) {
            a.writeStartElement("Property");
            a.writeAttributeString("Name", "_Child_Items_");
            a.writeAttributeString("Type", "Array");
            for (var b = 0; b < this.$8_1.length; b++) {
                a.writeStartElement("Object");
                SP.DataConvert.writeValueToXmlElement(a, this.$8_1[b], c);
                a.writeEndElement()
            }
            a.writeEndElement()
        }
        SP.ClientValueObject.prototype.writeToXml.call(this, a, c)
    }
};
SP.ConditionalScopeBase = function (a, b) {
    ULSnd3:; this.$$d_$3V_0 = Function.createDelegate(this, this.$3V_0);
    if (!a) throw Error.argumentNull("context"); this.$0_0 = a; this.$27_0 = b
};
SP.ConditionalScopeBase.$9 = function () {
    ULSnd3:;
    return Error.create(SP.ResResources.getString("InvalidUsageOfConditionalScope"))
};
SP.ConditionalScopeBase.prototype = {
    $0_0: null,
    $2Q_0: false,
    $2R_0: null,
    $1t_0: null,
    $27_0: false,
    $b_0: null,
    $Y_0: null,
    $3_0: null,
    startScope: function () {
        ULSnd3:;
        if (this.$3_0) throw SP.ConditionalScopeBase.$9(); this.$1t_0 = new SP.SerializationContext(this.$0_0); this.$2R_0 = this.$3B_0(this.$1t_0); this.$3_0 = new SP.ConditionalExecutionScope(this.$0_0, this, this.$$d_$3V_0); this.$0_0.addQueryIdAndResultObject(this.$3_0.$4_0, this);
        return this.$3_0
    },
    $3V_0: function () {
        ULSnd3:;
        if (this.$b_0 && !this.$b_0.$L_0) throw SP.ConditionalScopeBase.$9();
        if (this.$Y_0 && !this.$Y_0.$L_0) throw SP.ConditionalScopeBase.$9();
        if (this.$b_0 || this.$Y_0) {
            var c = null;
            if (SP.ClientActionExecutionScopeEnd.isInstanceOfType(this.$0_0.get_pendingRequest().$P_0)) c = this.$0_0.get_pendingRequest().$P_0;
            if (!c) throw SP.ConditionalScopeBase.$9();
            if (c.$3_1.$B_0 !== "IfTrueScope" && c.$3_1.$B_0 !== "IfFalseScope") throw SP.ConditionalScopeBase.$9();
        }
        if (!this.$27_0)
            for (var f = this.$0_0.get_pendingRequest().$16_0.length, e = f - 1; e >= 0; e--) {
                var a = this.$0_0.get_pendingRequest().$16_0[e];
                if (a === this.$3_0.$1Y_0) break;
                var d = false;
                if (SP.ClientQueryInternal.isInstanceOfType(a) || SP.ClientActionExecutionScopeStart.isInstanceOfType(a) || SP.ClientActionExecutionScopeEnd.isInstanceOfType(a) || SP.ObjectIdentityQuery.isInstanceOfType(a)) d = true;
                if (!d) {
                    var b;
                    if (SP.ClientActionInstantiateObjectPath.isInstanceOfType(a)) b = a;
                    else b = null;
                    if (b)
                        if (SP.ObjectPathConstructor.isInstanceOfType(b.$I_0) || SP.ObjectPathIdentity.isInstanceOfType(b.$I_0) || SP.ObjectPathProperty.isInstanceOfType(b.$I_0) || SP.ObjectPathStaticProperty.isInstanceOfType(b.$I_0)) d = true
                }
                if (!d) throw Error.create(SP.ResResources.getString("InvalidUsageOfConditionalScopeNowAllowedAction"));
            }
    },
    startIfTrue: function () {
        ULSnd3:;
        if (!this.$3_0 || this.$3_0.$L_0 || this.$b_0) throw SP.ConditionalScopeBase.$9();
        var a = this.$0_0.get_pendingRequest().$P_0;
        if (!a) throw SP.ConditionalScopeBase.$9();
        if (SP.ClientActionExecutionScopeStart.isInstanceOfType(a) && a.$3_1.$B_0 === "ConditionalScope" || SP.ClientActionExecutionScopeEnd.isInstanceOfType(a) && a.$3_1.$B_0 === "IfFalseScope") {
            this.$b_0 = new SP.ExecutionScope(this.$0_0, "IfTrueScope", null);
            return this.$b_0
        }
        throw SP.ConditionalScopeBase.$9();
    },
    startIfFalse: function () {
        ULSnd3:;
        if (!this.$3_0 || this.$3_0.$L_0 || this.$Y_0) throw SP.ConditionalScopeBase.$9();
        var a = this.$0_0.get_pendingRequest().$P_0;
        if (!a) throw SP.ConditionalScopeBase.$9();
        if (SP.ClientActionExecutionScopeStart.isInstanceOfType(a) && a.$3_1.$B_0 === "ConditionalScope" || SP.ClientActionExecutionScopeEnd.isInstanceOfType(a) && a.$3_1.$B_0 === "IfTrueScope") {
            this.$Y_0 = new SP.ExecutionScope(this.$0_0, "IfFalseScope", null);
            return this.$Y_0
        }
        throw SP.ConditionalScopeBase.$9();
    },
    get_testResult: function () {
        ULSnd3:;
        return this.$2Q_0
    },
    fromJson: function (c) {
        ULSnd3:;
        var b = c;
        if (SP.ScriptUtility.isNullOrUndefined(b)) throw Error.create(SP.ResResources.getString("UnknownResponseData"));
        var a; a = b.Test;
        if (SP.ScriptUtility.isUndefined(a)) throw Error.create(SP.ResResources.getString("UnknownResponseData")); this.$2Q_0 = a
    },
    customFromJson: function () {
        ULSnd3:;
        return false
    }
};
SP.ConditionalExecutionScope = function (b, a, c) {
    ULSnd3:; SP.ConditionalExecutionScope.initializeBase(this, [b, "ConditionalScope", c]);
    if (!a) throw Error.argumentNull("scope"); this.$3_1 = a
};
SP.ConditionalExecutionScope.prototype = {
    $3_1: null,
    $2Y_0: function (a, b) {
        ULSnd3:; SP.ExecutionScope.prototype.$2Y_0.call(this, a, b); a.writeRaw(this.$3_1.$2R_0.toString()); b.$m_0(this.$3_1.$1t_0);
        if (!this.$3_1.$b_0 && !this.$3_1.$Y_0) {
            a.writeStartElement("IfTrueScope");
            a.writeAttributeString("Id", b.$0_0.get_$1w_0().toString())
        }
    },
    $36_0: function (a, b) {
        ULSnd3:; !this.$3_1.$b_0 && !this.$3_1.$Y_0 && a.writeEndElement(); SP.ExecutionScope.prototype.$36_0.call(this, a, b)
    }
};
SP.DataRetrievalWithExpressionString = function () { };
SP.DataRetrievalWithExpressionString.load = function (a, b) {
    ULSnd3:;
    if (!b || !b.length) {
        a.get_$19_0().selectAllProperties();
        SP.ClientObjectCollection.isInstanceOfType(a) && a.get_$19_0().get_childItemQuery().selectAllProperties()
    } else
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            SP.DataRetrievalWithExpressionString.$2V(a.get_$19_0(), d)
        }
};
SP.DataRetrievalWithExpressionString.loadQuery = function (b, d) {
    ULSnd3:;
    var c = [],
        e = new SP.ClientObjectCollectionResult(b.$0_0, c),
        a = new SP.ClientQueryInternal(b, null, false, null); b.$0_0.addQueryIdAndResultObject(a.$4_0, e); b.$0_0.addQuery(a);
    if (SP.ScriptUtility.isNullOrEmptyString(d)) a.get_childItemQuery().selectAllProperties();
    else SP.DataRetrievalWithExpressionString.$2V(a, d);
    return c
};
SP.DataRetrievalWithExpressionString.$2V = function (r, a) {
    ULSnd3:;
    if (SP.ScriptUtility.isNullOrEmptyString(a)) throw Error.argumentOutOfRange("exp");
    var m = a.length; a = a.trim();
    if (!a.length || m !== a.length) throw Error.argumentOutOfRange("exp");
    for (var d = r, f = 0, b, n = null, o = a.length, g = false, c = 0; c < o; c++) {
        var e = a.charAt(c);
        if (e === "," || e === ")" || g) throw SP.DataRetrievalWithExpressionString.$T(a);
        if (e === "." || e === "(") {
            b = a.substr(f, c - f);
            b = b.trim();
            if (e === "(") {
                if (b !== "Include" && b !== "IncludeWithDefaultProperties") throw SP.DataRetrievalWithExpressionString.$T(a);
                if (d.$1I_1) throw SP.DataRetrievalWithExpressionString.$T(a);
                var i = SP.DataRetrievalWithExpressionString.$3J(a, c);
                if (i < 0) throw SP.DataRetrievalWithExpressionString.$T(a);
                var p = a.substr(c + 1, i - c - 1),
                    k = d.get_childItemQuery();
                b === "IncludeWithDefaultProperties" && k.selectAllProperties();
                for (var l = SP.DataRetrievalWithExpressionString.$3f(p), j = 0; j < l.length; j++) {
                    var q = l[j];
                    SP.DataRetrievalWithExpressionString.$2V(k, q)
                }
                c = i;
                g = true
            } else if (e === ".") {
                if (g || !b.length) throw SP.DataRetrievalWithExpressionString.$T(a);
                var h = d.$1C_1(b);
                if (!h) {
                    h = new SP.ClientQueryInternal(null, b, true, d);
                    d.selectSubQuery(h)
                }
                d = h
            }
            f = c + 1;
            n = b
        }
    }
    if (f < a.length) {
        b = a.substr(f);
        b = b.trim();
        if (b.length > 0) {
            if (g) throw SP.DataRetrievalWithExpressionString.$T(a);
            d.selectWithAll(b)
        }
    }
};
SP.DataRetrievalWithExpressionString.$3J = function (e, g) {
    ULSnd3:;
    for (var f = e.length, b = 1, c = -1, a = g + 1; a < f; a++) {
        var d = e.charAt(a);
        if (d === "(") b++;
        else if (d === ")") {
            b--;
            if (!b) {
                c = a;
                break
            }
        }
    }
    return c
};
SP.DataRetrievalWithExpressionString.$3f = function (a) {
    ULSnd3:; a = a.trim();
    var f = [],
        c = 0,
        d = 0,
        b, g = a.length;
    if (!g) return f;
    if (a.charAt(0) === "," || a.charAt(0) === "(" || a.charAt(g - 1) === ",") throw SP.DataRetrievalWithExpressionString.$T(a);
    for (var e = 0; e < g; e++) {
        var h = a.charAt(e);
        if (h === "(") c++;
        else if (h === ")") {
            c--;
            if (c < 0) throw SP.DataRetrievalWithExpressionString.$T(a);
        } else if (h === "," && !c) {
            b = a.substr(d, e - d);
            b = b.trim();
            if (!b.length) throw SP.DataRetrievalWithExpressionString.$T(a);
            Array.add(f, b);
            d = e + 1
        }
    }
    if (c) throw SP.DataRetrievalWithExpressionString.$T(a);
    if (d < a.length) {
        b = a.substr(d);
        b = b.trim();
        b.length > 0 && Array.add(f, b)
    }
    return f
};
SP.DataRetrievalWithExpressionString.$T = function (a) {
    ULSnd3:;
    return Error.argument(null, SP.ResResources.getString("NotSupportedQueryExpressionWithExpressionDetail", a))
};
SP.ClientActionExecutionScopeStart = function (a, b) {
    ULSnd3:; SP.ClientActionExecutionScopeStart.initializeBase(this, [a.$0_0, null, b]); this.$3_1 = a
};
SP.ClientActionExecutionScopeStart.prototype = {
    $3_1: null,
    get_scope: function () {
        ULSnd3:;
        return this.$3_1
    },
    $39_0: function () { }
};
SP.ClientActionExecutionScopeEnd = function (a, b) {
    ULSnd3:; SP.ClientActionExecutionScopeEnd.initializeBase(this, [a.$0_0, null, b]); this.$3_1 = a
};
SP.ClientActionExecutionScopeEnd.prototype = {
    $3_1: null,
    get_scope: function () {
        ULSnd3:;
        return this.$3_1
    },
    $39_0: function () { }
};
SP.ExecutionScope = function (a, b, c) {
    ULSnd3:;
    if (!a) throw Error.argumentNull("context"); this.$0_0 = a; this.$B_0 = b; this.$4_0 = this.$0_0.get_$1w_0(); this.$0_0.get_pendingRequest().get_$25_0().push(this); this.$1Y_0 = new SP.ClientActionExecutionScopeStart(this, this.$B_0); this.$0_0.get_pendingRequest().$22_0(this.$1Y_0); this.$1b_0 = c
};
SP.ExecutionScope.prototype = {
    $0_0: null,
    $L_0: false,
    $B_0: null,
    $4_0: 0,
    $1b_0: null,
    $1Y_0: null,
    get_id: function () {
        ULSnd3:;
        return this.$4_0
    },
    get_name: function () {
        ULSnd3:;
        return this.$B_0
    },
    dispose: function () {
        ULSnd3:;
        if (this.$L_0) throw SP.ExceptionHandlingScope.$9(); this.$1b_0 && this.$1b_0();
        if (this.$0_0.get_pendingRequest().get_$25_0().length > 0 && this.$0_0.get_pendingRequest().get_$25_0().pop() === this) this.$0_0.get_pendingRequest().$22_0(new SP.ClientActionExecutionScopeEnd(this, this.$B_0));
        else throw SP.ExceptionHandlingScope.$9(); this.$L_0 = true
    },
    $2Y_0: function (a) {
        ULSnd3:; a.writeStartElement(this.$B_0); a.writeAttributeString("Id", this.$4_0.toString())
    },
    $36_0: function (a) {
        ULSnd3:; a.writeEndElement()
    }
};
SP.ExceptionHandlingScope = function (a) {
    ULSnd3:; this.$$d_$3G_0 = Function.createDelegate(this, this.$3G_0); this.fromJson = this.$3g_0; this.customFromJson = this.$3h_0;
    if (!a) throw Error.argumentNull("context"); this.$0_0 = a; this.$1m_0 = -1
};
SP.ExceptionHandlingScope.$9 = function () {
    ULSnd3:;
    return Error.create(SP.ResResources.getString("InvalidUsageOfExceptionHandlingScope"))
};
SP.ExceptionHandlingScope.prototype = {
    $0_0: null,
    $2J_0: false,
    $1e_0: false,
    $h_0: null,
    $1r_0: null,
    $1m_0: 0,
    $1o_0: null,
    $1n_0: null,
    $1M_0: null,
    $R_0: null,
    get_$3S_0: function () {
        ULSnd3:;
        return !this.$W_0 ? true : false
    },
    startScope: function () {
        ULSnd3:;
        if (this.$R_0) throw SP.ExceptionHandlingScope.$9(); this.$R_0 = new SP.ExceptionHandlingExecutionScope(this.$0_0, this, this.$$d_$3G_0); this.$0_0.get_pendingRequest().$2b_0(this.$R_0.$4_0, this);
        return this.$R_0
    },
    $3G_0: function () {
        ULSnd3:;
        if (this.$W_0) {
            if (!this.$o_0 && !this.$15_0) throw SP.ExceptionHandlingScope.$9();
            var a = this.$0_0.get_pendingRequest().$P_0;
            if (!a || !SP.ClientActionExecutionScopeEnd.isInstanceOfType(a)) throw SP.ExceptionHandlingScope.$9();
            var b = a;
            if (b.$3_1.$B_0 !== "CatchScope" && b.$3_1.$B_0 !== "FinallyScope") throw SP.ExceptionHandlingScope.$9();
        }
    },
    $W_0: null,
    startTry: function () {
        ULSnd3:;
        if (!this.$R_0 || this.$R_0.$L_0 || this.$W_0) throw SP.ExceptionHandlingScope.$9();
        var a = this.$0_0.get_pendingRequest().$P_0;
        if (!a || !SP.ClientActionExecutionScopeStart.isInstanceOfType(a)) throw SP.ExceptionHandlingScope.$9();
        if (a.$3_1.$B_0 !== "ExceptionHandlingScope") throw SP.ExceptionHandlingScope.$9(); this.$W_0 = new SP.ExecutionScope(this.$0_0, "TryScope", null);
        return this.$W_0
    },
    $o_0: null,
    startCatch: function () {
        ULSnd3:;
        if (!this.$R_0 || this.$R_0.$L_0 || !this.$W_0 || !this.$W_0.$L_0 || this.$o_0 || this.$15_0) throw SP.ExceptionHandlingScope.$9();
        var a = this.$0_0.get_pendingRequest().$P_0;
        if (!a || !SP.ClientActionExecutionScopeEnd.isInstanceOfType(a)) throw SP.ExceptionHandlingScope.$9();
        if (a.$3_1.$B_0 !== "TryScope") throw SP.ExceptionHandlingScope.$9(); this.$o_0 = new SP.ExecutionScope(this.$0_0, "CatchScope", null);
        return this.$o_0
    },
    $15_0: null,
    startFinally: function () {
        ULSnd3:;
        if (!this.$R_0 || this.$R_0.$L_0 || !this.$W_0 || !this.$W_0.$L_0 || this.$o_0 && !this.$o_0.$L_0 || this.$15_0) throw SP.ExceptionHandlingScope.$9();
        var a = this.$0_0.get_pendingRequest().$P_0;
        if (!a || !SP.ClientActionExecutionScopeEnd.isInstanceOfType(a)) throw SP.ExceptionHandlingScope.$9();
        if (a.$3_1.$B_0 !== "TryScope" && a.$3_1.$B_0 !== "CatchScope") throw SP.ExceptionHandlingScope.$9(); this.$15_0 = new SP.ExecutionScope(this.$0_0, "FinallyScope", null);
        return this.$15_0
    },
    get_processed: function () {
        ULSnd3:;
        return this.$2J_0
    },
    get_hasException: function () {
        ULSnd3:;
        return this.$1e_0
    },
    get_errorMessage: function () {
        ULSnd3:;
        return this.$h_0
    },
    get_serverStackTrace: function () {
        ULSnd3:;
        return this.$1r_0
    },
    get_serverErrorCode: function () {
        ULSnd3:;
        return this.$1m_0
    },
    get_serverErrorValue: function () {
        ULSnd3:;
        return this.$1o_0
    },
    get_serverErrorTypeName: function () {
        ULSnd3:;
        return this.$1n_0
    },
    get_serverErrorDetails: function () {
        ULSnd3:;
        return this.$1M_0
    },
    $3g_0: function (d) {
        ULSnd3:;
        var c = d;
        if (SP.ScriptUtility.isNullOrUndefined(c)) throw Error.create(SP.ResResources.getString("UnknownResponseData"));
        var a; a = c.HasException;
        if (SP.ScriptUtility.isUndefined(a)) throw Error.create(SP.ResResources.getString("UnknownResponseData")); this.$1e_0 = a;
        if (this.$1e_0) {
            var b = c.ErrorInfo;
            if (SP.ScriptUtility.isNullOrUndefined(b)) throw Error.create(SP.ResResources.getString("UnknownResponseData"));
            a = b.ErrorMessage;
            if (!SP.ScriptUtility.isUndefined(a)) this.$h_0 = a;
            else this.$h_0 = "";
            a = b.ErrorStackTrace;
            if (!SP.ScriptUtility.isUndefined(a)) this.$1r_0 = a;
            else this.$1r_0 = "";
            a = b.ErrorCode;
            if (!SP.ScriptUtility.isUndefined(a)) this.$1m_0 = a;
            a = b.ErrorValue;
            if (!SP.ScriptUtility.isUndefined(a)) this.$1o_0 = a;
            else this.$1o_0 = "";
            a = b.ErrorTypeName;
            if (!SP.ScriptUtility.isUndefined(a)) this.$1n_0 = a;
            else this.$1n_0 = "";
            a = b.ErrorDetails;
            if (!SP.ScriptUtility.isUndefined(a)) {
                this.$1M_0 = a;
                this.$1M_0 = SP.DataConvert.fixupType(this.$0_0, this.$1M_0)
            }
        }
        this.$2J_0 = true
    },
    $3h_0: function () {
        ULSnd3:;
        return false
    }
};
SP.ExceptionHandlingExecutionScope = function (a, b, c) {
    ULSnd3:; SP.ExceptionHandlingExecutionScope.initializeBase(this, [a, "ExceptionHandlingScope", c]); this.$3_1 = b
};
SP.ExceptionHandlingExecutionScope.prototype = {
    $3_1: null,
    $2Y_0: function (a, b) {
        ULSnd3:;
        if (this.$3_1.get_$3S_0()) {
            a.writeStartElement("ExceptionHandlingScopeSimple");
            a.writeAttributeString("Id", this.$4_0.toString())
        } else SP.ExecutionScope.prototype.$2Y_0.call(this, a, b)
    }
};
SP.ObjectIdentityQuery = function (a) {
    ULSnd3:; SP.ObjectIdentityQuery.initializeBase(this, [SP.ClientRuntimeContext.$2i(a), a, null])
};
SP.ObjectIdentityQuery.prototype = {
    $39_0: function (a, b) {
        ULSnd3:; a.writeStartElement("ObjectIdentityQuery"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("ObjectPathId", this.$I_0.$4_0.toString()); b.addObjectPath(this.$I_0); a.writeEndElement()
    }
};
SP.ObjectPath = function (a, c, e) {
    ULSnd3:;
    if (!a) throw Error.argumentNull("context"); this.$0_0 = a;
    if (!c) this.$1K_0 = -1;
    else this.$1K_0 = c.$4_0; this.$4_0 = a.get_$1w_0();
    if (e) {
        a.$2Z_0(this);
        if (!a.$1W_0) {
            var b = new SP.ClientActionInstantiateObjectPath(this);
            a.addQuery(b);
            var d = new SP.ClientActionInstantiateObjectPathResult(this);
            a.addQueryIdAndResultObject(b.$4_0, d)
        }
    }
    this.$1N_0 = false; this.$j_0 = true
};
SP.ObjectPath.prototype = {
    $1K_0: 0,
    $4_0: 0,
    $0_0: null,
    $1N_0: false,
    get_$1y_0: function () {
        ULSnd3:;
        return this.$1K_0 === -1 ? null : this.$0_0.$1i_0[this.$1K_0.toString()]
    },
    $j_0: false,
    $3R_0: function () { },
    get_$2l_0: function () {
        ULSnd3:;
        return null
    },
    setPendingReplace: function () {
        ULSnd3:; this.$0_0.get_pendingRequest().$3A_0(this)
    }
};
SP.ObjectPathProperty = function (b, c, a) {
    ULSnd3:; SP.ObjectPathProperty.initializeBase(this, [b, c, true]); this.$S_1 = a
};
SP.ObjectPathProperty.prototype = {
    $S_1: null,
    $39_0: function (a, b) {
        ULSnd3:; a.writeStartElement("Property"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("ParentId", this.get_$1y_0().$4_0.toString()); b.addObjectPath(this.get_$1y_0()); a.writeAttributeString("Name", this.$S_1); a.writeEndElement()
    },
    get_$2l_0: function () {
        ULSnd3:;
        return SP.ResResources.getString("ObjectNameProperty", this.$S_1)
    }
};
SP.ObjectPathStaticProperty = function (b, c, a) {
    ULSnd3:; SP.ObjectPathStaticProperty.initializeBase(this, [b, null, true]); this.$J_1 = c; this.$S_1 = a
};
SP.ObjectPathStaticProperty.prototype = {
    $S_1: null,
    $J_1: null,
    $39_0: function (a) {
        ULSnd3:; a.writeStartElement("StaticProperty"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("TypeId", this.$J_1); a.writeAttributeString("Name", this.$S_1); a.writeEndElement()
    },
    get_$2l_0: function () {
        ULSnd3:;
        return SP.ResResources.getString("ObjectNameProperty", this.$S_1)
    }
};
SP.ObjectPathMethod = function (a, e, d, c) {
    ULSnd3:; SP.ObjectPathMethod.initializeBase(this, [a, e, true]); SP.ClientAction.$1A(a, c); this.$k_1 = d; this.$5_1 = c; this.$6_1 = new SP.SerializationContext(a);
    var b; this.$1_1 = new Sys.StringBuilder; b = SP.XmlWriter.create(this.$1_1); this.$y_1(b, this.$6_1); b.close(); this.$5_1 = null
};
SP.ObjectPathMethod.prototype = {
    $k_1: null,
    $6_1: null,
    $1_1: null,
    $5_1: null,
    $39_0: function (a, b) {
        ULSnd3:; a.writeRaw(this.$1_1.toString()); b.$m_0(this.$6_1)
    },
    $y_1: function (a, c) {
        ULSnd3:; a.writeStartElement("Method"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("ParentId", this.get_$1y_0().$4_0.toString()); c.addObjectPath(this.get_$1y_0()); a.writeAttributeString("Name", this.$k_1);
        if (this.$5_1 && this.$5_1.length > 0) {
            a.writeStartElement("Parameters");
            for (var b = 0; b < this.$5_1.length; b++) {
                var d = this.$5_1[b];
                a.writeStartElement("Parameter");
                SP.DataConvert.writeValueToXmlElement(a, d, c);
                a.writeEndElement()
            }
            a.writeEndElement()
        }
        a.writeEndElement()
    },
    $3R_0: function () {
        ULSnd3:; this.$5_1 = null; this.$1_1 = null; this.$6_1 = null; this.$j_0 = false
    },
    get_$2l_0: function () {
        ULSnd3:;
        return SP.ResResources.getString("ObjectNameMethod", this.$k_1)
    }
};
SP.ObjectPathStaticMethod = function (a, e, d, c) {
    ULSnd3:; SP.ObjectPathStaticMethod.initializeBase(this, [a, null, true]); SP.ClientAction.$1A(a, c); this.$J_1 = e; this.$k_1 = d; this.$5_1 = c; this.$6_1 = new SP.SerializationContext(a);
    var b; this.$1_1 = new Sys.StringBuilder; b = SP.XmlWriter.create(this.$1_1); this.$y_1(b, this.$6_1); b.close(); this.$5_1 = null
};
SP.ObjectPathStaticMethod.prototype = {
    $J_1: null,
    $k_1: null,
    $5_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function (a, b) {
        ULSnd3:; a.writeRaw(this.$1_1.toString()); b.$m_0(this.$6_1)
    },
    $y_1: function (a, d) {
        ULSnd3:; a.writeStartElement("StaticMethod"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("Name", this.$k_1); a.writeAttributeString("TypeId", this.$J_1);
        if (this.$5_1 && this.$5_1.length > 0) {
            a.writeStartElement("Parameters");
            for (var b = 0; b < this.$5_1.length; b++) {
                var c = this.$5_1[b];
                a.writeStartElement("Parameter");
                SP.DataConvert.writeValueToXmlElement(a, c, d);
                a.writeEndElement()
            }
            a.writeEndElement()
        }
        a.writeEndElement()
    },
    $3R_0: function () {
        ULSnd3:; this.$5_1 = null; this.$1_1 = null; this.$6_1 = null; this.$j_0 = false
    },
    get_$2l_0: function () {
        ULSnd3:;
        return SP.ResResources.getString("ObjectNameMethod", this.$k_1)
    }
};
SP.ObjectPathConstructor = function (a, d, c) {
    ULSnd3:; SP.ObjectPathConstructor.initializeBase(this, [a, null, true]); SP.ClientAction.$1A(a, c); this.$J_1 = d; this.$5_1 = c; this.$6_1 = new SP.SerializationContext(a);
    var b; this.$1_1 = new Sys.StringBuilder; b = SP.XmlWriter.create(this.$1_1); this.$y_1(b, this.$6_1); b.close(); this.$5_1 = null
};
SP.ObjectPathConstructor.prototype = {
    $J_1: null,
    $5_1: null,
    $6_1: null,
    $1_1: null,
    $39_0: function (a, b) {
        ULSnd3:; a.writeRaw(this.$1_1.toString()); b.$m_0(this.$6_1)
    },
    $y_1: function (a, d) {
        ULSnd3:; a.writeStartElement("Constructor"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("TypeId", this.$J_1);
        if (this.$5_1 && this.$5_1.length > 0) {
            a.writeStartElement("Parameters");
            for (var b = 0; b < this.$5_1.length; b++) {
                var c = this.$5_1[b];
                a.writeStartElement("Parameter");
                SP.DataConvert.writeValueToXmlElement(a, c, d);
                a.writeEndElement()
            }
            a.writeEndElement()
        }
        a.writeEndElement()
    },
    $3R_0: function () {
        ULSnd3:; this.$5_1 = null; this.$1_1 = null; this.$6_1 = null; this.$j_0 = false
    },
    get_$2l_0: function () {
        ULSnd3:;
        return SP.ResResources.getString("ObjectNameType", this.$J_1)
    }
};
SP.ObjectPathIdentity = function (a, b) {
    ULSnd3:; SP.ObjectPathIdentity.initializeBase(this, [a, null, false]); this.$r_1 = b
};
SP.ObjectPathIdentity.prototype = {
    $r_1: null,
    get_identity: function () {
        ULSnd3:;
        return this.$r_1
    },
    $39_0: function (a) {
        ULSnd3:; a.writeStartElement("Identity"); a.writeAttributeString("Id", this.$4_0.toString()); a.writeAttributeString("Name", this.$r_1); a.writeEndElement()
    },
    get_$2l_0: function () {
        ULSnd3:;
        return SP.ResResources.getString("ObjectNameIdentity", this.$r_1)
    }
};
SP.SerializationContext = function (a) {
    ULSnd3:; this.$1j_0 = {};
    if (!a) throw Error.argumentNull("context"); this.$0_0 = a
};
SP.SerializationContext.prototype = {
    $0_0: null,
    addClientObject: function (a) {
        ULSnd3:; a.get_path() && this.addObjectPath(a.get_path())
    },
    addObjectPath: function (a) {
        ULSnd3:; this.$1j_0[a.$4_0.toString()] = a
    },
    $m_0: function (d) {
        ULSnd3:;
        var a = d.$1j_0;
        for (var b in a) {
            var c = {
                key: b,
                value: a[b]
            };
            this.addObjectPath(c.value)
        }
    }
};
SP.ResourceStrings = function () { };
SP.RuntimeRes = function () { };
SP.ParseJSONUtil = function () { };
SP.ParseJSONUtil.$2m = function (a) {
    ULSnd3:; a = a.replace(SP.ParseJSONUtil.$2s, '$1new SP.Guid("$2")'); a = a.replace(SP.ParseJSONUtil.$2r, "$1SP.DataConvert.createUtcDateTime($2)"); a = a.replace(SP.ParseJSONUtil.$2p, "$1SP.DataConvert.createLocalDateTime($2)"); a = a.replace(SP.ParseJSONUtil.$2q, "$1SP.DataConvert.createUnspecifiedDateTime($2)"); a = a.replace(SP.ParseJSONUtil.$2o, '$1new SP.Base64EncodedByteArray("$2")');
    return a
};
SP.ParseJSONUtil.parseObjectFromJsonString = function (json) {
    ULSnd3:;
    if (SP.ScriptUtility.isNullOrEmptyString(json)) return null;
    var $v_0 = SP.ParseJSONUtil.validateJson(json);
    if (!$v_0) throw Error.argument("json"); json = SP.ParseJSONUtil.$2m(json);
    var $v_1 = eval("(" + json + ")");
    return $v_1
};
SP.ParseJSONUtil.validateJson = function (a) {
    ULSnd3:;
    return SP.ParseJSONUtil.$2u.test(a.replace(SP.ParseJSONUtil.$2v, "@").replace(SP.ParseJSONUtil.$2w, "]").replace(SP.ParseJSONUtil.$2t, ""))
};
SP.DataConvertUtil = function () { };
SP.DataConvertUtil.specifyDateTimeKind = function (a, b) {
    ULSnd3:; a.kind = b
};
SP.DataConvertUtil.getDateTimeKind = function (b) {
    ULSnd3:;
    var a = b.kind;
    return SP.ScriptUtility.isNullOrUndefined(a) ? 2 : a
};
SP.DataConvertUtil.createUnspecifiedDateTime = function (b, c, d, e, f, g, h) {
    ULSnd3:;
    var a = new Date(b, c, d, e, f, g, h); SP.DataConvertUtil.specifyDateTimeKind(a, 0);
    return a
};
SP.DataConvertUtil.createUtcDateTime = function (b) {
    ULSnd3:;
    var a = new Date(b); SP.DataConvertUtil.specifyDateTimeKind(a, 1);
    return a
};
SP.DataConvertUtil.createLocalDateTime = function (b) {
    ULSnd3:;
    var a = new Date(b); SP.DataConvertUtil.specifyDateTimeKind(a, 2);
    return a
};
SP.OfficeVersion = function () { };
SP.ArrayListEnumerator.registerClass("SP.ArrayListEnumerator", null, IEnumerator);
SP.BaseCollection.registerClass("SP.BaseCollection", null, IEnumerable);
SP.BaseCollectionEnumerator.registerClass("SP.BaseCollectionEnumerator", null, IEnumerator);
SP.Base64EncodedByteArray.registerClass("SP.Base64EncodedByteArray", null, SP.IFromJson);
SP.ConditionalScopeBase.registerClass("SP.ConditionalScopeBase", null, SP.IFromJson);
SP.ClientObjectPropertyConditionalScope.registerClass("SP.ClientObjectPropertyConditionalScope", SP.ConditionalScopeBase);
SP.ClientDictionaryResultHandler.registerClass("SP.ClientDictionaryResultHandler", null, SP.IFromJson);
SP.ClientActionInstantiateObjectPathResult.registerClass("SP.ClientActionInstantiateObjectPathResult", null, SP.IFromJson);
SP.ClientObjectCollectionResult.registerClass("SP.ClientObjectCollectionResult", null, SP.IFromJson);
SP.ClientUtility.registerClass("SP.ClientUtility");
SP.ClientXElement.registerClass("SP.ClientXElement", null, SP.IFromJson);
SP.ClientXDocument.registerClass("SP.ClientXDocument", null, SP.IFromJson);
SP.DataConvert.registerClass("SP.DataConvert");
SP.PageRequestFailedEventArgs.registerClass("SP.PageRequestFailedEventArgs", Sys.EventArgs);
SP.PageRequestSucceededEventArgs.registerClass("SP.PageRequestSucceededEventArgs", Sys.EventArgs);
SP.PageRequest.registerClass("SP.PageRequest");
SP.ResResources.registerClass("SP.ResResources");
SP.XmlWriter.registerClass("SP.XmlWriter");
SP.ClientHttpUtility.registerClass("SP.ClientHttpUtility");
SP.ClientConstants.registerClass("SP.ClientConstants");
SP.ClientSchemaVersions.registerClass("SP.ClientSchemaVersions");
SP.ClientErrorCodes.registerClass("SP.ClientErrorCodes");
SP.ClientAction.registerClass("SP.ClientAction");
SP.ClientActionSetProperty.registerClass("SP.ClientActionSetProperty", SP.ClientAction);
SP.ClientActionSetStaticProperty.registerClass("SP.ClientActionSetStaticProperty", SP.ClientAction);
SP.ClientActionInvokeMethod.registerClass("SP.ClientActionInvokeMethod", SP.ClientAction);
SP.ClientActionInvokeStaticMethod.registerClass("SP.ClientActionInvokeStaticMethod", SP.ClientAction);
SP.ClientActionInstantiateObjectPath.registerClass("SP.ClientActionInstantiateObjectPath", SP.ClientAction);
SP.ClientObject.registerClass("SP.ClientObject", null, SP.IFromJson);
SP.ClientObjectData.registerClass("SP.ClientObjectData");
SP.ClientObjectCollection.registerClass("SP.ClientObjectCollection", SP.ClientObject, IEnumerable);
SP.ClientObjectList.registerClass("SP.ClientObjectList", SP.ClientObjectCollection);
SP.ClientObjectPrototype.registerClass("SP.ClientObjectPrototype");
SP.ClientObjectCollectionPrototype.registerClass("SP.ClientObjectCollectionPrototype", SP.ClientObjectPrototype);
SP.ClientQueryProperty.registerClass("SP.ClientQueryProperty");
SP.ClientQueryInternal.registerClass("SP.ClientQueryInternal", SP.ClientAction);
SP.WebRequestEventArgs.registerClass("SP.WebRequestEventArgs", Sys.EventArgs);
SP.ClientRequest.registerClass("SP.ClientRequest");
SP.ClientRequestEventArgs.registerClass("SP.ClientRequestEventArgs", Sys.EventArgs);
SP.ClientRequestFailedEventArgs.registerClass("SP.ClientRequestFailedEventArgs", SP.ClientRequestEventArgs);
SP.ClientRequestSucceededEventArgs.registerClass("SP.ClientRequestSucceededEventArgs", SP.ClientRequestEventArgs);
SP.FormDigestInfo.registerClass("SP.FormDigestInfo");
SP.ClientRuntimeContext.registerClass("SP.ClientRuntimeContext", null, Sys.IDisposable);
SP.SimpleDataTable.registerClass("SP.SimpleDataTable", null, SP.IFromJson);
SP.ClientValueObject.registerClass("SP.ClientValueObject", null, SP.IFromJson);
SP.ClientValueObjectCollection.registerClass("SP.ClientValueObjectCollection", SP.ClientValueObject, IEnumerable);
SP.ExecutionScope.registerClass("SP.ExecutionScope", null, IDisposable);
SP.ConditionalExecutionScope.registerClass("SP.ConditionalExecutionScope", SP.ExecutionScope);
SP.DataRetrievalWithExpressionString.registerClass("SP.DataRetrievalWithExpressionString");
SP.ClientActionExecutionScopeStart.registerClass("SP.ClientActionExecutionScopeStart", SP.ClientAction);
SP.ClientActionExecutionScopeEnd.registerClass("SP.ClientActionExecutionScopeEnd", SP.ClientAction);
SP.ExceptionHandlingScope.registerClass("SP.ExceptionHandlingScope", null, SP.IFromJson);
SP.ExceptionHandlingExecutionScope.registerClass("SP.ExceptionHandlingExecutionScope", SP.ExecutionScope);
SP.ObjectIdentityQuery.registerClass("SP.ObjectIdentityQuery", SP.ClientAction);
SP.ObjectPath.registerClass("SP.ObjectPath");
SP.ObjectPathProperty.registerClass("SP.ObjectPathProperty", SP.ObjectPath);
SP.ObjectPathStaticProperty.registerClass("SP.ObjectPathStaticProperty", SP.ObjectPath);
SP.ObjectPathMethod.registerClass("SP.ObjectPathMethod", SP.ObjectPath);
SP.ObjectPathStaticMethod.registerClass("SP.ObjectPathStaticMethod", SP.ObjectPath);
SP.ObjectPathConstructor.registerClass("SP.ObjectPathConstructor", SP.ObjectPath);
SP.ObjectPathIdentity.registerClass("SP.ObjectPathIdentity", SP.ObjectPath);
SP.SerializationContext.registerClass("SP.SerializationContext");
SP.ResourceStrings.registerClass("SP.ResourceStrings");
SP.RuntimeRes.registerClass("SP.RuntimeRes");
SP.ParseJSONUtil.registerClass("SP.ParseJSONUtil");
SP.DataConvertUtil.registerClass("SP.DataConvertUtil");
SP.OfficeVersion.registerClass("SP.OfficeVersion");

function sp_runtime_initialize() {
    ULSnd3:; SP.Base64EncodedByteArray.$1R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; SP.Base64EncodedByteArray.$N = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "="]; SP.DataConvert.$1z = {}; SP.DataConvert.$2X = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000"]; SP.ClientConstants.AddExpandoFieldTypeSuffix = "AddExpandoFieldTypeSuffix"; SP.ClientConstants.Actions = "Actions"; SP.ClientConstants.ApplicationName = "ApplicationName"; SP.ClientConstants.Body = "Body"; SP.ClientConstants.CatchScope = "CatchScope"; SP.ClientConstants.ChildItemQuery = "ChildItemQuery"; SP.ClientConstants.ChildItems = "_Child_Items_"; SP.ClientConstants.ConditionalScope = "ConditionalScope"; SP.ClientConstants.Constructor = "Constructor"; SP.ClientConstants.Context = "Context"; SP.ClientConstants.ErrorInfo = "ErrorInfo"; SP.ClientConstants.ErrorMessage = "ErrorMessage"; SP.ClientConstants.ErrorStackTrace = "ErrorStackTrace"; SP.ClientConstants.ErrorCode = "ErrorCode"; SP.ClientConstants.ErrorTypeName = "ErrorTypeName"; SP.ClientConstants.ErrorValue = "ErrorValue"; SP.ClientConstants.ErrorDetails = "ErrorDetails"; SP.ClientConstants.ErrorTraceCorrelationId = "TraceCorrelationId"; SP.ClientConstants.ExceptionHandlingScope = "ExceptionHandlingScope"; SP.ClientConstants.ExceptionHandlingScopeSimple = "ExceptionHandlingScopeSimple"; SP.ClientConstants.QueryableExpression = "QueryableExpression"; SP.ClientConstants.FinallyScope = "FinallyScope"; SP.ClientConstants.HasException = "HasException"; SP.ClientConstants.Id = "Id"; SP.ClientConstants.Identity = "Identity"; SP.ClientConstants.IfFalseScope = "IfFalseScope"; SP.ClientConstants.IfTrueScope = "IfTrueScope"; SP.ClientConstants.IsNull = "IsNull"; SP.ClientConstants.LibraryVersion = "LibraryVersion"; SP.ClientConstants.TraceCorrelationId = "TraceCorrelationId"; SP.ClientConstants.Count = "Count"; SP.ClientConstants.Method = "Method"; SP.ClientConstants.Methods = "Methods"; SP.ClientConstants.Name = "Name"; SP.ClientConstants.Object = "Object"; SP.ClientConstants.ObjectPathId = "ObjectPathId"; SP.ClientConstants.ObjectPath = "ObjectPath"; SP.ClientConstants.ObjectPaths = "ObjectPaths"; SP.ClientConstants.ObjectType = "_ObjectType_"; SP.ClientConstants.ObjectIdentity = "_ObjectIdentity_"; SP.ClientConstants.ObjectIdentityQuery = "ObjectIdentityQuery"; SP.ClientConstants.ObjectVersion = "_ObjectVersion_"; SP.ClientConstants.Parameter = "Parameter"; SP.ClientConstants.Parameters = "Parameters"; SP.ClientConstants.ParentId = "ParentId"; SP.ClientConstants.Processed = "Processed"; SP.ClientConstants.Property = "Property"; SP.ClientConstants.Properties = "Properties"; SP.ClientConstants.Query = "Query"; SP.ClientConstants.QueryResult = "QueryResult"; SP.ClientConstants.Request = "Request"; SP.ClientConstants.Results = "Results"; SP.ClientConstants.ScalarProperty = "ScalarProperty"; SP.ClientConstants.SchemaVersion = "SchemaVersion"; SP.ClientConstants.ScopeId = "ScopeId"; SP.ClientConstants.SelectAll = "SelectAll"; SP.ClientConstants.SelectAllProperties = "SelectAllProperties"; SP.ClientConstants.SetProperty = "SetProperty"; SP.ClientConstants.SetStaticProperty = "SetStaticProperty"; SP.ClientConstants.StaticMethod = "StaticMethod"; SP.ClientConstants.StaticProperty = "StaticProperty"; SP.ClientConstants.SuffixChar = "$   Char"; SP.ClientConstants.SuffixByte = "$   Byte"; SP.ClientConstants.SuffixInt16 = "$  Int16"; SP.ClientConstants.SuffixUInt16 = "$ UInt16"; SP.ClientConstants.SuffixInt32 = "$  Int32"; SP.ClientConstants.SuffixUInt32 = "$ UInt32"; SP.ClientConstants.SuffixInt64 = "$  Int64"; SP.ClientConstants.SuffixUInt64 = "$ UInt64"; SP.ClientConstants.SuffixSingle = "$ Single"; SP.ClientConstants.SuffixDouble = "$ Double"; SP.ClientConstants.SuffixDecimal = "$Decimal"; SP.ClientConstants.SuffixTimeSpan = "$     TS"; SP.ClientConstants.SuffixArray = "$  Array"; SP.ClientConstants.Test = "Test"; SP.ClientConstants.TryScope = "TryScope"; SP.ClientConstants.Type = "Type"; SP.ClientConstants.TypeId = "TypeId"; SP.ClientConstants.Update = "$Update"; SP.ClientConstants.Version = "Version"; SP.ClientConstants.XmlElementName = "Name"; SP.ClientConstants.XmlElementAttributes = "Attributes"; SP.ClientConstants.XmlElementChildren = "Children"; SP.ClientConstants.XmlNamespace = "http://schemas.microsoft.com/sharepoint/clientquery/2009"; SP.ClientConstants.FieldValuesMethodName = "$m_dict"; SP.ClientConstants.RequestTokenHeader = "X-RequestToken"; SP.ClientConstants.FormDigestHeader = "X-RequestDigest"; SP.ClientConstants.useWebLanguageHeader = "X-UseWebLanguage"; SP.ClientConstants.useWebLanguageHeaderValue = "true"; SP.ClientConstants.ClientTagHeader = "X-ClientService-ClientTag"; SP.ClientConstants.TraceCorrelationIdRequestHeader = "SPResponseGuid"; SP.ClientConstants.TraceCorrelationIdResponseHeader = "SPRequestGuid"; SP.ClientConstants.greaterThan = "GT"; SP.ClientConstants.lessThan = "LT"; SP.ClientConstants.equal = "EQ"; SP.ClientConstants.notEqual = "NE"; SP.ClientConstants.greaterThanOrEqual = "GE"; SP.ClientConstants.lessThanOrEqual = "LE"; SP.ClientConstants.andAlso = "AND"; SP.ClientConstants.orElse = "OR"; SP.ClientConstants.not = "NOT"; SP.ClientConstants.expressionParameter = "ExpressionParameter"; SP.ClientConstants.expressionProperty = "ExpressionProperty"; SP.ClientConstants.expressionStaticProperty = "ExpressionStaticProperty"; SP.ClientConstants.expressionMethod = "ExpressionMethod"; SP.ClientConstants.expressionStaticMethod = "ExpressionStaticMethod"; SP.ClientConstants.expressionConstant = "ExpressionConstant"; SP.ClientConstants.expressionConvert = "ExpressionConvert"; SP.ClientConstants.expressionTypeIs = "ExpressionTypeIs"; SP.ClientConstants.ofType = "OfType"; SP.ClientConstants.take = "Take"; SP.ClientConstants.where = "Where"; SP.ClientConstants.orderBy = "OrderBy"; SP.ClientConstants.orderByDescending = "OrderByDescending"; SP.ClientConstants.thenBy = "ThenBy"; SP.ClientConstants.thenByDescending = "ThenByDescending"; SP.ClientConstants.queryableObject = "QueryableObject"; SP.ClientConstants.ServiceFileName = "client.svc"; SP.ClientConstants.ServiceMethodName = "ProcessQuery"; SP.ClientConstants.fluidApplicationInitParamUrl = "MS.SP.url"; SP.ClientConstants.fluidApplicationInitParamViaUrl = "MS.SP.viaUrl"; SP.ClientConstants.fluidApplicationInitParamRequestToken = "MS.SP.requestToken"; SP.ClientConstants.fluidApplicationInitParamFormDigestTimeoutSeconds = "MS.SP.formDigestTimeoutSeconds"; SP.ClientConstants.fluidApplicationInitParamFormDigest = "MS.SP.formDigest"; SP.ClientSchemaVersions.version14 = "14.0.0.0"; SP.ClientSchemaVersions.version15 = "15.0.0.0"; SP.ClientSchemaVersions.currentVersion = "15.0.0.0"; SP.ClientErrorCodes.genericError = -1; SP.ClientErrorCodes.accessDenied = -2147024891; SP.ClientErrorCodes.docAlreadyExists = -2130575257; SP.ClientErrorCodes.versionConflict = -2130575339; SP.ClientErrorCodes.listItemDeleted = -2130575338; SP.ClientErrorCodes.invalidFieldValue = -2130575155; SP.ClientErrorCodes.notSupported = -2147024846; SP.ClientErrorCodes.redirect = -2130575152; SP.ClientErrorCodes.notSupportedRequestVersion = -2130575151; SP.ClientErrorCodes.fieldValueFailedValidation = -2130575163; SP.ClientErrorCodes.itemValueFailedValidation = -2130575162; SP.ClientRequest.$2W = 0; SP.ClientRuntimeContext.$Q = null; SP.ResourceStrings.argumentExceptionMessage = "ArgumentExceptionMessage"; SP.ResourceStrings.argumentNullExceptionMessage = "ArgumentNullExceptionMessage"; SP.ResourceStrings.cC_AppIconAlt = "CC_AppIconAlt"; SP.ResourceStrings.cC_AppWebUrlNotSet = "CC_AppWebUrlNotSet"; SP.ResourceStrings.cC_ArrowImageAlt = "CC_ArrowImageAlt"; SP.ResourceStrings.cC_BackToSite = "CC_BackToSite"; SP.ResourceStrings.cC_ErrorGettingThemeInfo = "CC_ErrorGettingThemeInfo"; SP.ResourceStrings.cC_HelpLinkToolTip = "CC_HelpLinkToolTip"; SP.ResourceStrings.cC_HostSiteUrlNotSet = "CC_HostSiteUrlNotSet"; SP.ResourceStrings.cC_InvalidArgument = "CC_InvalidArgument"; SP.ResourceStrings.cC_InvalidJSON = "CC_InvalidJSON"; SP.ResourceStrings.cC_InvalidOperation = "CC_InvalidOperation"; SP.ResourceStrings.cC_PlaceHolderElementNotFound = "CC_PlaceHolderElementNotFound"; SP.ResourceStrings.cC_RequiredScriptNotLoaded = "CC_RequiredScriptNotLoaded"; SP.ResourceStrings.cC_SendFeedback = "CC_SendFeedback"; SP.ResourceStrings.cC_SettingsLinkToolTip = "CC_SettingsLinkToolTip"; SP.ResourceStrings.cC_TimeoutGettingThemeInfo = "CC_TimeoutGettingThemeInfo"; SP.ResourceStrings.cC_Welcome = "CC_Welcome"; SP.ResourceStrings.cannotFindContextWebServerRelativeUrl = "CannotFindContextWebServerRelativeUrl"; SP.ResourceStrings.cannotFindPlatformLibrary = "CannotFindPlatformLibrary"; SP.ResourceStrings.collectionHasNotBeenInitialized = "CollectionHasNotBeenInitialized"; SP.ResourceStrings.collectionModified = "CollectionModified"; SP.ResourceStrings.invalidUsageOfConditionalScope = "InvalidUsageOfConditionalScope"; SP.ResourceStrings.invalidUsageOfConditionalScopeNowAllowedAction = "InvalidUsageOfConditionalScopeNowAllowedAction"; SP.ResourceStrings.invalidUsageOfExceptionHandlingScope = "InvalidUsageOfExceptionHandlingScope"; SP.ResourceStrings.namedPropertyHasNotBeenInitialized = "NamedPropertyHasNotBeenInitialized"; SP.ResourceStrings.namedServerObjectIsNull = "NamedServerObjectIsNull"; SP.ResourceStrings.noObjectPathAssociatedWithObject = "NoObjectPathAssociatedWithObject"; SP.ResourceStrings.notSameClientContext = "NotSameClientContext"; SP.ResourceStrings.notSupportedQueryExpressionWithExpressionDetail = "NotSupportedQueryExpressionWithExpressionDetail"; SP.ResourceStrings.objectNameIdentity = "ObjectNameIdentity"; SP.ResourceStrings.objectNameMethod = "ObjectNameMethod"; SP.ResourceStrings.objectNameProperty = "ObjectNameProperty"; SP.ResourceStrings.objectNameType = "ObjectNameType"; SP.ResourceStrings.pP_DefaultMessage = "PP_DefaultMessage"; SP.ResourceStrings.pP_DefaultMessagePlural = "PP_DefaultMessagePlural"; SP.ResourceStrings.pP_MultipleEntry = "PP_MultipleEntry"; SP.ResourceStrings.pP_MultipleMatch = "PP_MultipleMatch"; SP.ResourceStrings.pP_NoMatch = "PP_NoMatch"; SP.ResourceStrings.pP_NoSuggestionsAvailable = "PP_NoSuggestionsAvailable"; SP.ResourceStrings.pP_RemovePerson = "PP_RemovePerson"; SP.ResourceStrings.pP_Results = "PP_Results"; SP.ResourceStrings.pP_ResultsIntervals = "PP_ResultsIntervals"; SP.ResourceStrings.pP_Searching = "PP_Searching"; SP.ResourceStrings.pP_ServerProblem = "PP_ServerProblem"; SP.ResourceStrings.pP_ShowingTopNumberOfResults = "PP_ShowingTopNumberOfResults"; SP.ResourceStrings.pP_SuggestionsAvailable = "PP_SuggestionsAvailable"; SP.ResourceStrings.propertyHasNotBeenInitialized = "PropertyHasNotBeenInitialized"; SP.ResourceStrings.rE_BrowserBinaryDataNotSupported = "RE_BrowserBinaryDataNotSupported"; SP.ResourceStrings.rE_BrowserNotSupported = "RE_BrowserNotSupported"; SP.ResourceStrings.rE_CannotAccessSite = "RE_CannotAccessSite"; SP.ResourceStrings.rE_CannotAccessSiteCancelled = "RE_CannotAccessSiteCancelled"; SP.ResourceStrings.rE_CannotAccessSiteOpenWindowFailed = "RE_CannotAccessSiteOpenWindowFailed"; SP.ResourceStrings.rE_DismissOpenWindowMessageLinkText = "RE_DismissOpenWindowMessageLinkText"; SP.ResourceStrings.rE_DomainDoesNotMatch = "RE_DomainDoesNotMatch"; SP.ResourceStrings.rE_FixitHelpMessage = "RE_FixitHelpMessage"; SP.ResourceStrings.rE_InvalidArgumentOrField = "RE_InvalidArgumentOrField"; SP.ResourceStrings.rE_InvalidOperation = "RE_InvalidOperation"; SP.ResourceStrings.rE_NoTrustedOrigins = "RE_NoTrustedOrigins"; SP.ResourceStrings.rE_OpenWindowButtonText = "RE_OpenWindowButtonText"; SP.ResourceStrings.rE_OpenWindowMessage = "RE_OpenWindowMessage"; SP.ResourceStrings.rE_RequestAbortedOrTimedout = "RE_RequestAbortedOrTimedout"; SP.ResourceStrings.rE_RequestUnexpectedResponse = "RE_RequestUnexpectedResponse"; SP.ResourceStrings.rE_RequestUnexpectedResponseWithContentTypeAndStatus = "RE_RequestUnexpectedResponseWithContentTypeAndStatus"; SP.ResourceStrings.requestAbortedOrTimedOut = "RequestAbortedOrTimedOut"; SP.ResourceStrings.requestEmptyQueryName = "RequestEmptyQueryName"; SP.ResourceStrings.requestHasBeenExecuted = "RequestHasBeenExecuted"; SP.ResourceStrings.requestUnexpectedResponse = "RequestUnexpectedResponse"; SP.ResourceStrings.requestUnexpectedResponseWithContentTypeAndStatus = "RequestUnexpectedResponseWithContentTypeAndStatus"; SP.ResourceStrings.requestUnexpectedResponseWithStatus = "RequestUnexpectedResponseWithStatus"; SP.ResourceStrings.requestUnknownResponse = "RequestUnknownResponse"; SP.ResourceStrings.serverObjectIsNull = "ServerObjectIsNull"; SP.ResourceStrings.sharePointClientCredentialsNotSupported = "SharePointClientCredentialsNotSupported"; SP.ResourceStrings.unknownError = "UnknownError"; SP.ResourceStrings.unknownResponseData = "UnknownResponseData"; SP.RuntimeRes.pP_SuggestionsAvailable = "Suggestions Available"; SP.RuntimeRes.rE_CannotAccessSiteOpenWindowFailed = 'This page cannot open a window to access the web site "{0}" or it cannot reference the opened window. Please browse to that web site, and then browse to this page again.'; SP.RuntimeRes.noObjectPathAssociatedWithObject = "The object is not associated with an object identity or the object identity is invalid."; SP.RuntimeRes.pP_ServerProblem = "Sorry, we're having trouble reaching the server."; SP.RuntimeRes.cannotFindPlatformLibrary = "Cannot find platform service library. For Windows Store application, please include Microsoft.SharePoint.Client.Runtime.WindowsStore.dll in the application package. For Windows Phone application, please include Microsoft.SharePoint.Client.Runtime.WindowsPhone.dll in the application package. For Windows application, please install Microsoft.SharePoint.Client.Runtime.Windows.dll in the GAC (Global Assembly Cache) or make it available for the Windows application."; SP.RuntimeRes.rE_BrowserNotSupported = "The required functionalities are not supported by your browser. Please make sure you are using IE 8 or above, or other modern browser. Please make sure the 'X-UA-Compatible' meta tag is set to be 'IE=8' or above."; SP.RuntimeRes.cC_InvalidJSON = "Invalid JSON data."; SP.RuntimeRes.invalidUsageOfExceptionHandlingScope = "Incorrect usage of exception handling scope."; SP.RuntimeRes.serverObjectIsNull = "Object reference not set to an instance of an object on server."; SP.RuntimeRes.pP_NoMatch = "We couldn't find an exact match."; SP.RuntimeRes.rE_OpenWindowMessage = "Sorry, we had some trouble accessing your site."; SP.RuntimeRes.argumentNullExceptionMessage = "The '{0}' argument cannot be null."; SP.RuntimeRes.cC_HelpLinkToolTip = "Help"; SP.RuntimeRes.propertyHasNotBeenInitialized = "The property or field has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested."; SP.RuntimeRes.pP_Results = "No results found||Showing {0} result||Showing {0} results"; SP.RuntimeRes.rE_RequestAbortedOrTimedout = "The request was aborted or timed out."; SP.RuntimeRes.rE_DismissOpenWindowMessageLinkText = "Dismiss"; SP.RuntimeRes.objectNameIdentity = "identity {0}"; SP.RuntimeRes.cC_HostSiteUrlNotSet = "The app's host site url is not set."; SP.RuntimeRes.rE_FixitHelpMessage = 'If the "Fix it" button doesn\'t solve the issue, {0}click here for more information{1}.'; SP.RuntimeRes.notSupportedQueryExpressionWithExpressionDetail = "The query expression '{0}' is not supported."; SP.RuntimeRes.rE_RequestUnexpectedResponse = "Unexpected response from server."; SP.RuntimeRes.pP_MultipleEntry = "You can only enter one name."; SP.RuntimeRes.rE_DomainDoesNotMatch = "Your domain doesn't match the expected domain for this app deployment."; SP.RuntimeRes.cC_BackToSite = "Back to Site"; SP.RuntimeRes.rE_InvalidOperation = "Invalid operation."; SP.RuntimeRes.collectionModified = "The collection was modified. Enumeration operation may not execute."; SP.RuntimeRes.cC_Welcome = "Welcome {0}"; SP.RuntimeRes.pP_DefaultMessagePlural = "Enter names or email addresses..."; SP.RuntimeRes.cC_AppIconAlt = "App Icon"; SP.RuntimeRes.cC_SendFeedback = "Send Feedback"; SP.RuntimeRes.cC_ArrowImageAlt = "Cravat Icon"; SP.RuntimeRes.cC_InvalidOperation = "Invalid operation."; SP.RuntimeRes.pP_ResultsIntervals = "0||1||2-"; SP.RuntimeRes.invalidUsageOfConditionalScopeNowAllowedAction = "Incorrect usage of conditional scope. Some actions, such as setting a property or invoking a method, are not allowed inside a conditional scope."; SP.RuntimeRes.pP_NoSuggestionsAvailable = "No Suggestions Available"; SP.RuntimeRes.rE_OpenWindowButtonText = "Fix It"; SP.RuntimeRes.unknownError = "Unknown Error"; SP.RuntimeRes.rE_InvalidArgumentOrField = "Invalid field or parameter {0}."; SP.RuntimeRes.rE_CannotAccessSite = 'This page cannot access the web site "{0}". Please browse to that web site, and then browse to this page again.'; SP.RuntimeRes.requestUnexpectedResponse = "Unexpected response from server."; SP.RuntimeRes.namedPropertyHasNotBeenInitialized = "The property or field '{0}' has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested."; SP.RuntimeRes.objectNameMethod = "method {0}"; SP.RuntimeRes.cC_PlaceHolderElementNotFound = "The chrome control's container element can't be found."; SP.RuntimeRes.cC_TimeoutGettingThemeInfo = "Cannot get theme information for chrome control due to time out."; SP.RuntimeRes.requestUnexpectedResponseWithStatus = "Unexpected response from server. The status code of response is '{0}'. The status text of response is '{1}'."; SP.RuntimeRes.unknownResponseData = "Unexpected response data from server."; SP.RuntimeRes.objectNameProperty = "property {0}"; SP.RuntimeRes.requestUnknownResponse = "Unknown response from the server."; SP.RuntimeRes.objectNameType = "type {0}"; SP.RuntimeRes.namedServerObjectIsNull = "Object reference not set to an instance of an object on server. The object is associated with {0}."; SP.RuntimeRes.argumentExceptionMessage = "The '{0}' argument is invalid."; SP.RuntimeRes.rE_RequestUnexpectedResponseWithContentTypeAndStatus = 'Unexpected response from the server. The content type of the response is "{0}". The status code is "{1}".'; SP.RuntimeRes.requestUnexpectedResponseWithContentTypeAndStatus = 'Unexpected response from the server. The content type of the response is "{0}". The status code is "{1}".'; SP.RuntimeRes.pP_DefaultMessage = "Enter a name or email address..."; SP.RuntimeRes.cC_AppWebUrlNotSet = "Cannot get the app theme information because the app web url is not set."; SP.RuntimeRes.sharePointClientCredentialsNotSupported = "Cannot contact web site '{0}' or the web site does not support SharePoint Online credentials. The response status code is '{1}'. The response headers are '{2}'."; SP.RuntimeRes.invalidUsageOfConditionalScope = "Incorrect usage of conditional scope."; SP.RuntimeRes.cC_ErrorGettingThemeInfo = "Cannot get the app theme information for chrome control."; SP.RuntimeRes.rE_CannotAccessSiteCancelled = 'This page cannot access the web site "{0}". The login is cancelled or timed out. Please browse to that web site, and then browse to this page again.'; SP.RuntimeRes.rE_NoTrustedOrigins = "There is no trusted URLs configured for the app deployment."; SP.RuntimeRes.pP_MultipleMatch = "Multiple entries matched, please click to resolve."; SP.RuntimeRes.requestAbortedOrTimedOut = "The request was aborted or timed out."; SP.RuntimeRes.cannotFindContextWebServerRelativeUrl = "Cannot find current web URL information on the page."; SP.RuntimeRes.cC_InvalidArgument = "Invalid parameter {0}."; SP.RuntimeRes.cC_SettingsLinkToolTip = "Settings"; SP.RuntimeRes.requestEmptyQueryName = "The property or query name is empty."; SP.RuntimeRes.pP_ShowingTopNumberOfResults = "Showing the top {0} results"; SP.RuntimeRes.cC_RequiredScriptNotLoaded = "Cannot get the app theme information because the required script sp.requestexecutor.js is not loaded."; SP.RuntimeRes.notSameClientContext = "The object is used in the context different from the one associated with the object."; SP.RuntimeRes.pP_Searching = "Searching"; SP.RuntimeRes.pP_RemovePerson = "Remove person or group {0}"; SP.RuntimeRes.rE_BrowserBinaryDataNotSupported = "Your browser doesn't support some HTML5 features like the File API operations. Please use a browser that does support these features."; SP.RuntimeRes.collectionHasNotBeenInitialized = "The collection has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested."; SP.RuntimeRes.requestHasBeenExecuted = "The request has been executed."; SP.ParseJSONUtil.$2q = new RegExp('(^|[^\\\\])\\"\\\\/Date\\(([0-9]+(?:,[0-9]+){2,6})\\)\\\\/\\"', "g"); SP.ParseJSONUtil.$2p = new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})\\)\\\\/\\"', "g"); SP.ParseJSONUtil.$2r = new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)\\)\\\\/\\"', "g"); SP.ParseJSONUtil.$2s = new RegExp('(^|[^\\\\])\\"\\\\/Guid\\(([0-9a-fA-F\\-]+)\\)\\\\/\\"', "g"); SP.ParseJSONUtil.$2u = new RegExp("^[\\],:{}\\s]*$"); SP.ParseJSONUtil.$2v = new RegExp('\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"); SP.ParseJSONUtil.$2w = new RegExp('"[^"\\\\\\n\\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"); SP.ParseJSONUtil.$2t = new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"); SP.ParseJSONUtil.$2o = new RegExp('(^|[^\\\\])\\"\\\\/Base64Binary\\(([^\\)]*)\\)\\\\/\\"', "g"); SP.OfficeVersion.majorBuildVersion = 16; SP.OfficeVersion.previousMajorBuildVersion = 14; SP.OfficeVersion.maxCompatibilityLevel = 15; SP.OfficeVersion.majorVersion = "16"; SP.OfficeVersion.previousVersion = "14"; SP.OfficeVersion.maxCompatibility = "15"; SP.OfficeVersion.majorVersionDotZero = "16.0"; SP.OfficeVersion.previousVersionDotZero = "14.0"; SP.OfficeVersion.assemblyVersion = "16.0.0.0"; SP.OfficeVersion.wssMajorVersion = "4"
}
sp_runtime_initialize();
typeof RegisterModuleInit == "function" && RegisterModuleInit("sp.runtime.js", sp_runtime_initialize);
SP.ClientRequest._validateJson = function (a) {
    ULSnd3:;
    return /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))
};
SP.ClientResult = function () { };
SP.ClientResult.prototype = {
    m_value: null,
    get_value: function () {
        ULSnd3:;
        return this.m_value
    },
    setValue: function (a) {
        ULSnd3:; this.m_value = a
    },
    fromJson: function (a) {
        ULSnd3:;
        if (SP.ScriptUtility.isNullOrUndefined(a)) return; this.m_value = SP.DataConvert.fixupType(null, a)
    },
    customFromJson: function () {
        ULSnd3:;
        return false
    }
};
SP.ClientResult.registerClass("SP.ClientResult", null, SP.IFromJson);
SP.Result = function () { };
SP.Result.prototype = {
    m_value: 0,
    get_value: function () {
        ULSnd3:;
        return this.m_value
    },
    fromJson: function (a) {
        ULSnd3:; this.m_value = a
    },
    customFromJson: function () {
        ULSnd3:;
        return false
    }
};
SP.Result.registerClass("SP.Result", null, SP.IFromJson);
SP.BooleanResult = SP.Result;
SP.ByteResult = SP.Result;
SP.IntResult = SP.Result;
SP.DoubleResult = SP.Result;
SP.DateTimeResult = SP.Result;
SP.GuidResult = SP.Result;
SP.StringResult = SP.Result;
SP.JsonObjectResult = SP.Result;
typeof Sys != "undefined" && Sys && Sys.Application && Sys.Application.notifyScriptLoaded();
typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function" && NotifyScriptLoadedAndExecuteWaitingJobs("sp.runtime.js");
typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkEnd_sp.runtime.js");