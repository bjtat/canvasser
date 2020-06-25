(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[130],{"0DDm":function(e,t,s){"use strict"
var a=s("VTBJ")
var r=s("ouhR")
var o=s.n(r)
s("jYyc")
var n=s("ODXe")
var _=s("GLiE")
var i=s.n(_)
function l(e,t){const s=[]
let a=1
const r=(o,_)=>{if(_===a){e&&e(o)
i.a.isArray(o)?t.push(...o):t.push(o)
a+=1}else s.push([o,_])
const l=i.a.find(s,e=>{let t=Object(n["a"])(e,2),s=(t[0],t[1])
return s===a})
if(l){const e=Object(n["a"])(l,2),t=e[0],s=e[1]
r(t,s)}}
return r}function c(e,t,s){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>{}
let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
const _=o.a.Deferred()
const i=[]
const c=()=>{r([])
_.reject()}
const u=l(s,i)
o.a.ajaxJSON(e,"GET",t,(s,l)=>{u(s,1)
const d=l.getResponseHeader("Link")
const m=d.match(/<[^>]+>; *rel="last"/)
if(null===m){r([])
_.resolve(i)
return}const f=parseInt(m[0].match(/page=(\d+)/)[1],10)
if(1===f){r([])
_.resolve(i)
return}function p(e){return Object(a["a"])({page:e},t)}function y(e){return t=>u(t,e)}const b=[]
if(null==n){const t=t=>o.a.ajaxJSON(e,"GET",p(t),y(t))
for(let e=2;e<=f;e++)b.push(t(e))}else for(let t=2;t<=f;t++){const s=n.getJSON(e,p(t),y(t))
b.push(s)}r(b)
o.a.when(...b).then(()=>_.resolve(i),c)},c)
return _}var u=c
s.d(t,"a",(function(){return m}))
const d=12
class m{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.options=Object(a["a"])({activeRequestLimit:d},e)
this.requests=[]}get activeRequestCount(){return this.requests.filter(e=>e.active).length}get nextPendingRequest(){return this.requests.find(e=>!e.active)}addRequest(e){this.requests.push(e)
this.fillQueue()}clearRequest(e){this.requests=this.requests.filter(t=>t!==e)
this.fillQueue()}fillQueue(){let e=this.nextPendingRequest
while(null!=e&&this.activeRequestCount<this.options.activeRequestLimit){e.start()
e=this.nextPendingRequest}}getDepaginated(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{}
let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>{}
const r={deferred:new o.a.Deferred,active:false}
const n=e=>{this.clearRequest(r)
return a(e)}
r.start=()=>{r.active=true
u(e,t,s,n,this).then(r.deferred.resolve).fail(r.deferred.reject).always(()=>{this.clearRequest(r)})}
this.addRequest(r)
return r.deferred}getJSON(e,t,s,a){const r={deferred:new o.a.Deferred,active:false}
r.start=()=>{r.active=true
o.a.ajaxJSON(e,"GET",t,s,a).then(r.deferred.resolve).fail(r.deferred.reject).always(()=>{this.clearRequest(r)})}
this.addRequest(r)
return r.deferred}}},"HG9+":function(e,t,s){"use strict"
var a=s("VTBJ")
var r=s("GLiE")
var o=s.n(r)
var n=s("ejBJ")
var _=s("ODXe")
var i=s("nibu")
function l(e,t){const s=o.a.groupBy(e,t)
return[s.true||[],s.false||[]]}function c(e){const t=parseFloat(e)
return t&&isFinite(t)?t:0}function u(e,t){let s=Object(_["a"])(e,2),a=s[0],r=s[1]
let o=Object(_["a"])(t,2),n=o[0],i=o[1]
const l=n-a
if(0!==l)return l
return r.submission.assignment_id-i.submission.assignment_id}function d(e,t){let s=Object(_["a"])(e,2),a=s[0],r=s[1]
let o=Object(_["a"])(t,2),n=o[0],i=o[1]
const l=a-n
if(0!==l)return l
return r.submission.assignment_id-i.submission.assignment_id}function m(e,t){const s=e.score-t.score
if(0!==s)return s
return e.submission.assignment_id-t.submission.assignment_id}function f(e){let t=e.score,s=e.total
return t/s}function p(e,t,s){if(t.length>0){const s=Object(i["e"])(e,"total")
const a=Math.max(s,Object(i["e"])(e,"score"))
const r=Object(i["e"])(t,"score")
return(a+r)/s}return s[s.length-1]}function y(e,t,s){return function(a,r){const n=o.a.map(r,e=>[e.score-a*e.total,e])
const l=n.sort(s)
const c=l.slice(0,e)
const u=Object(i["e"])(c,e=>{let t=Object(_["a"])(e,1),s=t[0]
return s})
const d=o.a.map(c,e=>{let t=Object(_["a"])(e,2),s=(t[0],t[1])
return s})
const m=Object(i["e"])(t,e=>e.score-a*e.total)
return[u+m,d]}}function b(e,t,s,a){const r=o.a.map(e,"total")
const n=Math.max(...r)
function i(e,s,a){const r=Math.max(1,s)
if(e.length<=r)return e
const o=[...e,...t]
const i=l(o,e=>0===e.total),c=Object(_["a"])(i,2),u=c[0],d=c[1]
const m=d.map(f).sort()
let b=p(d,u,m)
let h=m[0]
let g=(h+b)/2
const v=y(r,t,a)
let w=v(g,e),k=Object(_["a"])(w,2),x=k[0],M=k[1]
const j=1/(2*r*n**2)
while(b-h>=j){x<0?b=g:h=g
g=(h+b)/2
if(g===b||g===h)break
var A=v(g,e)
var N=Object(_["a"])(A,2)
x=N[0]
M=N[1]}return M}const c=i(e,s,u)
return i(c,a,d)}function h(e,t,s){const a=e.sort(m)
return o.a.chain(a).last(t).head(s).value()}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
let s=t.drop_lowest||0
let a=t.drop_highest||0
const r=t.never_drop||[]
if(!(s||a))return e
let n=[]
let i=e
if(r.length>0){var c=l(e,e=>o.a.includes(r,e.submission.assignment_id))
var u=Object(_["a"])(c,2)
n=u[0]
i=u[1]}if(0===i.length)return n
s=Math.min(s,i.length-1)
a=s+a>=i.length?0:a
const d=i.length-s
const m=d-a
const f=o.a.some(i,e=>e.total>0)
let p
p=f?b(i,n,d,m):h(i,d,m)
p=[...p,...n]
o.a.difference(i,p).forEach(e=>{e.drop=true})
return p}function v(e,t,s){const a=o.a.chain(t).filter("hidden").keyBy("assignment_id").value()
const r=e=>e.omit_from_final_grade||a[e.id]||o.a.isEqual(e.submission_types,["not_graded"])||"unpublished"===e.workflow_state
const n=o.a.reject(e.assignments,r)
const _=o.a.keyBy(n,"id")
let l=o.a.filter(t,e=>_[e.assignment_id])
l=o.a.reject(l,"excused")
const u=o.a.map(l,e=>({total:c(_[e.assignment_id].points_possible),score:c(e.score),submitted:null!=e.score&&""!==e.score,pending_review:"pending_review"===e.workflow_state,submission:e}))
let d=u
s||(d=o.a.filter(u,e=>e.submitted&&!e.pending_review))
const m=g(d,e.rules)
const f=Object(i["d"])(o.a.chain(m).map("score").map(c).value())
const p=Object(i["e"])(m,"total")
return{score:f,possible:p,submission_count:o.a.filter(u,"submitted").length,submissions:o.a.map(u,e=>{const t=e.total?Object(i["b"])(e.score,e.total):0
return{drop:e.drop,percent:c(t),score:c(e.score),possible:e.total,submission:e.submission,submitted:e.submitted}})}}function w(e,t){const s=o.a.uniq(e,"assignment_id")
return{assignmentGroupId:t.id,assignmentGroupWeight:t.group_weight,current:v(t,s,false),final:v(t,s,true),scoreUnit:"points"}}var k={calculate:w}
function x(e,t,s){const r=o.a.map(e,e=>{const s=t?e.final:e.current
return Object(a["a"])({},s,{weight:e.assignmentGroupWeight})})
if(s.weightAssignmentGroups){const e=r.filter(e=>e.possible)
const s=Object(i["e"])(e,"weight")
let a=Object(i["a"])(o.a.map(e,i["g"]))
0===s?a=null:s<100&&(a=Object(i["f"])(Object(i["g"])({score:a,possible:s,weight:100})))
const _=Object(i["e"])(e,"submission_count")
const l=_>0||t?100:0
let c=a&&Object(n["a"])(a,2)
c=isNaN(c)?null:c
return{score:c,possible:l}}return{score:Object(i["e"])(r,"score"),possible:Object(i["e"])(r,"possible")}}function M(e,t){let s=o.a.map(e,e=>{const s=t?e.final:e.current
return Object(a["a"])({},s,{weight:e.gradingPeriodWeight})})
t||(s=o.a.filter(s,"possible"))
const r=Object(i["a"])(o.a.map(s,i["g"]))
const _=Object(i["e"])(s,"weight")
const l=0===_?0:Object(i["f"])(r.times(100).div(Math.min(_,100)))
return{score:Object(n["a"])(l,2),possible:100}}function j(e,t){const s=o.a.groupBy(e.assignments,e=>t[e.id].grading_period_id)
return o.a.map(s,t=>Object(a["a"])({},e,{assignments:t}))}function A(e,t){return o.a.reduce(e,(e,s)=>{const r=o.a.filter(s.assignments,e=>t[e.id])
if(r.length>0){const o=Object(a["a"])({},s,{assignments:r})
return[...e,...j(o,t)]}return e},[])}function N(e){const t={}
for(let s=0;s<e.length;s++){const r=e[s]
const o=t[r.assignmentGroupId]
t[r.assignmentGroupId]=o?Object(a["a"])({},o,{current:{submission_count:o.current.submission_count+r.current.submission_count,submissions:[...o.current.submissions,...r.current.submissions],score:Object(i["d"])([o.current.score,r.current.score]),possible:Object(i["d"])([o.current.possible,r.current.possible])},final:{submission_count:o.final.submission_count+r.final.submission_count,submissions:[...o.final.submissions,...r.final.submissions],score:Object(i["d"])([o.final.score,r.final.score]),possible:Object(i["d"])([o.final.possible,r.final.possible])}}):r}return t}function D(e,t,s,a,r){const n=A(t,a)
const _=o.a.groupBy(n,e=>{const t=e.assignments[0].id
return a[t].grading_period_id})
const i=o.a.keyBy(s,"id")
const l={}
const c=[]
for(let t=0;t<s.length;t++){const a={}
const n=s[t]
const u=_[n.id]||[]
for(let t=0;t<u.length;t++){const s=u[t]
a[s.id]=k.calculate(e,s)
c.push(a[s.id])}const d=o.a.values(a)
l[n.id]={gradingPeriodId:n.id,gradingPeriodWeight:i[n.id].weight||0,assignmentGroups:a,current:x(d,false,r),final:x(d,true,r),scoreUnit:r.weightAssignmentGroups?"percentage":"points"}}if(r.weightGradingPeriods)return{assignmentGroups:N(c),gradingPeriods:l,current:M(l,false,r),final:M(l,true,r),scoreUnit:"percentage"}
const u=o.a.map(t,t=>k.calculate(e,t))
return{assignmentGroups:o.a.keyBy(u,e=>e.assignmentGroupId),gradingPeriods:l,current:x(u,false,r),final:x(u,true,r),scoreUnit:r.weightAssignmentGroups?"percentage":"points"}}function O(e,t,s){const a=o.a.map(t,t=>k.calculate(e,t))
return{assignmentGroups:o.a.keyBy(a,e=>e.assignmentGroupId),current:x(a,false,s),final:x(a,true,s),scoreUnit:s.weightAssignmentGroups?"percentage":"points"}}function T(e,t,s,a,r){const o={weightGradingPeriods:a&&!!a.weighted,weightAssignmentGroups:"percent"===s}
if(a&&r)return D(e,t,a.gradingPeriods,r,o)
return O(e,t,o)}t["a"]={calculate:T}},c6Cm:function(e,t,s){"use strict"
var a=s("ouhR")
var r=s.n(a)
var o=s("GLiE")
var n=s.n(o)
var _=s("x1Tw")
s("JI1W")
const i=e=>r.a.replaceTags(ENV.GRADING_PERIODS_UPDATE_URL,"set_id",e)
const l=e=>{const t=n.a.map(e,e=>({id:e.id,title:e.title,start_date:e.startDate,end_date:e.endDate,close_date:e.closeDate,weight:e.weight}))
return{grading_periods:t}}
t["a"]={deserializePeriods:e=>n.a.map(e,e=>({id:e.id,title:e.title,startDate:new Date(e.start_date),endDate:new Date(e.end_date),closeDate:new Date(e.close_date),isLast:e.is_last,isClosed:e.is_closed,weight:e.weight})),batchUpdate(e,t){return new Promise((s,a)=>_["a"].patch(i(e),l(t)).then(e=>s(this.deserializePeriods(e.data.grading_periods))).catch(e=>a(e)))}}},"e+lF":function(e,t,s){"use strict"
var a=s("GLiE")
var r=s.n(a)
var o=s("ouhR")
var n=s.n(o)
var _=s("2DhO")
s("UlQx")
const i={parseDates(e,t){r.a.each(t,t=>{const s=!r.a.isUndefined(e[t])
s&&(e[t]=_["a"].parse(e[t]))})
return e},formatDatetimeForDisplay(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"medium"
return n.a.datetimeString(e,{format:t,timezone:ENV.CONTEXT_TIMEZONE})},formatDateForDisplay:e=>n.a.dateString(e,{format:"medium",timezone:ENV.CONTEXT_TIMEZONE}),isMidnight:e=>_["a"].isMidnight(e)}
t["a"]=i},"e/kD":function(e,t,s){"use strict"
var a=s("GLiE")
var r=s.n(a)
function o(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
let s=r.a.isDate(e)
t&&!s&&(s=null===e)
if(!s)throw new Error("`".concat(e,"` must be a Date or null"))}function n(e){if(null==e)throw new Error("'".concat(e,"' must be an array or object"))
const t=["startDate","endDate","closeDate"]
const s=r.a.isArray(e)?e:[e]
r.a.each(s,e=>{r.a.each(t,t=>o(e[t]))})
return s}function _(e){const t=r.a.isString(e)
if(!t)throw new Error("Grading period id `".concat(e,"` must be a String"))}class i{constructor(e){this.gradingPeriods=n(e)}static isAllGradingPeriods(e){_(e)
return"0"===e}get earliestValidDueDate(){const e=r.a.sortBy(this.gradingPeriods,"startDate")
const t=r.a.find(e,{isClosed:false})
return t?t.startDate:null}gradingPeriodForDueAt(e){o(e,true)
return r.a.find(this.gradingPeriods,t=>this.isDateInGradingPeriod(e,t.id,false))||null}isDateInGradingPeriod(e,t){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
if(s){o(e,true)
_(t)}const a=r.a.find(this.gradingPeriods,{id:t})
if(!a)throw new Error("No grading period has id `".concat(t,"`"))
return null===e?a.isLast:a.startDate<e&&e<=a.endDate}isDateInClosedGradingPeriod(e){const t=this.gradingPeriodForDueAt(e)
return!!t&&t.isClosed}}t["a"]=i},fVBa:function(e,t,s){"use strict"
var a=s("pQTu")
var r=s("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"exceeds_mastery_1f995dce":"تجاوز الإتقان","meets_mastery_754e1c06":"يلبي الإتقان","near_mastery_f25174a4":"قريب من الإتقان","unstarted_932f2990":"لم تبدأ","well_below_mastery_37664bdc":"أقل بكثير من الإتقان"},"cy":{"exceeds_mastery_1f995dce":"Yn well na’r lefel meistroli","meets_mastery_754e1c06":"Wedi Meistroli","near_mastery_f25174a4":"Bron wedi Meistroli","unstarted_932f2990":"Heb ddechrau","well_below_mastery_37664bdc":"Yn bell iawn o’r lefel Meistroli"},"da":{"exceeds_mastery_1f995dce":"Overstiger opfyldelse af læringsmål","meets_mastery_754e1c06":"Opfylder mål","near_mastery_f25174a4":"Tæt på opfyldelse af læringsmål","unstarted_932f2990":"Ikke startet","well_below_mastery_37664bdc":"Langt under opfyldelse af læringsmål"},"da-x-k12":{"exceeds_mastery_1f995dce":"Overstiger opfyldelse af læringsmål","meets_mastery_754e1c06":"Opfylder mål","near_mastery_f25174a4":"Tæt på opfyldelse af læringsmål","unstarted_932f2990":"Ikke startet","well_below_mastery_37664bdc":"Langt under opfyldelse af læringsmål"},"de":{"exceeds_mastery_1f995dce":"Übertrifft Leistungsziel","meets_mastery_754e1c06":"Leistungsziel erreicht","near_mastery_f25174a4":"Leistungsziel knapp erreicht","unstarted_932f2990":"Nicht gestartet","well_below_mastery_37664bdc":"Deutlich unter Leistungsziel"},"el":{"exceeds_mastery_1f995dce":"Υπερβαίνει την Μαεστρία/Τεχνογνωσία","meets_mastery_754e1c06":"Είναι σε Επίπεδο Επιδεξιότητας","near_mastery_f25174a4":"Κοντά στο Επίπεδο Επιδεξιότητας","unstarted_932f2990":"Δεν έχει ξεκινήσει","well_below_mastery_37664bdc":"Αρκετά Κάτω από το Επίπεδο Επιδεξιότητας"},"en-AU":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-AU-x-unimelb":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-CA":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-GB":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-GB-x-lbs":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-GB-x-ukhe":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"es":{"exceeds_mastery_1f995dce":"Excede el dominio","meets_mastery_754e1c06":"Reúne el dominio","near_mastery_f25174a4":"Cerca del dominio","unstarted_932f2990":"Sin comenzar","well_below_mastery_37664bdc":"Muy por debajo del dominio"},"fa":{"exceeds_mastery_1f995dce":"فراتر از تسلط","meets_mastery_754e1c06":"با تسلط مطابقت دارد","near_mastery_f25174a4":"نزدیک به تسلط","unstarted_932f2990":"شروع نشده","well_below_mastery_37664bdc":"پایین تر از سطح تسلط"},"fi":{"exceeds_mastery_1f995dce":"Ylittää hallinnan","meets_mastery_754e1c06":"täyttää hallinnan","near_mastery_f25174a4":"lähellä hallintaa","unstarted_932f2990":"Aloittamaton","well_below_mastery_37664bdc":"runsaasti hallinnan alapuolella"},"fr":{"exceeds_mastery_1f995dce":"Surpasse le niveau de maîtrise","meets_mastery_754e1c06":"Niveau de maîtrise atteint","near_mastery_f25174a4":"Proche du niveau de maîtrise","unstarted_932f2990":"Non commencé","well_below_mastery_37664bdc":"Bien inférieur au niveau de maîtrise"},"fr-CA":{"exceeds_mastery_1f995dce":"Surpasse le niveau de Maîtrise","meets_mastery_754e1c06":"Niveau de Maîtrise atteint","near_mastery_f25174a4":"Proche du niveau de maîtrise","unstarted_932f2990":"Non commencé","well_below_mastery_37664bdc":"Bien inférieur au niveau de maîtrise"},"he":{"exceeds_mastery_1f995dce":"מעבר לרף הנדרש למומחיות","meets_mastery_754e1c06":"עונה על דרישות ההתמחות","near_mastery_f25174a4":"קרוב להתמחות","unstarted_932f2990":"טרם החל","well_below_mastery_37664bdc":"רחוק מאד מהתמחות"},"ht":{"exceeds_mastery_1f995dce":"Depase Metriz","meets_mastery_754e1c06":"Respekte Metriz","near_mastery_f25174a4":"Pwòch Metriz","unstarted_932f2990":"Pa kòmanse","well_below_mastery_37664bdc":"Pi ba Metriz"},"hu":{"exceeds_mastery_1f995dce":"A jártassági szint fölött","meets_mastery_754e1c06":"Megfelel a jártassági szintnek","near_mastery_f25174a4":"Közel a jártassági szinthez","unstarted_932f2990":"Nincs elkezdve","well_below_mastery_37664bdc":"Jóval a jártassági szint alatt"},"hy":{"exceeds_mastery_1f995dce":"Գերազանցում է անցողիկ միավորը","meets_mastery_754e1c06":"Համապատասխանում է անցողիկ միավորին","near_mastery_f25174a4":"Մոտ է անցողիկ միավորին","unstarted_932f2990":"Չի սկսվել","well_below_mastery_37664bdc":"Բավական ցածր է անցողիկ միավորներից "},"is":{"exceeds_mastery_1f995dce":"Fer fram úr tileinkun","meets_mastery_754e1c06":"Uppfyllir tileinkun","near_mastery_f25174a4":"Nálægt tileinkun","unstarted_932f2990":"Óbyrjað","well_below_mastery_37664bdc":"Langt undir tileinkun"},"it":{"exceeds_mastery_1f995dce":"Supera il livello di padronanza","meets_mastery_754e1c06":"Soddisfa il livello di padronanza","near_mastery_f25174a4":"Padronanza quasi completa","unstarted_932f2990":"Non iniziato","well_below_mastery_37664bdc":"Ben al di sotto del livello di padronanza"},"ja":{"exceeds_mastery_1f995dce":"熟達を上回る","meets_mastery_754e1c06":"熟達を満たしている","near_mastery_f25174a4":"熟達に近い","unstarted_932f2990":"開始前","well_below_mastery_37664bdc":"熟達を大きく下回る"},"mi":{"exceeds_mastery_1f995dce":"Nui atu te mana","meets_mastery_754e1c06":"Tutuki mana","near_mastery_f25174a4":"Tata Mātatau","unstarted_932f2990":"Koare i tīmata","well_below_mastery_37664bdc":"Kei raro rawa atu Mātatau"},"nb":{"exceeds_mastery_1f995dce":"Overgår ekspertise","meets_mastery_754e1c06":"Innfrir forventningene","near_mastery_f25174a4":"Nær ekspertise","unstarted_932f2990":"Ikke påbegynt","well_below_mastery_37664bdc":"Innfrir ikke ekspertise"},"nb-x-k12":{"exceeds_mastery_1f995dce":"Overgår ekspertise","meets_mastery_754e1c06":"Innfrir forventningene","near_mastery_f25174a4":"Nær ekspertise","unstarted_932f2990":"Ikke påbegynt","well_below_mastery_37664bdc":"Innfrir ikke ekspertise"},"nl":{"exceeds_mastery_1f995dce":"Overtreft Meesterschap","meets_mastery_754e1c06":"Voldoende Meesterschap","near_mastery_f25174a4":"Bijna Meesterschap","unstarted_932f2990":"Nog niet begonnen","well_below_mastery_37664bdc":"Ruim onder Meesterschap"},"nn":{"exceeds_mastery_1f995dce":"Overskrid meistringsnivå","meets_mastery_754e1c06":"Møter meistringsnivå","near_mastery_f25174a4":"Nær meistringsnivå","unstarted_932f2990":"Ikkje starta","well_below_mastery_37664bdc":"Godt under meistringsnivå"},"pl":{"exceeds_mastery_1f995dce":"Przekracza poziom biegłości","meets_mastery_754e1c06":"Spełnia poziom biegłości","near_mastery_f25174a4":"Blisko biegłości","unstarted_932f2990":"Nierozpoczęto","well_below_mastery_37664bdc":"Znacznie poniżej poziomu biegłości"},"pt":{"exceeds_mastery_1f995dce":"Excede a Excelência","meets_mastery_754e1c06":"Completa o domínio","near_mastery_f25174a4":"Perto do Domínio","unstarted_932f2990":"Não iniciado","well_below_mastery_37664bdc":"Muito abaixo de Domínio"},"pt-BR":{"exceeds_mastery_1f995dce":"Excede Domínio","meets_mastery_754e1c06":"Encontra com Domínio","near_mastery_f25174a4":"Quase Domínio","unstarted_932f2990":"Não iniciado","well_below_mastery_37664bdc":"Muito abaixo de Domínio"},"ru":{"exceeds_mastery_1f995dce":"Превышает проходной балл","meets_mastery_754e1c06":"Соответствует проходному баллу","near_mastery_f25174a4":"Около проходного балла","unstarted_932f2990":"Не начато","well_below_mastery_37664bdc":"Гораздо ниже проходного балла"},"sl":{"exceeds_mastery_1f995dce":"Presega odličnost","meets_mastery_754e1c06":"Odličen","near_mastery_f25174a4":"Delno obvladano","unstarted_932f2990":"Nezačeto","well_below_mastery_37664bdc":"Precej pod odličnostjo"},"sv":{"exceeds_mastery_1f995dce":"Överträffar måluppfyllelse","meets_mastery_754e1c06":"Möter måluppfyllelse","near_mastery_f25174a4":"Nära måluppfyllelse","unstarted_932f2990":"Ej påbörjad","well_below_mastery_37664bdc":"Långt under måluppfyllelse"},"sv-x-k12":{"exceeds_mastery_1f995dce":"Överträffar måluppfyllelse","meets_mastery_754e1c06":"Möter måluppfyllelse","near_mastery_f25174a4":"Nära måluppfyllelse","unstarted_932f2990":"Ej påbörjad","well_below_mastery_37664bdc":"Långt under måluppfyllelse"},"tr":{"exceeds_mastery_1f995dce":"Yeterliğin Üstünde","meets_mastery_754e1c06":"Yeterliği Karşılıyor","near_mastery_f25174a4":"Yeterliğe Yakın","unstarted_932f2990":"Başlamamış","well_below_mastery_37664bdc":"Yeterliğin Epey Altında"},"uk":{"exceeds_mastery_1f995dce":"Перевищує Майстерність","meets_mastery_754e1c06":"Відповідає майстерності","near_mastery_f25174a4":"Майже майстерність","unstarted_932f2990":"Не розпочато","well_below_mastery_37664bdc":"Суттєво нижча майстерність"},"zh-Hans":{"exceeds_mastery_1f995dce":"超过掌握","meets_mastery_754e1c06":"达到掌握","near_mastery_f25174a4":"最接近的掌握","unstarted_932f2990":"未开始","well_below_mastery_37664bdc":"远低于掌握"},"zh-Hant":{"exceeds_mastery_1f995dce":"超過掌握程度","meets_mastery_754e1c06":"達到掌握程度","near_mastery_f25174a4":"接近掌握程度","unstarted_932f2990":"未開始","well_below_mastery_37664bdc":"遠低於掌握程度"}}'))
s("jQeR")
s("0sPK")
var o=a["default"].scoped("grade_summaryOutcome")
var n=s("GLiE")
var _=s.n(n)
s("FIFq")
var i=s("pLki")
var l=s("2DhO")
var c,u=function(e,t){for(var s in t)d.call(t,s)&&(e[s]=t[s])
function a(){this.constructor=e}a.prototype=t.prototype
e.prototype=new a
e.__super__=t.prototype
return e},d={}.hasOwnProperty
c={}
t["a"]=c.Outcome=function(e){u(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.set("friendly_name",this.get("display_name")||this.get("title"))
this.set("hover_name",this.get("display_name")?this.get("title"):void 0)
return this.set("scaled_score",this.scaledScore())}
t.prototype.parse=function(e){var s,a
return t.__super__.parse.call(this,_.a.extend(e,{submitted_or_assessed_at:l["a"].parse(e.submitted_or_assessed_at),question_bank_result:null!=(s=e.links)&&null!=(a=s.alignment)?a.includes("assessment_question_bank"):void 0}))}
t.prototype.status=function(){var e,t
if(this.scoreDefined()){t=this.score()
e=this.get("mastery_points")
return t>=e+e/2?"exceeds":t>=e?"mastery":t>=e/2?"near":"remedial"}return"undefined"}
t.prototype.statusTooltip=function(){return{undefined:o.t("Unstarted"),remedial:o.t("Well Below Mastery"),near:o.t("Near Mastery"),mastery:o.t("Meets Mastery"),exceeds:o.t("Exceeds Mastery")}[this.status()]}
t.prototype.roundedScore=function(){return this.scoreDefined()?Math.round(100*this.score())/100:null}
t.prototype.scoreDefined=function(){return _.a.isNumber(this.get("score"))}
t.prototype.scaledScore=function(){var e
e=this.get("question_bank_result")
if(!(this.scoreDefined()&&e))return
return this.get("points_possible")>0?this.get("percent")*this.get("points_possible"):this.get("percent")*this.get("mastery_points")}
t.prototype.score=function(){return this.get("scaled_score")||this.get("score")}
t.prototype.percentProgress=function(){if(!this.scoreDefined())return 0
return this.get("percent")?100*this.get("percent"):this.score()/this.get("points_possible")*100}
t.prototype.masteryPercent=function(){return this.get("mastery_points")/this.get("points_possible")*100}
t.prototype.toJSON=function(){return _.a.extend(t.__super__.toJSON.apply(this,arguments),{status:this.status(),statusTooltip:this.statusTooltip(),roundedScore:this.roundedScore(),scoreDefined:this.scoreDefined(),percentProgress:this.percentProgress(),masteryPercent:this.masteryPercent()})}
return t}(i["a"])},ifii:function(e,t,s){"use strict"
var a=s("3O+N")
var r=s.n(a)
s("bIPM")
var o=s("pQTu")
var n=s("m0r6")
Object(n["a"])(JSON.parse('{"ar":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"درجة الإتقان الحالية: %{score} من %{mastery_points}","latest_assessment_a85280ef":"آخر تقييم","no_score_yet_c94e919b":"لا توجد درجة حتى الآن","not_available_until_next_submission_2175158":"غير متوفر قبل الإرسال القادم","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"النتيجة: %{title} بالحالة %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"الإتقان عند","no_results":"(بلا نتائج)"}}},"cy":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Sgôr Meistroli bresennol: %{score} allan o %{mastery_points}","latest_assessment_a85280ef":"Asesiad diweddaraf","no_score_yet_c94e919b":"Dim sgôr eto","not_available_until_next_submission_2175158":"Ddim ar gael tan y cyflwyniad nesaf","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Deilliant: %{title} â statws %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Lefel meistroli ar","no_results":"(dim canlyniadau)"}}},"da":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Aktuelt resultat for opfyldelse af læringsmål: %{score} ud af %{mastery_points}","latest_assessment_a85280ef":"Seneste bedømmelse","no_score_yet_c94e919b":"Intet resultat endnu","not_available_until_next_submission_2175158":"Ikke tilgængelig før næste aflevering","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Læringsudbytte: %{title} har en status for %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Målopfyldelse sat til","no_results":"(ingen resultater)"}}},"da-x-k12":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Aktuelt resultat for opfyldelse af læringsmål: %{score} ud af %{mastery_points}","latest_assessment_a85280ef":"Seneste bedømmelse","no_score_yet_c94e919b":"Intet resultat endnu","not_available_until_next_submission_2175158":"Ikke tilgængelig før næste aflevering","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Læringsudbytte: %{title} har en status for %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Målopfyldelse sat til","no_results":"(ingen resultater)"}}},"de":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Derzeitige Leistungsziel-Punktzahl: %{score} von %{mastery_points}","latest_assessment_a85280ef":"Letzte Bewertung","no_score_yet_c94e919b":"Noch keine Punkte vorhanden","not_available_until_next_submission_2175158":"Vor der nächsten Abgabe nicht verfügbar","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Lernziel: %{title} hat den Status %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Leistungsziel festgelegt bei","no_results":"(keine Ergebnisse)"}}},"el":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Τρέχουσα Βαθμολογία Επιδεξιότητας: %{score} από %{mastery_points}","latest_assessment_a85280ef":"Πιο Πρόσφατη Αξιολόγηση","no_score_yet_c94e919b":"Δεν υπάρχει ακόμη βαθμολογία","not_available_until_next_submission_2175158":"Μη διαθέσιμο έως την επόμενη υποβολή","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Αποτέλεσμα: Η κατάσταση του %{title} είναι %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Η Επιδεξιότητα έχει οριστεί σε","no_results":"(δεν υπάρχουν αποτελέσματα)"}}},"en-AU":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Current Mastery Score: %{score} out of %{mastery_points}","latest_assessment_a85280ef":"Latest Assessment","no_score_yet_c94e919b":"No score yet","not_available_until_next_submission_2175158":"Not available until next submission","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Mastery set at","no_results":"(no results)"}}},"en-AU-x-unimelb":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Current Mastery Score: %{score} out of %{mastery_points}","latest_assessment_a85280ef":"Latest Assessment","no_score_yet_c94e919b":"No score yet","not_available_until_next_submission_2175158":"Not available until next submission","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Mastery set at","no_results":"(no results)"}}},"en-CA":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Current Mastery Score: %{score} out of %{mastery_points}","latest_assessment_a85280ef":"Latest Assessment","no_score_yet_c94e919b":"No score yet","not_available_until_next_submission_2175158":"Not available until next submission","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Mastery set at","no_results":"(no results)"}}},"en-GB":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Current Mastery Score: %{score} out of %{mastery_points}","latest_assessment_a85280ef":"Latest Assessment","no_score_yet_c94e919b":"No score yet","not_available_until_next_submission_2175158":"Not available until next submission","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Mastery set at","no_results":"(no results)"}}},"en-GB-x-lbs":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Current Mastery Score: %{score} out of %{mastery_points}","latest_assessment_a85280ef":"Latest Assessment","no_score_yet_c94e919b":"No score yet","not_available_until_next_submission_2175158":"Not available until next submission","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Mastery set at","no_results":"(no results)"}}},"en-GB-x-ukhe":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Current Mastery Score: %{score} out of %{mastery_points}","latest_assessment_a85280ef":"Latest Assessment","no_score_yet_c94e919b":"No score yet","not_available_until_next_submission_2175158":"Not available until next submission","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Mastery set at","no_results":"(no results)"}}},"es":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Puntaje de dominio actual: %{score} de %{mastery_points}","latest_assessment_a85280ef":"Última evaluación","no_score_yet_c94e919b":"Aún sin puntaje","not_available_until_next_submission_2175158":"No está disponible hasta la próxima entrega","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Competencia: el estado de %{title} es %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Dominio establecido en","no_results":"(sin resultados)"}}},"fa":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"نمره تسلط فعلی: %{score} از %{mastery_points}","latest_assessment_a85280ef":"آخرین ارزیابی","no_score_yet_c94e919b":"هنوز هیچ نمره ای موجود نیست","not_available_until_next_submission_2175158":"تا مورد ارسالی بعدی در دسترس نیست","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"نتیجه: %{title} دارای وضعیت %{statusTooltip} است","outcomes":{"outcome_popover":{"mastery_set_at":"تسلط تعیین شده در","no_results":"(نتیجه موجود نیست)"}}},"fi":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Nykyisen hallinnan pistemäärä: %{score}/%{mastery_points}","latest_assessment_a85280ef":"Viimeisin arviointi","no_score_yet_c94e919b":"Ei vielä pistemäärää","not_available_until_next_submission_2175158":"Ei saatavissa ennen seuraavaa lähetystä","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Tulos: %{title} on tila %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Hallinta määritetty","no_results":"(ei tuloksia)"}}},"fr":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Score actuel de maîtrise : %{score} sur %{mastery_points}","latest_assessment_a85280ef":"Dernière évaluation","no_score_yet_c94e919b":"Pas encore de résultat","not_available_until_next_submission_2175158":"Non disponible avant l\'envoi suivant","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Acquis : %{title} a le statut %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Niveau de maîtrise défini à","no_results":"(pas de résultats)"}}},"fr-CA":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Score actuel de maîtrise : %{score} sur %{mastery_points}","latest_assessment_a85280ef":"Dernière évaluation","no_score_yet_c94e919b":"Pas encore de résultat","not_available_until_next_submission_2175158":"Non disponible avant l\'envoi suivant","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Résultat : %{title} a le statut %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Niveau de maîtrise défini à","no_results":"(pas de résultats)"}}},"he":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"ציון רמת מומחיות נוכחית: %{score}  מתוך %{mastery_points}","latest_assessment_a85280ef":"הערכה אחרונה","no_score_yet_c94e919b":"אין ציון עדיין","not_available_until_next_submission_2175158":"לא זמין עד ההגשה הבאה","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"תוצאות למידה: %{title} בסטטוס של %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"התמחות הוגדרה ל","no_results":"(אין תוצאות)"}}},"ht":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Nòt Mwetriz Aktyèl: %{score} sou %{mastery_points}","latest_assessment_a85280ef":"Dènye Evalyasyon","no_score_yet_c94e919b":"Poko gen nòt","not_available_until_next_submission_2175158":"Pa Disponib","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Rezilta: %{title} gen estati %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Metriz fikse a","no_results":"(okenn rezilta)"}}},"hu":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Aktuális jártassági pontszám: %{score}, ennyi pontból: %{mastery_points}","latest_assessment_a85280ef":"Utolsó értékelés","no_score_yet_c94e919b":"Még nincs pontszám","not_available_until_next_submission_2175158":"A következő beadásig nem érhető el","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Tanulási eredmény: %{title} a következő státuszú %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Elfogadási szint beállítva erre:","no_results":"(nincsenek eredmények)"}}},"hy":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Ընթացիկ անցողիկ միավոր՝ %{mastery_points}-ից %{score} ","latest_assessment_a85280ef":"Վերջին գնահատումը","no_score_yet_c94e919b":"Գնահատականներ դեռևս չկան","not_available_until_next_submission_2175158":"Հասանելի չէ մինչև հաջորդ հանձնարարության հանձնումը","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Արդյունք՝ %{title} ունի %{statusTooltip} կարգավիճակ","outcomes":{"outcome_popover":{"mastery_set_at":"Յուրացման մակարդակը սահմանվել է՝","no_results":"(ոչ մի արդյունք)"}}},"is":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Núverandi tileinkunareinkunn: %{score} af %{mastery_points}","latest_assessment_a85280ef":"Nýjasta mat","no_score_yet_c94e919b":"Engin einkunn enn","not_available_until_next_submission_2175158":"Ekki tiltækt fyrr en við næstu skil","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Niðurstaða: %{title} hefur stöðu %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Tileinkun ákvörðuð","no_results":"(engar niðurstöður)"}}},"it":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Punteggio livello di padronanza attuale: %{score} su %{mastery_points}","latest_assessment_a85280ef":"Valutazione più recente","no_score_yet_c94e919b":"Ancora nessun punteggio","not_available_until_next_submission_2175158":"Non disponibile fino alla consegna successiva","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Esito: %{title} è in stato %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Livello di padronanza impostato su","no_results":"(nessun esito)"}}},"ja":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"現在の熟達スコア: %{mastery_points}のうちの%{score}","latest_assessment_a85280ef":"最新の課題","no_score_yet_c94e919b":"まだスコアがありません","not_available_until_next_submission_2175158":"次回の提出まで使用不可です","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"成果: %{title} の状況は %{statusTooltip} です","outcomes":{"outcome_popover":{"mastery_set_at":"達成の設定:","no_results":"(結果なし)"}}},"mi":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Kaute Mana nāianei: %{score} i roto i te %{mastery_points}","latest_assessment_a85280ef":"aromatawai Latest","no_score_yet_c94e919b":"Kaore anō he Kaute","not_available_until_next_submission_2175158":"Kāore i te wātea tae noa ki te tāpaetanga muri mai","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Putanga: %{title} he mana o te %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Whakaturia Mātatau i","no_results":"(kahore he hua)"}}},"nb":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Nåværende ekspertise resultat: %{score} av %{mastery_points}","latest_assessment_a85280ef":"Siste vurdering","no_score_yet_c94e919b":"Ingen resultat ennå","not_available_until_next_submission_2175158":"Ikke tilgjengelig før neste innsending","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Læringsmål: %{title} har status som %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Ekspertisenivå","no_results":"(ingen resultater)"}}},"nb-x-k12":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Nåværende ekspertise resultat: %{score} av %{mastery_points}","latest_assessment_a85280ef":"Siste vurdering","no_score_yet_c94e919b":"Ingen resultat ennå","not_available_until_next_submission_2175158":"Ikke tilgjengelig før neste innsending","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Mål: %{title} har status som %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Ekspertisenivå","no_results":"(ingen resultater)"}}},"nl":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Huidige Meesterschap Score: %{score} out of %{mastery_points}","latest_assessment_a85280ef":"Laatste beoordeling","no_score_yet_c94e919b":"Geen score gegeven","not_available_until_next_submission_2175158":"Niet beschikbaar tot volgende inzending","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Resultaat: %{title}heeft een status van %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Meesterschap ingesteld bij","no_results":"(geen resultaten)"}}},"nn":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Gjeldande meistringsnivå: %{score} av %{mastery_points}","latest_assessment_a85280ef":"Siste innlevering","no_score_yet_c94e919b":"Ingen resultat","not_available_until_next_submission_2175158":"Ikkje tilgjengeleg før neste innlevering","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Læringsmål: %{title} har status som %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Meistringsnivå sett til","no_results":"(utan resultat)"}}},"pl":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Obecny wynik poziomu biegłości: %{score} out of %{mastery_points}","latest_assessment_a85280ef":"Najnowsza ocena","no_score_yet_c94e919b":"Jeszcze nie ma wyniku punktowego","not_available_until_next_submission_2175158":"Niedostępne do kolejnego zgłoszenia","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Wynik: %{title} ma status %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Biegłość ustawiono na","no_results":"(brak wyników)"}}},"pt":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Pontuação atual de Domínio: %{score} de %{mastery_points}","latest_assessment_a85280ef":"Última Avaliação","no_score_yet_c94e919b":"Ainda sem pontuação","not_available_until_next_submission_2175158":"Não disponível até à próxima entrega","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Resultado: %{title} tem um estado de %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Domínio definido em","no_results":"(nenhum resultado)"}}},"pt-BR":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Pontuação atual de domínio: %{score} de %{mastery_points}","latest_assessment_a85280ef":"Avaliação Mais Recente","no_score_yet_c94e919b":"Sem pontuação ainda","not_available_until_next_submission_2175158":"Não está disponível até o próximo envio","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Objetivo: %{title} tem um status de %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Domínio definido em","no_results":"(sem resultados)"}}},"ru":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Текущий проходной балл: %{score} из %{mastery_points}","latest_assessment_a85280ef":"Последнее оценивание","no_score_yet_c94e919b":"Оценок пока нет","not_available_until_next_submission_2175158":"Не доступно до следующей сдачи домашнего задания","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Результат: %{title} имеет статус %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Усвоение установлено на","no_results":"(без результата)"}}},"sl":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Trenutni rezultat odličnosti: %{score} od %{mastery_points}","latest_assessment_a85280ef":"Najnovejše ocenjevanje","no_score_yet_c94e919b":"Nobene ocene še ni.","not_available_until_next_submission_2175158":"Ni na voljo do naslednje oddaje.","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Izid: %{title} ima status %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Odličnost na","no_results":"(ni rezultatov)"}}},"sv":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Nuvarande måluppfyllelsepoäng: %{score} av %{mastery_points}","latest_assessment_a85280ef":"Senaste bedömning","no_score_yet_c94e919b":"Inga resultat ännu","not_available_until_next_submission_2175158":"Inte tillgänglig förrän nästa inlämning","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Lärandemål: %{title} har statusen %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Måluppfyllelse satt vid","no_results":"(inga resultat)"}}},"sv-x-k12":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Nuvarande måluppfyllelsepoäng: %{score} av %{mastery_points}","latest_assessment_a85280ef":"Senaste bedömning","no_score_yet_c94e919b":"Inga resultat ännu","not_available_until_next_submission_2175158":"Inte tillgänglig förrän nästa inlämning","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Lärandemål: %{title} har statusen %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Måluppfyllelse satt vid","no_results":"(inga resultat)"}}},"tr":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Geçerli Yeterlik Puanı: %{mastery_points} üzerinden %{score}","latest_assessment_a85280ef":"En son Değerlendirme","no_score_yet_c94e919b":"Henüz puan yok","not_available_until_next_submission_2175158":"Bir sonraki gönderime kadar kullanılamaz","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Öğrenme çıktısı: %{title} nin durumu %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Yeterlik şuna ayarlandı","no_results":"(sonuç yok)"}}},"uk":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"Поточний основний бал: %{score} з %{mastery_points}","latest_assessment_a85280ef":"Остання оцінка","no_score_yet_c94e919b":"Оцінка відсутня ще","not_available_until_next_submission_2175158":"Не доступно до наступного відправлення","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Вихідний: %{title} має статус %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"Майстерність встановлена на","no_results":"(результати відсутні)"}}},"zh-Hans":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"目前的掌握得分: %{score} 超出 %{mastery_points}","latest_assessment_a85280ef":"最新的评估","no_score_yet_c94e919b":"尚无分数","not_available_until_next_submission_2175158":"不可用，直到下次提交","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"结果：%{title} 的状态为 %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"掌握程度设置为","no_results":"(无结果)"}}},"zh-Hant":{"current_mastery_score_score_out_of_mastery_points_fedd343f":"目前的精通分數：總分 %{mastery_points}， 得分 %{score}","latest_assessment_a85280ef":"最新的評估","no_score_yet_c94e919b":"尚無分數","not_available_until_next_submission_2175158":"下次提交前不可用","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"成果：%{title} 的狀態為 %{statusTooltip}","outcomes":{"outcome_popover":{"mastery_set_at":"精通標準設置於","no_results":"（沒有結果）"}}}}'))
s("jQeR")
s("0sPK")
o["default"].scoped("outcomes.outcome_popover")
s("DfGn")
var _=s("EvX+")
var i=r.a.default
var l=i.template,c=i.templates=i.templates||{}
var u="outcomes/outcomePopover"
c[u]=l((function(e,t,s,a,r){this.compilerInfo=[4,">= 1.0.0"]
s=this.merge(s,e.helpers)
a=this.merge(a,e.partials)
r=r||{}
var o,n="",_="function",i=this.escapeExpression,l=this,c=s.helperMissing
function u(e,t){return"-dialog"}function d(e,t){var a,r,o,n=""
n+='\n    <div class="title">'
if(r=s.path)a=r.call(e,{hash:{},data:t})
else{r=e&&e.path
a=typeof r===_?r.call(e,{hash:{},data:t}):r}n+=i(a)+'</div>\n    <div class="chart">\n      '
a=s["if"].call(e,(a=e&&e.ratings,null==a||false===a?a:a.result_count),{hash:{},inverse:l.program(7,p,t),fn:l.program(4,m,t),data:t});(a||0===a)&&(n+=a)
n+='\n    </div>\n    <div class="outcome-info">\n      <div class="mastery">'+i((r=s.t||e&&e.t,o={hash:{scope:"outcomes.outcome_popover"},data:t},r?r.call(e,"mastery_set_at","Mastery set at",o):c.call(e,"t","mastery_set_at","Mastery set at",o)))+": "+i((r=s.nf||e&&e.nf,o={hash:{format:"outcomeScore"},data:t},r?r.call(e,e&&e.mastery_points,o):c.call(e,"nf",e&&e.mastery_points,o)))+"</div>\n      "
a=s["if"].call(e,e&&e.description,{hash:{},inverse:l.noop,fn:l.program(9,y,t),data:t});(a||0===a)&&(n+=a)
n+="\n    </div>\n    "
return n}function m(e,t){var a,r=""
r+='\n        <div class="chart-image pull-left"></div>\n        <ol class="ratings pull-left">\n        '
a=s.each.call(e,e&&e.ratings,{hash:{},inverse:l.noop,fn:l.program(5,f,t),data:t});(a||0===a)&&(r+=a)
r+="\n        </ol>\n      "
return r}function f(e,t){var a,r,o=""
o+='\n          <li class="rating"><span class="legend-color" style="background-color: '
if(r=s.color)a=r.call(e,{hash:{},data:t})
else{r=e&&e.color
a=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=i(a)+'" /> '
if(r=s.description)a=r.call(e,{hash:{},data:t})
else{r=e&&e.description
a=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=i(a)+"</li>\n        "
return o}function p(e,t){var a,r,o=""
o+='\n        <p><img src="/images/pie-chart-disabled.png" /></p>\n        <p>'+i((a=s.t||e&&e.t,r={hash:{scope:"outcomes.outcome_popover"},data:t},a?a.call(e,"no_results","(no results)",r):c.call(e,"t","no_results","(no results)",r)))+"</p>\n      "
return o}function y(e,t){var a,r,o=""
o+='<div class="description">'
if(r=s.description)a=r.call(e,{hash:{},data:t})
else{r=e&&e.description
a=typeof r===_?r.call(e,{hash:{},data:t}):r}(a||0===a)&&(o+=a)
o+="</div>"
return o}function b(e,t){var a,r,o,n=""
n+='\n    <div class="mastery-details pull-right" aria-hidden="true">\n      '
a=s["if"].call(e,e&&e.scoreDefined,{hash:{},inverse:l.program(14,g,t),fn:l.program(12,h,t),data:t});(a||0===a)&&(n+=a)
n+='\n    </div>\n    <div class="recent-details">\n      <div class="last-assessment">'+i((r=s.t||e&&e.t,o={hash:{i18n_inferred_key:true},data:t},r?r.call(e,"latest_assessment_a85280ef","Latest Assessment",o):c.call(e,"t","latest_assessment_a85280ef","Latest Assessment",o)))+":&nbsp;\n        "
a=s["if"].call(e,e&&e.result_title,{hash:{},inverse:l.program(18,w,t),fn:l.program(16,v,t),data:t});(a||0===a)&&(n+=a)
n+='\n      </div>\n      <div class="submission-time">'+i((r=s.datetimeFormatted||e&&e.datetimeFormatted,o={hash:{},data:t},r?r.call(e,e&&e.submission_time,o):c.call(e,"datetimeFormatted",e&&e.submission_time,o)))+'</div>\n    </div>\n    <div class="screenreader-only">\n      '
a=s["if"].call(e,e&&e.score,{hash:{},inverse:l.program(22,x,t),fn:l.program(20,k,t),data:t});(a||0===a)&&(n+=a)
n+="\n    </div>\n    "
return n}function h(e,t){var a,r,o=""
o+="\n        <span>"+i((a=s.nf||e&&e.nf,r={hash:{format:"outcomeScore"},data:t},a?a.call(e,e&&e.roundedScore,r):c.call(e,"nf",e&&e.roundedScore,r)))+" / "+i((a=s.nf||e&&e.nf,r={hash:{format:"outcomeScore"},data:t},a?a.call(e,e&&e.mastery_points,r):c.call(e,"nf",e&&e.mastery_points,r)))+'</span>\n        <span class="screenreader-only">\n          '+i((a=s.t||e&&e.t,r={hash:{title:e&&e.title,statusTooltip:e&&e.statusTooltip,i18n_inferred_key:true},data:t},a?a.call(e,"outcome_title_has_a_status_of_statustooltip_82d1e6d9","Outcome: %{title} has a status of %{statusTooltip}",r):c.call(e,"t","outcome_title_has_a_status_of_statustooltip_82d1e6d9","Outcome: %{title} has a status of %{statusTooltip}",r)))+"\n        </span>\n        "+i((a=s.addMasteryIcon||e&&e.addMasteryIcon,r={hash:{},data:t},a?a.call(e,e&&e.status,r):c.call(e,"addMasteryIcon",e&&e.status,r)))+"\n      "
return o}function g(e,t){var a,r,o=""
o+="\n        <span>"+i((a=s.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},a?a.call(e,"no_score_yet_c94e919b","No score yet",r):c.call(e,"t","no_score_yet_c94e919b","No score yet",r)))+"</span>\n      "
return o}function v(e,t){var a,r,o=""
o+="\n          "
if(r=s.result_title)a=r.call(e,{hash:{},data:t})
else{r=e&&e.result_title
a=typeof r===_?r.call(e,{hash:{},data:t}):r}o+=i(a)+"\n        "
return o}function w(e,t){var a,r,o=""
o+="\n          "+i((a=s.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},a?a.call(e,"not_available_until_next_submission_2175158","Not available until next submission",r):c.call(e,"t","not_available_until_next_submission_2175158","Not available until next submission",r)))+"\n        "
return o}function k(e,t){var a,r,o=""
o+="\n        "+i((a=s.t||e&&e.t,r={hash:{score:e&&e.score,mastery_points:e&&e.mastery_points,i18n_inferred_key:true},data:t},a?a.call(e,"current_mastery_score_score_out_of_mastery_points_fedd343f","Current Mastery Score: %{score} out of %{mastery_points}",r):c.call(e,"t","current_mastery_score_score_out_of_mastery_points_fedd343f","Current Mastery Score: %{score} out of %{mastery_points}",r)))+"\n      "
return o}function x(e,t){var a,r,o=""
o+="\n        "+i((a=s.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},a?a.call(e,"no_score_yet_c94e919b","No score yet",r):c.call(e,"t","no_score_yet_c94e919b","No score yet",r)))+"\n      "
return o}n+='<div class="outcome-details'
o=s["if"].call(t,t&&t.dialog,{hash:{},inverse:l.noop,fn:l.program(1,u,r),data:r});(o||0===o)&&(n+=o)
n+='">\n  <div class="line-graph">\n    <div class="screenreader-only"></div>\n  </div>\n  <div class="head-content" tabindex="0">\n    '
o=s["if"].call(t,t&&t.path,{hash:{},inverse:l.program(11,b,r),fn:l.program(3,d,r),data:r});(o||0===o)&&(n+=o)
n+='\n  </div>\n  <div class="calculation-method-example method-details content-box pad-box-mini border border-trbl border-round">\n    '
o=l.invokePartial(a["outcomes/calculationMethodExample"],"outcomes/calculationMethodExample",t,s,a,r);(o||0===o)&&(n+=o)
n+="\n  </div>\n</div>\n"
return n}))
_["a"].loadStylesheet("jst/outcomes/outcomePopover",{new_styles_normal_contrast:{combinedChecksum:"538a4912e7"},new_styles_high_contrast:{combinedChecksum:"538a4912e7"},responsive_layout_normal_contrast:{combinedChecksum:"538a4912e7"},responsive_layout_high_contrast:{combinedChecksum:"538a4912e7"},new_styles_normal_contrast_rtl:{combinedChecksum:"4d51acaf87"},new_styles_high_contrast_rtl:{combinedChecksum:"4d51acaf87"},responsive_layout_normal_contrast_rtl:{combinedChecksum:"4d51acaf87"},responsive_layout_high_contrast_rtl:{combinedChecksum:"4d51acaf87"}}[_["a"].getCssVariant()])
t["a"]=c[u]},"ll/T":function(e,t,s){"use strict"
var a=s("ouhR")
var r=s.n(a)
var o=s("GLiE")
var n=s.n(o)
var _=s("x1Tw")
s("JI1W")
var i=s("pQTu")
var l=s("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"set_created_createdat_895e2243":"تم إنشاء المجموعة %{createdAt}"},"cy":{"set_created_createdat_895e2243":"Wedi creu set %{createdAt}"},"da":{"set_created_createdat_895e2243":"Sæt oprettet %{createdAt}"},"da-x-k12":{"set_created_createdat_895e2243":"Sæt oprettet %{createdAt}"},"de":{"set_created_createdat_895e2243":"Set erstellt %{createdAt}"},"en-AU":{"set_created_createdat_895e2243":"Set created %{createdAt}"},"en-AU-x-unimelb":{"set_created_createdat_895e2243":"Set created %{createdAt}"},"en-CA":{"set_created_createdat_895e2243":"Set created %{createdAt}"},"en-GB":{"set_created_createdat_895e2243":"Set created %{createdAt}"},"en-GB-x-lbs":{"set_created_createdat_895e2243":"Set created %{createdAt}"},"en-GB-x-ukhe":{"set_created_createdat_895e2243":"Set created %{createdAt}"},"es":{"set_created_createdat_895e2243":"Conjunto creado %{createdAt}"},"fa":{"set_created_createdat_895e2243":"مجموعه ایجاد شد %{createdAt}"},"fi":{"set_created_createdat_895e2243":"Määritä luotu %{createdAt}"},"fr":{"set_created_createdat_895e2243":"Ensemble créé %{createdAt}"},"fr-CA":{"set_created_createdat_895e2243":"Ensemble créé %{createdAt}"},"he":{"set_created_createdat_895e2243":"נוצר אוגדן %{createdAt}"},"ht":{"set_created_createdat_895e2243":"Ansanm Kreye %{createdAt}"},"hu":{"set_created_createdat_895e2243":"Beállítás létrehozva %{createdAt}"},"is":{"set_created_createdat_895e2243":"Sett stofnað %{createdAt}"},"it":{"set_created_createdat_895e2243":"Set creato %{createdAt}"},"ja":{"set_created_createdat_895e2243":"セットが %{createdAt} に作成されました"},"mi":{"set_created_createdat_895e2243":"Tautuhi hanga %{createdAt}"},"nb":{"set_created_createdat_895e2243":"Settet opprettet %{createdAt}"},"nb-x-k12":{"set_created_createdat_895e2243":"Settet opprettet %{createdAt}"},"nl":{"set_created_createdat_895e2243":"Set aangemaakt %{createdAt}"},"nn":{"set_created_createdat_895e2243":"Sett oppretta %{createdAt}"},"pl":{"set_created_createdat_895e2243":"Zbiór utworzono %{createdAt}"},"pt":{"set_created_createdat_895e2243":"Grupo criado %{createdAt}"},"pt-BR":{"set_created_createdat_895e2243":"Configuração criada %{createdAt}"},"ru":{"set_created_createdat_895e2243":"Установить создание %{createdAt}"},"sl":{"set_created_createdat_895e2243":"Nabor je ustvarjen %{createdAt}"},"sv":{"set_created_createdat_895e2243":"Uppsättning skapades %{createdAt}"},"sv-x-k12":{"set_created_createdat_895e2243":"Uppsättning skapades %{createdAt}"},"uk":{"set_created_createdat_895e2243":"Набір створено %{createdAt}"},"zh-Hans":{"set_created_createdat_895e2243":"集已创建%{createdAt}"},"zh-Hant":{"set_created_createdat_895e2243":"組創建於 %{createdAt}"}}'))
s("jQeR")
s("0sPK")
var c=i["default"].scoped("gradingPeriodSetsApi")
var u=s("e+lF")
var d=s("0DDm")
var m=s("c6Cm")
const f=()=>ENV.GRADING_PERIOD_SETS_URL
const p=()=>ENV.GRADING_PERIOD_SETS_URL
const y=e=>r.a.replaceTags(ENV.GRADING_PERIOD_SET_UPDATE_URL,"id",e)
const b=e=>{const t={title:e.title,weighted:e.weighted,display_totals_for_all_grading_periods:e.displayTotalsForAllGradingPeriods}
return{grading_period_set:t,enrollment_term_ids:e.enrollmentTermIDs}}
const h=e=>({id:e.id.toString(),title:g(e),weighted:!!e.weighted,displayTotalsForAllGradingPeriods:e.display_totals_for_all_grading_periods,gradingPeriods:m["a"].deserializePeriods(e.grading_periods),permissions:e.permissions,createdAt:new Date(e.created_at)})
const g=e=>{if(e.title&&e.title.trim())return e.title.trim()
{const t=u["a"].formatDateForDisplay(new Date(e.created_at))
return c.t("Set created %{createdAt}",{createdAt:t})}}
const v=function(e){const t=h(e)
t.enrollmentTermIDs=e.enrollment_term_ids
return t}
const w=e=>n.a.flatten(n.a.map(e,e=>n.a.map(e.grading_period_sets,e=>h(e))))
t["a"]={deserializeSet:v,list:()=>new Promise((e,t)=>{const s=new d["a"]
s.getDepaginated(f()).then(t=>e(w(t))).fail(e=>t(e))}),create:e=>_["a"].post(p(),b(e)).then(e=>v(e.data.grading_period_set)),update:e=>_["a"].patch(y(e.id),b(e)).then(t=>e)}},my6A:function(e,t,s){"use strict"
s.d(t,"a",(function(){return _}))
s.d(t,"b",(function(){return i}))
var a=s("LvDl")
var r=s.n(a)
var o=s("2DhO")
var n=s("e/kD")
function _(e,t){const s={}
r.a.forEach(e,(e,a)=>{e[t]&&(s[a]=e[t])})
return s}function i(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
const a=new n["a"](s)
const _=r.a.sortBy(s,"startDate")
t.forEach(t=>{const r=o["a"].parse(t.cached_due_date)
let n=null
s.length&&(n=r?a.gradingPeriodForDueAt(r):_[_.length-1])
const i=e[t.assignment_id]||{}
i[t.user_id]={due_at:t.cached_due_date,grading_period_id:n?n.id:null,in_closed_grading_period:!!n&&n.isClosed}
e[t.assignment_id]=i})}}}])

//# sourceMappingURL=130-c-b13f9c83cb.js.map