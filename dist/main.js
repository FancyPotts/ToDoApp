(()=>{const t=function(){const t=[];return{addTask:function(e,n,o,i,c,d){const s=function(t="Generic title",e="Generic description of task",n="Due yesterday",o="Low",i="",c=[]){return{title:t,desc:e,dueDate:n,priority:o,note:""!==i?i:void 0,checkList:c.length>0?c:void 0}}(e,n,o,i,c,d);t.push(s)},deleteTask:function(e){e>=0&&e<t.length&&t.splice(e,1)},editTask:function(e,n){e>=0&&e<t.length&&(t[e]=n)},getAllTasks:function(){return t},showTask:function(e){return t[e]}}}();t.addTask("First","Create a task","Tomorrow","Low"),t.addTask("Second","Display the tasks","Tonight","Low"),function(){const e=t.getAllTasks();document.body.innerHTML="";for(let n=0;n<e.length;n++){const e=document.createElement("button"),o=document.createElement("div"),i=t.showTask(n);e.innerHTML=i.title,o.innerHTML=i.desc,e.addEventListener("click",(function(){alert(`${i.title}\n${i.desc}\n${i.dueDate}\n${i.priority}\n${i.note}`)})),document.body.appendChild(e),document.body.appendChild(o)}}()})();