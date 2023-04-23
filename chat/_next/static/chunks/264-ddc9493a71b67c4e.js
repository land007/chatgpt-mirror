"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[264], {
    34388: function(e, t, n) {
        n.d(t, {
            T: function() {
                return o
            }
        });
        function o(e) {
            return void 0 !== e.userMessage
        }
    },
    33264: function(e, t, n) {
        var o = n(61706)
          , r = n(35025)
          , a = n(9135)
          , i = n(31501)
          , s = n(61079)
          , c = n(42928)
          , h = n(45813)
          , u = n(48879)
          , d = n(91515);
        n(138);
        var p = n(34388)
          , l = n(49674)
          , f = n(11938)
          , g = "/backend-api"
          , m = ["cf-ipcountry"]
          , v = function() {
            function e() {
                (0,
                r.Z)(this, e)
            }
            return e.setAccessToken = function(e) {
                this.accessToken = e
            }
            ,
            e.getAuthHeader = function(e) {
                var t = e || this.accessToken;
                if (!t)
                    throw console.error("No access token when trying to use AuthHeader"),
                    Error("No access token when trying to use AuthHeader");
                return {
                    Authorization: "Bearer ".concat(t)
                }
            }
            ,
            e.refreshApiKey = function() {
                var e = this;
                if (this.apiKeyRefreshing)
                    return this.apiKeyRefreshing;
                var t = this;
                return this.apiKeyRefreshing = (0,
                o.Z)(function() {
                    var e;
                    return (0,
                    h.__generator)(this, function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, (0,
                            d.getSession)()];
                        case 1:
                            return (e = n.sent()) && t.setAccessToken(e.accessToken),
                            [2];
                        case 2:
                            throw Error("Cannot refresh access token outside of browser");
                        case 3:
                            return [2]
                        }
                    })
                })(),
                setTimeout(function() {
                    e.apiKeyRefreshing = null
                }, 6e4),
                this.apiKeyRefreshing
            }
            ,
            e.fetch = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = this;
                return (0,
                o.Z)(function() {
                    var o, a, c, u, d, p;
                    return (0,
                    h.__generator)(this, function(h) {
                        switch (h.label) {
                        case 0:
                            return [4, fetch(e, o = (0,
                            i.Z)({
                                credentials: "include"
                            }, t))];
                        case 1:
                            if ((a = h.sent()).status >= 500)
                                throw n.intercomEventOnError && (0,
                                f.LJ)(n.intercomEventOnError, {
                                    url: e,
                                    status: a.status.toString()
                                }),
                                new l.kb;
                            if (!(a.status >= 400))
                                return [3, 12];
                            h.label = 2;
                        case 2:
                            return h.trys.push([2, 4, , 5]),
                            [4, a.json()];
                        case 3:
                            return c = (null == (u = h.sent()) ? void 0 : u.detail) || (null == u ? void 0 : u.error),
                            [3, 5];
                        case 4:
                            return d = h.sent(),
                            console.error("Failed to parse error response", d),
                            [3, 5];
                        case 5:
                            if (console.error("API error", e, c),
                            !((null == c ? void 0 : c.code) === "expired_session_key" || (null == c ? void 0 : c.code) === "token_expired"))
                                return [3, 11];
                            h.label = 6;
                        case 6:
                            if (h.trys.push([6, 9, , 10]),
                            n.isRetry)
                                return [3, 8];
                            return [4, r.refreshApiKey()];
                        case 7:
                            return h.sent(),
                            [2, r.fetch(e, o, (0,
                            s.Z)((0,
                            i.Z)({}, n), {
                                isRetry: !0
                            }))];
                        case 8:
                            return [3, 10];
                        case 9:
                            return p = h.sent(),
                            console.error("Failed to refresh expired access token: ".concat(p)),
                            [3, 10];
                        case 10:
                            console.error("Refresh access token failed when retrieving", e, c),
                            window._oaiHandleSessionExpired("fetch", JSON.stringify(c)),
                            h.label = 11;
                        case 11:
                            if (null == c ? void 0 : c.type)
                                throw n.intercomEventOnError && (0,
                                f.LJ)(n.intercomEventOnError, {
                                    url: e,
                                    status: a.status.toString(),
                                    message: (null == c ? void 0 : c.message) || c
                                }),
                                new l.gK((null == c ? void 0 : c.message) || c,a.status,null == c ? void 0 : c.code,null == c ? void 0 : c.type);
                            throw new l.kb;
                        case 12:
                            if (204 === a.status)
                                return [2, {}];
                            return [2, a.json()]
                        }
                    })
                })()
            }
            ,
            e.getArtifacts = function() {
                return this.fetch("".concat(g, "/artifacts"), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader())
                })
            }
            ,
            e.createArtifact = function(e) {
                return this.fetch("".concat(g, "/artifacts"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        url: e,
                        contents: "\n"
                    })
                })
            }
            ,
            e.upload = function(e, t, n, o) {
                var r = new FormData;
                return t && r.append("conversation_id", t),
                r.append("model", n),
                r.append("parent_message_id", e),
                r.append("file", o),
                this.fetch("".concat(g, "/conversation/upload"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({}, this.getAuthHeader()),
                    body: r
                })
            }
            ,
            e.fetchFileForDownload = function(e, t) {
                var n = new URLSearchParams({
                    path: t
                });
                return fetch("".concat(g, "/conversation/").concat(e, "/download?").concat(n), {
                    method: "GET",
                    headers: (0,
                    i.Z)({}, this.getAuthHeader())
                })
            }
            ,
            e.checkFile = function(e, t) {
                var n = new URLSearchParams({
                    path: t
                });
                return this.fetch("".concat(g, "/conversation/").concat(e, "/check_file?").concat(n), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader())
                })
            }
            ,
            e.sendDocument = function() {
                return this.fetch("".concat(g, "/private"), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            }
            ,
            e.getRetrievalResults = function(e) {
                return this.fetch("".concat(g, "/retrieval/public_data"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        query: e
                    })
                })
            }
            ,
            e.getModels = function(e) {
                return this.fetch("".concat(g, "/models"), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(e))
                })
            }
            ,
            e.getConversations = function(e, t, n) {
                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , r = new URLSearchParams({
                    offset: e.toString(),
                    limit: t.toString()
                });
                return o && r.set("order", "updated"),
                this.fetch("".concat(g, "/conversations?").concat(r), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(n))
                }, {
                    intercomEventOnError: "fetch-error:conversations:get"
                })
            }
            ,
            e.getConversation = function(e, t) {
                return this.fetch("".concat(g, "/conversation/").concat(e), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(t))
                }, {
                    intercomEventOnError: "fetch-error:conversation:get"
                })
            }
            ,
            e.generateTitle = function(e, t, n) {
                return this.fetch("".concat(g, "/conversation/gen_title/").concat(e), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        message_id: t
                    })
                }, {
                    intercomEventOnError: "fetch-error:conversation:generate-title"
                })
            }
            ,
            e.patchConversation = function(e, t) {
                return this.fetch("".concat(g, "/conversation/").concat(e), {
                    method: "PATCH",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify(t)
                }, {
                    intercomEventOnError: "fetch-error:conversation:edit"
                })
            }
            ,
            e.deleteConversations = function() {
                return this.fetch("".concat(g, "/conversations"), {
                    method: "PATCH",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        is_visible: !1
                    })
                }, {
                    intercomEventOnError: "fetch-error:conversations:delete"
                })
            }
            ,
            e.getLoginLink = function(e) {
                return this.fetch("".concat(g, "/bypass/link"), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: e
                    })
                })
            }
            ,
            e.publicApiCompletionStream = function(e, t) {
                var n = this;
                return (0,
                o.Z)(function() {
                    var r, s, c, d;
                    return (0,
                    h.__generator)(this, function(d) {
                        return r = new AbortController,
                        s = {
                            action: e.completionType,
                            messages: e.messages.length > 0 ? e.messages : void 0,
                            conversation_id: e.threadId,
                            parent_message_id: e.parentMessageId,
                            model: e.model,
                            plugin_ids: e.threadId ? void 0 : e.enabledPluginIds,
                            timezone_offset_min: new Date().getTimezoneOffset()
                        },
                        c = "".concat("/backend-api", "/conversation"),
                        (0,
                        u.L)(c, {
                            method: "POST",
                            credentials: "include",
                            headers: (0,
                            i.Z)({
                                "Content-Type": "application/json"
                            }, n.getAuthHeader()),
                            body: JSON.stringify(s),
                            signal: r.signal,
                            openWhenHidden: !0,
                            onopen: function(e) {
                                return (0,
                                o.Z)(function() {
                                    var t, n, o;
                                    return (0,
                                    h.__generator)(this, function(r) {
                                        switch (r.label) {
                                        case 0:
                                            if (t = e.headers.get("content-type") || "",
                                            e.ok && t.includes("text/event-stream"))
                                                return [2];
                                            if (!t.includes("application/json"))
                                                return [3, 2];
                                            return [4, e.json()];
                                        case 1:
                                            if (n = r.sent(),
                                            console.error(n),
                                            o = (null == n ? void 0 : n.error) || (null == n ? void 0 : n.detail)) {
                                                if (e.status >= 500)
                                                    throw new l.kb((null == o ? void 0 : o.message) || o);
                                                throw ((null == o ? void 0 : o.code) === "expired_session_key" || (null == o ? void 0 : o.code) === "invalid_api_key" || (null == o ? void 0 : o.code) === "token_expired") && window._oaiHandleSessionExpired("stream", JSON.stringify(o)),
                                                new l.gK((null == o ? void 0 : o.message) || o,e.status,null == o ? void 0 : o.code,null == o ? void 0 : o.type,void 0,null == o ? void 0 : o.clears_in)
                                            }
                                            r.label = 2;
                                        case 2:
                                            throw new l.kb
                                        }
                                    })
                                })()
                            },
                            onmessage: function(e) {
                                if ("[DONE]" === e.data)
                                    r.abort(),
                                    t({
                                        finish_reason: "stop"
                                    });
                                else if ("ping" === e.event)
                                    ;
                                else
                                    try {
                                        var n = JSON.parse(e.data);
                                        if (n.error)
                                            throw new l.kb(n.error.message);
                                        t({
                                            message: n.message,
                                            threadId: n.conversation_id
                                        })
                                    } catch (o) {
                                        if ((0,
                                        p.T)(o))
                                            throw new l.kb(o.message)
                                    }
                            },
                            onerror: function(e) {
                                throw "Failed to fetch" === e.message && (e = new l.kb("An error occurred. Either the engine you requested does not exist or there was another issue processing your request. If this issue persists please contact us through our help center at help.openai.com.")),
                                (0,
                                f.LJ)("fetch-error:conversation:new-message", {
                                    url: c,
                                    message: null == e ? void 0 : e.message
                                }),
                                t({
                                    err: e
                                }),
                                e
                            }
                        }).catch(function(e) {
                            (0,
                            a.Z)(e, l.gK) || (0,
                            a.Z)(e, l.kb) || console.error(e)
                        }),
                        [2, r]
                    })
                })()
            }
            ,
            e.runModerationApi = function(e, t, n) {
                return this.fetch("".concat("/backend-api", "/moderations"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify({
                        input: e,
                        model: "text-moderation-playground",
                        conversation_id: t,
                        message_id: n
                    })
                })
            }
            ,
            e.submitMessageFeedback = function(e) {
                return this.fetch("".concat(g, "/conversation/message_feedback"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify(e)
                })
            }
            ,
            e.submitMessageComparisonFeedback = function(e) {
                return this.fetch("".concat(g, "/conversation/message_comparison_feedback"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader()),
                    body: JSON.stringify(e)
                })
            }
            ,
            e.getCheckoutLink = function() {
                return this.fetch("".concat(g, "/payments/checkout"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader())
                })
            }
            ,
            e.fetchCustomerPortalUrl = function(e) {
                return this.fetch("".concat(g, "/payments/customer_portal"), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(e))
                }, {
                    intercomEventOnError: "fetch-error:customer_portal:get"
                })
            }
            ,
            e.getPlugins = function(e) {
                var t = e.offset
                  , n = e.limit
                  , o = e.statuses
                  , r = e.isInstalled
                  , a = e.accessToken
                  , s = [["offset", t.toString()], ["limit", n.toString()], ];
                if (o) {
                    var c = !0
                      , h = !1
                      , u = void 0;
                    try {
                        for (var d, p = o[Symbol.iterator](); !(c = (d = p.next()).done); c = !0) {
                            var l = d.value;
                            s.push(["statuses", l])
                        }
                    } catch (f) {
                        h = !0,
                        u = f
                    } finally {
                        try {
                            c || null == p.return || p.return()
                        } finally {
                            if (h)
                                throw u
                        }
                    }
                }
                r && s.push(["is_installed", "true"]);
                var m = new URLSearchParams(s);
                return this.fetch("".concat(g, "/aip/p?").concat(m), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(a))
                })
            }
            ,
            e.getPluginByDomain = function(e) {
                var t = e.domain
                  , n = e.accessToken
                  , o = new URLSearchParams({
                    domain: t
                });
                return this.fetch("".concat(g, "/aip/p/domain?").concat(o), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(n))
                })
            }
            ,
            e.createOrUpdateLocalhostPlugin = function(e) {
                var t = e.localhost
                  , n = e.manifest
                  , o = e.openapiSpec
                  , r = e.accessToken;
                return this.fetch("".concat(g, "/aip/lhp"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(r)),
                    body: JSON.stringify({
                        localhost: t,
                        manifest: n,
                        openapi_spec: o
                    })
                })
            }
            ,
            e.scrapePluginManifest = function(e) {
                var t = e.domain
                  , n = e.manifestAccessToken
                  , o = e.accessToken;
                return this.fetch("".concat(g, "/aip/p"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o)),
                    body: JSON.stringify({
                        domain: t,
                        manifest_access_token: n
                    })
                })
            }
            ,
            e.getPluginApi = function(e) {
                var t = e.id
                  , n = e.accessToken;
                return this.fetch("".concat(g, "/aip/p/").concat(t, "/api"), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(n))
                })
            }
            ,
            e.updatePluginUserSettings = function(e) {
                var t = e.pluginId
                  , n = e.isInstalled
                  , o = e.accessToken;
                return this.fetch("".concat(g, "/aip/p/").concat(t, "/user-settings"), {
                    method: "PATCH",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o)),
                    body: JSON.stringify({
                        is_installed: n
                    })
                })
            }
            ,
            e.deletePlugin = function(e) {
                var t = e.id
                  , n = e.accessToken;
                return this.fetch("".concat(g, "/aip/p/").concat(t), {
                    method: "DELETE",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(n))
                })
            }
            ,
            e.setPluginUserHttpToken = function(e) {
                var t = e.id
                  , n = e.userAccessToken
                  , o = e.accessToken;
                return this.fetch("".concat(g, "/aip/p/").concat(t, "/user-settings/http-auth"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o)),
                    body: JSON.stringify({
                        access_token: n
                    })
                })
            }
            ,
            e.setPluginServiceHttpToken = function(e) {
                var t = e.id
                  , n = e.serviceAccessToken
                  , o = e.accessToken;
                return this.fetch("".concat(g, "/aip/p/").concat(t, "/http-auth"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o)),
                    body: JSON.stringify({
                        access_token: n
                    })
                })
            }
            ,
            e.setPluginOAuthClientCredentials = function(e) {
                var t = e.id
                  , n = e.clientId
                  , o = e.clientSecret
                  , r = e.accessToken;
                return this.fetch("".concat(g, "/aip/p/").concat(t, "/oauth"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(r)),
                    body: JSON.stringify({
                        client_id: n,
                        client_secret: o
                    })
                })
            }
            ,
            e.getAccountStatus = function(e, t) {
                var n = (0,
                i.Z)({
                    "Content-Type": "application/json"
                }, this.getAuthHeader(e));
                if (t) {
                    var o = {}
                      , r = !0
                      , a = !1
                      , s = void 0;
                    try {
                        for (var h, u = Object.entries(t)[Symbol.iterator](); !(r = (h = u.next()).done); r = !0) {
                            var d = (0,
                            c.Z)(h.value, 2)
                              , p = d[0]
                              , l = d[1];
                            m.includes(p.toLowerCase()) && (o[p] = l)
                        }
                    } catch (f) {
                        a = !0,
                        s = f
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (a)
                                throw s
                        }
                    }
                    n = (0,
                    i.Z)({}, o, n)
                }
                return this.fetch("".concat(g, "/accounts/check"), {
                    method: "GET",
                    headers: n
                }, {
                    intercomEventOnError: "fetch-error:accounts:get"
                })
            }
            ,
            e.deactivateAccount = function(e) {
                return this.fetch("".concat(g, "/accounts/deactivate"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(e))
                })
            }
            ,
            e.submitDataExport = function(e) {
                return this.fetch("".concat(g, "/accounts/data_export"), {
                    method: "POST",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(e))
                })
            }
            ,
            e.pluginOauthCallback = function(e, t, n, o) {
                var r = new URLSearchParams({
                    code: t,
                    redirect_uri: n
                });
                return this.fetch("".concat(g, "/aip/p/").concat(e, "/user-settings/oauth/callback?").concat(r), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader(o))
                })
            }
            ,
            e.getPageMetadata = function(e) {
                var t = e.url;
                return this.fetch("".concat(g, "/opengraph/tags?url=").concat(encodeURIComponent(t)), {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader())
                })
            }
            ,
            e.getModelMessageCap = function() {
                return this.fetch("/public-api/conversation_limit", {
                    method: "GET",
                    headers: (0,
                    i.Z)({
                        "Content-Type": "application/json"
                    }, this.getAuthHeader())
                })
            }
            ,
            e
        }();
        v.auth0Client = null,
        t.ZP = v
    },
    11938: function(e, t, n) {
        n.d(t, {
            LJ: function() {
                return s
            },
            oG: function() {
                return a
            },
            u$: function() {
                return i
            }
        });
        var o = n(70079)
          , r = "dgkjq2bp";
        function a() {
            (0,
            o.useEffect)(function() {
                !function() {
                    var e = window
                      , t = e.Intercom;
                    if ("function" == typeof t)
                        t("reattach_activator"),
                        t("update", e.intercomSettings);
                    else {
                        var n = document
                          , o = function() {
                            o.c(arguments)
                        };
                        o.q = [],
                        o.c = function(e) {
                            o.q.push(e)
                        }
                        ,
                        e.Intercom = o;
                        var a = function() {
                            var e, t = n.createElement("script");
                            t.type = "text/javascript",
                            t.async = !0,
                            t.src = "https://widget.intercom.io/widget/".concat(r);
                            var o = n.getElementsByTagName("script")[0];
                            null === (e = o.parentNode) || void 0 === e || e.insertBefore(t, o)
                        };
                        "complete" === document.readyState ? a() : e.attachEvent ? e.attachEvent("onload", a) : e.addEventListener("load", a, !1)
                    }
                }()
            }, [])
        }
        function i(e, t) {
            var n = window.Intercom;
            e.id && n && n("boot", {
                app_id: r,
                user_id: e.id,
                name: e.name,
                email: e.email,
                user_hash: e.intercom_hash,
                hide_default_launcher: !0,
                is_chatgpt_user: !0,
                paid_chatgpt_subscriber: null == t ? void 0 : t.is_paid_subscription_active,
                paid_chatgpt_active_until: null == t ? void 0 : t.subscription_expires_at_timestamp
            })
        }
        function s(e, t) {
            var n = window.Intercom;
            n && n("trackEvent", e, t)
        }
    }
}]);
