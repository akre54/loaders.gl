// @ts-nocheck
var e,
  n,
  r,
  t =
    ((e =
      'undefined' != typeof document && document.currentScript
        ? document.currentScript.src
        : void 0),
    function (n) {
      n = void 0 !== (n = n || {}) ? n : {};
      var r,
        t = {};
      for (r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
      (n.arguments = []),
        (n.thisProgram = './this.program'),
        (n.quit = function (e, n) {
          throw n;
        }),
        (n.preRun = []),
        (n.postRun = []);
      var i,
        a,
        s = !1,
        o = !1;
      (s = 'object' == typeof window),
        (o = 'function' == typeof importScripts),
        (i = 'object' == typeof process && 'function' == typeof require && !s && !o),
        (a = !s && !i && !o);
      var c,
        l,
        f = '';
      function p(e) {
        return n.locateFile ? n.locateFile(e, f) : f + e;
      }
      i
        ? ((f = __dirname + '/'),
          (n.read = function (e, n) {
            var r;
            return (
              c || (c = require('fs')),
              l || (l = require('path')),
              (e = l.normalize(e)),
              (r = c.readFileSync(e)),
              n ? r : r.toString()
            );
          }),
          (n.readBinary = function (e) {
            var r = n.read(e, !0);
            return r.buffer || (r = new Uint8Array(r)), T(r.buffer), r;
          }),
          process.argv.length > 1 && (n.thisProgram = process.argv[1].replace(/\\/g, '/')),
          (n.arguments = process.argv.slice(2)),
          process.on('uncaughtException', function (e) {
            if (!(e instanceof $n)) throw e;
          }),
          process.on('unhandledRejection', Nn),
          (n.quit = function (e) {
            process.exit(e);
          }),
          (n.inspect = function () {
            return '[Emscripten Module object]';
          }))
        : a
        ? ('undefined' != typeof read &&
            (n.read = function (e) {
              return read(e);
            }),
          (n.readBinary = function (e) {
            var n;
            return 'function' == typeof readbuffer
              ? new Uint8Array(readbuffer(e))
              : (T('object' == typeof (n = read(e, 'binary'))), n);
          }),
          'undefined' != typeof scriptArgs
            ? (n.arguments = scriptArgs)
            : void 0 !== arguments && (n.arguments = arguments),
          'function' == typeof quit &&
            (n.quit = function (e) {
              quit(e);
            }))
        : (s || o) &&
          (o
            ? (f = self.location.href)
            : document.currentScript && (f = document.currentScript.src),
          e && (f = e),
          (f = 0 !== f.indexOf('blob:') ? f.substr(0, f.lastIndexOf('/') + 1) : ''),
          (n.read = function (e) {
            var n = new XMLHttpRequest();
            return n.open('GET', e, !1), n.send(null), n.responseText;
          }),
          o &&
            (n.readBinary = function (e) {
              var n = new XMLHttpRequest();
              return (
                n.open('GET', e, !1),
                (n.responseType = 'arraybuffer'),
                n.send(null),
                new Uint8Array(n.response)
              );
            }),
          (n.readAsync = function (e, n, r) {
            var t = new XMLHttpRequest();
            t.open('GET', e, !0),
              (t.responseType = 'arraybuffer'),
              (t.onload = function () {
                200 == t.status || (0 == t.status && t.response) ? n(t.response) : r();
              }),
              (t.onerror = r),
              t.send(null);
          }),
          (n.setWindowTitle = function (e) {
            document.title = e;
          }));
      var m =
          n.print ||
          ('undefined' != typeof console
            ? console.log.bind(console)
            : 'undefined' != typeof print
            ? print
            : null),
        h =
          n.printErr ||
          ('undefined' != typeof printErr
            ? printErr
            : ('undefined' != typeof console && console.warn.bind(console)) || m);
      for (r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
      t = void 0;
      var v = 16;
      function y(e, n) {
        return n || (n = v), (e = Math.ceil(e / n) * n);
      }
      var g = {
          'f64-rem': function (e, n) {
            return e % n;
          },
          debugger: function () {}
        },
        u = 0,
        E = !1;
      function T(e, n) {
        e || Nn('Assertion failed: ' + n);
      }
      var w = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0;
      function b(e, n) {
        for (var r = n; e[r]; ) ++r;
        if (r - n > 16 && e.subarray && w) return w.decode(e.subarray(n, r));
        for (var t, i, a, s, o, c = ''; ; ) {
          if (!(t = e[n++])) return c;
          if (128 & t)
            if (((i = 63 & e[n++]), 192 != (224 & t)))
              if (
                ((a = 63 & e[n++]),
                224 == (240 & t)
                  ? (t = ((15 & t) << 12) | (i << 6) | a)
                  : ((s = 63 & e[n++]),
                    240 == (248 & t)
                      ? (t = ((7 & t) << 18) | (i << 12) | (a << 6) | s)
                      : ((o = 63 & e[n++]),
                        (t =
                          248 == (252 & t)
                            ? ((3 & t) << 24) | (i << 18) | (a << 12) | (s << 6) | o
                            : ((1 & t) << 30) |
                              (i << 24) |
                              (a << 18) |
                              (s << 12) |
                              (o << 6) |
                              (63 & e[n++])))),
                t < 65536)
              )
                c += String.fromCharCode(t);
              else {
                var l = t - 65536;
                c += String.fromCharCode(55296 | (l >> 10), 56320 | (1023 & l));
              }
            else c += String.fromCharCode(((31 & t) << 6) | i);
          else c += String.fromCharCode(t);
        }
      }
      function C(e) {
        return b(_, e);
      }
      'undefined' != typeof TextDecoder && new TextDecoder('utf-16le');
      var O,
        d,
        _,
        P,
        $,
        S,
        N,
        R,
        D,
        L,
        F,
        j,
        W,
        M,
        B = 16384,
        k = 65536,
        G = 16777216,
        V = 16777216;
      function z(e, n) {
        return e % n > 0 && (e += n - (e % n)), e;
      }
      function q(e) {
        n.buffer = O = e;
      }
      function X() {
        (n.HEAP8 = d = new Int8Array(O)),
          (n.HEAP16 = P = new Int16Array(O)),
          (n.HEAP32 = S = new Int32Array(O)),
          (n.HEAPU8 = _ = new Uint8Array(O)),
          (n.HEAPU16 = $ = new Uint16Array(O)),
          (n.HEAPU32 = N = new Uint32Array(O)),
          (n.HEAPF32 = R = new Float32Array(O)),
          (n.HEAPF64 = D = new Float64Array(O));
      }
      (L = M = 0),
        n.reallocBuffer ||
          (n.reallocBuffer = function (e) {
            var n;
            try {
              var r = d;
              (n = new ArrayBuffer(e)), new Int8Array(n).set(r);
            } catch (e) {
              return !1;
            }
            return !!Cn(n) && n;
          });
      try {
        Function.prototype.call.bind(
          Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength').get
        )(new ArrayBuffer(4));
      } catch (e) {}
      var K = n.TOTAL_STACK || 5242880,
        Y = n.TOTAL_MEMORY || 16777216;
      function H(e) {
        for (; e.length > 0; ) {
          var r = e.shift();
          if ('function' != typeof r) {
            var t = r.func;
            'number' == typeof t
              ? void 0 === r.arg
                ? n.dynCall_v(t)
                : n.dynCall_vi(t, r.arg)
              : t(void 0 === r.arg ? null : r.arg);
          } else r();
        }
      }
      Y < K &&
        h('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + Y + '! (TOTAL_STACK=' + K + ')'),
        n.buffer
          ? (O = n.buffer)
          : ('object' == typeof WebAssembly && 'function' == typeof WebAssembly.Memory
              ? ((n.wasmMemory = new WebAssembly.Memory({initial: Y / k})),
                (O = n.wasmMemory.buffer))
              : (O = new ArrayBuffer(Y)),
            (n.buffer = O)),
        X();
      var Q = [],
        J = [],
        Z = [],
        A = [],
        U = !1,
        I = 0,
        x = null,
        ee = null;
      (n.preloadedImages = {}), (n.preloadedAudios = {});
      var ne = 'data:application/octet-stream;base64,';
      function re(e) {
        return String.prototype.startsWith ? e.startsWith(ne) : 0 === e.indexOf(ne);
      }
      !(function () {
        var e = 'webm-wasm.wast',
          r = 'webm-wasm.wasm',
          t = 'webm-wasm.temp.asm.js';
        re(e) || (e = p(e)), re(r) || (r = p(r)), re(t) || (t = p(t));
        var i = {global: null, env: null, asm2wasm: g, parent: n},
          a = null;
        function c() {
          try {
            if (n.wasmBinary) return new Uint8Array(n.wasmBinary);
            if (n.readBinary) return n.readBinary(r);
            throw 'both async and sync fetching of the wasm failed';
          } catch (e) {
            Nn(e);
          }
        }
        function l(e, t, l) {
          if ('object' != typeof WebAssembly) return h('no native wasm support detected'), !1;
          if (!(n.wasmMemory instanceof WebAssembly.Memory))
            return h('no native wasm Memory in use'), !1;
          function f(e, r) {
            (a = e.exports).memory &&
              (function (e) {
                var r = n.buffer;
                e.byteLength < r.byteLength &&
                  h(
                    'the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here'
                  );
                var t = new Int8Array(r);
                new Int8Array(e).set(t), q(e), X();
              })(a.memory),
              (n.asm = a),
              (n.usingWasm = !0),
              (function (e) {
                if (
                  (I--,
                  n.monitorRunDependencies && n.monitorRunDependencies(I),
                  0 == I && (null !== x && (clearInterval(x), (x = null)), ee))
                ) {
                  var r = ee;
                  (ee = null), r();
                }
              })();
          }
          if (
            ((t.memory = n.wasmMemory),
            (i.global = {NaN: NaN, Infinity: Infinity}),
            (i['global.Math'] = Math),
            (i.env = t),
            I++,
            n.monitorRunDependencies && n.monitorRunDependencies(I),
            n.instantiateWasm)
          )
            try {
              return n.instantiateWasm(i, f);
            } catch (e) {
              return h('Module.instantiateWasm callback failed with error: ' + e), !1;
            }
          function p(e) {
            f(e.instance);
          }
          function m(e) {
            (n.wasmBinary || (!s && !o) || 'function' != typeof fetch
              ? new Promise(function (e, n) {
                  e(c());
                })
              : fetch(r, {credentials: 'same-origin'})
                  .then(function (e) {
                    if (!e.ok) throw "failed to load wasm binary file at '" + r + "'";
                    return e.arrayBuffer();
                  })
                  .catch(function () {
                    return c();
                  })
            )
              .then(function (e) {
                return WebAssembly.instantiate(e, i);
              })
              .then(e, function (e) {
                h('failed to asynchronously prepare wasm: ' + e), Nn(e);
              });
          }
          return (
            n.wasmBinary ||
            'function' != typeof WebAssembly.instantiateStreaming ||
            re(r) ||
            'function' != typeof fetch
              ? m(p)
              : WebAssembly.instantiateStreaming(fetch(r, {credentials: 'same-origin'}), i).then(
                  p,
                  function (e) {
                    h('wasm streaming compile failed: ' + e),
                      h('falling back to ArrayBuffer instantiation'),
                      m(p);
                  }
                ),
            {}
          );
        }
        (n.asmPreload = n.asm),
          (n.reallocBuffer = function (e) {
            return (function (e) {
              e = z(e, n.usingWasm ? k : G);
              var r = n.buffer.byteLength;
              if (n.usingWasm)
                try {
                  return -1 !== n.wasmMemory.grow((e - r) / 65536)
                    ? (n.buffer = n.wasmMemory.buffer)
                    : null;
                } catch (e) {
                  return null;
                }
            })(e);
          }),
          (n.asm = function (e, r, t) {
            if (!r.table) {
              var i = n.wasmTableSize;
              void 0 === i && (i = 1024);
              var a = n.wasmMaxTableSize;
              (r.table =
                'object' == typeof WebAssembly && 'function' == typeof WebAssembly.Table
                  ? void 0 !== a
                    ? new WebAssembly.Table({initial: i, maximum: a, element: 'anyfunc'})
                    : new WebAssembly.Table({initial: i, element: 'anyfunc'})
                  : new Array(i)),
                (n.wasmTable = r.table);
            }
            var s;
            return (
              r.__memory_base || (r.__memory_base = n.STATIC_BASE),
              r.__table_base || (r.__table_base = 0),
              T((s = l(0, r)), 'no binaryen method succeeded.'),
              s
            );
          });
      })(),
        (L = 61728),
        J.push(
          {
            func: function () {
              wn();
            }
          },
          {
            func: function () {
              Tn();
            }
          }
        ),
        (n.STATIC_BASE = 1024),
        (n.STATIC_BUMP = 60704),
        (L += 16);
      var te = {
        buffers: [null, [], []],
        printChar: function (e, n) {
          var r = te.buffers[e];
          T(r), 0 === n || 10 === n ? ((1 === e ? m : h)(b(r, 0)), (r.length = 0)) : r.push(n);
        },
        varargs: 0,
        get: function (e) {
          return (te.varargs += 4), S[(te.varargs - 4) >> 2];
        },
        getStr: function () {
          return (function (e, n) {
            if (0 === n || !e) return '';
            for (
              var r, t = 0, i = 0;
              (t |= r = _[(e + i) >> 0]), (0 != r || n) && (i++, !n || i != n);

            );
            n || (n = i);
            var a = '';
            if (t < 128) {
              for (var s; n > 0; )
                (s = String.fromCharCode.apply(String, _.subarray(e, e + Math.min(n, 1024)))),
                  (a = a ? a + s : s),
                  (e += 1024),
                  (n -= 1024);
              return a;
            }
            return C(e);
          })(te.get());
        },
        get64: function () {
          var e = te.get(),
            n = te.get();
          return T(e >= 0 ? 0 === n : -1 === n), e;
        },
        getZero: function () {
          T(0 === te.get());
        }
      };
      function ie(e) {
        return n.___errno_location && (S[n.___errno_location() >> 2] = e), e;
      }
      function ae(e) {
        switch (e) {
          case 1:
            return 0;
          case 2:
            return 1;
          case 4:
            return 2;
          case 8:
            return 3;
          default:
            throw new TypeError('Unknown type size: ' + e);
        }
      }
      var se = void 0;
      function oe(e) {
        for (var n = '', r = e; _[r]; ) n += se[_[r++]];
        return n;
      }
      var ce = {},
        le = {},
        fe = {},
        pe = 48,
        me = 57;
      function he(e) {
        if (void 0 === e) return '_unknown';
        var n = (e = e.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0);
        return n >= pe && n <= me ? '_' + e : e;
      }
      function ve(e, n) {
        return (
          (e = he(e)),
          new Function(
            'body',
            'return function ' +
              e +
              '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
          )(n)
        );
      }
      function ye(e, n) {
        var r = ve(n, function (e) {
          (this.name = n), (this.message = e);
          var r = new Error(e).stack;
          void 0 !== r &&
            (this.stack = this.toString() + '\n' + r.replace(/^Error(:[^\n]*)?\n/, ''));
        });
        return (
          (r.prototype = Object.create(e.prototype)),
          (r.prototype.constructor = r),
          (r.prototype.toString = function () {
            return void 0 === this.message ? this.name : this.name + ': ' + this.message;
          }),
          r
        );
      }
      var ge = void 0;
      function ue(e) {
        throw new ge(e);
      }
      var Ee = void 0;
      function Te(e) {
        throw new Ee(e);
      }
      function we(e, n, r) {
        function t(n) {
          var t = r(n);
          t.length !== e.length && Te('Mismatched type converter count');
          for (var i = 0; i < e.length; ++i) be(e[i], t[i]);
        }
        e.forEach(function (e) {
          fe[e] = n;
        });
        var i = new Array(n.length),
          a = [],
          s = 0;
        n.forEach(function (e, n) {
          le.hasOwnProperty(e)
            ? (i[n] = le[e])
            : (a.push(e),
              ce.hasOwnProperty(e) || (ce[e] = []),
              ce[e].push(function () {
                (i[n] = le[e]), ++s === a.length && t(i);
              }));
        }),
          0 === a.length && t(i);
      }
      function be(e, n, r) {
        if (((r = r || {}), !('argPackAdvance' in n)))
          throw new TypeError('registerType registeredInstance requires argPackAdvance');
        var t = n.name;
        if (
          (e || ue('type "' + t + '" must have a positive integer typeid pointer'),
          le.hasOwnProperty(e))
        ) {
          if (r.ignoreDuplicateRegistrations) return;
          ue("Cannot register type '" + t + "' twice");
        }
        if (((le[e] = n), delete fe[e], ce.hasOwnProperty(e))) {
          var i = ce[e];
          delete ce[e],
            i.forEach(function (e) {
              e();
            });
        }
      }
      function Ce(e) {
        if (!(this instanceof De)) return !1;
        if (!(e instanceof De)) return !1;
        for (
          var n = this.$$.ptrType.registeredClass,
            r = this.$$.ptr,
            t = e.$$.ptrType.registeredClass,
            i = e.$$.ptr;
          n.baseClass;

        )
          (r = n.upcast(r)), (n = n.baseClass);
        for (; t.baseClass; ) (i = t.upcast(i)), (t = t.baseClass);
        return n === t && r === i;
      }
      function Oe(e) {
        ue(e.$$.ptrType.registeredClass.name + ' instance already deleted');
      }
      function de() {
        if ((this.$$.ptr || Oe(this), this.$$.preservePointerOnDelete))
          return (this.$$.count.value += 1), this;
        var e,
          n = Object.create(Object.getPrototypeOf(this), {
            $$: {
              value:
                ((e = this.$$),
                {
                  count: e.count,
                  deleteScheduled: e.deleteScheduled,
                  preservePointerOnDelete: e.preservePointerOnDelete,
                  ptr: e.ptr,
                  ptrType: e.ptrType,
                  smartPtr: e.smartPtr,
                  smartPtrType: e.smartPtrType
                })
            }
          });
        return (n.$$.count.value += 1), (n.$$.deleteScheduled = !1), n;
      }
      function _e() {
        var e;
        this.$$.ptr || Oe(this),
          this.$$.deleteScheduled &&
            !this.$$.preservePointerOnDelete &&
            ue('Object already scheduled for deletion'),
          (this.$$.count.value -= 1),
          0 === this.$$.count.value &&
            ((e = this.$$).smartPtr
              ? e.smartPtrType.rawDestructor(e.smartPtr)
              : e.ptrType.registeredClass.rawDestructor(e.ptr)),
          this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0));
      }
      function Pe() {
        return !this.$$.ptr;
      }
      var $e = void 0,
        Se = [];
      function Ne() {
        for (; Se.length; ) {
          var e = Se.pop();
          (e.$$.deleteScheduled = !1), e.delete();
        }
      }
      function Re() {
        return (
          this.$$.ptr || Oe(this),
          this.$$.deleteScheduled &&
            !this.$$.preservePointerOnDelete &&
            ue('Object already scheduled for deletion'),
          Se.push(this),
          1 === Se.length && $e && $e(Ne),
          (this.$$.deleteScheduled = !0),
          this
        );
      }
      function De() {}
      var Le = {};
      function Fe(e, n, r) {
        if (void 0 === e[n].overloadTable) {
          var t = e[n];
          (e[n] = function () {
            return (
              e[n].overloadTable.hasOwnProperty(arguments.length) ||
                ue(
                  "Function '" +
                    r +
                    "' called with an invalid number of arguments (" +
                    arguments.length +
                    ') - expects one of (' +
                    e[n].overloadTable +
                    ')!'
                ),
              e[n].overloadTable[arguments.length].apply(this, arguments)
            );
          }),
            (e[n].overloadTable = []),
            (e[n].overloadTable[t.argCount] = t);
        }
      }
      function je(e, n, r, t, i, a, s, o) {
        (this.name = e),
          (this.constructor = n),
          (this.instancePrototype = r),
          (this.rawDestructor = t),
          (this.baseClass = i),
          (this.getActualType = a),
          (this.upcast = s),
          (this.downcast = o),
          (this.pureVirtualFunctions = []);
      }
      function We(e, n, r) {
        for (; n !== r; )
          n.upcast ||
            ue('Expected null or instance of ' + r.name + ', got an instance of ' + n.name),
            (e = n.upcast(e)),
            (n = n.baseClass);
        return e;
      }
      function Me(e, n) {
        return null === n
          ? (this.isReference && ue('null is not a valid ' + this.name), 0)
          : (n.$$ || ue('Cannot pass "' + pn(n) + '" as a ' + this.name),
            n.$$.ptr || ue('Cannot pass deleted object as a pointer of type ' + this.name),
            We(n.$$.ptr, n.$$.ptrType.registeredClass, this.registeredClass));
      }
      function Be(e, n) {
        var r;
        if (null === n)
          return (
            this.isReference && ue('null is not a valid ' + this.name),
            this.isSmartPointer
              ? ((r = this.rawConstructor()), null !== e && e.push(this.rawDestructor, r), r)
              : 0
          );
        if (
          (n.$$ || ue('Cannot pass "' + pn(n) + '" as a ' + this.name),
          n.$$.ptr || ue('Cannot pass deleted object as a pointer of type ' + this.name),
          !this.isConst &&
            n.$$.ptrType.isConst &&
            ue(
              'Cannot convert argument of type ' +
                (n.$$.smartPtrType ? n.$$.smartPtrType.name : n.$$.ptrType.name) +
                ' to parameter type ' +
                this.name
            ),
          (r = We(n.$$.ptr, n.$$.ptrType.registeredClass, this.registeredClass)),
          this.isSmartPointer)
        )
          switch (
            (void 0 === n.$$.smartPtr && ue('Passing raw pointer to smart pointer is illegal'),
            this.sharingPolicy)
          ) {
            case 0:
              n.$$.smartPtrType === this
                ? (r = n.$$.smartPtr)
                : ue(
                    'Cannot convert argument of type ' +
                      (n.$$.smartPtrType ? n.$$.smartPtrType.name : n.$$.ptrType.name) +
                      ' to parameter type ' +
                      this.name
                  );
              break;
            case 1:
              r = n.$$.smartPtr;
              break;
            case 2:
              if (n.$$.smartPtrType === this) r = n.$$.smartPtr;
              else {
                var t = n.clone();
                (r = this.rawShare(
                  r,
                  fn(function () {
                    t.delete();
                  })
                )),
                  null !== e && e.push(this.rawDestructor, r);
              }
              break;
            default:
              ue('Unsupporting sharing policy');
          }
        return r;
      }
      function ke(e, n) {
        return null === n
          ? (this.isReference && ue('null is not a valid ' + this.name), 0)
          : (n.$$ || ue('Cannot pass "' + pn(n) + '" as a ' + this.name),
            n.$$.ptr || ue('Cannot pass deleted object as a pointer of type ' + this.name),
            n.$$.ptrType.isConst &&
              ue(
                'Cannot convert argument of type ' +
                  n.$$.ptrType.name +
                  ' to parameter type ' +
                  this.name
              ),
            We(n.$$.ptr, n.$$.ptrType.registeredClass, this.registeredClass));
      }
      function Ge(e) {
        return this.fromWireType(N[e >> 2]);
      }
      function Ve(e) {
        return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
      }
      function ze(e) {
        this.rawDestructor && this.rawDestructor(e);
      }
      function qe(e) {
        null !== e && e.delete();
      }
      function Xe() {
        return Object.keys(He).length;
      }
      function Ke() {
        var e = [];
        for (var n in He) He.hasOwnProperty(n) && e.push(He[n]);
        return e;
      }
      function Ye(e) {
        ($e = e), Se.length && $e && $e(Ne);
      }
      var He = {};
      function Qe(e, n) {
        return (
          (n = (function (e, n) {
            for (void 0 === n && ue('ptr should not be undefined'); e.baseClass; )
              (n = e.upcast(n)), (e = e.baseClass);
            return n;
          })(e, n)),
          He[n]
        );
      }
      function Je(e, n) {
        return (
          (n.ptrType && n.ptr) || Te('makeClassHandle requires ptr and ptrType'),
          !!n.smartPtrType != !!n.smartPtr &&
            Te('Both smartPtrType and smartPtr must be specified'),
          (n.count = {value: 1}),
          Object.create(e, {$$: {value: n}})
        );
      }
      function Ze(e) {
        var n = this.getPointee(e);
        if (!n) return this.destructor(e), null;
        var r = Qe(this.registeredClass, n);
        if (void 0 !== r) {
          if (0 === r.$$.count.value) return (r.$$.ptr = n), (r.$$.smartPtr = e), r.clone();
          var t = r.clone();
          return this.destructor(e), t;
        }
        function i() {
          return Je(
            this.registeredClass.instancePrototype,
            this.isSmartPointer
              ? {ptrType: this.pointeeType, ptr: n, smartPtrType: this, smartPtr: e}
              : {ptrType: this, ptr: e}
          );
        }
        var a,
          s = this.registeredClass.getActualType(n),
          o = Le[s];
        if (!o) return i.call(this);
        var c = (function e(n, r, t) {
          if (r === t) return n;
          if (void 0 === t.baseClass) return null;
          var i = e(n, r, t.baseClass);
          return null === i ? null : t.downcast(i);
        })(
          n,
          this.registeredClass,
          (a = this.isConst ? o.constPointerType : o.pointerType).registeredClass
        );
        return null === c
          ? i.call(this)
          : Je(
              a.registeredClass.instancePrototype,
              this.isSmartPointer
                ? {ptrType: a, ptr: c, smartPtrType: this, smartPtr: e}
                : {ptrType: a, ptr: c}
            );
      }
      function Ae(e, n, r, t, i, a, s, o, c, l, f) {
        (this.name = e),
          (this.registeredClass = n),
          (this.isReference = r),
          (this.isConst = t),
          (this.isSmartPointer = i),
          (this.pointeeType = a),
          (this.sharingPolicy = s),
          (this.rawGetPointee = o),
          (this.rawConstructor = c),
          (this.rawShare = l),
          (this.rawDestructor = f),
          i || void 0 !== n.baseClass
            ? (this.toWireType = Be)
            : t
            ? ((this.toWireType = Me), (this.destructorFunction = null))
            : ((this.toWireType = ke), (this.destructorFunction = null));
      }
      function Ue(e, r) {
        var t;
        if (((e = oe(e)), void 0 !== n['FUNCTION_TABLE_' + e])) t = n['FUNCTION_TABLE_' + e][r];
        else if ('undefined' != typeof FUNCTION_TABLE) t = FUNCTION_TABLE[r];
        else {
          var i = n['dynCall_' + e];
          void 0 === i &&
            void 0 === (i = n['dynCall_' + e.replace(/f/g, 'd')]) &&
            ue('No dynCall invoker for signature: ' + e),
            (t = (function (n) {
              for (var t = [], i = 1; i < e.length; ++i) t.push('a' + i);
              var a = 'return function dynCall_' + e + '_' + r + '(' + t.join(', ') + ') {\n';
              return (
                (a +=
                  '    return dynCall(rawFunction' +
                  (t.length ? ', ' : '') +
                  t.join(', ') +
                  ');\n'),
                (a += '};\n'),
                new Function('dynCall', 'rawFunction', a)(n, r)
              );
            })(i));
        }
        return (
          'function' != typeof t && ue('unknown function pointer with signature ' + e + ': ' + r), t
        );
      }
      var Ie = void 0;
      function xe(e) {
        var n = bn(e),
          r = oe(n);
        return On(n), r;
      }
      function en(e, n) {
        var r = [],
          t = {};
        throw (
          (n.forEach(function e(n) {
            t[n] || le[n] || (fe[n] ? fe[n].forEach(e) : (r.push(n), (t[n] = !0)));
          }),
          new Ie(e + ': ' + r.map(xe).join([', '])))
        );
      }
      function nn(e, n) {
        for (var r = [], t = 0; t < e; t++) r.push(S[(n >> 2) + t]);
        return r;
      }
      function rn(e) {
        for (; e.length; ) {
          var n = e.pop();
          e.pop()(n);
        }
      }
      function tn(e, n, r, t, i) {
        var a = n.length;
        a < 2 &&
          ue("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var s = null !== n[1] && null !== r, o = !1, c = 1; c < n.length; ++c)
          if (null !== n[c] && void 0 === n[c].destructorFunction) {
            o = !0;
            break;
          }
        var l = 'void' !== n[0].name,
          f = '',
          p = '';
        for (c = 0; c < a - 2; ++c)
          (f += (0 !== c ? ', ' : '') + 'arg' + c),
            (p += (0 !== c ? ', ' : '') + 'arg' + c + 'Wired');
        var m =
          'return function ' +
          he(e) +
          '(' +
          f +
          ') {\nif (arguments.length !== ' +
          (a - 2) +
          ") {\nthrowBindingError('function " +
          e +
          " called with ' + arguments.length + ' arguments, expected " +
          (a - 2) +
          " args!');\n}\n";
        o && (m += 'var destructors = [];\n');
        var h = o ? 'destructors' : 'null',
          v = ['throwBindingError', 'invoker', 'fn', 'runDestructors', 'retType', 'classParam'],
          y = [ue, t, i, rn, n[0], n[1]];
        for (
          s && (m += 'var thisWired = classParam.toWireType(' + h + ', this);\n'), c = 0;
          c < a - 2;
          ++c
        )
          (m +=
            'var arg' +
            c +
            'Wired = argType' +
            c +
            '.toWireType(' +
            h +
            ', arg' +
            c +
            '); // ' +
            n[c + 2].name +
            '\n'),
            v.push('argType' + c),
            y.push(n[c + 2]);
        if (
          (s && (p = 'thisWired' + (p.length > 0 ? ', ' : '') + p),
          (m += (l ? 'var rv = ' : '') + 'invoker(fn' + (p.length > 0 ? ', ' : '') + p + ');\n'),
          o)
        )
          m += 'runDestructors(destructors);\n';
        else
          for (c = s ? 1 : 2; c < n.length; ++c) {
            var g = 1 === c ? 'thisWired' : 'arg' + (c - 2) + 'Wired';
            null !== n[c].destructorFunction &&
              ((m += g + '_dtor(' + g + '); // ' + n[c].name + '\n'),
              v.push(g + '_dtor'),
              y.push(n[c].destructorFunction));
          }
        return (
          l && (m += 'var ret = retType.fromWireType(rv);\nreturn ret;\n'),
          v.push((m += '}\n')),
          (function (e, n) {
            if (!(e instanceof Function))
              throw new TypeError(
                'new_ called with constructor type ' + typeof e + ' which is not a function'
              );
            var r = ve(e.name || 'unknownFunctionName', function () {});
            r.prototype = e.prototype;
            var t = new r(),
              i = e.apply(t, n);
            return i instanceof Object ? i : t;
          })(Function, v).apply(null, y)
        );
      }
      var an = [],
        sn = [{}, {value: void 0}, {value: null}, {value: !0}, {value: !1}];
      function on(e) {
        e > 4 && 0 == --sn[e].refcount && ((sn[e] = void 0), an.push(e));
      }
      function cn() {
        for (var e = 0, n = 5; n < sn.length; ++n) void 0 !== sn[n] && ++e;
        return e;
      }
      function ln() {
        for (var e = 5; e < sn.length; ++e) if (void 0 !== sn[e]) return sn[e];
        return null;
      }
      function fn(e) {
        switch (e) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            var n = an.length ? an.pop() : sn.length;
            return (sn[n] = {refcount: 1, value: e}), n;
        }
      }
      function pn(e) {
        if (null === e) return 'null';
        var n = typeof e;
        return 'object' === n || 'array' === n || 'function' === n ? e.toString() : '' + e;
      }
      function mn(e, n) {
        switch (n) {
          case 2:
            return function (e) {
              return this.fromWireType(R[e >> 2]);
            };
          case 3:
            return function (e) {
              return this.fromWireType(D[e >> 3]);
            };
          default:
            throw new TypeError('Unknown float type: ' + e);
        }
      }
      function hn(e, n, r) {
        switch (n) {
          case 0:
            return r
              ? function (e) {
                  return d[e];
                }
              : function (e) {
                  return _[e];
                };
          case 1:
            return r
              ? function (e) {
                  return P[e >> 1];
                }
              : function (e) {
                  return $[e >> 1];
                };
          case 2:
            return r
              ? function (e) {
                  return S[e >> 2];
                }
              : function (e) {
                  return N[e >> 2];
                };
          default:
            throw new TypeError('Unknown integer type: ' + e);
        }
      }
      function vn(e, n) {
        var r = le[e];
        return void 0 === r && ue(n + ' has unknown type ' + xe(e)), r;
      }
      var yn = {},
        gn = 1,
        un = {
          EPERM: 1,
          ENOENT: 2,
          ESRCH: 3,
          EINTR: 4,
          EIO: 5,
          ENXIO: 6,
          E2BIG: 7,
          ENOEXEC: 8,
          EBADF: 9,
          ECHILD: 10,
          EAGAIN: 11,
          EWOULDBLOCK: 11,
          ENOMEM: 12,
          EACCES: 13,
          EFAULT: 14,
          ENOTBLK: 15,
          EBUSY: 16,
          EEXIST: 17,
          EXDEV: 18,
          ENODEV: 19,
          ENOTDIR: 20,
          EISDIR: 21,
          EINVAL: 22,
          ENFILE: 23,
          EMFILE: 24,
          ENOTTY: 25,
          ETXTBSY: 26,
          EFBIG: 27,
          ENOSPC: 28,
          ESPIPE: 29,
          EROFS: 30,
          EMLINK: 31,
          EPIPE: 32,
          EDOM: 33,
          ERANGE: 34,
          ENOMSG: 42,
          EIDRM: 43,
          ECHRNG: 44,
          EL2NSYNC: 45,
          EL3HLT: 46,
          EL3RST: 47,
          ELNRNG: 48,
          EUNATCH: 49,
          ENOCSI: 50,
          EL2HLT: 51,
          EDEADLK: 35,
          ENOLCK: 37,
          EBADE: 52,
          EBADR: 53,
          EXFULL: 54,
          ENOANO: 55,
          EBADRQC: 56,
          EBADSLT: 57,
          EDEADLOCK: 35,
          EBFONT: 59,
          ENOSTR: 60,
          ENODATA: 61,
          ETIME: 62,
          ENOSR: 63,
          ENONET: 64,
          ENOPKG: 65,
          EREMOTE: 66,
          ENOLINK: 67,
          EADV: 68,
          ESRMNT: 69,
          ECOMM: 70,
          EPROTO: 71,
          EMULTIHOP: 72,
          EDOTDOT: 73,
          EBADMSG: 74,
          ENOTUNIQ: 76,
          EBADFD: 77,
          EREMCHG: 78,
          ELIBACC: 79,
          ELIBBAD: 80,
          ELIBSCN: 81,
          ELIBMAX: 82,
          ELIBEXEC: 83,
          ENOSYS: 38,
          ENOTEMPTY: 39,
          ENAMETOOLONG: 36,
          ELOOP: 40,
          EOPNOTSUPP: 95,
          EPFNOSUPPORT: 96,
          ECONNRESET: 104,
          ENOBUFS: 105,
          EAFNOSUPPORT: 97,
          EPROTOTYPE: 91,
          ENOTSOCK: 88,
          ENOPROTOOPT: 92,
          ESHUTDOWN: 108,
          ECONNREFUSED: 111,
          EADDRINUSE: 98,
          ECONNABORTED: 103,
          ENETUNREACH: 101,
          ENETDOWN: 100,
          ETIMEDOUT: 110,
          EHOSTDOWN: 112,
          EHOSTUNREACH: 113,
          EINPROGRESS: 115,
          EALREADY: 114,
          EDESTADDRREQ: 89,
          EMSGSIZE: 90,
          EPROTONOSUPPORT: 93,
          ESOCKTNOSUPPORT: 94,
          EADDRNOTAVAIL: 99,
          ENETRESET: 102,
          EISCONN: 106,
          ENOTCONN: 107,
          ETOOMANYREFS: 109,
          EUSERS: 87,
          EDQUOT: 122,
          ESTALE: 116,
          ENOTSUP: 95,
          ENOMEDIUM: 123,
          EILSEQ: 84,
          EOVERFLOW: 75,
          ECANCELED: 125,
          ENOTRECOVERABLE: 131,
          EOWNERDEAD: 130,
          ESTRPIPE: 86
        };
      !(function () {
        for (var e = new Array(256), n = 0; n < 256; ++n) e[n] = String.fromCharCode(n);
        se = e;
      })(),
        (ge = n.BindingError = ye(Error, 'BindingError')),
        (Ee = n.InternalError = ye(Error, 'InternalError')),
        (De.prototype.isAliasOf = Ce),
        (De.prototype.clone = de),
        (De.prototype.delete = _e),
        (De.prototype.isDeleted = Pe),
        (De.prototype.deleteLater = Re),
        (Ae.prototype.getPointee = Ve),
        (Ae.prototype.destructor = ze),
        (Ae.prototype.argPackAdvance = 8),
        (Ae.prototype.readValueFromPointer = Ge),
        (Ae.prototype.deleteObject = qe),
        (Ae.prototype.fromWireType = Ze),
        (n.getInheritedInstanceCount = Xe),
        (n.getLiveInheritedInstances = Ke),
        (n.flushPendingDeletes = Ne),
        (n.setDelayFunction = Ye),
        (Ie = n.UnboundTypeError = ye(Error, 'UnboundTypeError')),
        (n.count_emval_handles = cn),
        (n.get_first_emval = ln),
        (M = L),
        (F = j = y((L = (L + 4 + 15) & -16))),
        (W = y(F + K)),
        (S[M >> 2] = W),
        (n.wasmTableSize = 338),
        (n.wasmMaxTableSize = 338),
        (n.asmGlobalArg = {}),
        (n.asmLibraryArg = {
          f: Nn,
          la: function () {
            var e = n.usingWasm ? k : G,
              r = 2147483648 - e;
            if (S[M >> 2] > r) return !1;
            var t = Y;
            for (Y = Math.max(Y, V); Y < S[M >> 2]; )
              Y = Y <= 536870912 ? z(2 * Y, e) : Math.min(z((3 * Y + 2147483648) / 4, e), r);
            var i = n.reallocBuffer(Y);
            return i && i.byteLength == Y ? (q(i), X(), !0) : ((Y = t), !1);
          },
          ia: function () {
            return Y;
          },
          c: function (e) {
            u = e;
          },
          d: function () {
            return u;
          },
          V: function () {
            Nn(
              'Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' +
                Y +
                ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 '
            );
          },
          R: function (e, r) {
            var t = Pn();
            try {
              return n.dynCall_dd(e, r);
            } catch (e) {
              if ((_n(t), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          q: function (e, r, t, i) {
            var a = Pn();
            try {
              return n.dynCall_dddd(e, r, t, i);
            } catch (e) {
              if ((_n(a), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          A: function (e, r) {
            var t = Pn();
            try {
              return n.dynCall_ii(e, r);
            } catch (e) {
              if ((_n(t), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          h: function (e, r, t) {
            var i = Pn();
            try {
              return n.dynCall_iii(e, r, t);
            } catch (e) {
              if ((_n(i), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          M: function (e, r, t, i) {
            var a = Pn();
            try {
              return n.dynCall_iiii(e, r, t, i);
            } catch (e) {
              if ((_n(a), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          O: function (e, r, t, i, a, s, o) {
            var c = Pn();
            try {
              return n.dynCall_jiiiiii(e, r, t, i, a, s, o);
            } catch (e) {
              if ((_n(c), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          g: function (e, r) {
            var t = Pn();
            try {
              n.dynCall_vi(e, r);
            } catch (e) {
              if ((_n(t), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          z: function (e, r, t) {
            var i = Pn();
            try {
              n.dynCall_vii(e, r, t);
            } catch (e) {
              if ((_n(i), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          p: function (e, r, t, i, a) {
            var s = Pn();
            try {
              n.dynCall_viiii(e, r, t, i, a);
            } catch (e) {
              if ((_n(s), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          L: function (e, r, t, i, a, s) {
            var o = Pn();
            try {
              n.dynCall_viiiii(e, r, t, i, a, s);
            } catch (e) {
              if ((_n(o), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          N: function (e, r, t, i, a, s, o, c, l, f) {
            var p = Pn();
            try {
              n.dynCall_vijjjid(e, r, t, i, a, s, o, c, l, f);
            } catch (e) {
              if ((_n(p), 'number' != typeof e && 'longjmp' !== e)) throw e;
              n.setThrew(1, 0);
            }
          },
          y: function (e) {
            return dn(e);
          },
          ka: function () {
            throw ((E = !0), 'Pure virtual function called!');
          },
          x: function (e, n, r) {
            throw (
              e +
              ' - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.'
            );
          },
          ja: function () {},
          K: ie,
          ha: function (e, n) {
            te.varargs = n;
            try {
              var r = te.getStreamFromFD(),
                t = (te.get(), te.get()),
                i = te.get(),
                a = te.get(),
                s = t;
              return (
                FS.llseek(r, s, a),
                (S[i >> 2] = r.position),
                r.getdents && 0 === s && 0 === a && (r.getdents = null),
                0
              );
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || Nn(e), -e.errno;
            }
          },
          ga: function (e, n) {
            te.varargs = n;
            try {
              var r = te.getStreamFromFD(),
                t = te.get(),
                i = te.get();
              return te.doReadv(r, t, i);
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || Nn(e), -e.errno;
            }
          },
          J: function (e, n) {
            te.varargs = n;
            try {
              for (var r = te.get(), t = te.get(), i = te.get(), a = 0, s = 0; s < i; s++) {
                for (var o = S[(t + 8 * s) >> 2], c = S[(t + (8 * s + 4)) >> 2], l = 0; l < c; l++)
                  te.printChar(r, _[o + l]);
                a += c;
              }
              return a;
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || Nn(e), -e.errno;
            }
          },
          t: function (e, n) {
            te.varargs = n;
            try {
              return 0;
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || Nn(e), -e.errno;
            }
          },
          fa: function (e, n) {
            te.varargs = n;
            try {
              var r = te.getStr(),
                t = te.get(),
                i = te.get();
              return FS.open(r, t, i).fd;
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || Nn(e), -e.errno;
            }
          },
          I: function (e, n) {
            te.varargs = n;
            try {
              return 0;
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || Nn(e), -e.errno;
            }
          },
          H: function (e, n) {
            te.varargs = n;
            try {
              var r = te.getStreamFromFD();
              return FS.close(r), 0;
            } catch (e) {
              return ('undefined' != typeof FS && e instanceof FS.ErrnoError) || Nn(e), -e.errno;
            }
          },
          w: function () {},
          ea: function (e, n, r, t, i) {
            var a = ae(r);
            be(e, {
              name: (n = oe(n)),
              fromWireType: function (e) {
                return !!e;
              },
              toWireType: function (e, n) {
                return n ? t : i;
              },
              argPackAdvance: 8,
              readValueFromPointer: function (e) {
                var t;
                if (1 === r) t = d;
                else if (2 === r) t = P;
                else {
                  if (4 !== r) throw new TypeError('Unknown boolean type size: ' + n);
                  t = S;
                }
                return this.fromWireType(t[e >> a]);
              },
              destructorFunction: null
            });
          },
          da: function (e, r, t, i, a, s, o, c, l, f, p, m, h) {
            (p = oe(p)), (s = Ue(a, s)), c && (c = Ue(o, c)), f && (f = Ue(l, f)), (h = Ue(m, h));
            var v = he(p);
            !(function (e, r, t) {
              n.hasOwnProperty(e)
                ? ((void 0 === t ||
                    (void 0 !== n[e].overloadTable && void 0 !== n[e].overloadTable[t])) &&
                    ue("Cannot register public name '" + e + "' twice"),
                  Fe(n, e, e),
                  n.hasOwnProperty(t) &&
                    ue(
                      'Cannot register multiple overloads of a function with the same number of arguments (' +
                        t +
                        ')!'
                    ),
                  (n[e].overloadTable[t] = r))
                : ((n[e] = r), void 0 !== t && (n[e].numArguments = t));
            })(v, function () {
              en('Cannot construct ' + p + ' due to unbound types', [i]);
            }),
              we([e, r, t], i ? [i] : [], function (r) {
                var t, a;
                (r = r[0]), (a = i ? (t = r.registeredClass).instancePrototype : De.prototype);
                var o = ve(v, function () {
                    if (Object.getPrototypeOf(this) !== l)
                      throw new ge("Use 'new' to construct " + p);
                    if (void 0 === m.constructor_body)
                      throw new ge(p + ' has no accessible constructor');
                    var e = m.constructor_body[arguments.length];
                    if (void 0 === e)
                      throw new ge(
                        'Tried to invoke ctor of ' +
                          p +
                          ' with invalid number of parameters (' +
                          arguments.length +
                          ') - expected (' +
                          Object.keys(m.constructor_body).toString() +
                          ') parameters instead!'
                      );
                    return e.apply(this, arguments);
                  }),
                  l = Object.create(a, {constructor: {value: o}});
                o.prototype = l;
                var m = new je(p, o, l, h, t, s, c, f),
                  y = new Ae(p, m, !0, !1, !1),
                  g = new Ae(p + '*', m, !1, !1, !1),
                  u = new Ae(p + ' const*', m, !1, !0, !1);
                return (
                  (Le[e] = {pointerType: g, constPointerType: u}),
                  (function (e, r, t) {
                    n.hasOwnProperty(e) || Te('Replacing nonexistant public symbol'),
                      void 0 !== n[e].overloadTable && void 0 !== t
                        ? (n[e].overloadTable[t] = r)
                        : ((n[e] = r), (n[e].argCount = t));
                  })(v, o),
                  [y, g, u]
                );
              });
          },
          ca: function (e, n, r, t, i, a) {
            var s = nn(n, r);
            (i = Ue(t, i)),
              we([], [e], function (e) {
                var r = 'constructor ' + (e = e[0]).name;
                if (
                  (void 0 === e.registeredClass.constructor_body &&
                    (e.registeredClass.constructor_body = []),
                  void 0 !== e.registeredClass.constructor_body[n - 1])
                )
                  throw new ge(
                    'Cannot register multiple constructors with identical number of parameters (' +
                      (n - 1) +
                      ") for class '" +
                      e.name +
                      "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
                  );
                return (
                  (e.registeredClass.constructor_body[n - 1] = function () {
                    en('Cannot construct ' + e.name + ' due to unbound types', s);
                  }),
                  we([], s, function (t) {
                    return (
                      (e.registeredClass.constructor_body[n - 1] = function () {
                        var e = arguments;
                        arguments.length !== n - 1 &&
                          ue(
                            r +
                              ' called with ' +
                              arguments.length +
                              ' arguments, expected ' +
                              (n - 1)
                          );
                        var s = [],
                          o = new Array(n);
                        o[0] = a;
                        for (var c = 1; c < n; ++c) o[c] = t[c].toWireType(s, e[c - 1]);
                        var l = i.apply(null, o);
                        return rn(s), t[0].fromWireType(l);
                      }),
                      []
                    );
                  }),
                  []
                );
              });
          },
          v: function (e, n, r, t, i, a, s, o) {
            var c = nn(r, t);
            (n = oe(n)),
              (a = Ue(i, a)),
              we([], [e], function (e) {
                var t = (e = e[0]).name + '.' + n;
                function i() {
                  en('Cannot call ' + t + ' due to unbound types', c);
                }
                o && e.registeredClass.pureVirtualFunctions.push(n);
                var l = e.registeredClass.instancePrototype,
                  f = l[n];
                return (
                  void 0 === f ||
                  (void 0 === f.overloadTable && f.className !== e.name && f.argCount === r - 2)
                    ? ((i.argCount = r - 2), (i.className = e.name), (l[n] = i))
                    : (Fe(l, n, t), (l[n].overloadTable[r - 2] = i)),
                  we([], c, function (i) {
                    var o = tn(t, i, e, a, s);
                    return (
                      void 0 === l[n].overloadTable
                        ? ((o.argCount = r - 2), (l[n] = o))
                        : (l[n].overloadTable[r - 2] = o),
                      []
                    );
                  }),
                  []
                );
              });
          },
          ba: function (e, n) {
            be(e, {
              name: (n = oe(n)),
              fromWireType: function (e) {
                var n = sn[e].value;
                return on(e), n;
              },
              toWireType: function (e, n) {
                return fn(n);
              },
              argPackAdvance: 8,
              readValueFromPointer: Ge,
              destructorFunction: null
            });
          },
          G: function (e, n, r) {
            var t = ae(r);
            be(e, {
              name: (n = oe(n)),
              fromWireType: function (e) {
                return e;
              },
              toWireType: function (e, n) {
                if ('number' != typeof n && 'boolean' != typeof n)
                  throw new TypeError('Cannot convert "' + pn(n) + '" to ' + this.name);
                return n;
              },
              argPackAdvance: 8,
              readValueFromPointer: mn(n, t),
              destructorFunction: null
            });
          },
          l: function (e, n, r, t, i) {
            (n = oe(n)), -1 === i && (i = 4294967295);
            var a = ae(r),
              s = function (e) {
                return e;
              };
            if (0 === t) {
              var o = 32 - 8 * r;
              s = function (e) {
                return (e << o) >>> o;
              };
            }
            var c = -1 != n.indexOf('unsigned');
            be(e, {
              name: n,
              fromWireType: s,
              toWireType: function (e, r) {
                if ('number' != typeof r && 'boolean' != typeof r)
                  throw new TypeError('Cannot convert "' + pn(r) + '" to ' + this.name);
                if (r < t || r > i)
                  throw new TypeError(
                    'Passing a number "' +
                      pn(r) +
                      '" from JS side to C/C++ side to an argument of type "' +
                      n +
                      '", which is outside the valid range [' +
                      t +
                      ', ' +
                      i +
                      ']!'
                  );
                return c ? r >>> 0 : 0 | r;
              },
              argPackAdvance: 8,
              readValueFromPointer: hn(n, a, 0 !== t),
              destructorFunction: null
            });
          },
          i: function (e, n, r) {
            var t = [
              Int8Array,
              Uint8Array,
              Int16Array,
              Uint16Array,
              Int32Array,
              Uint32Array,
              Float32Array,
              Float64Array
            ][n];
            function i(e) {
              return new t(N.buffer, N[1 + (e >>= 2)], N[e]);
            }
            be(
              e,
              {name: (r = oe(r)), fromWireType: i, argPackAdvance: 8, readValueFromPointer: i},
              {ignoreDuplicateRegistrations: !0}
            );
          },
          F: function (e, n) {
            var r = 'std::string' === (n = oe(n));
            be(e, {
              name: n,
              fromWireType: function (e) {
                var n,
                  t = N[e >> 2];
                if (r) {
                  var i = _[e + 4 + t],
                    a = 0;
                  0 != i && ((a = i), (_[e + 4 + t] = 0));
                  for (var s = e + 4, o = 0; o <= t; ++o) {
                    var c = e + 4 + o;
                    if (0 == _[c]) {
                      var l = C(s);
                      void 0 === n ? (n = l) : ((n += String.fromCharCode(0)), (n += l)),
                        (s = c + 1);
                    }
                  }
                  0 != a && (_[e + 4 + t] = a);
                } else {
                  var f = new Array(t);
                  for (o = 0; o < t; ++o) f[o] = String.fromCharCode(_[e + 4 + o]);
                  n = f.join('');
                }
                return On(e), n;
              },
              toWireType: function (e, n) {
                n instanceof ArrayBuffer && (n = new Uint8Array(n));
                var t = 'string' == typeof n;
                t ||
                  n instanceof Uint8Array ||
                  n instanceof Uint8ClampedArray ||
                  n instanceof Int8Array ||
                  ue('Cannot pass non-string to std::string');
                var i = (
                    r && t
                      ? function () {
                          return (function (e) {
                            for (var n = 0, r = 0; r < e.length; ++r) {
                              var t = e.charCodeAt(r);
                              t >= 55296 &&
                                t <= 57343 &&
                                (t = (65536 + ((1023 & t) << 10)) | (1023 & e.charCodeAt(++r))),
                                t <= 127
                                  ? ++n
                                  : (n +=
                                      t <= 2047
                                        ? 2
                                        : t <= 65535
                                        ? 3
                                        : t <= 2097151
                                        ? 4
                                        : t <= 67108863
                                        ? 5
                                        : 6);
                            }
                            return n;
                          })(n);
                        }
                      : function () {
                          return n.length;
                        }
                  )(),
                  a = dn(4 + i + 1);
                if (((N[a >> 2] = i), r && t))
                  !(function (e, n, r, t) {
                    if (!(t > 0)) return 0;
                    for (var i = r + t - 1, a = 0; a < e.length; ++a) {
                      var s = e.charCodeAt(a);
                      if (
                        (s >= 55296 &&
                          s <= 57343 &&
                          (s = (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++a))),
                        s <= 127)
                      ) {
                        if (r >= i) break;
                        n[r++] = s;
                      } else if (s <= 2047) {
                        if (r + 1 >= i) break;
                        (n[r++] = 192 | (s >> 6)), (n[r++] = 128 | (63 & s));
                      } else if (s <= 65535) {
                        if (r + 2 >= i) break;
                        (n[r++] = 224 | (s >> 12)),
                          (n[r++] = 128 | ((s >> 6) & 63)),
                          (n[r++] = 128 | (63 & s));
                      } else if (s <= 2097151) {
                        if (r + 3 >= i) break;
                        (n[r++] = 240 | (s >> 18)),
                          (n[r++] = 128 | ((s >> 12) & 63)),
                          (n[r++] = 128 | ((s >> 6) & 63)),
                          (n[r++] = 128 | (63 & s));
                      } else if (s <= 67108863) {
                        if (r + 4 >= i) break;
                        (n[r++] = 248 | (s >> 24)),
                          (n[r++] = 128 | ((s >> 18) & 63)),
                          (n[r++] = 128 | ((s >> 12) & 63)),
                          (n[r++] = 128 | ((s >> 6) & 63)),
                          (n[r++] = 128 | (63 & s));
                      } else {
                        if (r + 5 >= i) break;
                        (n[r++] = 252 | (s >> 30)),
                          (n[r++] = 128 | ((s >> 24) & 63)),
                          (n[r++] = 128 | ((s >> 18) & 63)),
                          (n[r++] = 128 | ((s >> 12) & 63)),
                          (n[r++] = 128 | ((s >> 6) & 63)),
                          (n[r++] = 128 | (63 & s));
                      }
                    }
                    n[r] = 0;
                  })(n, _, a + 4, i + 1);
                else if (t)
                  for (var s = 0; s < i; ++s) {
                    var o = n.charCodeAt(s);
                    o > 255 &&
                      (On(a), ue('String has UTF-16 code units that do not fit in 8 bits')),
                      (_[a + 4 + s] = o);
                  }
                else for (s = 0; s < i; ++s) _[a + 4 + s] = n[s];
                return null !== e && e.push(On, a), a;
              },
              argPackAdvance: 8,
              readValueFromPointer: Ge,
              destructorFunction: function (e) {
                On(e);
              }
            });
          },
          aa: function (e, n, r) {
            var t, i;
            (r = oe(r)),
              2 === n
                ? ((t = function () {
                    return $;
                  }),
                  (i = 1))
                : 4 === n &&
                  ((t = function () {
                    return N;
                  }),
                  (i = 2)),
              be(e, {
                name: r,
                fromWireType: function (e) {
                  for (
                    var n = t(), r = N[e >> 2], a = new Array(r), s = (e + 4) >> i, o = 0;
                    o < r;
                    ++o
                  )
                    a[o] = String.fromCharCode(n[s + o]);
                  return On(e), a.join('');
                },
                toWireType: function (e, r) {
                  var a = t(),
                    s = r.length,
                    o = dn(4 + s * n);
                  N[o >> 2] = s;
                  for (var c = (o + 4) >> i, l = 0; l < s; ++l) a[c + l] = r.charCodeAt(l);
                  return null !== e && e.push(On, o), o;
                },
                argPackAdvance: 8,
                readValueFromPointer: Ge,
                destructorFunction: function (e) {
                  On(e);
                }
              });
          },
          $: function (e, n) {
            be(e, {
              isVoid: !0,
              name: (n = oe(n)),
              argPackAdvance: 0,
              fromWireType: function () {},
              toWireType: function (e, n) {}
            });
          },
          _: function (e, n, r, t) {
            e = (function (e) {
              return e || ue('Cannot use deleted val. handle = ' + e), sn[e].value;
            })(e);
            for (
              var i = (function (e, n, r) {
                  for (var t = new Array(e), i = 0; i < e; ++i)
                    t[i] = vn(S[(n >> 2) + i], 'parameter ' + i);
                  return t;
                })(n, r),
                a = new Array(n),
                s = 0;
              s < n;
              ++s
            ) {
              var o = i[s];
              (a[s] = o.readValueFromPointer(t)), (t += o.argPackAdvance);
            }
            return fn(e.apply(void 0, a));
          },
          Z: on,
          E: function (e) {
            e > 4 && (sn[e].refcount += 1);
          },
          D: function (e, n) {
            return fn((e = vn(e, '_emval_take_value')).readValueFromPointer(n));
          },
          u: function () {
            n.abort();
          },
          Y: function (e, n, r) {
            return _.set(_.subarray(n, n + r), e), e;
          },
          m: function (e) {
            var n = Date.now();
            return (S[e >> 2] = (n / 1e3) | 0), (S[(e + 4) >> 2] = ((n % 1e3) * 1e3) | 0), 0;
          },
          X: function () {
            return function (e) {
              return Math.log(e) / Math.LN10;
            }.apply(null, arguments);
          },
          W: function () {
            Nn('trap!');
          },
          e: function (e, r) {
            throw (n.setThrew(e, r || 1), 'longjmp');
          },
          C: function () {
            return 11;
          },
          U: function (e) {
            return yn[e] || 0;
          },
          s: function () {},
          T: function (e, n) {
            return 0 == e ? un.EINVAL : ((S[e >> 2] = gn), (yn[gn] = 0), gn++, 0);
          },
          n: function e(r, t) {
            e.seen || (e.seen = {}), r in e.seen || (n.dynCall_v(t), (e.seen[r] = 1));
          },
          S: function (e, n) {
            return e in yn ? ((yn[e] = n), 0) : un.EINVAL;
          },
          B: function () {
            return 0;
          },
          k: function () {},
          r: function () {},
          j: function () {},
          o: function () {},
          Q: function (e) {
            switch (e) {
              case 30:
                return B;
              case 85:
                return 2147418112 / B;
              case 132:
              case 133:
              case 12:
              case 137:
              case 138:
              case 15:
              case 235:
              case 16:
              case 17:
              case 18:
              case 19:
              case 20:
              case 149:
              case 13:
              case 10:
              case 236:
              case 153:
              case 9:
              case 21:
              case 22:
              case 159:
              case 154:
              case 14:
              case 77:
              case 78:
              case 139:
              case 80:
              case 81:
              case 82:
              case 68:
              case 67:
              case 164:
              case 11:
              case 29:
              case 47:
              case 48:
              case 95:
              case 52:
              case 51:
              case 46:
                return 200809;
              case 79:
                return 0;
              case 27:
              case 246:
              case 127:
              case 128:
              case 23:
              case 24:
              case 160:
              case 161:
              case 181:
              case 182:
              case 242:
              case 183:
              case 184:
              case 243:
              case 244:
              case 245:
              case 165:
              case 178:
              case 179:
              case 49:
              case 50:
              case 168:
              case 169:
              case 175:
              case 170:
              case 171:
              case 172:
              case 97:
              case 76:
              case 32:
              case 173:
              case 35:
                return -1;
              case 176:
              case 177:
              case 7:
              case 155:
              case 8:
              case 157:
              case 125:
              case 126:
              case 92:
              case 93:
              case 129:
              case 130:
              case 131:
              case 94:
              case 91:
                return 1;
              case 74:
              case 60:
              case 69:
              case 70:
              case 4:
                return 1024;
              case 31:
              case 42:
              case 72:
                return 32;
              case 87:
              case 26:
              case 33:
                return 2147483647;
              case 34:
              case 1:
                return 47839;
              case 38:
              case 36:
                return 99;
              case 43:
              case 37:
                return 2048;
              case 0:
                return 2097152;
              case 3:
                return 65536;
              case 28:
                return 32768;
              case 44:
                return 32767;
              case 75:
                return 16384;
              case 39:
                return 1e3;
              case 89:
                return 700;
              case 71:
                return 256;
              case 40:
                return 255;
              case 2:
                return 100;
              case 180:
                return 64;
              case 25:
                return 20;
              case 5:
                return 16;
              case 6:
                return 6;
              case 73:
                return 4;
              case 84:
                return ('object' == typeof navigator && navigator.hardwareConcurrency) || 1;
            }
            return ie(un.EINVAL), -1;
          },
          P: function (e) {
            var n = (Date.now() / 1e3) | 0;
            return e && (S[e >> 2] = n), n;
          },
          a: M,
          b: j
        });
      var En = n.asm(n.asmGlobalArg, n.asmLibraryArg, O);
      n.asm = En;
      var Tn = (n.__GLOBAL__sub_I_bind_cpp = function () {
          return n.asm.ma.apply(null, arguments);
        }),
        wn = (n.__GLOBAL__sub_I_webm_wasm_cpp = function () {
          return n.asm.na.apply(null, arguments);
        }),
        bn = (n.___getTypeName = function () {
          return n.asm.oa.apply(null, arguments);
        }),
        Cn = (n._emscripten_replace_memory = function () {
          return n.asm._emscripten_replace_memory.apply(null, arguments);
        }),
        On = (n._free = function () {
          return n.asm.pa.apply(null, arguments);
        }),
        dn = (n._malloc = function () {
          return n.asm.qa.apply(null, arguments);
        }),
        _n =
          ((n.setThrew = function () {
            return n.asm.Ra.apply(null, arguments);
          }),
          (n.stackRestore = function () {
            return n.asm.Sa.apply(null, arguments);
          })),
        Pn = (n.stackSave = function () {
          return n.asm.Ta.apply(null, arguments);
        });
      function $n(e) {
        (this.name = 'ExitStatus'),
          (this.message = 'Program terminated with exit(' + e + ')'),
          (this.status = e);
      }
      function Sn(e) {
        function r() {
          n.calledRun ||
            ((n.calledRun = !0),
            E ||
              (U || ((U = !0), H(J)),
              H(Z),
              n.onRuntimeInitialized && n.onRuntimeInitialized(),
              (function () {
                if (n.postRun)
                  for (
                    'function' == typeof n.postRun && (n.postRun = [n.postRun]);
                    n.postRun.length;

                  )
                    (e = n.postRun.shift()), A.unshift(e);
                var e;
                H(A);
              })()));
        }
        (e = e || n.arguments),
          I > 0 ||
            ((function () {
              if (n.preRun)
                for ('function' == typeof n.preRun && (n.preRun = [n.preRun]); n.preRun.length; )
                  (e = n.preRun.shift()), Q.unshift(e);
              var e;
              H(Q);
            })(),
            I > 0 ||
              n.calledRun ||
              (n.setStatus
                ? (n.setStatus('Running...'),
                  setTimeout(function () {
                    setTimeout(function () {
                      n.setStatus('');
                    }, 1),
                      r();
                  }, 1))
                : r()));
      }
      function Nn(e) {
        throw (
          (n.onAbort && n.onAbort(e),
          void 0 !== e ? (m(e), h(e), (e = JSON.stringify(e))) : (e = ''),
          (E = !0),
          'abort(' + e + '). Build with -s ASSERTIONS=1 for more info.')
        );
      }
      if (
        ((n.dynCall_dd = function () {
          return n.asm.ra.apply(null, arguments);
        }),
        (n.dynCall_dddd = function () {
          return n.asm.sa.apply(null, arguments);
        }),
        (n.dynCall_ii = function () {
          return n.asm.ta.apply(null, arguments);
        }),
        (n.dynCall_iii = function () {
          return n.asm.ua.apply(null, arguments);
        }),
        (n.dynCall_iiii = function () {
          return n.asm.va.apply(null, arguments);
        }),
        (n.dynCall_iiiii = function () {
          return n.asm.wa.apply(null, arguments);
        }),
        (n.dynCall_iiiiii = function () {
          return n.asm.xa.apply(null, arguments);
        }),
        (n.dynCall_iiiiiiii = function () {
          return n.asm.ya.apply(null, arguments);
        }),
        (n.dynCall_iiiiiiiii = function () {
          return n.asm.za.apply(null, arguments);
        }),
        (n.dynCall_iiiiiiiiii = function () {
          return n.asm.Aa.apply(null, arguments);
        }),
        (n.dynCall_iiiiiiiiiii = function () {
          return n.asm.Ba.apply(null, arguments);
        }),
        (n.dynCall_iiiiiiiiiiii = function () {
          return n.asm.Ca.apply(null, arguments);
        }),
        (n.dynCall_iiijiii = function () {
          return n.asm.Da.apply(null, arguments);
        }),
        (n.dynCall_iij = function () {
          return n.asm.Ea.apply(null, arguments);
        }),
        (n.dynCall_ji = function () {
          return n.asm.Fa.apply(null, arguments);
        }),
        (n.dynCall_jiiiiii = function () {
          return n.asm.Ga.apply(null, arguments);
        }),
        (n.dynCall_v = function () {
          return n.asm.Ha.apply(null, arguments);
        }),
        (n.dynCall_vi = function () {
          return n.asm.Ia.apply(null, arguments);
        }),
        (n.dynCall_vii = function () {
          return n.asm.Ja.apply(null, arguments);
        }),
        (n.dynCall_viii = function () {
          return n.asm.Ka.apply(null, arguments);
        }),
        (n.dynCall_viiii = function () {
          return n.asm.La.apply(null, arguments);
        }),
        (n.dynCall_viiiii = function () {
          return n.asm.Ma.apply(null, arguments);
        }),
        (n.dynCall_viiiiii = function () {
          return n.asm.Na.apply(null, arguments);
        }),
        (n.dynCall_viiiiiiii = function () {
          return n.asm.Oa.apply(null, arguments);
        }),
        (n.dynCall_vijj = function () {
          return n.asm.Pa.apply(null, arguments);
        }),
        (n.dynCall_vijjjid = function () {
          return n.asm.Qa.apply(null, arguments);
        }),
        (n.asm = En),
        (n.then = function (e) {
          if (n.calledRun) e(n);
          else {
            var r = n.onRuntimeInitialized;
            n.onRuntimeInitialized = function () {
              r && r(), e(n);
            };
          }
          return n;
        }),
        (($n.prototype = new Error()).constructor = $n),
        (ee = function e() {
          n.calledRun || Sn(), n.calledRun || (ee = e);
        }),
        (n.run = Sn),
        (n.abort = Nn),
        n.preInit)
      )
        for ('function' == typeof n.preInit && (n.preInit = [n.preInit]); n.preInit.length > 0; )
          n.preInit.pop()();
      return (n.noExitRuntime = !0), Sn(), n;
    }),
  i = {width: 300, height: 150, timebaseNum: 1, timebaseDen: 30, bitrate: 200, realtime: !1};
try {
  (n = require('worker_threads')), (r = n.parentPort);
} catch (e) {
  r = self;
}
function a(e) {
  return new Promise(function (n) {
    return 'once' in e
      ? e.once('message', n)
      : e.addEventListener(
          'message',
          function (e) {
            return n(e.data);
          },
          {once: !0}
        );
  });
}
!(function () {
  try {
    Promise.resolve(a(r)).then(function (e) {
      return Promise.resolve(
        ((n = t),
        (s = e),
        new Promise(function (e) {
          var r = n({
            noInitialRun: !0,
            locateFile: function (e) {
              return e.endsWith('.wasm') ? s : e;
            },
            onRuntimeInitialized: function () {
              delete r.then, e(r);
            }
          });
        }))
      ).then(function (e) {
        return (
          r.postMessage('READY'),
          Promise.resolve(a(r)).then(function (n) {
            var t = Object.assign({}, i, n);
            'kLive' in t || (t.kLive = t.realtime);
            var a = new e.WebmEncoder(
              t.timebaseNum,
              t.timebaseDen,
              t.width,
              t.height,
              t.bitrate,
              t.realtime,
              t.kLive,
              function (e) {
                var n = new Uint8Array(e);
                r.postMessage(n.buffer, [n.buffer]);
              }
            );
            !(function (e, n) {
              if ('on' in e) return e.on('message', n);
              e.addEventListener('message', function (e) {
                return n(e.data);
              });
            })(r, function (e) {
              if (!e) return a.finalize(), r.postMessage(null), void a.delete();
              a.addRGBAFrame(e);
            });
          })
        );
      });
      var n, s;
    });
  } catch (e) {
    return Promise.reject(e);
  }
})();
//# sourceMappingURL=webm-worker.js.map
