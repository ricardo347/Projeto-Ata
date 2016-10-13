﻿function ULSZvE() {
    var o = new Object;
    o.ULSTeamName = "Microsoft SharePoint Foundation";
    o.ULSFileName = "SP.Core.js";
    return o;
}
if ("undefined" == typeof g_all_modules) g_all_modules = {};
g_all_modules["sp.core.js"] = {
    version: {
        rmj: 16,
        rmm: 0,
        rup: 5708,
        rpr: 1210
    }
};
typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkBegin_sp.core.js");
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
SP.EnumerableArray = function (a) {
    ULSZvE:;
    if (a == null) a = []; this._m_array = a
};
SP.EnumerableArray.prototype = {
    _m_array: null,
    getEnumerator: function () {
        ULSZvE:;
        return new SP._arrayEnumerator(this._m_array)
    },
    get_length: function () {
        ULSZvE:;
        return this._m_array.length
    },
    get_count: function () {
        ULSZvE:;
        return this._m_array.length
    },
    add: function (a) {
        ULSZvE:; this._m_array.push(a)
    },
    addRange: function (a) {
        ULSZvE:; Array.addRange(this._m_array, a)
    },
    clear: function () {
        ULSZvE:; this._m_array.length = 0
    },
    contains: function (a) {
        ULSZvE:;
        return Array.contains(this._m_array, a)
    },
    indexOf: function (b, a) {
        ULSZvE:;
        return Array.indexOf(this._m_array, b, a)
    },
    insert: function (a, b) {
        ULSZvE:; Array.insert(this._m_array, a, b)
    },
    remove: function (a) {
        ULSZvE:; Array.remove(this._m_array, a)
    },
    removeAt: function (a) {
        ULSZvE:; Array.removeAt(this._m_array, a)
    },
    toArray: function () {
        ULSZvE:;
        return this._m_array
    },
    toArrayList: function () {
        ULSZvE:;
        return this._m_array
    }
};
SP._arrayEnumerator = function (a) {
    ULSZvE:; this._m_array = a; this._m_index = -1; this.current = null
};
SP._arrayEnumerator.prototype = {
    _m_index: 0,
    _m_array: null,
    get_current: function () {
        ULSZvE:;
        return this._m_array[this._m_index]
    },
    moveNext: function () {
        ULSZvE:; this._m_index++; this.current = this._m_array[this._m_index];
        return this._m_index < this._m_array.length
    },
    reset: function () {
        ULSZvE:; this.current = null; this._m_index = -1
    }
};
SP.EnumerableArray.registerClass("SP.EnumerableArray", null, IEnumerable);
SP._arrayEnumerator.registerClass("SP._arrayEnumerator", null, IEnumerator);
Type.registerNamespace("SP");
SP.BWsaStreamTypes = function () { };
SP.BWsaStreamTypes.prototype = {
    "static": 1,
    cyclic: 2
};
SP.BWsaStreamTypes.registerEnum("SP.BWsaStreamTypes", false);
SP.SQMDP = function () { };
SP.SQMDP.prototype = {
    none: 0,
    dataiD_SESSION_TYPE: 60,
    dataiD_BSQM_BROWSERINFO: 7982,
    dataiD_BSQM_MAXSTREAMROWS: 7993,
    dataiD_BSQM_MAXLSTREAMROWSOVERWRITTEN: 7994,
    dataiD_BSQM_MAXSTREAMROWSOVERWRITTENSTREAMID: 8047,
    dataiD_BSQM_MAXSTREAMROWSSTREAMID: 8048,
    dataiD_BSQM_OSDATA: 8049,
    dataiD_BSQM_COMMANDUIACTION: 8327,
    dataiD_BSQM_INVALIDVALUEDP: 8763,
    dataiD_OFFICESQMSESSIONTYPE: 8814,
    dataiD_BSQM_SCREENRESOLUTION: 9411,
    dataiD_BSQM_MOBILEDEVICE: 9412,
    dataiD_DOCUMENTID: 9797,
    dataiD_BSQMDOCUMENTID: 10273
};
SP.SQMDP.registerEnum("SP.SQMDP", false);
SP.IBWsaClient = function () { };
SP.IBWsaClient.registerInterface("SP.IBWsaClient");
SP.PageTransitionType = function () { };
SP.PageTransitionType.prototype = {
    none: 0,
    mdsToMds: 1,
    mdsToNonMds: 2,
    nonMdsToMds: 3,
    nonMdsToNonMds: 4
};
SP.PageTransitionType.registerEnum("SP.PageTransitionType", false);
SP.IBSQM = function () { };
SP.IBSQM.registerInterface("SP.IBSQM");
SP.BWsaConfig = function () {
    ULSZvE:; this.$1M_0 = [60, 7982, 7993, 7994, 8047, 8048, 8049, 9411, 9412]; this.$e_0 = ""; this.$8_0 = false; this.$D_0 = false; this.$14_0 = null; this.$m_0 = 18e5; this.$l_0 = 65536; this.$n_0 = 2147483647; this.$1R_0 = 9; this.$1S_0 = 1e3; this.$13_0 = 1e3
};
SP.BWsaConfig.prototype = {
    $e_0: null,
    $8_0: false,
    $D_0: false,
    $14_0: null,
    $m_0: 0,
    $l_0: 0,
    $n_0: 0,
    $1S_0: 0,
    $13_0: 0,
    $1R_0: 0,
    get_maxSessionMs: function () {
        ULSZvE:;
        return this.$m_0
    },
    set_maxSessionMs: function (a) {
        ULSZvE:; this.$m_0 = a;
        return a
    },
    get_uploadUrl: function () {
        ULSZvE:;
        return this.$e_0
    }
};
SP.Ticks = function () { };
SP.Ticks.getTicks32 = function () {
    ULSZvE:;
    var b = new Date,
        a = b.getTime();
    if (!SP.Ticks.$18) SP.Ticks.$18 = a;
    return 1 + a - SP.Ticks.$18 & 2147483647
};
SP.Ticks.getTicks64 = function () {
    ULSZvE:;
    var b = new Date,
        a = b.getTime(); a = a + 116444736e5; a = a * 1e4;
    return a
};
SP.TimerResetCheck = function () { };
SP.TimerResetCheck.isTimerResetNeeded = function () {
    ULSZvE:;
    var a = false,
        c = new Date,
        b = c.getTime();
    if (!SP.TimerResetCheck.$11 || b - SP.TimerResetCheck.$11 > 6e4) {
        a = true;
        SP.TimerResetCheck.$11 = b
    }
    return a
};
SP.StreamRowCounters = function () { };
SP.BWsaDatapoint = function (a) {
    ULSZvE:; this.m_WsaId = a; this.m_Value = 0; this.m_Ticks = SP.Ticks.getTicks32(); this.m_Count = 0; this.m_Sum = 0
};
SP.BWsaDatapoint.prototype = {
    m_WsaId: 0,
    m_Value: 0,
    m_Ticks: 0,
    m_Count: 0,
    m_Sum: 0
};
SP.WsaStreamRow = function (a) {
    ULSZvE:; this.m_Ticks = SP.Ticks.getTicks32(); this.m_Values = new Array(a)
};
SP.WsaStreamRow.prototype = {
    m_Ticks: 0,
    m_Values: null
};
SP.BWsaStream = function (b, c, d, a) {
    ULSZvE:;
    if (a < 1 || a > 1e3) a = 1e3; this.m_WsaId = b; this.m_StreamType = c; this.m_Width = d; this.m_MaxRows = a; this.m_RowCount = 0; this.m_RowsOverwritten = 0; this.m_Rows = {}
};
SP.BWsaStream.prototype = {
    m_WsaId: 0,
    m_StreamType: 0,
    m_Width: 0,
    m_MaxRows: 0,
    m_RowCount: 0,
    m_RowsOverwritten: 0,
    m_Rows: null
};
SP.BWsaHeader = function () {
    ULSZvE:; this.m_StartTime = SP.Ticks.getTicks64(); this.m_EndTime = 0
};
SP.BWsaHeader.prototype = {
    m_StartTime: 0,
    m_EndTime: 0,
    m_CorrelationId: null
};
SP.BWsaData = function () {
    ULSZvE:; this.m_cDataPoints = 0; this.m_cStreams = 0; this.m_cbStreams = 0; this.m_wsaHeader = new SP.BWsaHeader; this.m_wsaDatapoints = {}; this.m_wsaStreams = {}
};
SP.BWsaData.prototype = {
    m_cDataPoints: 0,
    m_cStreams: 0,
    m_cbStreams: 0,
    m_wsaHeader: null,
    m_wsaDatapoints: null,
    m_wsaStreams: null
};
SP.BWsaClient = function (d, c, b, a) {
    ULSZvE:; this.$$d_$1z_0 = Function.createDelegate(this, this.$1z_0); this.bWsaClientInit(d, c, b, a)
};
SP.BWsaClient.$24 = function () {
    ULSZvE:;
    var a = 0,
        c = window.navigator.userAgent,
        b = -1;
    if ((b = c.indexOf(" MSIE ")) > -1) {
        b += 6;
        a = 2 << 24
    } else if ((b = c.indexOf(" Firefox/")) > -1) {
        b += 9;
        a = 3 << 24
    } else if ((b = c.indexOf(" Chrome/")) > -1) {
        b += 8;
        a = 6 << 24
    } else if ((b = c.indexOf(" Safari/")) > -1 && (b = c.indexOf(" Version/")) > -1) {
        b += 9;
        a = 4 << 24
    } else if ((b = c.indexOf("Opera/")) > -1) {
        b += 6;
        a = 5 << 24
    } else {
        a = 1 << 24;
        b = -1
    }
    if (b >= 0) {
        var d = SP.BWsaClient.$1h(c.substr(b));
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer && d[0] === 7 && c.indexOf("Trident/4.0") >= 0) d[0] = 8;
        a = a | (d[0] << 16) + d[1]
    }
    try {
        if (window.navigator.cookieEnabled) a = a | 1073741824;
        else a = a | 1610612736
    } catch (e) { }
    a = a;
    return a
};
SP.BWsaClient.$1h = function (b) {
    ULSZvE:;
    var a = [0, 0];
    if (SP.BWsaClient.$1Q(b.charAt(0))) a[0] = parseInt(b);
    for (var c = 0; c < b.length; c++)
        if (!SP.BWsaClient.$1Q(b.charAt(c))) {
            b = b.substr(c + 1);
            break
        }
    if (SP.BWsaClient.$1Q(b.charAt(0))) a[1] = parseInt(b);
    if (a[0] < 0 || a[0] > 255 || a[1] < 0 || a[1] > 65535) {
        a[0] = 0;
        a[1] = 0
    }
    return a
};
SP.BWsaClient.$28 = function () {
    ULSZvE:;
    var c = 0,
        b = 1,
        a = window.navigator.userAgent;
    if (a.indexOf("Windows CE") >= 0) b = 3;
    else if (a.indexOf("Windows") >= 0) b = 2;
    else if (a.indexOf("PPC") >= 0 || a.indexOf("Macintosh") >= 0) b = 4;
    else if (a.indexOf("iPhone;") >= 0 || a.indexOf("iPad;") >= 0 || a.indexOf("iPod;") >= 0) b = 7;
    else if (a.indexOf("SunOS") >= 0) b = 5;
    else if (a.indexOf("Linux") >= 0) b = 6; c = b << 24;
    var d = "Windows NT ";
    if (b === 7) d = " OS ";
    var e = a.indexOf(d);
    if (e < 0) {
        d = "Mac OS X ";
        e = a.indexOf(d)
    }
    if (e >= 0) {
        var h = SP.BWsaClient.$1h(a.substr(e + d.length));
        c = c + ((h[0] << 16) + h[1])
    }
    var f = 0;
    try {
        var g = window.navigator.platform;
        if (a.indexOf("WOW64") !== -1) f = 2;
        else if (g === "Win64") f = 3;
        else if (g === "Win32" || g === "Linux i686") f = 1
    } catch (i) { }
    c = c | f << 29;
    return c
};
SP.BWsaClient.$29 = function () {
    ULSZvE:;
    var a = window.screen.width & 65535,
        b = window.screen.height & 65535;
    return (b << 16) + a
};
SP.BWsaClient.$25 = function () {
    ULSZvE:;
    var b = window.navigator.userAgent,
        a = 0;
    if (b.indexOf("iPhone;") >= 0) a = 1;
    else if (b.indexOf("iPad;") >= 0) a = 2;
    else if (b.indexOf("iPod;") >= 0) a = 3;
    return a
};
SP.BWsaClient.isNullOrUndefined = function (a) {
    ULSZvE:;
    var b = null;
    return a === b || typeof a === "undefined"
};
SP.BWsaClient.$1Q = function (a) {
    ULSZvE:;
    return a >= "0" && a <= "9"
};
SP.BWsaClient.getSQMLocationFromCUICommandInfo = function (c) {
    ULSZvE:;
    if (!c) return 0;
    var a = 0,
        b = c.RootType,
        d = c.RootLocation;
    if (b)
        if (b === "Ribbon") {
            if (d === "LowerRibbon") a = 2;
            else if (d === "UpperRibbon") a = 1
        } else if (b === "QAT") a = 3;
        else if (b === "Jewel") a = 4;
        else if (b === "ContextMenu") a = 19;
    return a
};
SP.BWsaClient.calcActionId = function (d) {
    ULSZvE:;
    for (var a = 5381, b = a, f = d.length, c = 0; c < f; c += 2) {
        a = ((a << 5) + a ^ d.charCodeAt(c)) & 4294967295;
        if (c === f - 1) break;
        b = ((b << 5) + b ^ d.charCodeAt(c + 1)) & 4294967295
    }
    var g = b * 35685,
        h = b * 23896 << 16,
        e = a + g + h & 4294967295;
    if (e < 0) e += 4294967296;
    return e
};
SP.BWsaClient.prototype = {
    bWsaClientInit: function (c, e, d, b) {
        ULSZvE:; this.$1_0 = new SP.BWsaData; this.$0_0 = new SP.BWsaConfig; this.$j_0 = false; this.$k_0 = 0; this.$X_0 = 0; this.$d_0 = false; this.$c_0 = {};
        for (var a = 0; a < this.$0_0.$1M_0.length; a++) this.$c_0[this.$0_0.$1M_0[a]] = true; this.$0_0.$e_0 = c; this.$0_0.$8_0 = c === "" ? false : e; this.$0_0.$D_0 = d && !!b; this.$0_0.$14_0 = b
    },
    $1_0: null,
    $0_0: null,
    $j_0: false,
    $k_0: 0,
    $X_0: 0,
    $d_0: false,
    $c_0: null,
    $S_0: null,
    get_isContinuation: function () {
        ULSZvE:;
        return this.$j_0
    },
    $2B_0: function () {
        ULSZvE:;
        var a = new SP.BWsaData,
            f = this.$c_0;
        for (var h in f) {
            var j = {
                key: h,
                value: f[h]
            },
                e = j.key,
                c = this.$1_0.m_wsaDatapoints[e];
            if (c) {
                var d = new SP.BWsaDatapoint(parseInt(e));
                d.m_Value = c.m_Value;
                d.m_Count = c.m_Count;
                d.m_Sum = c.m_Sum;
                a.m_wsaDatapoints[e] = d;
                a.m_cDataPoints++
            }
        }
        var g = this.$1_0.m_wsaStreams;
        for (var i in g) {
            var k = {
                key: i,
                value: g[i]
            },
                b = k.value,
                l = new SP.BWsaStream(b.m_WsaId, b.m_StreamType, b.m_Width, b.m_MaxRows);
            a.m_wsaStreams[b.m_WsaId] = l;
            a.m_cStreams++;
            a.m_cbStreams += 12
        }
        a.m_wsaHeader.m_CorrelationId = this.$1_0.m_wsaHeader.m_CorrelationId; this.$1_0 = a; this.$d_0 = false
    },
    $1T_0: function () {
        ULSZvE:;
        var a = this.$1_0.m_cDataPoints * 12 + this.$1_0.m_cbStreams;
        if (a >= this.$0_0.$l_0) {
            this.uploadWsaData();
            a = this.$1_0.m_cDataPoints * 12 + this.$1_0.m_cbStreams;
            return a >= this.$0_0.$l_0
        }
        return false
    },
    $1q_0: function (a) {
        ULSZvE:;
        try {
            if (this.$d_0 || this.$c_0[a]) return;
            this.$d_0 = true;
            this.$g_0(7982, SP.BWsaClient.$24());
            this.$g_0(8049, SP.BWsaClient.$28());
            this.$g_0(8814, 3);
            this.$g_0(9411, SP.BWsaClient.$29());
            this.$g_0(9412, SP.BWsaClient.$25())
        } catch (b) { }
    },
    $1m_0: function (d) {
        ULSZvE:;
        if (this.$0_0.$8_0) return true;
        if (!this.$0_0.$D_0) return false;
        var a = this.$0_0.$14_0;
        for (var b in a) {
            var c = {
                key: b,
                value: a[b]
            };
            if (c.value === d) return true
        }
        return false
    },
    setDw: function (a, c) {
        ULSZvE:;
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) return;
            if (Object.getType(a) !== Number || Object.getType(c) !== Number) return;
            if (a < 1 || a > this.$0_0.$n_0) return;
            if (c < 0 || c > 4294967295) {
                this.setDw(8763, a);
                return
            }
            if (this.$1T_0()) return;
            this.$1q_0(a);
            this.$a_0();
            var b = this.$1_0.m_wsaDatapoints[a];
            if (!b) {
                b = new SP.BWsaDatapoint(a);
                this.$1_0.m_wsaDatapoints[a] = b;
                this.$1_0.m_cDataPoints++
            }
            b.m_Value = c;
            b.m_Count++;
            b.m_Sum = c + b.m_Sum
        } catch (d) { }
    },
    setBool: function (b, a) {
        ULSZvE:;
        if (a) a = 1; this.setDw(b, a)
    },
    setBitsOrAnd: function (c, a, b) {
        ULSZvE:;
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) return;
            if (Object.getType(c) !== Number || Object.getType(a) !== Number || Object.getType(b) !== Number) return;
            if (a < 0 || a > 4294967295 || b < 0 || b > 4294967295) {
                this.setDw(8763, c);
                return
            }
            var d = this.$1_0.m_wsaDatapoints[c];
            if (d) {
                this.$a_0();
                d.m_Value &= b;
                d.m_Value |= a;
                d.m_Count++
            } else this.setDw(c, a)
        } catch (e) { }
    },
    setBitsOr: function (a, b) {
        ULSZvE:; this.setBitsOrAnd(a, b, 4294967295)
    },
    setBitsAnd: function (a, b) {
        ULSZvE:; this.setBitsOrAnd(a, 0, b)
    },
    setIfMax: function (b, a) {
        ULSZvE:;
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) return;
            if (Object.getType(b) !== Number || Object.getType(a) !== Number) return;
            var c = this.$1_0.m_wsaDatapoints[b];
            if (!c || c.m_Value < a) this.setDw(b, a);
            else this.$a_0()
        } catch (d) { }
    },
    setIfMin: function (b, a) {
        ULSZvE:;
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) return;
            if (Object.getType(b) !== Number || Object.getType(a) !== Number) return;
            var c = this.$1_0.m_wsaDatapoints[b];
            if (!c || c.m_Value > a) this.setDw(b, a);
            else this.$a_0()
        } catch (d) { }
    },
    incrementDw: function (a, b) {
        ULSZvE:;
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) return;
            if (Object.getType(a) !== Number || Object.getType(b) !== Number) return;
            if (!b) {
                this.$a_0();
                return
            }
            var c = 0,
                d = this.$1_0.m_wsaDatapoints[a];
            if (d) c = d.m_Value;
            this.setDw(a, c + b)
        } catch (e) { }
    },
    addToAverage: function (b, c, d) {
        ULSZvE:;
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) return;
            if (Object.getType(b) !== Number || Object.getType(c) !== Number) return;
            this.setDw(b, c);
            var a = this.$1_0.m_wsaDatapoints[b];
            if (a) {
                if (d > 1) a.m_Count += d - 1;
                a.m_Value = Math.floor(a.m_Sum / a.m_Count)
            }
        } catch (e) { }
    },
    createStream: function (a, c, d, b) {
        ULSZvE:;
        try {
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) return;
            if (a < 1 || a > this.$0_0.$n_0) return;
            if (c !== 1 && c !== 2) return;
            if (d < 1 || d > this.$0_0.$1R_0) return;
            if (this.$1T_0()) return;
            if (b < 1 || b > this.$0_0.$13_0) b = this.$0_0.$13_0;
            if (!this.$1_0.m_wsaStreams[a]) {
                var e = new SP.BWsaStream(a, c, d, b);
                this.$1_0.m_wsaStreams[a] = e;
                this.$1_0.m_cStreams++;
                this.$1_0.m_cbStreams += 12
            }
        } catch (f) { }
    },
    createStreamUnobfuscated: function (a, b, d, c) {
        ULSZvE:; this.createStream(a, b, d, c)
    },
    $2H_0: function (a) {
        ULSZvE:; delete a.m_Rows[a.m_RowsOverwritten]; this.$1_0.m_cbStreams -= (a.m_Width + 1) * 4; a.m_RowCount--; a.m_RowsOverwritten++;
        if (a.m_RowsOverwritten > SP.StreamRowCounters.maxOverwritten) {
            SP.StreamRowCounters.maxOverwritten = a.m_RowsOverwritten;
            this.setDw(7994, a.m_RowsOverwritten);
            this.setDw(8047, a.m_WsaId)
        }
    },
    addToStreamDw: function (e) {
        ULSZvE:;
        for (var a = [], b = 1; b < arguments.length; ++b) a[b - 1] = arguments[b];
        if (!a.length) return;
        try {
            for (var d = new SP.WsaStreamRow(a.length), c = 0; c < a.length; c++) d.m_Values[c] = a[c];
            this.$1u_0(e, d)
        } catch (f) { }
    },
    addToStreamDwUnobfuscated: function (c) {
        ULSZvE:;
        for (var b = [], a = 1; a < arguments.length; ++a) b[a - 1] = arguments[a]; this.addToStreamDw.apply(this, [c].concat(b))
    },
    $1u_0: function (b, c) {
        ULSZvE:;
        if (!this.$0_0.$8_0 && !this.$0_0.$D_0) return;
        if (b < 1 || b > this.$0_0.$n_0) return;
        if (this.$1T_0()) return; this.$1q_0(b);
        var a = this.$1_0.m_wsaStreams[b];
        if (a) {
            this.$a_0();
            a.m_RowCount >= a.m_MaxRows && a.m_StreamType === 2 && this.$2H_0(a);
            if (a.m_RowCount < a.m_MaxRows) {
                var e = a.m_RowCount + a.m_RowsOverwritten;
                a.m_Rows[e] = c;
                a.m_RowCount++;
                this.$1_0.m_cbStreams += 4;
                for (var d = 0; d < c.m_Values.length; d++) {
                    var f = c.m_Values[d].toString();
                    this.$1_0.m_cbStreams += f.length * 2
                }
                this.$1_0.m_cbStreams += (c.m_Values.length - 1) * 6;
                if (a.m_RowCount > SP.StreamRowCounters.maxRowCount) {
                    SP.StreamRowCounters.maxRowCount = a.m_RowCount;
                    this.setDw(7993, a.m_RowCount);
                    this.setDw(8048, a.m_WsaId)
                }
            } else {
                a.m_RowsOverwritten++;
                if (a.m_RowsOverwritten > SP.StreamRowCounters.maxOverwritten) {
                    SP.StreamRowCounters.maxOverwritten = a.m_RowsOverwritten;
                    this.setDw(7994, a.m_RowsOverwritten);
                    this.setDw(8047, a.m_WsaId)
                }
            }
        }
    },
    terminate: function () {
        ULSZvE:; this.uploadWsaData()
    },
    uploadWsaData: function () {
        ULSZvE:;
        try {
            this.$w_0();
            if (!this.$1_0 || !this.$0_0) return;
            if (!this.$0_0.$8_0 && !this.$0_0.$D_0) return;
            if (this.$0_0.$e_0 === "") {
                this.$0_0.$8_0 = false;
                return
            }
            var b = SP.Ticks.getTicks64();
            if (this.$k_0 > 0 && b <= this.$k_0 + this.$0_0.$1S_0) return;
            this.$k_0 = b;
            if (this.$d_0) {
                if (this.$j_0) this.setDw(60, 1);
                else {
                    this.setDw(60, 0);
                    this.$j_0 = true
                }
                this.writeDocIdStream();
                this.$1_0.m_wsaHeader.m_EndTime = SP.Ticks.getTicks64();
                var a = this.$2I_0(this.$1_0, this.$0_0);
                this.$2B_0();
                a && a.length > 0 && this.uploadWsaDataRequest(a)
            }
        } catch (c) { }
    },
    uploadWsaDataRequest: function (b) {
        ULSZvE:;
        if (!this.$S_0) this.$S_0 = new XMLHttpRequest;
        if (this.$S_0.readyState === 0 || this.$S_0.readyState === 4) {
            var a = true;
            this.$S_0.open("POST", this.$0_0.$e_0, a);
            this.$S_0.setRequestHeader("Content-Type", "application/json");
            this.$S_0.send(b)
        }
    },
    $23_0: function (a) {
        ULSZvE:;
        return a.replace(new RegExp("[\\\\]", "g"), "\\\\").replace(new RegExp('[\\"]', "g"), '\\\\\\"').replace(new RegExp("[\\/]", "g"), "\\\\/").replace(new RegExp("[\\b]", "g"), "\\\\b").replace(new RegExp("[\\f]", "g"), "\\\\f").replace(new RegExp("[\\n]", "g"), "\\\\n").replace(new RegExp("[\\r]", "g"), "\\\\r").replace(new RegExp("[\\t]", "g"), "\\\\t")
    },
    $2I_0: function (d, q) {
        ULSZvE:;
        var a = new Sys.StringBuilder,
            e = true,
            h = false,
            i = 0;
        if (q.$8_0) i = 16;
        if (q.$D_0) i |= 32; a.append("{"); a.append('"StartTime":' + d.m_wsaHeader.m_StartTime + ","); a.append('"EndTime":' + d.m_wsaHeader.m_EndTime + ","); a.append('"Flags":' + i + ","); d.m_wsaHeader.m_CorrelationId && a.append('"CorrelationId":"' + d.m_wsaHeader.m_CorrelationId + '",'); a.append('"wsaDatapoints":[');
        var j = d.m_wsaDatapoints;
        for (var m in j) {
            var r = {
                key: m,
                value: j[m]
            },
                g = r.value;
            if (!this.$1m_0(g.m_WsaId)) continue;
            h = true;
            !e && a.append(",");
            a.append('{"Id":' + g.m_WsaId + ",");
            a.append('"Val":' + g.m_Value + ",");
            a.append('"Tic":' + g.m_Ticks + "}");
            e = false
        }
        a.append('],"wsaStreams":['); e = true;
        var k = d.m_wsaStreams;
        for (var n in k) {
            var s = {
                key: n,
                value: k[n]
            },
                f = s.value;
            if (!this.$1m_0(f.m_WsaId)) continue;
            h = true;
            if (!f.m_RowCount) continue;
            var p = true;
            !e && a.append(",");
            a.append('{"Id":' + f.m_WsaId + ",");
            a.append('"Width":' + f.m_Width + ",");
            a.append('"Rows":[');
            var l = f.m_Rows;
            for (var o in l) {
                var t = {
                    key: o,
                    value: l[o]
                },
                    c = t.value;
                !p && a.append(",");
                a.append('{"Tic":' + c.m_Ticks + ",");
                a.append('"Vals":[');
                for (var b = 0; b < c.m_Values.length; b++) {
                    b > 0 && a.append(",");
                    if (SP.BWsaClient.isNullOrUndefined(c.m_Values[b])) a.append('""');
                    else if (Object.getType(c.m_Values[b]) === String) a.append('"' + this.$23_0(c.m_Values[b]) + '"');
                    else a.append(c.m_Values[b])
                }
                a.append("]}");
                p = false
            }
            a.append("]}");
            e = false
        }
        a.append("]}");
        return h ? a.toString() : null
    },
    isUserOptedIn: function () {
        ULSZvE:;
        return this.$0_0.$8_0
    },
    disable: function () {
        ULSZvE:;
        try {
            this.$w_0();
            this.$0_0.$8_0 = false
        } catch (a) { }
    },
    $g_0: function (a, c) {
        ULSZvE:;
        if (!this.$1_0.m_wsaDatapoints[a]) {
            var b = new SP.BWsaDatapoint(a);
            b.m_Value = c;
            this.$1_0.m_wsaDatapoints[a] = b;
            this.$1_0.m_cDataPoints++
        }
    },
    $w_0: function () {
        ULSZvE:;
        if (this.$X_0) {
            window.clearTimeout(this.$X_0);
            this.$X_0 = 0
        }
    },
    $a_0: function () {
        ULSZvE:;
        if (SP.TimerResetCheck.isTimerResetNeeded()) {
            this.$w_0();
            this.$X_0 = window.setTimeout(this.$$d_$1z_0, this.$0_0.$m_0)
        }
    },
    $1z_0: function () {
        ULSZvE:; this.$X_0 = 0; this.$w_0(); this.uploadWsaData(); this.$a_0()
    },
    addCommonDatapoint: function (a) {
        ULSZvE:; this.$c_0[a] = true
    },
    $h_0: 0,
    $V_0: null,
    registerPersistentDocId: function (a) {
        ULSZvE:;
        if (a && a.length === 4 && (a[0] || a[1] || a[2] || a[3])) {
            this.$h_0 = 1;
            this.$V_0 = a;
            return true
        } else return false
    },
    getActiveDocKey: function () {
        ULSZvE:;
        return this.$h_0
    },
    writeDocIdStream: function () {
        ULSZvE:;
        if (this.$h_0 && this.$V_0) {
            this.createStream(9797, 1, 5, 1);
            this.addToStreamDw(9797, this.$h_0, this.$V_0[0], this.$V_0[1], this.$V_0[2], this.$V_0[3]);
            this.setDw(10273, this.$V_0[0]);
            return true
        } else return false
    },
    getStreamById: function (a) {
        ULSZvE:;
        return this.$1_0.m_wsaStreams[a.toString()]
    },
    $y_0: function (e, h) {
        ULSZvE:;
        if (!e) return null;
        var d = new Array(0),
            f = 0,
            b = e.m_Rows;
        for (var c in b) {
            var g = {
                key: c,
                value: b[c]
            },
                a = g.value;
            if (a.m_Values.length > 0 && a.m_Values[0] === h) d[f++] = a
        }
        return d
    },
    setCorrelationId: function (a) {
        ULSZvE:; this.$1_0.m_wsaHeader.m_CorrelationId = a
    }
};
SP.RUMLogger = function (a) {
    ULSZvE:; this.$r_0 = -1; this.$4_0 = a; this.$4_0.createStream(11016, 1, 9, 1e3); this.$K_0 = this.$4_0.getStreamById(11016)
};
SP.RUMLogger.GetRUMLogger = function (a) {
    ULSZvE:;
    if (SP.RUMLogger.$2(a)) return null;
    if (!SP.RUMLogger.$P) SP.RUMLogger.$P = new SP.RUMLogger(a);
    return SP.RUMLogger.$P
};
SP.RUMLogger.$26 = function (d) {
    ULSZvE:;
    var c = 0;
    if (d) {
        var a = d;
        for (var b in a) {
            var e = {
                key: b,
                value: a[b]
            };
            c++
        }
    }
    return c
};
SP.RUMLogger.$z = function () {
    ULSZvE:;
    var a = window.self.performance;
    return SP.RUMLogger.$2(a) ? null : a
};
SP.RUMLogger.$1P = function () {
    ULSZvE:;
    var a = SP.RUMLogger.$z();
    if (null === a) return null;
    var b = a.timing;
    return SP.RUMLogger.$2(b) ? null : b
};
SP.RUMLogger.$2E = function (a) {
    ULSZvE:;
    return typeof a === "undefined"
};
SP.RUMLogger.$2 = function (a) {
    ULSZvE:;
    var b = null;
    return a === b || SP.RUMLogger.$2E(a)
};
SP.RUMLogger.prototype = {
    $4_0: null,
    $K_0: null,
    $1D_0: false,
    $1G_0: false,
    $v_0: false,
    $1H_0: false,
    $1E_0: false,
    $1C_0: false,
    $u_0: false,
    $1F_0: false,
    $M_0: 0,
    _navigationStart: 0,
    _unloadEventStart: 0,
    _unloadEventEnd: 0,
    _fetchStart: 0,
    _redirectStart: 0,
    _redirectEnd: 0,
    _domainLookupStart: 0,
    _domainLookupEnd: 0,
    _connectStart: 0,
    _secureConnectStart: 0,
    _connectEnd: 0,
    _requestStart: 0,
    _responseStart: 0,
    _responseEnd: 0,
    _domLoading: 0,
    _domComplete: 0,
    _loadEventStart: 0,
    _loadEventEnd: 0,
    get_IsMDSBlockCollected: function () {
        ULSZvE:;
        return this.$1D_0
    },
    SetPageTransitionType: function (a) {
        ULSZvE:;
        if (this.$1E_0) return;
        if (a && a !== 1 && a !== 2 && a !== 3 && a !== 4) return; this.$M_0 = a; this.$U_0(0, 32, this.$M_0); this.$1E_0 = true
    },
    ComputePageLoadTime: function () {
        ULSZvE:;
        if (this.$1C_0) return;
        var a = this.$1g_0(0);
        if (a.length < 18) return;
        var b = a[18];
        if (this.$M_0 === 1) {
            var c = this.$2A_0(0, 20);
            if (SP.RUMLogger.$2(c)) return;
            this.$r_0 = b - c
        } else if (this.$M_0 === 3) {
            var d = SP.RUMLogger.$1P();
            if (SP.RUMLogger.$2(d)) return;
            var e = d.navigationStart;
            if (SP.RUMLogger.$2(e)) return;
            this.$r_0 = b - e
        }
        this.$U_0(0, 33, this.$r_0); this.$1C_0 = true
    },
    Add: function (a, b) {
        ULSZvE:;
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) return;
        if (a > 0) return; this.CollectW3CPerformanceTimings(); this.$U_0(a, b, +new Date)
    },
    $1o_0: function (a) {
        ULSZvE:;
        switch (a) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 34:
            case 35:
                return true;
            default:
                return false
        }
    },
    AddMDS: function (a, d) {
        ULSZvE:;
        for (var c = [], b = 2; b < arguments.length; ++b) c[b - 2] = arguments[b];
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) return; a = this.$1e_0(a);
        if (!this.$1o_0(a)) return; this.$M_0 === 1 && a === 20 && this.ResetW3CTimings(); this.CollectW3CPerformanceTimings(); this.$U_0(0, a, d); this.$1k_0(0, c)
    },
    AddTTLB: function () {
        ULSZvE:;
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) return; this.CollectW3CPerformanceTimings(); this.CollectW3CResourceTimings();
        var a = +new Date;
        if (this.$1G_0) this.$U_0(0, 19, a);
        else {
            this.$U_0(0, 18, a);
            this.$U_0(0, 19, a);
            this.$1G_0 = true
        }
        this.ComputePageLoadTime()
    },
    AddMDSBlock: function (a) {
        ULSZvE:;
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) return;
        if (SP.RUMLogger.$2(a) || !a.length) return; this.CollectW3CPerformanceTimings(); this.$1k_0(0, a); this.$1D_0 = true
    },
    DisplayDevDash: function () {
        ULSZvE:;
        if (SP.RUMLogger.$2(this.$4_0) || SP.RUMLogger.$2(this.$K_0)) return;
        var a = this.$1g_0(0),
            c = window.self.DeveloperDashboard;
        if (c && c.PostMsg) {
            var b = new Array(3);
            b[0] = "MS.RUMTelemetry";
            b[1] = "AddRUMData";
            b[2] = "";
            if (this.$v_0) {
                var e = !a[1] ? 0 : a[1] - a[0],
                    f = !a[2] ? 0 : a[2] - a[0],
                    g = !a[4] ? 0 : a[4] - a[0],
                    h = !a[5] ? 0 : a[5] - a[0],
                    i = !a[6] ? 0 : a[6] - a[0],
                    j = !a[7] ? 0 : a[7] - a[0],
                    k = !a[3] ? 0 : a[3] - a[0],
                    l = !a[11] ? 0 : a[11] - a[0],
                    m = !a[12] ? 0 : a[12] - a[0],
                    d = !a[13] ? 0 : a[13] - a[0],
                    n = !a[8] ? 0 : a[8] - a[0],
                    o = !a[10] ? 0 : a[10] - a[0],
                    p = !a[14] ? 0 : a[14] - a[0],
                    q = !a[15] ? 0 : a[15] - a[0],
                    r = !a[16] ? 0 : a[16] - a[0],
                    s = !a[17] ? 0 : a[17] - a[0],
                    t = !a[18] ? 0 : a[18] - a[0],
                    u = !a[19] ? 0 : a[19] - a[0];
                b[2] += "<div>.....UnloadEvent: " + e + " - " + f + "</div><div>.....Fetch: " + k + " - " + d + "</div><div>.....Redirect: " + g + " - " + h + "</div><div>.....DomainLookup: " + i + " - " + j + "</div><div>.....Connect: " + n + " - " + o + "</div><div>.....Request: " + l + " - " + d + "</div><div>.....Response: " + m + " - " + d + "</div><div>.....Dom Loading: " + p + " - " + q + "</div><div>.....Load Event: " + r + " - " + s + "</div><div>.....TTLB: " + t + " - " + u + "</div><div>&nbsp;</div>"
            }
            c.PostMsg(b[0], b[1], b[2])
        }
    },
    SetCorrelationId: function (a) {
        ULSZvE:; this.$4_0 && !SP.RUMLogger.$2(a) && this.$4_0.setCorrelationId(a)
    },
    CollectW3CResourceTimings: function () {
        ULSZvE:; this.CollectAggW3CResourceTimings(); Flighting.VariantConfiguration.IsExpFeatureClientEnabled(42) && this.CollectRawW3CResourceTimings()
    },
    CollectAggW3CResourceTimings: function () {
        ULSZvE:;
        if (this.$u_0) return;
        var V = 11,
            d = []; Array.add(d, "css"); Array.add(d, "img"); Array.add(d, "link"); Array.add(d, "script"); Array.add(d, "xmlhttprequest");
        var l = SP.RUMLogger.$z();
        if (!l || !l.getEntriesByType) return; this.$u_0 = true;
        var g = l.getEntriesByType("resource");
        if (!g || g.length <= 0) return;
        for (var f = {}, G = [], H = false, I = false, J = false, K = false, n = 0; n < g.length; n++) {
            var b = g[n],
                M = b.initiatorType;
            if (!Array.contains(d, M)) continue;
            var o = b.name;
            if (Array.contains(G, o)) continue;
            Array.add(G, o);
            var h = this.GetHostName(o);
            if (!(h in f)) {
                f[h] = {};
                for (var r = 0; r < d.length; r++) f[h][d[r]] = [0, 0, 0, 0, 0, 0, 0, 0, 0, Number.MAX_VALUE, Number.MIN_VALUE]
            }
            var i = b.duration,
                e = b.startTime,
                W = b.redirectStart,
                X = b.redirectEnd,
                Y = b.fetchStart,
                R = b.domainLookupStart,
                S = b.domainLookupEnd,
                N = b.connectStart,
                p = b.connectEnd,
                Z = b.secureConnectionStart,
                O = b.requestStart,
                q = b.responseStart,
                j = b.responseEnd,
                T = f[h],
                a = T[M];
            a[0]++;
            if (this.IsCachedEntry(i, p, O, q)) a[1]++;
            a[2] += i;
            a[3] = i > a[3] ? i : a[3];
            var u, v, w;
            this.CollectSumMetric(u = {
                val: H
            }, R, S, e, w = {
                val: a[v = 4]
            }), H = u.val, a[v] = w.val;
            var x, y, z;
            this.CollectSumMetric(x = {
                val: I
            }, N, p, e, z = {
                val: a[y = 5]
            }), I = x.val, a[y] = z.val;
            if (p - N > 0) a[6]++;
            var A, B, C;
            this.CollectSumMetric(A = {
                val: J
            }, O, q, e, C = {
                val: a[B = 7]
            }), J = A.val, a[B] = C.val;
            var D, E, F;
            this.CollectSumMetric(D = {
                val: K
            }, q, j, e, F = {
                val: a[E = 8]
            }), K = D.val, a[E] = F.val;
            if (e) a[9] = a[9] < e ? a[9] : e;
            if (j) a[10] = a[10] > j ? a[10] : j
        }
        var L = SP.SimpleLogger.GetSimpleLogger(this.$4_0);
        if (SP.RUMLogger.$2(L)) return;
        var m = [],
            s = f;
        for (var t in s)
            for (var P = {
                key: t,
                value: s[t]
            }, k = 0; k < d.length; k++) {
                var U = P.value,
                    c = U[d[k]];
                if (!c[0]) continue;
                var Q = new SP.SlapiInternal.RUMAgg(P.key, d[k], c[0], c[1], Math.floor(c[2]), Math.floor(c[3]), Math.floor(c[4]), Math.floor(c[5]), Math.floor(c[6]), Math.floor(c[7]), Math.floor(c[8]), Math.floor(c[10] - c[9]));
                Array.add(m, Q)
            }
        m.length > 0 && L.WriteLogForEvents("RUMAgg", m); this.$u_0 = true;
        return
    },
    CollectRawW3CResourceTimings: function () {
        ULSZvE:;
        if (this.$1F_0) return;
        var c = SP.RUMLogger.$z();
        if (!c || !c.getEntriesByType) return;
        var b = c.getEntriesByType("resource");
        if (!b || b.length <= 0) return;
        var f = SP.SimpleLogger.GetSimpleLogger(this.$4_0);
        if (SP.RUMLogger.$2(f)) return;
        for (var d = [], e = 0; e < b.length; e++) {
            var a = b[e],
                g = a.name,
                h = this.GetHostName(g),
                i = this.GetFileName(g),
                j = this.GetTimingValue(a.startTime),
                k = this.GetTimingValue(a.redirectStart),
                l = this.GetTimingValue(a.redirectEnd),
                m = this.GetTimingValue(a.fetchStart),
                n = this.GetTimingValue(a.domainLookupStart),
                o = this.GetTimingValue(a.domainLookupEnd),
                p = this.GetTimingValue(a.connectStart),
                q = this.GetTimingValue(a.secureConnectionStart),
                r = this.GetTimingValue(a.connectEnd),
                s = this.GetTimingValue(a.requestStart),
                t = this.GetTimingValue(a.responseStart),
                u = this.GetTimingValue(a.responseEnd),
                v = new SP.SlapiInternal.RUMRaw(h, i, j, k, l, m, n, o, p, r, q, s, t, u);
            Array.add(d, v)
        }
        d.length > 0 && f.WriteLogForEvents("RUMRaw", d); this.$1F_0 = true
    },
    ResetW3CTimings: function () {
        ULSZvE:;
        var a = SP.RUMLogger.$z();
        if (SP.RUMLogger.$2(a)) return;
        var b = window.self.chrome;
        if (!SP.RUMLogger.$2(b) && a.webkitClearResourceTimings) a.webkitClearResourceTimings();
        else Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version > 9 && a.clearResourceTimings && a.clearResourceTimings()
    },
    GetHostName: function (a) {
        ULSZvE:;
        if (SP.ScriptUtility.isNullOrEmptyString(a)) return null;
        var b = new URI(a);
        return b.getHost()
    },
    GetFileName: function (a) {
        ULSZvE:;
        if (SP.ScriptUtility.isNullOrEmptyString(a)) return null;
        var b = new URI(a);
        return b.getLastPathSegment(false)
    },
    GetTimingValue: function (a) {
        ULSZvE:;
        return SP.RUMLogger.$2(a) ? 0 : Math.floor(a)
    },
    IsCachedEntry: function (b, c, a, d) {
        ULSZvE:;
        var e = window.self.chrome;
        if (!SP.RUMLogger.$2(e)) {
            if (d - a < 30 && a - c < 10 && b < 30) return true
        } else if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
            if (!(d - a) && !(a - c) && b < 3) return true; return false
    },
    CollectSumMetric: function (a, b, c, d, e) {
        ULSZvE:;
        if (!a.val)
            if (b < d || c < d) {
                a.val = true;
                e.val = -1
            } else e.val += c - b
    },
    CollectRUMDataForNonMDS: function () {
        ULSZvE:;
        try {
            this.CollectW3CPerformanceTimingsUsingSLAPI();
            this.CollectW3CResourceTimings()
        } catch (a) {
            ULS.SendExceptionJS("RUMNonMDS", a)
        }
    },
    CollectW3CPerformanceTimingsUsingSLAPI: function () {
        ULSZvE:;
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
        if (SP.RUMLogger.$2(this.$4_0)) return;
        var a = SP.RUMLogger.$1P();
        if (SP.RUMLogger.$2(a)) return;
        if (this.$1H_0) return;
        var w = SP.SimpleLogger.GetSimpleLogger(this.$4_0);
        if (SP.RUMLogger.$2(w)) return;
        var z = []; c = a.navigationStart; d = a.unloadEventStart; e = a.unloadEventEnd; f = a.fetchStart; g = a.redirectStart; h = a.redirectEnd; i = a.domainLookupStart; j = a.domainLookupEnd; k = a.connectStart; l = a.secureConnectionStart; m = a.connectEnd; n = a.requestStart; o = a.responseStart; p = a.responseEnd; q = a.domLoading; r = a.domComplete; s = a.loadEventStart; t = a.loadEventEnd; this._navigationStart = c; this._unloadEventStart = d; this._unloadEventEnd = e; this._fetchStart = f; this._redirectStart = g; this._redirectEnd = h; this._domainLookupStart = i; this._domainLookupEnd = j; this._connectStart = k; this._secureConnectStart = l; this._connectEnd = m; this._requestStart = n; this._responseStart = o; this._responseEnd = p; this._domLoading = q; this._domComplete = r; this._loadEventStart = s; this._loadEventEnd = t;
        var x = document.referrer;
        if (SP.ScriptUtility.isNullOrEmptyString(x)) this.$M_0 = 4;
        else if (x.indexOf("start.aspx") !== -1) this.$M_0 = 2;
        else this.$M_0 = 4;
        var b = this._navigationStart;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 9)
            if (!b)
                if (this._redirectStart) b = this._redirectStart;
                else b = this._fetchStart; var u = this._loadEventEnd - b;
        if (u < 0) u = 0;
        var v = [],
            y = new SP.SlapiInternal.RUMUsage(c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.$M_0, u, 0, 0); Array.add(v, y); v.length > 0 && w.WriteLogForEvents("RUMUsage", v); this.$1H_0 = true
    },
    CollectW3CPerformanceTimings: function () {
        ULSZvE:;
        if (this.$v_0) return;
        if (SP.RUMLogger.$2(this.$4_0)) return;
        var b = ["navigationStart", "unloadEventStart", "unloadEventEnd", "fetchStart", "redirectStart", "redirectEnd", "domainLookupStart", "domainLookupEnd", "connectStart", "secureConnectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "domLoading", "domComplete", "loadEventStart", "loadEventEnd"],
            d = SP.RUMLogger.$1P();
        if (SP.RUMLogger.$2(d)) return;
        for (var c = new Array(b.length), e = 0, a = 0; a < b.length; a++) {
            var f = d[b[a]];
            if (SP.RUMLogger.$2(f)) continue;
            c[e++] = a + 0;
            c[e++] = f
        }
        this.$1j_0(0, c); this.$v_0 = true
    },
    $U_0: function (b, e, f) {
        ULSZvE:;
        var d = this.$4_0.$y_0(this.$K_0, b);
        if (!d.length) {
            var a = this.$1a_0(b);
            a[1] = e;
            a[2] = f;
            var c;
            (c = this.$4_0).addToStreamDw.apply(c, [11016].concat(a))
        } else this.$1s_0(d, b, e, f)
    },
    $1s_0: function (b, h, i, j) {
        ULSZvE:;
        for (var a = 1, d = false, e = 0; e < b.length && !d; e++) {
            var c = b[e];
            a = 1;
            for (; a < c.m_Values.length && c.m_Values[a + 1] !== ""; a += 2)
                if (c.m_Values[a] === i) {
                    c.m_Values[a + 1] = j;
                    d = true;
                    break
                }
        }
        if (!d) {
            var f = b[b.length - 1];
            if (a === 9) {
                var k = this.$1a_0(h),
                    g;
                (g = this.$4_0).addToStreamDw.apply(g, [11016].concat(k));
                a = 1;
                b = this.$4_0.$y_0(this.$K_0, h);
                f = b[b.length - 1]
            }
            f.m_Values[a] = i;
            f.m_Values[a + 1] = j
        }
    },
    $1k_0: function (e, b) {
        ULSZvE:;
        if (e < 0 || e > 0) return;
        if (SP.RUMLogger.$2(b) || !b.length) return;
        for (var c = {}, a = 0; a < b.length; a++) {
            var j = this.$1e_0(a);
            if (SP.RUMLogger.$2(b[a]) || !this.$1o_0(j)) continue;
            c[j.toString()] = b[a]
        }
        var h = SP.RUMLogger.$26(c);
        if (!h) return;
        var i = 0,
            d = new Array(h),
            f = c;
        for (var g in f) {
            var k = {
                key: g,
                value: f[g]
            };
            d[i++] = parseInt(k.key);
            d[i++] = k.value
        }
        this.$1j_0(e, d)
    },
    $1j_0: function (c, a) {
        ULSZvE:;
        if (c < 0 || c > 0) return;
        if (SP.RUMLogger.$2(a) || !a.length) return;
        for (var b = 0; b < a.length; b += 2) this.$U_0(c, a[b], a[b + 1])
    },
    $2A_0: function (f, e) {
        ULSZvE:;
        var c = this.$4_0.$y_0(this.$K_0, 0);
        if (!c.length) return null;
        for (var d = 0; d < c.length; d++)
            for (var b = c[d], a = 1; a < b.m_Values.length && b.m_Values[a + 1] !== ""; a += 2)
                if (b.m_Values[a] === e) return b.m_Values[a + 1]; return null
    },
    $1g_0: function () {
        ULSZvE:;
        var b = this.$4_0.$y_0(this.$K_0, 0);
        if (!b.length) return null;
        for (var e = new Array(b.length * 9), d = 0; d < b.length; d++)
            for (var c = b[d], a = 1; a < c.m_Values.length && c.m_Values[a + 1] !== ""; a += 2) {
                var f = c.m_Values[a + 1];
                e[c.m_Values[a]] = f
            }
        return e
    },
    $1a_0: function (c) {
        ULSZvE:;
        if (c < 0 || c > 0) return null;
        var a = new Array(9); a[0] = c;
        for (var b = 1; b < 9; b += 2) {
            a[b] = 0;
            a[b + 1] = ""
        }
        return a
    },
    $1e_0: function (a) {
        ULSZvE:;
        switch (a) {
            case 0:
                return 20;
            case 1:
            case 2:
                return 21;
            case 3:
                return 22;
            case 4:
                return 23;
            case 5:
                return 24;
            case 6:
            case 7:
            case 8:
                return 25;
            case 9:
                return 26;
            case 10:
                return 27;
            case 11:
            case 12:
                return 28;
            case 13:
                return 29;
            case 14:
                return 30;
            case 15:
                return 31;
            case 16:
                return 34;
            case 17:
                return 35;
            default:
                return 4294967295
        }
    }
};
SP.SimpleLogger = function (a) {
    ULSZvE:; this.$W_0 = a; this.$W_0.createStream(1234, 1, 1, 1e4)
};
SP.SimpleLogger.$27 = function (d) {
    ULSZvE:;
    var c = 0;
    if (d) {
        var a = d;
        for (var b in a) {
            var e = {
                key: b,
                value: a[b]
            };
            c++
        }
    }
    return c
};
SP.SimpleLogger.GetSimpleLogger = function (a) {
    ULSZvE:;
    if (!a) return null;
    var b = new SP.SimpleLogger.BSQMProxy(a);
    return SP.SimpleLogger.GetSimpleLoggerWithIBSQM(b)
};
SP.SimpleLogger.GetSimpleLoggerWithIBSQM = function (a) {
    ULSZvE:;
    return !a ? null : new SP.SimpleLogger(a)
};
SP.SimpleLogger.prototype = {
    $W_0: null,
    SetCorrelationId: function (a) {
        ULSZvE:; this.$W_0.setCorrelationId(a)
    },
    UploadData: function () {
        ULSZvE:; this.$W_0.uploadData()
    },
    WriteLogForEvents: function (c, b) {
        ULSZvE:;
        if (!this.$1n_0(c)) return;
        var a = new Array(2); a[0] = "V2"; a[1] = c;
        if (b)
            if (b.length > 0) {
                a = new Array(b.length + 2);
                a[0] = "V2";
                a[1] = c;
                for (var f = 2, d = 0; d < b.length; d++) {
                    var g = Sys.Serialization.JavaScriptSerializer.serialize(b[d]);
                    if (this.$1l_0(g)) continue;
                    a[f] = g;
                    f++
                }
            } else {
                var h = Sys.Serialization.JavaScriptSerializer.serialize(b);
                if (this.$1l_0(h)) return;
                a[2] = h
            }
        var e;
        (e = this.$W_0).addToStreamDw.apply(e, [1234].concat(a))
    },
    WriteLog: function (f, c) {
        ULSZvE:;
        if (!this.$1n_0(f)) return;
        if (!c) c = {};
        var j = SP.SimpleLogger.$27(c);
        if (j > 40) return;
        for (var a = new Array(82), e = 0; e < 82; e++) a[e] = ""; a[0] = "V1"; a[1] = f;
        var d = 2,
            g = c;
        for (var h in g) {
            var b = {
                key: h,
                value: g[h]
            };
            a[d++] = b.key;
            if (b.value && Object.getType(b.value) === Date) a[d++] = b.value.getTime();
            else a[d++] = b.value
        }
        var i;
        (i = this.$W_0).addToStreamDw.apply(i, [1234].concat(a))
    },
    $1n_0: function (a) {
        ULSZvE:;
        return !a || a === "" || a === "undefined" ? false : true
    },
    $1l_0: function (a) {
        ULSZvE:;
        return a.length > 15360 ? true : false
    }
};
SP.SimpleLogger.BSQMProxy = function (a) {
    ULSZvE:; this.$R_0 = a
};
SP.SimpleLogger.BSQMProxy.prototype = {
    $R_0: null,
    setCorrelationId: function (a) {
        ULSZvE:; this.$R_0.setCorrelationId(a)
    },
    setLogSessionMs: function (a) {
        ULSZvE:; this.$R_0.$0_0.set_maxSessionMs(a)
    },
    setMaxDataSize: function (a) {
        ULSZvE:; this.$R_0.$0_0.$l_0 = a
    },
    createStream: function (a, b, c, d) {
        ULSZvE:; this.$R_0.createStream(a, b, c, d)
    },
    addToStreamDw: function (d) {
        ULSZvE:;
        for (var c = [], a = 1; a < arguments.length; ++a) c[a - 1] = arguments[a];
        var b;
        (b = this.$R_0).addToStreamDw.apply(b, [d].concat(c))
    },
    uploadData: function () {
        ULSZvE:; UpdateCorrelationIdForAppCacheIfNeeded(this.$R_0); this.$R_0.uploadWsaData()
    }
};
SP.SimpleLoggerConstants = function () { };
Type.registerNamespace("SP.UI");
SP.UI.Orientation = function () { };
SP.UI.Orientation.prototype = {
    horizontal: 0,
    vertical: 1
};
SP.UI.Orientation.registerEnum("SP.UI.Orientation", false);
SP.UI.AspMenu = function (a) {
    ULSZvE:; this.$i_2 = []; SP.UI.AspMenu.initializeBase(this, [a])
};
SP.UI.AspMenu.$1f = function (d) {
    ULSZvE:;
    for (var c = null, b = 0, e = d.childNodes.length; b < e; ++b) {
        var a = d.childNodes[b];
        if (a && a.nodeType === 1 && a.tagName.toLowerCase() === "ul") {
            c = a;
            break
        }
    }
    return c
};
SP.UI.AspMenu.prototype = {
    $L_2: null,
    $9_2: null,
    $x_2: 500,
    $16_2: 125,
    $15_2: 250,
    get_menuOrientation: function () {
        ULSZvE:;
        return Sys.UI.DomElement.containsCssClass(this.$L_2.parentNode, "ms-core-listMenu-horizontalBox") ? 0 : 1
    },
    set_menuOrientation: function (a) {
        ULSZvE:;
        if (!a) {
            Sys.UI.DomElement.removeCssClass(this.$L_2.parentNode, "ms-core-listMenu-verticalBox");
            Sys.UI.DomElement.addCssClass(this.$L_2.parentNode, "ms-core-listMenu-horizontalBox")
        } else if (a === 1) {
            Sys.UI.DomElement.removeCssClass(this.$L_2.parentNode, "ms-core-listMenu-horizontalBox");
            Sys.UI.DomElement.addCssClass(this.$L_2.parentNode, "ms-core-listMenu-verticalBox")
        }
        return a
    },
    get_disappearAfter: function () {
        ULSZvE:;
        return this.$x_2
    },
    set_disappearAfter: function (a) {
        ULSZvE:; this.$x_2 = a;
        return a
    },
    initialize: function () {
        ULSZvE:; Sys.Component.prototype.initialize.call(this); this.$L_2 = this.get_element().getElementsByTagName("ul")[0]; this.$2C_2(); this.$2D_2()
    },
    $2C_2: function () {
        ULSZvE:;
        for (var b = this.$L_2.getElementsByTagName("li"), a = 0, d = b.length; a < d; ++a) {
            var c = b[a];
            c.hoverDebouncer = 0;
            this.$1x_2(c)
        }
    },
    $10_2: function (b, c) {
        ULSZvE:;
        for (var a = c; a; a = a.parentNode)
            if (a === b) return true; return false
    },
    $1x_2: function (a) {
        ULSZvE:;
        var e = this; $addHandler(a, "mouseover", function () {
            ULSZvE:; e.showSubMenu(a)
        });
        var f = this; $addHandler(a, "mouseout", function () {
            ULSZvE:; f.hideSubMenu(a)
        });
        var c = a.querySelector(".menu-item");
        if (c) {
            var g = this;
            $addHandler(c, "focus", function () {
                ULSZvE:;
                if (a.parentNode) {
                    var b = a.parentNode.parentNode;
                    b && b.tagName && b.tagName.toUpperCase() === "LI" && g.showSubMenu(b)
                }
            })
        }
        var h = this; $addHandler(a, "focusout", function () {
            ULSZvE:; h.$1i_2(a)
        });
        var i = this; $addHandler(a, "blur", function () {
            ULSZvE:; i.$1i_2(a)
        });
        var d = a.querySelector(".additional-background");
        if (d) {
            var b = this;
            $addHandler(d, "click", function (d) {
                ULSZvE:;
                if (!d.target || !Sys.UI.DomElement.containsCssClass(d.target, "menu-item-text")) {
                    var e = a.hoverDebouncer,
                        c = 0;
                    if (e <= 1) c = 999;
                    else c = 1;
                    a.hoverDebouncer = c;
                    if (c > 1) b.showSubMenu(a);
                    else b.hideSubMenu(a);
                    SP.UI.UIUtility.cancelEvent(d);
                    return false
                }
            })
        }
    },
    $1i_2: function (a) {
        ULSZvE:;
        if (!this.$10_2(a, document.activeElement)) {
            var b = a.hoverDebouncer;
            if (b > 1) a.hoverDebouncer = 1;
            this.hideSubMenu(a)
        }
    },
    $1O_2: function (d, e, c, g) {
        ULSZvE:;
        var a = 0,
            f = document.documentElement.dir === "rtl",
            b = d.querySelector(".menu-item-text");
        if (!b) b = d.querySelector(".menu-item");
        if (!e) a = Sys.UI.DomElement.getLocation(b).x - Sys.UI.DomElement.getLocation(c).x;
        else {
            a = Sys.UI.DomElement.getLocation(b).y - Sys.UI.DomElement.getLocation(c).y;
            if (g) a += b.offsetHeight
        }
        if (f && !e) a = c.offsetWidth - a - b.offsetWidth;
        return a
    },
    showSubMenu: function (a) {
        ULSZvE:;
        var b = Sys.UI.DomElement.containsCssClass(a, "hover"),
            d = Sys.UI.DomElement.containsCssClass(a, "hover-off");
        if (a.hoverDebouncer > 0) return; a.hoverDebouncer = a.hoverDebouncer + 1;
        if (!b && !d) {
            if (Sys.UI.DomElement.containsCssClass(a, "dynamic-children")) {
                if (Sys.UI.DomElement.containsCssClass(a, "static")) {
                    var c = document.documentMode,
                        e = Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 8 && (SP.ScriptUtility.isNullOrUndefined(c) || c < 8),
                        f = document.documentElement.dir === "rtl";
                    if (f && !this.get_menuOrientation() && e) {
                        this.showSubMenuCore(a, -a.offsetWidth, 0);
                        return
                    }
                }
                this.showSubMenuCore(a, 0, 0)
            }
        } else if (!b) {
            Sys.UI.DomElement.addCssClass(a, "hover");
            Sys.UI.DomElement.removeCssClass(a, "hover-off")
        }
    },
    showSubMenuCore: function (a, e, i) {
        ULSZvE:;
        if (a.childNodes.length < 1) return; this.$9_2 && this.$9_2 !== a && !this.$10_2(this.$9_2, a) && this.hideSubMenuCore(this.$9_2, a);
        var f = document.documentElement.dir === "rtl",
            n = this.$1O_2(a, 1, a, true) + 6; Sys.UI.DomElement.addCssClass(a, "hover");
        var b = SP.UI.AspMenu.$1f(a);
        if (b) {
            var g = window.innerWidth;
            if (typeof g === "undefined" || g <= 0) g = window.document.body.clientWidth;
            var d = -1,
                h = !this.get_menuOrientation() && Sys.UI.DomElement.containsCssClass(a.parentNode, "static"),
                j = b.querySelector("li");
            if (h && a.offsetWidth >= this.$16_2 && a.offsetWidth <= this.$15_2) b.style.width = a.offsetWidth + "px";
            if (b.offsetWidth < this.$16_2) b.style.width = this.$16_2 + "px";
            else if (b.offsetWidth > this.$15_2) b.style.width = this.$15_2 + "px";
            if (j) {
                var k = h ? 0 : 1;
                d = this.$1O_2(a, k, a, false) - this.$1O_2(j, k, b, false)
            }
            if (h) {
                var l = AbsLeft(a),
                    m = d + e + b.offsetWidth;
                if (!f && l + m > g || f && l + a.offsetWidth - m < 0) d = a.offsetWidth - b.offsetWidth;
                if (!f) b.style.left = d + e + "px";
                else b.style.right = d + e + "px";
                b.style.top = n + i + "px";
                var p = a.querySelector(".menu-item")
            } else {
                if (!f) b.style.left = a.offsetWidth + e + "px";
                else b.style.right = a.offsetWidth + e + "px";
                b.style.top = d + i + "px"
            }
            b.style.zIndex = SP.UI.AspMenu.$1V;
            if (a && !a.getAttribute("isVisible")) {
                a.setAttribute("isVisible", "true");
                this.$9_2 && this.$i_2.push(this.$9_2);
                this.$9_2 = a;
                if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                    var o = String.format(SP.UI.AspMenu.$1W, this.get_element().id, this.$i_2.length),
                        c = document.createElement("iframe");
                    c.id = o;
                    c.setAttribute("frameBorder", "0");
                    c.setAttribute("scrolling", "no");
                    c.style.border = "none";
                    c.style.position = "absolute";
                    c.style.top = b.style.top;
                    c.style.left = b.style.left;
                    c.style.right = b.style.right;
                    c.style.height = b.offsetHeight + "px";
                    c.style.width = b.offsetWidth + "px";
                    c.style.zIndex = SP.UI.AspMenu.$1V - 2;
                    a.appendChild(c)
                }
            }
        }
    },
    hideSubMenu: function (a) {
        ULSZvE:;
        var c = a.hoverDebouncer;
        if (c <= 0) return; a.hoverDebouncer = a.hoverDebouncer - 1;
        if (a.hoverDebouncer <= 0 && Sys.UI.DomElement.containsCssClass(a, "hover")) {
            Sys.UI.DomElement.addCssClass(a, "hover-off");
            Sys.UI.DomElement.removeCssClass(a, "hover");
            var b = this;
            window.setTimeout(function () {
                ULSZvE:; Sys.UI.DomElement.containsCssClass(a, "hover-off") && b.hideSubMenuCore(a, null)
            }, this.$x_2)
        }
    },
    hideSubMenuCore: function (a, c) {
        ULSZvE:; do {
            var f = document.documentElement.dir === "rtl",
                b = SP.UI.AspMenu.$1f(a);
            if (b) {
                b.style.top = "";
                b.style.left = "";
                b.style.right = "";
                b.style.width = ""
            }
            Sys.UI.DomElement.removeCssClass(a, "hover-off");
            Sys.UI.DomElement.removeCssClass(a, "hover");
            this.$9_2 && a && a !== this.$9_2 && this.$10_2(a, this.$9_2) && this.hideSubMenuCore(this.$9_2, a);
            if (a === this.$9_2) {
                var e = String.format(SP.UI.AspMenu.$1W, this.get_element().id, this.$i_2.length),
                    d = $get(e);
                d && SP.UI.UIUtility.removeNode(d);
                this.$9_2 = this.$i_2.pop();
                a.getAttribute("isVisible") && a.removeAttribute("isVisible");
                if (c && this.$10_2(this.$9_2, c)) break;
                a = this.$9_2
            }
            if (!c) break
        } while (a)
    },
    $2D_2: function () {
        ULSZvE:;
        if (!SP.ScriptUtility.isNullOrUndefined(this.$L_2.querySelectorAll))
            for (var d = this.$L_2.querySelectorAll("a.new-window"), b = 0; b < d.length; ++b) d[b].target = "_blank";
        else
            for (var c = this.$L_2.getElementsByTagName("a"), a = 0; a < c.length; ++a)
                if (Sys.UI.DomElement.containsCssClass(c[a], "new-window")) c[a].target = "_blank"
    }
};
Type.registerNamespace("SP.Utilities");
SP.Utilities.CommandBlock = function (c, a, b) {
    ULSZvE:; this.state = c; this.commandFunction = a; this.finishFunction = b
};
SP.Utilities.TaskTelemetry = function (a) {
    ULSZvE:; this.startTime = a; this.finishTime = -1; this.cancelTime = -1; this.currentSlice = 0; this.sliceStart = new Array(1); this.sliceDuration = new Array(1); this.times = new Array(1)
};
SP.Utilities.TaskTelemetry.prototype = {
    startTime: null,
    sliceStart: null,
    sliceDuration: null,
    finishTime: 0,
    cancelTime: 0,
    currentSlice: 0,
    times: null,
    $1Y_0: function (b, c) {
        ULSZvE:;
        var a = this.currentSlice++; this.sliceStart[a] = b - this.startTime; this.sliceDuration[a] = c - b
    }
};
SP.Utilities.Task = function (d, e, f, g, c, b, a) {
    ULSZvE:; this.$$d_onBeforeUnload = Function.createDelegate(this, this.onBeforeUnload); this.$1r_0 = e; this.$3_0 = g; this.$12_0 = c; this.$b_0 = b; this.$I_0 = a; this.$B_0 = d; this.$1A_0 = f; this.$6_0 = null; this.$H_0 = 0; this.$q_0 = false; this.$Y_0 = false
};
SP.Utilities.Task.prototype = {
    $B_0: null,
    $1A_0: 0,
    $6_0: null,
    $H_0: 0,
    $q_0: false,
    $Y_0: false,
    $12_0: null,
    $b_0: null,
    $I_0: null,
    $f_0: null,
    $17_0: null,
    $3_0: null,
    $1r_0: 0,
    $A_0: null,
    $1U_0: "",
    start: function () {
        ULSZvE:;
        if (SP.Utilities.TaskCarousel.$2L(2)) {
            SP.Utilities.TaskCarousel.$p = SP.Utilities.TaskCarousel.$Q;
            SP.Utilities.TaskCarousel.$G = SP.Utilities.TaskCarousel.$6 = this.$6_0 = new Date;
            this.$A_0 = new SP.Utilities.TaskTelemetry(this.$6_0, this.$3_0.state);
            this.$H_0 = this.$3_0.commandFunction(this.$3_0.state, SP.Utilities.TaskCarousel.$1p);
            this.$A_0.$1Y_0(this.$6_0, SP.Utilities.TaskCarousel.$5, this.$3_0.state);
            if (this.$H_0 < 1) {
                SP.Utilities.TaskCarousel.$p = SP.Utilities.TaskCarousel.$T;
                !SP.Utilities.TaskCarousel.$J && SP.Utilities.TaskCarousel.$2J();
                SP.Utilities.TaskCarousel.$1t(this)
            } else if (this.$3_0.finishFunction) {
                this.$A_0.finishTime = new Date - this.$A_0.startTime;
                this.$3_0.finishFunction(this.$B_0, this.$3_0.state)
            }
        }
    },
    cancel: function (a) {
        ULSZvE:;
        return SP.Utilities.TaskCarousel.$19(this, a)
    },
    telemetry: function () {
        ULSZvE:;
        return this.$A_0
    },
    addTelemetryTime: function (a) {
        ULSZvE:; this.$A_0.times[a] = new Date - this.$A_0.startTime
    },
    getTelemetryTime: function (a) {
        ULSZvE:;
        return this.$A_0.times[a]
    },
    setPageExitText: function (a) {
        ULSZvE:; this.$1U_0 = a
    },
    onBeforeUnload: function () {
        ULSZvE:;
        var a;
        if (this.$f_0) {
            a = this.$f_0();
            if (typeof a !== "undefined") return a
        }
        var b = SP.Utilities.TaskCarousel.$19(this, 3);
        if (!b) {
            a = this.$1U_0;
            return a
        } else if (this === SP.Utilities.TaskCarousel.currentCancellableTask) SP.Utilities.TaskCarousel.currentCancellableTask = null
    }
};
SP.Utilities.Task.CancelType = function () { };
SP.Utilities.Task.CancelType.prototype = {
    explicit: 1,
    implicitByCommand: 2,
    implicitByNavigation: 3,
    implicitByTimeOut: 4
};
SP.Utilities.Task.CancelType.registerEnum("SP.Utilities.Task.CancelType", false);
SP.Utilities.Task.TaskType = function () { };
SP.Utilities.Task.TaskType.prototype = {
    autoCancel: 1,
    background: 2,
    deferred: 3
};
SP.Utilities.Task.TaskType.registerEnum("SP.Utilities.Task.TaskType", false);
SP.Utilities.tcsaver = function () { };
SP.Utilities.tcsaver.save = function () {
    ULSZvE:;
    var a = new SP.Utilities.tcsaver; a.$7_0 = SP.Utilities.TaskCarousel.$7; a.$5_0 = SP.Utilities.TaskCarousel.$5; a.$G_0 = SP.Utilities.TaskCarousel.$G; a.$J_0 = SP.Utilities.TaskCarousel.$J; a.$E_0 = SP.Utilities.TaskCarousel.$E; a.$F_0 = SP.Utilities.TaskCarousel.$F; a.$T_0 = SP.Utilities.TaskCarousel.$T; a.$Q_0 = SP.Utilities.TaskCarousel.$Q; a.$Z_0 = SP.Utilities.TaskCarousel.$Z; a.$1L_0 = SP.Utilities.TaskCarousel.currentCancellableTask; a.$C_0 = SP.Utilities.TaskCarousel.$C; a.$N_0 = SP.Utilities.TaskCarousel.$N;
    return a
};
SP.Utilities.tcsaver.restore = function (a) {
    ULSZvE:; SP.Utilities.TaskCarousel.$7 = a.$7_0; SP.Utilities.TaskCarousel.$5 = a.$5_0; SP.Utilities.TaskCarousel.$G = a.$G_0; SP.Utilities.TaskCarousel.$J = a.$J_0; SP.Utilities.TaskCarousel.$E = a.$E_0; SP.Utilities.TaskCarousel.$F = a.$F_0; SP.Utilities.TaskCarousel.$T = a.$T_0; SP.Utilities.TaskCarousel.$Q = a.$Q_0; SP.Utilities.TaskCarousel.$Z = a.$Z_0; SP.Utilities.TaskCarousel.currentCancellableTask = a.$1L_0; SP.Utilities.TaskCarousel.$C = a.$C_0; SP.Utilities.TaskCarousel.$N = a.$N_0
};
SP.Utilities.tcsaver.prototype = {
    $7_0: null,
    $5_0: null,
    $G_0: null,
    $J_0: 0,
    $E_0: 0,
    $F_0: 0,
    $T_0: 50,
    $Q_0: 500,
    $Z_0: 1e3,
    $1L_0: null,
    $C_0: null,
    $N_0: null,
    get_sharedTimer: function () {
        ULSZvE:;
        return this.$J_0
    },
    get_sharedCancelTimer: function () {
        ULSZvE:;
        return this.$E_0
    }
};
SP.Utilities.TaskCarousel = function () { };
SP.Utilities.TaskCarousel.resetSharedStopTimer = function (a) {
    ULSZvE:;
    if (SP.Utilities.TaskCarousel.$E) {
        window.clearTimeout(SP.Utilities.TaskCarousel.$E);
        if (a) SP.Utilities.TaskCarousel.$E = window.setTimeout(SP.Utilities.TaskCarousel.$1X, a)
    }
};
SP.Utilities.TaskCarousel.$2J = function () {
    ULSZvE:; SP.Utilities.TaskCarousel.$J = window.setInterval(SP.Utilities.TaskCarousel.$2K, SP.Utilities.TaskCarousel.$T * 2); SP.Utilities.TaskCarousel.$E = window.setTimeout(SP.Utilities.TaskCarousel.$1X, 36e5); SP.Utilities.TaskCarousel.$F = 0
};
SP.Utilities.TaskCarousel.$19 = function (a, e) {
    ULSZvE:;
    for (var c = SP.Utilities.TaskCarousel.$7.length, b = 0; b < c; b++)
        if (SP.Utilities.TaskCarousel.$7[b] === a) {
            if (a.$b_0) {
                var d = a.$b_0(a.$B_0, a.$3_0.state, e);
                a.$A_0.cancelTime = new Date - a.$A_0.startTime;
                if (!d) return false
            }
            if (a.$B_0) a.$B_0.style.cursor = "default";
            if (a.$Y_0)
                if (a.$I_0) a.$I_0(1, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state);
                else SP.Utilities.TaskCarousel.$o(1, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state);
            SP.Utilities.TaskCarousel.$1N(a);
            SP.Utilities.TaskCarousel.$7[b] = null;
            --SP.Utilities.TaskCarousel.$F
        }
    return true
};
SP.Utilities.TaskCarousel.$2L = function (e) {
    ULSZvE:;
    for (var c = true, d = SP.Utilities.TaskCarousel.$7.length, b = 0; b < d; b++) {
        var a = SP.Utilities.TaskCarousel.$7[b];
        if (a) {
            if (a.$b_0) {
                c = a.$b_0(a.$B_0, a.$3_0.state, e);
                a.$A_0.cancelTime = new Date - a.$A_0.startTime;
                if (!c) break
            }
            if (a.$B_0) a.$B_0.style.cursor = "default";
            if (a.$Y_0)
                if (a.$I_0) a.$I_0(1, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state);
                else SP.Utilities.TaskCarousel.$o(1, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state);
            SP.Utilities.TaskCarousel.$1N(a);
            SP.Utilities.TaskCarousel.$7[b] = null;
            --SP.Utilities.TaskCarousel.$F
        }
    }
    return c
};
SP.Utilities.TaskCarousel.$o = function (a, b) {
    ULSZvE:;
    if (!SP.Utilities.TaskCarousel.$C) {
        if (window.document.title && typeof window.document.title !== "undefined") SP.Utilities.TaskCarousel.$C = window.document.title;
        else SP.Utilities.TaskCarousel.$C = "";
        window.document.title = SP.Utilities.TaskCarousel.$N = SP.Utilities.TaskCarousel.$C
    } else if (window.document.title !== SP.Utilities.TaskCarousel.$N) SP.Utilities.TaskCarousel.$C = window.document.title;
    if (a >= 1) {
        window.document.title = SP.Utilities.TaskCarousel.$C;
        SP.Utilities.TaskCarousel.$C = null;
        SP.Utilities.TaskCarousel.$N = null
    } else {
        if (a >= 0) window.document.title = Math.round(a * 100) + "% " + SP.Utilities.TaskCarousel.$C;
        else window.document.title = Math.round(b / 1e3) + "s " + SP.Utilities.TaskCarousel.$C;
        SP.Utilities.TaskCarousel.$N = window.document.title
    }
};
SP.Utilities.TaskCarousel.$1p = function () {
    ULSZvE:; SP.Utilities.TaskCarousel.$5 = new Date;
    var a = SP.Utilities.TaskCarousel.$5 - SP.Utilities.TaskCarousel.$G;
    if (SP.Utilities.TaskCarousel.$F > 0) SP.Utilities.TaskCarousel.$p /= SP.Utilities.TaskCarousel.$F;
    return a > SP.Utilities.TaskCarousel.$p ? true : false
};
SP.Utilities.TaskCarousel.$1t = function (c) {
    ULSZvE:;
    for (var b = SP.Utilities.TaskCarousel.$7.length, a = 0; a < b; a++)
        if (!SP.Utilities.TaskCarousel.$7[a]) break; SP.Utilities.TaskCarousel.$7[a] = c; SP.Utilities.TaskCarousel.$F++
};
SP.Utilities.TaskCarousel.$2K = function () {
    ULSZvE:;
    for (var c = false, d = SP.Utilities.TaskCarousel.$7.length, b = 0; b < d; b++) {
        var a = SP.Utilities.TaskCarousel.$7[b];
        if (a) {
            SP.Utilities.TaskCarousel.$G = new Date;
            if (a.$1A_0 > 0 && SP.Utilities.TaskCarousel.$G - a.$6_0 > a.$1A_0) {
                SP.Utilities.TaskCarousel.$19(a, 4);
                continue
            }
            if (!a.$q_0 && SP.Utilities.TaskCarousel.$G - a.$6_0 >= SP.Utilities.TaskCarousel.$Q) {
                a.$q_0 = true;
                if (a.$B_0) a.$B_0.style.cursor = "wait";
                a.$12_0 && a.$12_0(a.$B_0, a.$3_0.state)
            } else if (!a.$Y_0 && SP.Utilities.TaskCarousel.$G - a.$6_0 >= SP.Utilities.TaskCarousel.$Z) {
                a.$Y_0 = true;
                SP.Utilities.TaskCarousel.currentCancellableTask = a;
                SP.Utilities.TaskCarousel.$1w(a, SP.Utilities.TaskCarousel.$21);
                SP.Utilities.TaskCarousel.$1y(a, a.$$d_onBeforeUnload);
                if (a.$I_0) a.$I_0(a.$H_0, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state);
                else SP.Utilities.TaskCarousel.$o(a.$H_0, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state)
            }
            a.$H_0 = a.$3_0.commandFunction(a.$3_0.state, SP.Utilities.TaskCarousel.$1p);
            a.$A_0.$1Y_0(SP.Utilities.TaskCarousel.$G, SP.Utilities.TaskCarousel.$5, a.$3_0.state);
            if (a.$H_0 >= 1) {
                if (a.$q_0 && a.$B_0) a.$B_0.style.cursor = "default";
                if (a.$3_0.finishFunction) {
                    a.$A_0.finishTime = new Date - a.$A_0.startTime;
                    a.$3_0.finishFunction(a.$B_0, a.$3_0.state)
                }
                SP.Utilities.TaskCarousel.$22(a);
                SP.Utilities.TaskCarousel.$1N(a);
                SP.Utilities.TaskCarousel.$7[b] = null;
                --SP.Utilities.TaskCarousel.$F;
                if (a.$I_0) a.$I_0(a.$H_0, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state);
                else SP.Utilities.TaskCarousel.$o(a.$H_0, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state);
                break
            } else c = true;
            if (a.$Y_0)
                if (a.$I_0) a.$I_0(a.$H_0, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state);
                else SP.Utilities.TaskCarousel.$o(a.$H_0, SP.Utilities.TaskCarousel.$5 - a.$6_0, a.$3_0.state)
        }
    } !c && SP.Utilities.TaskCarousel.$1X()
};
SP.Utilities.TaskCarousel.$1X = function () {
    ULSZvE:;
    if (SP.Utilities.TaskCarousel.$E) {
        window.clearTimeout(SP.Utilities.TaskCarousel.$E);
        SP.Utilities.TaskCarousel.$E = 0
    }
    if (SP.Utilities.TaskCarousel.$J) {
        window.clearInterval(SP.Utilities.TaskCarousel.$J);
        SP.Utilities.TaskCarousel.$J = 0
    }
    SP.Utilities.TaskCarousel.$F = 0
};
SP.Utilities.TaskCarousel.$21 = function () {
    ULSZvE:;
    if (SP.Utilities.TaskCarousel.currentCancellableTask) {
        SP.Utilities.TaskCarousel.$19(SP.Utilities.TaskCarousel.currentCancellableTask, 1);
        SP.Utilities.TaskCarousel.currentCancellableTask = null
    }
};
SP.Utilities.TaskCarousel.$1w = function (a, b) {
    ULSZvE:; a.$17_0 = window.document.onstop; window.document.onstop = b
};
SP.Utilities.TaskCarousel.$22 = function (a) {
    ULSZvE:; window.document.onstop = a.$17_0; a.$17_0 = null
};
SP.Utilities.TaskCarousel.$1y = function (a, b) {
    ULSZvE:; a.$f_0 = window.onbeforeunload; window.onbeforeunload = b
};
SP.Utilities.TaskCarousel.$1N = function (a) {
    ULSZvE:; window.onbeforeunload = a.$f_0; a.$f_0 = null
};
Type.registerNamespace("SP.Disposal");
SP.Disposal.DisposalManager = function () {
    ULSZvE:; this.$$d_$2G_0 = Function.createDelegate(this, this.$2G_0); this.$s_0 = []; $addHandler(window, "unload", this.$$d_$2G_0)
};
SP.Disposal.DisposalManager.get_instance = function () {
    ULSZvE:;
    if (!SP.Disposal.DisposalManager.$P) SP.Disposal.DisposalManager.$P = new SP.Disposal.DisposalManager;
    return SP.Disposal.DisposalManager.$P
};
SP.Disposal.DisposalManager.prototype = {
    registerForDisposal: function (a) {
        ULSZvE:; Array.add(this.$s_0, a)
    },
    $2G_0: function () {
        ULSZvE:; $removeHandler(window, "unload", this.$$d_$2G_0);
        for (var a = 0; a < this.$s_0.length; a++) try {
            var b = this.$s_0[a];
            b.dispose()
        } catch (c) { }
        SP.Disposal.DisposalManager.$P = null
    }
};
Type.registerNamespace("SP.Utilities.Internal");
SP.Utilities.Internal.ECBMenuItem = function () {
    ULSZvE:; SP.Utilities.Internal.ECBMenuItem.initializeBase(this)
};
SP.Utilities.Internal.ECBMenuItem.prototype = {
    CUICommand: null,
    CUIEnabledCommands: null,
    onMenuClick: null,
    IsSubMenu: false
};
SP.Utilities.Internal.CLVP = function () { };
SP.Utilities.Internal.CLVP.prototype = {
    CUIItemInfo: null,
    ctx: null
};
SP.Utilities.Internal.ECBAdapter = function (c, b, a) {
    ULSZvE:;
    if (b && !a) throw Error.argumentNull("onECBDataRetrievedKey"); this.$O_0 = c; this.$1I_0 = b; this.$1J_0 = a
};
SP.Utilities.Internal.ECBAdapter.prototype = {
    $t_0: false,
    $O_0: null,
    $1I_0: null,
    $1J_0: null,
    setEcbStateDirty: function () {
        ULSZvE:; this.$t_0 = true
    },
    executeECBCommand: function (c) {
        ULSZvE:;
        var a = this.getECBMenuItemForCommand(c);
        if (IsNullOrUndefined(a)) return false;
        var d = this.$O_0,
            b = a.onMenuClick;
        if (IsNullOrUndefined(b)) {
            if (IsNullOrUndefined(a.attributes.getNamedItem("onmenuclick"))) return false;
            b = a.attributes.getNamedItem("onmenuclick").value
        }
        if (!IsNullOrUndefined(b)) {
            _executeECBCommand(b, d);
            return true
        } else return false
    },
    getECBMenuItemForCommand: function (b) {
        ULSZvE:;
        var a = this.getSelectedItems();
        if (!this.$1b_0(a)) return null;
        var c = this.$1d_0(a);
        return this.$1c_0(c, b)
    },
    $1c_0: function (e, f) {
        ULSZvE:;
        for (var b = 0; b < e.childNodes.length; b++) {
            var c = e.childNodes[b];
            if (c.getAttributeNode("type").value !== "separator") {
                var a = c;
                if (a.CUICommand === f) return a;
                else if (a.IsSubMenu) {
                    var d = this.$1c_0(a, f);
                    if (!IsNullOrUndefined(d)) return d
                }
            }
        }
        return null
    },
    getSelectedItems: function () {
        ULSZvE:;
        var a = null,
            b = this.$O_0; a = GetSelectedItemsDict(b);
        return a
    },
    getCountOfSelectedItems: function () {
        ULSZvE:;
        var a = this.getSelectedItems();
        if (IsNullOrUndefined(a)) return 0;
        var b = this.$O_0;
        return CountSelectedItems(b)
    },
    canHandleECBCommand: function (b) {
        ULSZvE:;
        if (!this.supportsECBCommands()) return false;
        if (this.$t_0) {
            this.get_clvp().CUIItemInfo = null;
            this.$t_0 = false
        }
        var a = this.getSelectedItems();
        if (IsNullOrUndefined(a)) return false;
        var c = this.getCountOfSelectedItems();
        if (c === 1) {
            if (!this.$1b_0(a)) return false;
            var d = this.$1d_0(a);
            if (this.$1K_0(d, b)) return true
        } else if (c > 1 && this.bulkOperationAvailableForCommand(b)) return this.$1v_0(a, b);
        return false
    },
    supportsECBCommands: function () {
        ULSZvE:;
        if (IsNullOrUndefined(this.$O_0)) return false;
        var a = this.$O_0;
        return a ? a.inGridMode ? false : a.listTemplate !== "106" || a.isXslView : false
    },
    $1v_0: function (g, h) {
        ULSZvE:;
        var c = this.get_clvp();
        if (IsNullOrUndefined(c)) return false;
        var a = g;
        for (var b in a) {
            var e = {
                key: b,
                value: a[b]
            },
                d = e.key.split(",");
            if (!this.$1Z_0(c, d[1])) return false;
            var f = this.get_clvp().CUIItemInfo[d[1]];
            if (!this.$1K_0(f, h)) return false
        }
        return true
    },
    bulkOperationAvailableForCommand: function (a) {
        ULSZvE:;
        return a === "CheckOut" || a === "CheckIn" || a === "Delete" || a === "DiscardCheckOut" || a === "AddToTimeline" || a === "Moderate" || a === "MoveCopy"
    },
    $1d_0: function (f) {
        ULSZvE:;
        var a = f;
        for (var b in a) {
            var c = {
                key: b,
                value: a[b]
            },
                d = c.key.split(","),
                e = this.get_clvp().CUIItemInfo[d[1]];
            return e
        }
        return null
    },
    $1K_0: function (a, e) {
        ULSZvE:;
        var b = "cacheVal_" + e,
            f = a.getAttribute(b);
        if (!IsNullOrUndefined(f)) return f === "TRUE";
        for (var c = 0; c < a.childNodes.length; c++) {
            var g = a.childNodes[c];
            if (g.getAttributeNode("type").value !== "separator") {
                var d = g;
                if (this.$2F_0(d, e)) {
                    a.setAttribute(b, "TRUE");
                    return true
                } else if (d.IsSubMenu) {
                    var h = this.$1K_0(d, e);
                    if (h) {
                        a.setAttribute(b, "TRUE");
                        return true
                    }
                }
            }
        }
        a.setAttribute(b, "FALSE");
        return false
    },
    $2F_0: function (b, c) {
        ULSZvE:;
        if (IsNullOrUndefined(b.CUIEnabledCommands)) return false;
        for (var a = 0; a < b.CUIEnabledCommands.length; a++)
            if (b.CUIEnabledCommands[a] === c) return true; return false
    },
    $1b_0: function (f) {
        ULSZvE:;
        var c = this.get_clvp();
        if (IsNullOrUndefined(c)) return false;
        var a = f;
        for (var b in a) {
            var d = {
                key: b,
                value: a[b]
            },
                e = d.key.split(",");
            if (!this.$1Z_0(c, e[1])) return false
        }
        return true
    },
    $1Z_0: function (c, d) {
        ULSZvE:;
        var a = c.CUIItemInfo;
        if (IsNullOrUndefined(a)) {
            a = {};
            c.CUIItemInfo = a
        }
        var b = a[d];
        if (IsNullOrUndefined(b)) {
            b = this.$20_0(c, d);
            if (IsNullOrUndefined(b)) return false;
            a[d] = b
        }
        return true
    },
    $20_0: function (d, e) {
        ULSZvE:;
        var a = window.itemTable; window.itemTable = d.GetEcbInfo(e, this.$1I_0, this.$1J_0);
        if (IsNullOrUndefined(window.itemTable)) return null;
        var b = this.$O_0; window.dict = GetSelectedItemsDict(b);
        var c = BuildMenuWithInit(b); window.itemTable = a;
        if (!a) a = null;
        return c
    },
    get_clvp: function () {
        ULSZvE:;
        var a = this.$O_0;
        return !a ? null : a.clvp
    }
};
Type.registerNamespace("SP.ListOperation");
SP.ListOperation.ViewOperation = function () { };
SP.ListOperation.ViewOperation.getSelectedView = function () {
    ULSZvE:;
    return GetSelectedViewNative()
};
SP.ListOperation.ViewOperation.navigateUp = function (a) {
    ULSZvE:; NavigateUpNative(a)
};
SP.ListOperation.ViewOperation.refreshView = function (a) {
    ULSZvE:; RefreshViewNative(a)
};
SP.ListOperation.Selection = function () { };
SP.ListOperation.Selection.selectListItem = function (b, a) {
    ULSZvE:;
    return SelectListItemNative(b, a)
};
SP.ListOperation.Selection.getSelectedItems = function () {
    ULSZvE:;
    return GetSelectedItemsNative()
};
SP.ListOperation.Selection.getSelectedList = function () {
    ULSZvE:;
    return GetSelectedListNative()
};
SP.ListOperation.Selection.getSelectedView = function () {
    ULSZvE:;
    return GetSelectedViewNative()
};
SP.ListOperation.Selection.navigateUp = function (a) {
    ULSZvE:; NavigateUpNative(a)
};
SP.ListOperation.Selection.deselectAllListItems = function (a) {
    ULSZvE:;
    return DeselectAllListItemsNative(a)
};
SP.ListOperation.Overrides = function () { };
SP.ListOperation.Overrides.overrideDeleteConfirmation = function (b, a) {
    ULSZvE:;
    return OverrideDeleteConfirmationNative(b, a)
};
Type.registerNamespace("SP.SlapiInternal");
SP.SlapiInternal.ActionType = function () { };
SP.SlapiInternal.ActionType.prototype = {
    DefaultType: 0,
    UserAction: 1,
    ContentReady: 2,
    ServerRequest: 3,
    ServerResponse: 4
};
SP.SlapiInternal.ActionType.registerEnum("SP.SlapiInternal.ActionType", false);
SP.SlapiInternal.SPSocialActionLog = function (c, b, a) {
    ULSZvE:; this.Name = c; this.MBEntityType = b; this.YammerSwitchOn = a
};
SP.SlapiInternal.SPSocialActionLog.prototype = {
    Name: null,
    MBEntityType: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.UserEngagement = function (b, f, e, j, d, i, g, m, a, c, l, n, k, h) {
    ULSZvE:; this.EngagementName = b; this.UserAgent = f; this.Properties = e; this.UserKey = j; this.EngagementId = d; this.LogType = i; this.Duration = g; this.Source = m; this.ClientLanguage = a; this.ServerLanguage = c; this.SiteId = l; this.WebId = n; this.ListId = k; this.GroupId = h
};
SP.SlapiInternal.UserEngagement.prototype = {
    EngagementName: null,
    UserAgent: null,
    Properties: null,
    UserKey: null,
    EngagementId: null,
    LogType: null,
    Duration: 0,
    Source: null,
    ClientLanguage: null,
    ServerLanguage: null,
    SiteId: null,
    WebId: null,
    ListId: null,
    GroupId: null
};
SP.SlapiInternal.SPSocialGetFeed = function (b, e, f, c, d, a) {
    ULSZvE:; this.MBEntityType = b; this.SiteId = e; this.WebId = f; this.FeedSource = c; this.Newest = d; this.YammerSwitchOn = a
};
SP.SlapiInternal.SPSocialGetFeed.prototype = {
    MBEntityType: null,
    SiteId: null,
    WebId: null,
    FeedSource: null,
    Newest: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPSocialNewPost = function (b, h, j, f, g, e, k, i, c, d, a) {
    ULSZvE:; this.MBEntityType = b; this.SiteId = h; this.WebId = j; this.PostType = f; this.Length = g; this.Mentions = e; this.Tags = k; this.Links = i; this.Attachments = c; this.RootPostId = d; this.YammerSwitchOn = a
};
SP.SlapiInternal.SPSocialNewPost.prototype = {
    MBEntityType: null,
    SiteId: null,
    WebId: null,
    PostType: null,
    Length: 0,
    Mentions: 0,
    Tags: 0,
    Links: 0,
    Attachments: 0,
    RootPostId: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPSocialLikePost = function (b, f, g, d, c, e, a) {
    ULSZvE:; this.MBEntityType = b; this.SiteId = f; this.WebId = g; this.LikeOp = d; this.TargetedPost = c; this.Likers = e; this.YammerSwitchOn = a
};
SP.SlapiInternal.SPSocialLikePost.prototype = {
    MBEntityType: null,
    SiteId: null,
    WebId: null,
    LikeOp: null,
    TargetedPost: null,
    Likers: 0,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPSocialDeletePost = function (b, d, e, c, a) {
    ULSZvE:; this.MBEntityType = b; this.SiteId = d; this.WebId = e; this.TargetedPost = c; this.YammerSwitchOn = a
};
SP.SlapiInternal.SPSocialDeletePost.prototype = {
    MBEntityType: null,
    SiteId: null,
    WebId: null,
    TargetedPost: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPSocialFollowing = function (d, a, b, e, c) {
    ULSZvE:; this.FollowingType = d; this.TargetObjectType = a; this.TargetObjectId = b; this.ResultType = e; this.YammerSwitchOn = c
};
SP.SlapiInternal.SPSocialFollowing.prototype = {
    FollowingType: null,
    TargetObjectType: null,
    TargetObjectId: null,
    ResultType: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.SPUserProfilePage = function (c, b, a) {
    ULSZvE:; this.Action = c; this.ProfileOwner = b; this.YammerSwitchOn = a
};
SP.SlapiInternal.SPUserProfilePage.prototype = {
    Action: null,
    ProfileOwner: null,
    YammerSwitchOn: null
};
SP.SlapiInternal.PeopleSearchInstrumentation = function (b, a) {
    ULSZvE:; this.SubFeature = b; this.AnalysisResult = a
};
SP.SlapiInternal.PeopleSearchInstrumentation.prototype = {
    SubFeature: null,
    AnalysisResult: null
};
SP.SlapiInternal.ProjectDataAnalytics = function (g, c, h, f, a, d, e, b, j, i) {
    ULSZvE:; this.DbName = g; this.DbServerName = c; this.SiteId = h; this.SiteUrl = f; this.SiteSubscriptionId2 = a; this.EntityType = d; this.Category = e; this.CategoryName = b; this.Name = j; this.Value = i
};
SP.SlapiInternal.ProjectDataAnalytics.prototype = {
    DbName: null,
    DbServerName: null,
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    EntityType: null,
    Category: null,
    CategoryName: null,
    Name: null,
    Value: 0
};
SP.SlapiInternal.ProjectDiagnosticAssert = function (g, f, a, c, b, e, d) {
    ULSZvE:; this.SiteId = g; this.SiteUrl = f; this.SiteSubscriptionId2 = a; this.ProjectUid = c; this.AssignmentUid = b; this.ErrorTag = e; this.ErrorText = d
};
SP.SlapiInternal.ProjectDiagnosticAssert.prototype = {
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    ProjectUid: null,
    AssignmentUid: null,
    ErrorTag: 0,
    ErrorText: null
};
SP.SlapiInternal.ProjectDiagnosticTimephasedError = function (l, k, a, m, g, f, i, c, e, d, b, j, h) {
    ULSZvE:; this.SiteId = l; this.SiteUrl = k; this.SiteSubscriptionId2 = a; this.Store = m; this.ProjectUid = g; this.ObjectType = f; this.ObjectUid = i; this.SubObjectType = c; this.SubObjectUid = e; this.SegmentStart = d; this.ErrorTagAsString = b; this.ErrorTag = j; this.ErrorText = h
};
SP.SlapiInternal.ProjectDiagnosticTimephasedError.prototype = {
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    Store: null,
    ProjectUid: null,
    ObjectType: null,
    ObjectUid: null,
    SubObjectType: null,
    SubObjectUid: null,
    SegmentStart: null,
    ErrorTagAsString: null,
    ErrorTag: 0,
    ErrorText: null
};
SP.SlapiInternal.ProjectDiagnosticTimephased = function (h, f, a, d, c, b, e, k, g, i, j) {
    ULSZvE:; this.SiteId = h; this.SiteUrl = f; this.SiteSubscriptionId2 = a; this.ProjectUid = d; this.AssignmentUid = c; this.SourceComparison = b; this.WorkField = e; this.Date = k; this.Result = g; this.Value1 = i; this.Value2 = j
};
SP.SlapiInternal.ProjectDiagnosticTimephased.prototype = {
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    ProjectUid: null,
    AssignmentUid: null,
    SourceComparison: null,
    WorkField: null,
    Date: null,
    Result: null,
    Value1: 0,
    Value2: 0
};
SP.SlapiInternal.ProjectDataDiagnostics = function (h, b, i, g, a, c, f, d, e) {
    ULSZvE:; this.DbName = h; this.DbServerName = b; this.SiteId = i; this.SiteUrl = g; this.SiteSubscriptionId2 = a; this.EntityType = c; this.TestName = f; this.TestResult = d; this.TestValue = e
};
SP.SlapiInternal.ProjectDataDiagnostics.prototype = {
    DbName: null,
    DbServerName: null,
    SiteId: null,
    SiteUrl: null,
    SiteSubscriptionId2: null,
    EntityType: null,
    TestName: null,
    TestResult: null,
    TestValue: 0
};
SP.SlapiInternal.RUMExtended = function (c, e, b, a, d) {
    ULSZvE:; this.ActionName = c; this.ActionId = e; this.ActionGuid = b; this.ActionDate = a; this.ActionType = d
};
SP.SlapiInternal.RUMExtended.prototype = {
    ActionName: null,
    ActionId: 0,
    ActionGuid: null,
    ActionDate: 0,
    ActionType: 0
};
SP.SlapiInternal.RUMAgg = function (e, f, l, d, j, g, a, i, h, c, k, b) {
    ULSZvE:; this.HN = e; this.IT = f; this.TN = l; this.CN = d; this.SD = j; this.MD = g; this.SDNS = a; this.SC = i; this.NC = h; this.SRQ = c; this.SR = k; this.FTE = b
};
SP.SlapiInternal.RUMAgg.prototype = {
    HN: null,
    IT: null,
    TN: 0,
    CN: 0,
    SD: 0,
    MD: 0,
    SDNS: 0,
    SC: 0,
    NC: 0,
    SRQ: 0,
    SR: 0,
    FTE: 0
};
SP.SlapiInternal.RUMRaw = function (k, i, n, d, c, j, b, a, h, g, f, e, m, l) {
    ULSZvE:; this.HN = k; this.FN = i; this.ST = n; this.RES = d; this.REE = c; this.FS = j; this.DLS = b; this.DLE = a; this.CS = h; this.CE = g; this.SCS = f; this.RQS = e; this.RS = m; this.RE = l
};
SP.SlapiInternal.RUMRaw.prototype = {
    HN: null,
    FN: null,
    ST: 0,
    RES: 0,
    REE: 0,
    FS: 0,
    DLS: 0,
    DLE: 0,
    CS: 0,
    CE: 0,
    SCS: 0,
    RQS: 0,
    RS: 0,
    RE: 0
};
SP.SlapiInternal.SignalStoreDatabaseStatistics = function (m, d, e, a, c, b, f, g, n, j, k, i, l, h) {
    ULSZvE:; this.DatabaseName = m; this.ServerTotalDiskMegabytes = d; this.ServerFreeDiskMegabytes = e; this.DatabaseLogTotalMegabytes = a; this.DatabaseLogUsedMegabytes = c; this.DatabaseLogFreeMegabytes = b; this.DatabaseTotalMegabytes = f; this.DatabaseFreeMegabytes = g; this.SignalCount = n; this.TotalMegabytes = j; this.DataMegabytes = k; this.IndexSizeMegabytes = i; this.FreeMegabytes = l; this.AvgSignalSizeInBytes = h
};
SP.SlapiInternal.SignalStoreDatabaseStatistics.prototype = {
    DatabaseName: null,
    ServerTotalDiskMegabytes: 0,
    ServerFreeDiskMegabytes: 0,
    DatabaseLogTotalMegabytes: 0,
    DatabaseLogUsedMegabytes: 0,
    DatabaseLogFreeMegabytes: 0,
    DatabaseTotalMegabytes: 0,
    DatabaseFreeMegabytes: 0,
    SignalCount: 0,
    TotalMegabytes: 0,
    DataMegabytes: 0,
    IndexSizeMegabytes: 0,
    FreeMegabytes: 0,
    AvgSignalSizeInBytes: 0
};
SP.SlapiInternal.StackTraceHash = function (a, b) {
    ULSZvE:; this.StackTrace = a; this.HashValue = b
};
SP.SlapiInternal.StackTraceHash.prototype = {
    StackTrace: null,
    HashValue: null
};
SP.SlapiInternal.StackTraceLog = function (a, c, b, d, e) {
    ULSZvE:; this.StackTraceHash = a; this.Location = c; this.Operation = b; this.Info1 = d; this.Info2 = e
};
SP.SlapiInternal.StackTraceLog.prototype = {
    StackTraceHash: null,
    Location: null,
    Operation: null,
    Info1: null,
    Info2: null
};
SP.SlapiInternal.ProjectLicenseCheckLog = function (b, a, c) {
    ULSZvE:; this.Method = b; this.LicenseName = a; this.SiteId = c
};
SP.SlapiInternal.ProjectLicenseCheckLog.prototype = {
    Method: null,
    LicenseName: null,
    SiteId: null
};
SP.SlapiInternal.ProjectUsageData = function (f, c, d, e, g, b, a) {
    ULSZvE:; this.SiteId = f; this.SiteUrl = c; this.Action = d; this.Entity = e; this.Source = g; this.EntityUid = b; this.PropertyBag = a
};
SP.SlapiInternal.ProjectUsageData.prototype = {
    SiteId: null,
    SiteUrl: null,
    Action: null,
    Entity: null,
    Source: null,
    EntityUid: null,
    PropertyBag: null
};
SP.SlapiInternal.LargeFileUploadBrowserEvent = function (f, e, g, h, a, d, b, c) {
    ULSZvE:; this.MimeType = f; this.FileSize = e; this.UploadId = g; this.Method = h; this.ChunkNumber = a; this.ChunkSize = d; this.HttpStatus = b; this.UploadTime = c
};
SP.SlapiInternal.LargeFileUploadBrowserEvent.prototype = {
    MimeType: null,
    FileSize: 0,
    UploadId: null,
    Method: null,
    ChunkNumber: 0,
    ChunkSize: 0,
    HttpStatus: 0,
    UploadTime: 0
};
SP.SlapiInternal.InsertedSignals = function (f, e, a, j, d, g, b, h, i, c) {
    ULSZvE:; this.InsertionPoint = f; this.NumberOfSignals = e; this.NumberOfCharactersInBatch = a; this.Exception = j; this.NumberOfWrittenSignals = d; this.InsertionTime = g; this.DurationInMilliseconds = b; this.IsClientError = h; this.SignalsSource = i; this.NumberOfDifferentUsers = c
};
SP.SlapiInternal.InsertedSignals.prototype = {
    InsertionPoint: null,
    NumberOfSignals: 0,
    NumberOfCharactersInBatch: 0,
    Exception: null,
    NumberOfWrittenSignals: 0,
    InsertionTime: null,
    DurationInMilliseconds: 0,
    IsClientError: false,
    SignalsSource: null,
    NumberOfDifferentUsers: 0
};
SP.SlapiInternal.SpoSignalToOls = function (l, m, b, d, e, j, c, r, q, k, p, a, f, n, o, s, g, h, i) {
    ULSZvE:; this.OlsCorrelationId = l; this.SignalActionType = m; this.SignalSuccessfullySent = b; this.AppTokenDispatchTime = d; this.SignalConversionTime = e; this.AppTokenWaitTime = j; this.MintTokenCreationTime = c; this.PostTime = r; this.TotalTime = q; this.NumberOfAttempts = k; this.ErrorCode = p; this.LogicalIdConstructedInSpo = a; this.TokenReadFromCache = f; this.HttpStatusCode = n; this.OlsServerName = o; this.TenantId = s; this.ActionToBatchTime = g; this.BatchToSignalTime = h; this.TotalTimeUserView = i
};
SP.SlapiInternal.SpoSignalToOls.prototype = {
    OlsCorrelationId: null,
    SignalActionType: null,
    SignalSuccessfullySent: false,
    AppTokenDispatchTime: 0,
    SignalConversionTime: 0,
    AppTokenWaitTime: 0,
    MintTokenCreationTime: 0,
    PostTime: 0,
    TotalTime: 0,
    NumberOfAttempts: 0,
    ErrorCode: null,
    LogicalIdConstructedInSpo: false,
    TokenReadFromCache: false,
    HttpStatusCode: null,
    OlsServerName: null,
    TenantId: null,
    ActionToBatchTime: 0,
    BatchToSignalTime: 0,
    TotalTimeUserView: 0
};
SP.SlapiInternal.PSCacheLog = function (d, b, c, a) {
    ULSZvE:; this.LoggingKey = d; this.CacheContainer = b; this.IsCacheHit = c; this.DurationMilliseconds = a
};
SP.SlapiInternal.PSCacheLog.prototype = {
    LoggingKey: null,
    CacheContainer: null,
    IsCacheHit: false,
    DurationMilliseconds: 0
};
SP.SlapiInternal.RUMUsage = function (i, g, o, C, r, x, e, h, u, d, z, w, s, y, B, A, n, v, E, G, p, j, q, H, J, F, I, m, f, k, l, t, c, D, a, b) {
    ULSZvE:; this.NavigationStart = i; this.UnloadEventStart = g; this.UnloadEventEnd = o; this.FetchStart = C; this.RedirectStart = r; this.RedirectEnd = x; this.DomainLookupStart = e; this.DomainLookupEnd = h; this.ConnectStart = u; this.SecureConnectStart = d; this.ConnectEnd = z; this.RequestStart = w; this.ResponseStart = s; this.ResponseEnd = y; this.DomLoading = B; this.DomLoadEnd = A; this.LoadEventStart = n; this.LoadEventEnd = v; this.TTLBFirst = E; this.TTLBLast = G; this.DownloadStart = p; this.ParseDeltaStart = j; this.ParseDeltaEnd = q; this.GCStart = H; this.GCEnd = J; this.CSSStart = F; this.CSSEnd = I; this.InnerHTMLStart = m; this.ScriptLoaderStart = f; this.ScriptLoaderEnd = k; this.AnimationStart = l; this.AnimationEnd = t; this.PageTransitionType = c; this.ClientPLT = D; this.ParallelDownloadStart = a; this.ParallelDownloadEnd = b
};
SP.SlapiInternal.RUMUsage.prototype = {
    NavigationStart: 0,
    UnloadEventStart: 0,
    UnloadEventEnd: 0,
    FetchStart: 0,
    RedirectStart: 0,
    RedirectEnd: 0,
    DomainLookupStart: 0,
    DomainLookupEnd: 0,
    ConnectStart: 0,
    SecureConnectStart: 0,
    ConnectEnd: 0,
    RequestStart: 0,
    ResponseStart: 0,
    ResponseEnd: 0,
    DomLoading: 0,
    DomLoadEnd: 0,
    LoadEventStart: 0,
    LoadEventEnd: 0,
    TTLBFirst: 0,
    TTLBLast: 0,
    DownloadStart: 0,
    ParseDeltaStart: 0,
    ParseDeltaEnd: 0,
    GCStart: 0,
    GCEnd: 0,
    CSSStart: 0,
    CSSEnd: 0,
    InnerHTMLStart: 0,
    ScriptLoaderStart: 0,
    ScriptLoaderEnd: 0,
    AnimationStart: 0,
    AnimationEnd: 0,
    PageTransitionType: 0,
    ClientPLT: 0,
    ParallelDownloadStart: 0,
    ParallelDownloadEnd: 0
};
SP.SlapiInternal.RUMOne = function (E, Kb, ac, Qb, Yb, Ub, Rb, Zb, U, Tb, Mb, z, w, Gb, bc, cc, Ob, Jb, xb, J, yb, K, zb, L, Ab, M, e, g, o, j, k, a, s, c, y, C, X, H, I, i, gb, q, f, h, p, l, m, b, u, d, Vb, ub, G, Pb, Lb, Ib, W, F, bb, tb, eb, mb, B, V, jb, x, qb, lb, fb, nb, sb, rb, ab, kb, cb, S, db, Hb, Wb, wb, Nb, Z, A, T, Y, ib, n, r, Sb, t, hb, v, ob, Bb, N, Cb, O, Db, P, Eb, Q, Fb, R, vb, D, pb, Xb) {
    ULSZvE:; this.ServerCorrelationId = E; this.ScenarioId = Kb; this.EUPL = ac; this.ServerUrl = Qb; this.Browser = Yb; this.ClientIP = Ub; this.UserAgent = Rb; this.Flights = Zb; this.PageTransitionType = U; this.AppCache = Tb; this.FolderNav = Mb; this.InitiationTimeOffset = z; this.ServerRequestDuration = w; this.IISLatency = Gb; this.TTFB = bc; this.TTLB = cc; this.ParseTime = Ob; this.RenderTime = Jb; this.Control1Id = xb; this.Control1RenderTime = J; this.Control2Id = yb; this.Control2RenderTime = K; this.Control3Id = zb; this.Control3RenderTime = L; this.Control4Id = Ab; this.Control4RenderTime = M; this.SharePointRequestCountTotal = e; this.SharePointRequestCountASPX = g; this.SharePointRequestCountJS = o; this.SharePointRequestCountCSS = j; this.SharePointRequestCountIMG = k; this.SharePointRequestCountNoneCached = a; this.SharePointRequestBytes = s; this.SharePointRequestDownloadTime = c; this.CDNRequestCountTotal = y; this.CDNRequestCountASPX = C; this.CDNRequestCountJS = X; this.CDNRequestCountCSS = H; this.CDNRequestCountIMG = I; this.CDNRequestCountNoneCached = i; this.CDNRequestBytes = gb; this.CDNRequestDownloadTime = q; this.ThirdPartyRequestCountTotal = f; this.ThirdPartyRequestCountASPX = h; this.ThirdPartyRequestCountJS = p; this.ThirdPartyRequestCountCSS = l; this.ThirdPartyRequestCountIMG = m; this.ThirdPartyRequestCountNoneCached = b; this.ThirdPartyRequestBytes = u; this.ThirdPartyRequestDownloadTime = d; this.FromEdge = Vb; this.APICallCount = ub; this.APICallDurationSum = G; this.PreRender = Pb; this.DataFetch = Lb; this.PostRender = Ib; this.W3cNavigationStart = W; this.W3cUnloadEventStart = F; this.W3cUnloadEventEnd = bb; this.W3cFetchStart = tb; this.W3cRedirectStart = eb; this.W3cRedirectEnd = mb; this.W3cDomainLookupStart = B; this.W3cDomainLookupEnd = V; this.W3cConnectStart = jb; this.W3cSecureConnectStart = x; this.W3cConnectEnd = qb; this.W3cRequestStart = lb; this.W3cResponseStart = fb; this.W3cResponseEnd = nb; this.W3cDomLoading = sb; this.W3cDomLoadEnd = rb; this.W3cLoadEventStart = ab; this.W3cLoadEventEnd = kb; this.MDSDownloadStart = cb; this.MDSParseDeltaStart = S; this.MDSParseDeltaEnd = db; this.MDSGCStart = Hb; this.MDSGCEnd = Wb; this.MDSCSSStart = wb; this.MDSCSSEnd = Nb; this.MDSInnerHTMLStart = Z; this.MDSScriptLoaderStart = A; this.MDSScriptLoaderEnd = T; this.MDSAnimationStart = Y; this.MDSAnimationEnd = ib; this.MDSParallelDownloadStart = n; this.MDSParallelDownloadEnd = r; this.APICalls = Sb; this.SharePointRequestNames = t; this.CDNRequestNames = hb; this.ThirdPartyRequestNames = v; this.EUPLBreakdown = ob; this.Control5Id = Bb; this.Control5RenderTime = N; this.Control6Id = Cb; this.Control6RenderTime = O; this.Control7Id = Db; this.Control7RenderTime = P; this.Control8Id = Eb; this.Control8RenderTime = Q; this.Control9Id = Fb; this.Control9RenderTime = R; this.Control10Id = vb; this.Control10RenderTime = D; this.ServerMetrics = pb; this.Referrer = Xb
};
SP.SlapiInternal.RUMOne.prototype = {
    ServerCorrelationId: null,
    ScenarioId: null,
    EUPL: 0,
    ServerUrl: null,
    Browser: null,
    ClientIP: null,
    UserAgent: null,
    Flights: null,
    PageTransitionType: 0,
    AppCache: false,
    FolderNav: false,
    InitiationTimeOffset: 0,
    ServerRequestDuration: 0,
    IISLatency: 0,
    TTFB: 0,
    TTLB: 0,
    ParseTime: 0,
    RenderTime: 0,
    Control1Id: null,
    Control1RenderTime: 0,
    Control2Id: null,
    Control2RenderTime: 0,
    Control3Id: null,
    Control3RenderTime: 0,
    Control4Id: null,
    Control4RenderTime: 0,
    SharePointRequestCountTotal: 0,
    SharePointRequestCountASPX: 0,
    SharePointRequestCountJS: 0,
    SharePointRequestCountCSS: 0,
    SharePointRequestCountIMG: 0,
    SharePointRequestCountNoneCached: 0,
    SharePointRequestBytes: 0,
    SharePointRequestDownloadTime: 0,
    CDNRequestCountTotal: 0,
    CDNRequestCountASPX: 0,
    CDNRequestCountJS: 0,
    CDNRequestCountCSS: 0,
    CDNRequestCountIMG: 0,
    CDNRequestCountNoneCached: 0,
    CDNRequestBytes: 0,
    CDNRequestDownloadTime: 0,
    ThirdPartyRequestCountTotal: 0,
    ThirdPartyRequestCountASPX: 0,
    ThirdPartyRequestCountJS: 0,
    ThirdPartyRequestCountCSS: 0,
    ThirdPartyRequestCountIMG: 0,
    ThirdPartyRequestCountNoneCached: 0,
    ThirdPartyRequestBytes: 0,
    ThirdPartyRequestDownloadTime: 0,
    FromEdge: false,
    APICallCount: 0,
    APICallDurationSum: 0,
    PreRender: 0,
    DataFetch: 0,
    PostRender: 0,
    W3cNavigationStart: 0,
    W3cUnloadEventStart: 0,
    W3cUnloadEventEnd: 0,
    W3cFetchStart: 0,
    W3cRedirectStart: 0,
    W3cRedirectEnd: 0,
    W3cDomainLookupStart: 0,
    W3cDomainLookupEnd: 0,
    W3cConnectStart: 0,
    W3cSecureConnectStart: 0,
    W3cConnectEnd: 0,
    W3cRequestStart: 0,
    W3cResponseStart: 0,
    W3cResponseEnd: 0,
    W3cDomLoading: 0,
    W3cDomLoadEnd: 0,
    W3cLoadEventStart: 0,
    W3cLoadEventEnd: 0,
    MDSDownloadStart: 0,
    MDSParseDeltaStart: 0,
    MDSParseDeltaEnd: 0,
    MDSGCStart: 0,
    MDSGCEnd: 0,
    MDSCSSStart: 0,
    MDSCSSEnd: 0,
    MDSInnerHTMLStart: 0,
    MDSScriptLoaderStart: 0,
    MDSScriptLoaderEnd: 0,
    MDSAnimationStart: 0,
    MDSAnimationEnd: 0,
    MDSParallelDownloadStart: 0,
    MDSParallelDownloadEnd: 0,
    APICalls: null,
    SharePointRequestNames: null,
    CDNRequestNames: null,
    ThirdPartyRequestNames: null,
    EUPLBreakdown: null,
    Control5Id: null,
    Control5RenderTime: 0,
    Control6Id: null,
    Control6RenderTime: 0,
    Control7Id: null,
    Control7RenderTime: 0,
    Control8Id: null,
    Control8RenderTime: 0,
    Control9Id: null,
    Control9RenderTime: 0,
    Control10Id: null,
    Control10RenderTime: 0,
    ServerMetrics: null,
    Referrer: null
};
SP.SlapiInternal.RUMOneErrors = function (b, a) {
    ULSZvE:; this.Reason = b; this.Message = a
};
SP.SlapiInternal.RUMOneErrors.prototype = {
    Reason: null,
    Message: null
};
SP.SlapiInternal.SearchTopologyInvocationStatistics = function (f, o, n, g, c, b, a, d, m, k, i, e, l, j, h) {
    ULSZvE:; this.CounterResetTime = f; this.NodeName = o; this.EndpointId = n; this.InvocationCount = g; this.MinExecutionMilliseconds = c; this.MaxExecutionMilliseconds = b; this.AvgExecutionMilliseconds = a; this.AvgNetworkMilliseconds = d; this.MinTxDataSize = m; this.MaxTxDataSize = k; this.AvgTxDataSize = i; this.AggregateTxDataSize = e; this.MinRxDataSize = l; this.MaxRxDataSize = j; this.AvgRxDataSize = h
};
SP.SlapiInternal.SearchTopologyInvocationStatistics.prototype = {
    CounterResetTime: null,
    NodeName: null,
    EndpointId: null,
    InvocationCount: 0,
    MinExecutionMilliseconds: 0,
    MaxExecutionMilliseconds: 0,
    AvgExecutionMilliseconds: 0,
    AvgNetworkMilliseconds: 0,
    MinTxDataSize: 0,
    MaxTxDataSize: 0,
    AvgTxDataSize: 0,
    AggregateTxDataSize: 0,
    MinRxDataSize: 0,
    MaxRxDataSize: 0,
    AvgRxDataSize: 0
};
SP.SlapiInternal.SearchTopologyRemotingStatistics = function (d, f, c, b, e, a) {
    ULSZvE:; this.CounterResetTime = d; this.NodeName = f; this.ConnectionRetries = c; this.ConnectionTimeouts = b; this.EndpointRetries = e; this.StaleServiceReferenceExceptions = a
};
SP.SlapiInternal.SearchTopologyRemotingStatistics.prototype = {
    CounterResetTime: null,
    NodeName: null,
    ConnectionRetries: 0,
    ConnectionTimeouts: 0,
    EndpointRetries: 0,
    StaleServiceReferenceExceptions: 0
};
SP.SlapiInternal.TaxonomyCacheStatisticsLog = function (e, b, d, c, a) {
    ULSZvE:; this.ItemType = e; this.TotalLookups = b; this.CacheHits = d; this.CacheMisses = c; this.TotalLookupMilliseconds = a
};
SP.SlapiInternal.TaxonomyCacheStatisticsLog.prototype = {
    ItemType: null,
    TotalLookups: 0,
    CacheHits: 0,
    CacheMisses: 0,
    TotalLookupMilliseconds: 0
};
SP.SlapiInternal.PJContentDatabaseVersionLog = function (c, b, a, e, d) {
    ULSZvE:; this.ContentDatabaseId = c; this.ContentDatabaseName = b; this.NormalizedDataSource = a; this.BuildVersion = e; this.DatabaseVersion = d
};
SP.SlapiInternal.PJContentDatabaseVersionLog.prototype = {
    ContentDatabaseId: null,
    ContentDatabaseName: null,
    NormalizedDataSource: null,
    BuildVersion: null,
    DatabaseVersion: null
};
SP.SlapiInternal.DelveEmbedClickLog = function (a, c, d, b) {
    ULSZvE:; this.DelveEmbedId = a; this.TargetUrl = c; this.LinkType = d; this.Redirected = b
};
SP.SlapiInternal.DelveEmbedClickLog.prototype = {
    DelveEmbedId: null,
    TargetUrl: null,
    LinkType: null,
    Redirected: false
};
SP.BWsaConfig.registerClass("SP.BWsaConfig");
SP.Ticks.registerClass("SP.Ticks");
SP.TimerResetCheck.registerClass("SP.TimerResetCheck");
SP.StreamRowCounters.registerClass("SP.StreamRowCounters");
SP.BWsaDatapoint.registerClass("SP.BWsaDatapoint");
SP.WsaStreamRow.registerClass("SP.WsaStreamRow");
SP.BWsaStream.registerClass("SP.BWsaStream");
SP.BWsaHeader.registerClass("SP.BWsaHeader");
SP.BWsaData.registerClass("SP.BWsaData");
SP.BWsaClient.registerClass("SP.BWsaClient", null, SP.IBWsaClient);
SP.RUMLogger.registerClass("SP.RUMLogger");
SP.SimpleLogger.registerClass("SP.SimpleLogger");
SP.SimpleLogger.BSQMProxy.registerClass("SP.SimpleLogger.BSQMProxy", null, SP.IBSQM);
SP.SimpleLoggerConstants.registerClass("SP.SimpleLoggerConstants");
SP.UI.AspMenu.registerClass("SP.UI.AspMenu", Sys.UI.Control);
SP.Utilities.CommandBlock.registerClass("SP.Utilities.CommandBlock");
SP.Utilities.TaskTelemetry.registerClass("SP.Utilities.TaskTelemetry");
SP.Utilities.Task.registerClass("SP.Utilities.Task");
SP.Utilities.tcsaver.registerClass("SP.Utilities.tcsaver");
SP.Utilities.TaskCarousel.registerClass("SP.Utilities.TaskCarousel");
SP.Disposal.DisposalManager.registerClass("SP.Disposal.DisposalManager");
SP.Utilities.Internal.ECBMenuItem.registerClass("SP.Utilities.Internal.ECBMenuItem", Object);
SP.Utilities.Internal.CLVP.registerClass("SP.Utilities.Internal.CLVP");
SP.Utilities.Internal.ECBAdapter.registerClass("SP.Utilities.Internal.ECBAdapter");
SP.ListOperation.ViewOperation.registerClass("SP.ListOperation.ViewOperation");
SP.ListOperation.Selection.registerClass("SP.ListOperation.Selection");
SP.ListOperation.Overrides.registerClass("SP.ListOperation.Overrides");
SP.SlapiInternal.SPSocialActionLog.registerClass("SP.SlapiInternal.SPSocialActionLog");
SP.SlapiInternal.UserEngagement.registerClass("SP.SlapiInternal.UserEngagement");
SP.SlapiInternal.SPSocialGetFeed.registerClass("SP.SlapiInternal.SPSocialGetFeed");
SP.SlapiInternal.SPSocialNewPost.registerClass("SP.SlapiInternal.SPSocialNewPost");
SP.SlapiInternal.SPSocialLikePost.registerClass("SP.SlapiInternal.SPSocialLikePost");
SP.SlapiInternal.SPSocialDeletePost.registerClass("SP.SlapiInternal.SPSocialDeletePost");
SP.SlapiInternal.SPSocialFollowing.registerClass("SP.SlapiInternal.SPSocialFollowing");
SP.SlapiInternal.SPUserProfilePage.registerClass("SP.SlapiInternal.SPUserProfilePage");
SP.SlapiInternal.PeopleSearchInstrumentation.registerClass("SP.SlapiInternal.PeopleSearchInstrumentation");
SP.SlapiInternal.ProjectDataAnalytics.registerClass("SP.SlapiInternal.ProjectDataAnalytics");
SP.SlapiInternal.ProjectDiagnosticAssert.registerClass("SP.SlapiInternal.ProjectDiagnosticAssert");
SP.SlapiInternal.ProjectDiagnosticTimephasedError.registerClass("SP.SlapiInternal.ProjectDiagnosticTimephasedError");
SP.SlapiInternal.ProjectDiagnosticTimephased.registerClass("SP.SlapiInternal.ProjectDiagnosticTimephased");
SP.SlapiInternal.ProjectDataDiagnostics.registerClass("SP.SlapiInternal.ProjectDataDiagnostics");
SP.SlapiInternal.RUMExtended.registerClass("SP.SlapiInternal.RUMExtended");
SP.SlapiInternal.RUMAgg.registerClass("SP.SlapiInternal.RUMAgg");
SP.SlapiInternal.RUMRaw.registerClass("SP.SlapiInternal.RUMRaw");
SP.SlapiInternal.SignalStoreDatabaseStatistics.registerClass("SP.SlapiInternal.SignalStoreDatabaseStatistics");
SP.SlapiInternal.StackTraceHash.registerClass("SP.SlapiInternal.StackTraceHash");
SP.SlapiInternal.StackTraceLog.registerClass("SP.SlapiInternal.StackTraceLog");
SP.SlapiInternal.ProjectLicenseCheckLog.registerClass("SP.SlapiInternal.ProjectLicenseCheckLog");
SP.SlapiInternal.ProjectUsageData.registerClass("SP.SlapiInternal.ProjectUsageData");
SP.SlapiInternal.LargeFileUploadBrowserEvent.registerClass("SP.SlapiInternal.LargeFileUploadBrowserEvent");
SP.SlapiInternal.InsertedSignals.registerClass("SP.SlapiInternal.InsertedSignals");
SP.SlapiInternal.SpoSignalToOls.registerClass("SP.SlapiInternal.SpoSignalToOls");
SP.SlapiInternal.PSCacheLog.registerClass("SP.SlapiInternal.PSCacheLog");
SP.SlapiInternal.RUMUsage.registerClass("SP.SlapiInternal.RUMUsage");
SP.SlapiInternal.RUMOne.registerClass("SP.SlapiInternal.RUMOne");
SP.SlapiInternal.RUMOneErrors.registerClass("SP.SlapiInternal.RUMOneErrors");
SP.SlapiInternal.SearchTopologyInvocationStatistics.registerClass("SP.SlapiInternal.SearchTopologyInvocationStatistics");
SP.SlapiInternal.SearchTopologyRemotingStatistics.registerClass("SP.SlapiInternal.SearchTopologyRemotingStatistics");
SP.SlapiInternal.TaxonomyCacheStatisticsLog.registerClass("SP.SlapiInternal.TaxonomyCacheStatisticsLog");
SP.SlapiInternal.PJContentDatabaseVersionLog.registerClass("SP.SlapiInternal.PJContentDatabaseVersionLog");
SP.SlapiInternal.DelveEmbedClickLog.registerClass("SP.SlapiInternal.DelveEmbedClickLog");

function sp_core_initialize() {
    ULSZvE:; SP.BWsaConfig.defaultMaxStreamRows = 1e3; SP.BWsaConfig.defaultMaxInt32 = 4294967295; SP.BWsaConfig.defaultRibbonStreamWidth = 8; SP.Ticks.$18 = 0; SP.TimerResetCheck.$11 = 0; SP.StreamRowCounters.maxRowCount = 0; SP.StreamRowCounters.maxOverwritten = 0; SP.RUMLogger.$P = null; SP.SimpleLoggerConstants.streaM_ID = 1234; SP.SimpleLoggerConstants.evenT_NAME_INDEX = 1; SP.SimpleLoggerConstants.custoM_PROPERTIES_START_INDEX = 2; SP.SimpleLoggerConstants.rowLengthForObject = 2; SP.SimpleLoggerConstants.defaulT_LOG_SESSION_MS = 3e4; SP.SimpleLoggerConstants.defaulT_MAX_DATA_SIZE = 16384; SP.UI.AspMenu.$1W = "{0}_FrameID_{1}"; SP.UI.AspMenu.$1V = 1100; SP.Utilities.TaskCarousel.$7 = [null, null, null, null, null]; SP.Utilities.TaskCarousel.$5 = null; SP.Utilities.TaskCarousel.$G = null; SP.Utilities.TaskCarousel.$J = 0; SP.Utilities.TaskCarousel.$E = 0; SP.Utilities.TaskCarousel.$F = 0; SP.Utilities.TaskCarousel.$T = 50; SP.Utilities.TaskCarousel.$Q = 500; SP.Utilities.TaskCarousel.$Z = 1e3; SP.Utilities.TaskCarousel.currentCancellableTask = null; SP.Utilities.TaskCarousel.$C = null; SP.Utilities.TaskCarousel.$N = null; SP.Utilities.TaskCarousel.$6 = null; SP.Utilities.TaskCarousel.$p = SP.Utilities.TaskCarousel.$Q; SP.Disposal.DisposalManager.$P = null
}
sp_core_initialize();
typeof RegisterModuleInit == "function" && RegisterModuleInit("sp.core.js", sp_core_initialize);

function Sys$UI$Control$dispose$fixup() {
    ULSZvE:; Sys.UI.Control.callBaseMethod(this, "dispose");
    if (this._element) {
        this._element.control = undefined;
        delete this._element
    }
    if (this._parent) delete this._parent
}
if (typeof Sys != "undefined" && typeof Sys.UI != "undefined" && typeof Sys.UI.Control == "function") Sys.UI.Control.prototype.dispose = Sys$UI$Control$dispose$fixup;

function SelectListItemNative(b, e) {
    ULSZvE:;
    var c = GetCtxRgiidFromIid(b);
    if (c == null) return false;
    var a = c.ctx,
        d = c.rgiid;
    if (e) {
        if (a.CurrentSelectedItems == g_MaximumSelectedItemsAllowed) return false;
        if (a.dictSel[b] == null) {
            a.CurrentSelectedItems++;
            a.dictSel[b] = {
                id: d[1],
                fsObjType: d[2]
            }
        }
    } else if (a.dictSel[b] != null) {
        delete a.dictSel[b];
        a.CurrentSelectedItems--
    }
    OnItemSelectionChanged(a, null, true);
    return true
}

function DeselectAllListItemsNative(c) {
    ULSZvE:;
    var b = GetCtxRgiidFromIid(c);
    if (b == null) return false;
    var a = b.ctx; a.dictSel = []; a.CurrentSelectedItems = 0; OnItemSelectionChanged(a, null, true);
    return true
}

function GetSelectedItemsNative() {
    ULSZvE:;
    var a = GetCurrentCtx();
    if (a == null || typeof a.dictSel == "undefined") return [];
    var d = 0,
        b = [];
    for (var c in a.dictSel) {
        b[d] = {
            id: a.dictSel[c].id,
            fsObjType: a.dictSel[c].fsObjType
        };
        d++
    }
    return b
}

function GetSelectedListNative() {
    ULSZvE:;
    var a = GetCurrentCtx();
    return a == null ? null : a.listName
}

function GetSelectedViewNative() {
    ULSZvE:;
    var a = GetCurrentCtx();
    return a == null ? null : a.view
}

function NavigateUpNative(c) {
    ULSZvE:;
    var a = g_ViewIdToViewCounterMap[c];
    if (a == null) return;
    var b = window["ctx" + a]; EnsureScriptParams("inplview", "NavigateUp", b)
}

function RefreshViewNative(d) {
    ULSZvE:;
    var b = g_ViewIdToViewCounterMap[d];
    if (b == null) return;
    var a = window["ctx" + b];
    if (a != null && a.IsClientRendering) {
        var c = {
            currentCtx: a,
            csrAjaxRefresh: true
        };
        AJAXRefreshView(c, SP.UI.DialogResult.OK)
    }
}

function OverrideDeleteConfirmationNative(c, b) {
    ULSZvE:;
    for (var d in g_ctxDict) {
        var a = g_ctxDict[d];
        if (a.listName == c) a.overrideDeleteConfirmation = b
    }
}

function UpdateCorrelationIdForAppCacheIfNeeded(a) {
    ULSZvE:;

    function b() {
        ULSZvE:;
        var a = window.applicationCache;
        return Boolean(a) && a.UNCACHED != a.status && typeof g_appCache_cached != "undefined" && !g_appCache_cached
    }
    typeof a != "undefined" && Boolean(a) && !a.get_isContinuation() && b() && a.setCorrelationId(CacheLogger.GenerateGuid())
}

function WSAEnabled() {
    ULSZvE:;
    return WSACEIPEnabled() || WSAQoSEnabled() || WSARUMEnabled()
}

function WSACEIPEnabled() {
    ULSZvE:;
    return typeof g_wsaEnabled != "undefined" && g_wsaEnabled
}

function WSAQoSEnabled() {
    ULSZvE:;
    return typeof g_wsaQoSEnabled != "undefined" && g_wsaQoSEnabled
}

function WSAQoSDatapoints() {
    ULSZvE:;
    return typeof g_wsaQoSDataPoints != "undefined" ? g_wsaQoSDataPoints : null
}

function WSARUMEnabled() {
    ULSZvE:;
    return typeof g_wsaRUMEnabled != "undefined" && g_wsaRUMEnabled
}

function SendWSA() {
    ULSZvE:;
    try {
        if (WSAEnabled()) {
            UpdateCorrelationIdForAppCacheIfNeeded(g_thewsa);
            g_thewsa.uploadWsaData()
        }
    } catch (a) { }
}

function GetWSA() {
    ULSZvE:;
    if (typeof g_thewsa == "undefined" || !g_thewsa)
        if (SP)
            if (SP.BWsaClient) {
                g_thewsa = new SP.BWsaClient(SP.Utilities.VersionUtility.get_layoutsLatestVersionUrl() + "WsaUpload.ashx", WSACEIPEnabled(), WSAQoSEnabled(), WSAQoSDatapoints());
                var a = g_thewsa;
                if (typeof ULS.Correlation != "undefined" && ULS.Correlation) a.setCorrelationId(ULS.Correlation);
                else typeof g_correlationId != "undefined" && a.setCorrelationId(g_correlationId);
                a.createStream(8327, 1, 8, 200);
                a.addCommonDatapoint(59);
                a.setDw(59, 89);
                if (typeof g_wsaSiteTemplateId != "undefined" && g_wsaSiteTemplateId) {
                    a.addCommonDatapoint(8492);
                    a.setDw(8492, SP.BWsaClient.calcActionId(g_wsaSiteTemplateId))
                }
                if (typeof g_wsaLCID != "undefined" && g_wsaLCID) {
                    a.addCommonDatapoint(8491);
                    a.setDw(8491, g_wsaLCID)
                }
                if (typeof addEventListener != "undefined") addEventListener("beforeunload", SendWSA, false);
                else attachEvent("onbeforeunload", SendWSA)
            }
    return g_thewsa
}

function GetSimpleLogger() {
    ULSZvE:;
    if (typeof g_simpleLogger == "undefined" || !g_simpleLogger)
        if (SP && SP.SimpleLogger) {
            var a = GetWSA();
            if (!IsNullOrUndefined(a)) g_simpleLogger = SP.SimpleLogger.GetSimpleLogger(a)
        }
    return g_simpleLogger
}

function GetObjectName(b) {
    ULSZvE:;
    var a = b.constructor.getName(); a = a.replace("SP.SlapiInternal.", "");
    return a
}

function WriteLog(a) {
    ULSZvE:;
    if (a == null) return;
    var c = GetSimpleLogger(),
        b;
    if (a.length > 0) {
        if (a[0] == null) return;
        b = GetObjectName(a[0]);
        if (b == null) return
    } else {
        b = GetObjectName(a);
        if (b == null) return
    }
    c.WriteLogForEvents(b, a)
}

function GetRUMWSA() {
    ULSZvE:;
    if (typeof g_RUMWSA == "undefined" || !Boolean(g_RUMWSA)) {
        if (!Boolean(WSARUMEnabled())) return;
        var a = GetWSA();
        if (!IsNullOrUndefined(a)) g_RUMWSA = new SP.RUMLogger(a)
    }
    return g_RUMWSA
}

function _executeECBCommand(code, myCtx) {
    ULSZvE:; eval("var event = new Object(); event.fromRibbon = true; event.currentCtx = myCtx;" + code + ";")
}
typeof Sys != "undefined" && Sys && Sys.Application && Sys.Application.notifyScriptLoaded();
typeof NotifyScriptLoadedAndExecuteWaitingJobs == "function" && NotifyScriptLoadedAndExecuteWaitingJobs("sp.core.js");
typeof spWriteProfilerMark == "function" && spWriteProfilerMark("perfMarkEnd_sp.core.js");