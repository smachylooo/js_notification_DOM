var e=document.querySelector("body"),t=function(t,n,i,o,a){var c=document.createElement("div");c.className="notification ".concat(a),c.style.top="".concat(t,"px"),c.style.right="".concat(n,"px");var s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=document.createElement(e);i.className=n,i.textContent=t,c.appendChild(i)};s("h2",i,"title"),s("p",o),e.append(c),setTimeout(function(){e.removeChild(c)},1e3)};t(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),t(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),t(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.12a371c1.js.map