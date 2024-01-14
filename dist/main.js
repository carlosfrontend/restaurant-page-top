(()=>{"use strict";const e=()=>{const e=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),d=document.createElement("h2"),s=document.createElement("img"),c=document.createElement("p"),i=document.createElement("p"),l=document.createElement("p");return s.src="./img/cake.jpg",s.classList.add("cake"),t.alt="A strawberry cake picture",e.classList.add("home-container"),t.classList.add("cake-container"),a.classList.add("history-container"),n.classList.add("history-text"),d.classList.add("since"),c.classList.add("text-1"),i.classList.add("text-2"),l.classList.add("text-3"),e.appendChild(t),e.appendChild(a),t.appendChild(s),a.appendChild(d),a.appendChild(n),d.textContent="Cooking Since 1978",c.textContent="We have been at your service for more than 40 years.",i.textContent="We always work with the best qualities of meat, pasta and fish.",l.textContent="We have been chosen this year as the best local Mediterranean food restaurant.",n.appendChild(c),n.appendChild(i),n.appendChild(l),e};(()=>{const t=document.createElement("div"),a=document.querySelector("#content");t.classList.add("main"),a.appendChild((()=>{const e=document.createElement("header"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("img"),d=document.createElement("h1"),s=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div");return n.src="./img/logo.svg",n.alt="Three Forks logo",c.setAttribute("id","home-btn"),i.setAttribute("id","menu-btn"),l.setAttribute("id","contact-btn"),e.classList.add("header"),t.classList.add("logo-container"),a.classList.add("title-container"),n.classList.add("logo"),d.classList.add("title"),s.classList.add("nav"),d.textContent="Three Forks Restaurant",c.textContent="Home",i.textContent="Menu",l.textContent="Contact",e.appendChild(t),t.appendChild(n),e.appendChild(a),a.appendChild(d),e.appendChild(s),s.appendChild(c),s.appendChild(i),s.appendChild(l),e})()),a.appendChild(t),t.appendChild(e()),a.appendChild((()=>{const e=document.createElement("footer"),t=document.createElement("nav"),a=document.createElement("a"),n=document.createElement("i"),d=document.createElement("span"),s=document.createElement("div");return a.target="_blank",a.href="https://github.com/carlosfrontend",e.classList.add("footer"),t.classList.add("footer-nav"),a.classList.add("author-container"),n.classList.add("fa-brands"),n.classList.add("fa-github"),d.classList.add("author-info"),s.classList.add("mention-container-one"),s.innerHTML=' <span>Photo by <a class="mention-link" target="_blank"   href="https://unsplash.com/es/@anna_tukhfatullina?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anna Tukhfatullina</a> in <a class="mention-link" target="_blank" href="https://unsplash.com/es/fotos/tarta-de-frambuesa-Mzy-OjtCI70?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></span>',e.appendChild(t),t.appendChild(a),a.appendChild(n),d.textContent=` Coded by carlosfrontend - ${(new Date).getFullYear()}`,a.appendChild(d),t.appendChild(s),e})())})();const t=document.querySelector(".main"),a=document.querySelector("#home-btn"),n=document.querySelector("#menu-btn"),d=document.querySelector("#contact-btn"),s=()=>{t.innerHTML=""};a.addEventListener("click",(()=>{s(),t.append(e())})),n.addEventListener("click",(()=>{s(),t.append((()=>{const e=document.createElement("div"),t=document.createElement("div"),a=document.createElement("img"),n=document.createElement("h2"),d=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),i=document.createElement("img"),l=document.createElement("h3"),o=document.createElement("img"),r=document.createElement("h3"),m=document.createElement("img"),p=document.createElement("h3"),u=document.createElement("div"),h=document.createElement("p"),C=document.createElement("p"),E=document.createElement("p"),L=document.createElement("p"),g=document.createElement("p"),v=document.createElement("p"),b=document.createElement("p"),f=document.createElement("p"),x=document.createElement("p"),T=document.createElement("p"),k=document.createElement("p"),y=document.createElement("p");return u.classList.add("boxes"),i.classList.add("salad-logo"),o.classList.add("meal-logo"),m.classList.add("cake-logo"),i.src="./img/salad.svg",i.alt="A salad logo",l.innerText="STARTERS",o.src="./img/meal.svg",o.alt="A meal logo",r.innerText="MAIN COURSE",m.src="./img/cake-logo.svg",m.alt="A cake logo",p.innerText="DESSERT",a.src="./img/chef-icon.svg",a.alt="A chief logo",a.classList.add("chef-logo"),t.classList.add("header-menu"),n.classList.add("header-title"),d.classList.add("starters-container"),s.classList.add("maincourse-container"),c.classList.add("dessert-container"),n.innerText="OUR MENU",e.classList.add("menu-container"),t.appendChild(a),t.appendChild(n),e.appendChild(t),e.appendChild(u),u.appendChild(d),u.appendChild(s),u.appendChild(c),d.appendChild(i),h.classList.add("starter-one"),C.classList.add("starter-two"),E.classList.add("starter-three"),L.classList.add("starter-four"),g.classList.add("main-one"),v.classList.add("main-two"),b.classList.add("main-three"),f.classList.add("main-four"),x.classList.add("dessert-one"),T.classList.add("dessert-two"),k.classList.add("dessert-three"),y.classList.add("dessert-four"),h.innerHTML="Mediterranean salad",C.innerHTML="Andalusian gazpacho",E.innerHTML="Ham and cheese saint jacobs",L.innerHTML="Castilian soup",g.innerHTML="Beef ragout",v.innerHTML="Baked macaroni with sirloin",b.innerHTML="Lamb chops",f.innerHTML="Fried turbot with potatoes",x.textContent="Homemade cheese and blueberry pie",T.textContent="Chocolate and pistachio macadamia nut ice cream",k.textContent="Catalan cream",y.innerText="Fresh fruit",d.appendChild(l),d.appendChild(h),d.appendChild(C),d.appendChild(E),d.appendChild(L),s.appendChild(o),s.appendChild(r),s.appendChild(g),s.appendChild(v),s.appendChild(b),s.appendChild(f),c.appendChild(m),c.appendChild(p),c.appendChild(x),c.appendChild(T),c.appendChild(k),c.appendChild(y),e})())})),d.addEventListener("click",(()=>{s(),t.append((()=>{const e=document.createElement("div"),t=document.createElement("p");return t.textContent="Hello Contact!",e.append(t),e.classList.add("contact-container"),e})())}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUQsRUFBWUMsVUFBWSxjQUN4QnRCLEVBQWtCbkMsWUFBWXVDLEdBQzlCSixFQUFrQm5DLFlBQVk2QyxHQUM5QlYsRUFBa0JuQyxZQUFZOEMsR0FDOUJYLEVBQWtCbkMsWUFBWStDLEdBQzlCWixFQUFrQm5DLFlBQVlnRCxHQUM5QlosRUFBb0JwQyxZQUFZd0MsR0FDaENKLEVBQW9CcEMsWUFBWXlDLEdBQ2hDTCxFQUFvQnBDLFlBQVlpRCxHQUNoQ2IsRUFBb0JwQyxZQUFZa0QsR0FDaENkLEVBQW9CcEMsWUFBWW1ELEdBQ2hDZixFQUFvQnBDLFlBQVlvRCxHQUNoQ2YsRUFBaUJyQyxZQUFZMEMsR0FDN0JMLEVBQWlCckMsWUFBWTJDLEdBQzdCTixFQUFpQnJDLFlBQVlxRCxHQUM3QmhCLEVBQWlCckMsWUFBWXNELEdBQzdCakIsRUFBaUJyQyxZQUFZdUQsR0FDN0JsQixFQUFpQnJDLFlBQVl3RCxHQUN0QnpCLENBQU8sRUQ1RUYsR0FBYSxJQVUzQmxCLEVBQVdnQixpQkFBaUIsU0FQUCxLQUNuQkQsSUFDQTFCLEVBQUs0QixPSjVCZSxNQUNwQixNQUFNQyxFQUFVN0MsU0FBU0MsY0FBYyxPQUNqQ3VFLEVBQU94RSxTQUFTQyxjQUFjLEtBSXBDLE9BSEF1RSxFQUFLekQsWUFBYyxpQkFDbkI4QixFQUFRRCxPQUFPNEIsR0FDZjNCLEVBQVFsQyxVQUFVQyxJQUFJLHFCQUNmaUMsQ0FBTyxFSXNCRixHQUFnQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL3NpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9pbml0aWFsUGFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCJIZWxsbyBDb250YWN0IVwiO1xuICBlbGVtZW50LmFwcGVuZCh0ZXh0KTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImNvbnN0IGNyZWF0ZUhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYWtlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGlzdG9yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhpc3RvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc2luY2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBjYWtlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3Qgd2VsY29tZVRleHRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgd2VsY29tZVRleHRUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgd2VsY29tZVRleHRUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGNha2VJbWcuc3JjID0gXCIuL2ltZy9jYWtlLmpwZ1wiO1xuICBjYWtlSW1nLmNsYXNzTGlzdC5hZGQoXCJjYWtlXCIpO1xuICBjYWtlQ29udGFpbmVyLmFsdCA9IFwiQSBzdHJhd2JlcnJ5IGNha2UgcGljdHVyZVwiO1xuICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRhaW5lclwiKTtcbiAgY2FrZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FrZS1jb250YWluZXJcIik7XG4gIGhpc3RvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpc3RvcnktY29udGFpbmVyXCIpO1xuICBoaXN0b3J5VGV4dC5jbGFzc0xpc3QuYWRkKFwiaGlzdG9yeS10ZXh0XCIpO1xuICBzaW5jZVRleHQuY2xhc3NMaXN0LmFkZChcInNpbmNlXCIpO1xuICB3ZWxjb21lVGV4dE9uZS5jbGFzc0xpc3QuYWRkKFwidGV4dC0xXCIpO1xuICB3ZWxjb21lVGV4dFR3by5jbGFzc0xpc3QuYWRkKFwidGV4dC0yXCIpO1xuICB3ZWxjb21lVGV4dFRocmVlLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTNcIik7XG4gIFxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VDb250YWluZXIpO1xuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhpc3RvcnlDb250YWluZXIpO1xuICBjYWtlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNha2VJbWcpO1xuICBoaXN0b3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpbmNlVGV4dCk7XG4gIGhpc3RvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaGlzdG9yeVRleHQpO1xuICBzaW5jZVRleHQudGV4dENvbnRlbnQgPSBcIkNvb2tpbmcgU2luY2UgMTk3OFwiO1xuICB3ZWxjb21lVGV4dE9uZS50ZXh0Q29udGVudCA9XG4gICAgXCJXZSBoYXZlIGJlZW4gYXQgeW91ciBzZXJ2aWNlIGZvciBtb3JlIHRoYW4gNDAgeWVhcnMuXCI7XG4gIHdlbGNvbWVUZXh0VHdvLnRleHRDb250ZW50ID1cbiAgICBcIldlIGFsd2F5cyB3b3JrIHdpdGggdGhlIGJlc3QgcXVhbGl0aWVzIG9mIG1lYXQsIHBhc3RhIGFuZCBmaXNoLlwiO1xuICB3ZWxjb21lVGV4dFRocmVlLnRleHRDb250ZW50ID1cbiAgICBcIldlIGhhdmUgYmVlbiBjaG9zZW4gdGhpcyB5ZWFyIGFzIHRoZSBiZXN0IGxvY2FsIE1lZGl0ZXJyYW5lYW4gZm9vZCByZXN0YXVyYW50LlwiO1xuICBoaXN0b3J5VGV4dC5hcHBlbmRDaGlsZCh3ZWxjb21lVGV4dE9uZSk7XG4gIGhpc3RvcnlUZXh0LmFwcGVuZENoaWxkKHdlbGNvbWVUZXh0VHdvKTtcbiAgaGlzdG9yeVRleHQuYXBwZW5kQ2hpbGQod2VsY29tZVRleHRUaHJlZSk7XG4gIHJldHVybiBob21lQ29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcbiIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gXCIuL2hvbWVcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvZ28uc3JjID0gXCIuL2ltZy9sb2dvLnN2Z1wiO1xuICBsb2dvLmFsdCA9IFwiVGhyZWUgRm9ya3MgbG9nb1wiO1xuICBob21lQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS1idG5cIik7XG4gIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51LWJ0blwiKTtcbiAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtYnRuXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nby1jb250YWluZXJcIik7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1jb250YWluZXJcIik7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaHJlZSBGb3JrcyBSZXN0YXVyYW50XCI7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcbiAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgYXV0aG9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGdoTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBhdXRob3JJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IG1lbnRpb25Db250YWluZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhdXRob3JDb250YWluZXIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgYXV0aG9yQ29udGFpbmVyLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsb3Nmcm9udGVuZFwiO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgZm9vdGVyTmF2LmNsYXNzTGlzdC5hZGQoXCJmb290ZXItbmF2XCIpO1xuICBhdXRob3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImF1dGhvci1jb250YWluZXJcIik7XG4gIGdoTG9nby5jbGFzc0xpc3QuYWRkKFwiZmEtYnJhbmRzXCIpO1xuICBnaExvZ28uY2xhc3NMaXN0LmFkZChcImZhLWdpdGh1YlwiKTtcbiAgYXV0aG9ySW5mby5jbGFzc0xpc3QuYWRkKFwiYXV0aG9yLWluZm9cIik7XG4gIG1lbnRpb25Db250YWluZXJPbmUuY2xhc3NMaXN0LmFkZChcIm1lbnRpb24tY29udGFpbmVyLW9uZVwiKTtcbiAgbWVudGlvbkNvbnRhaW5lck9uZS5pbm5lckhUTUwgPSBgIDxzcGFuPlBob3RvIGJ5IDxhIGNsYXNzPVwibWVudGlvbi1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgICBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vZXMvQGFubmFfdHVraGZhdHVsbGluYT91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIj5Bbm5hIFR1a2hmYXR1bGxpbmE8L2E+IGluIDxhIGNsYXNzPVwibWVudGlvbi1saW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL2VzL2ZvdG9zL3RhcnRhLWRlLWZyYW1idWVzYS1NenktT2p0Q0k3MD91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIj5VbnNwbGFzaDwvYT48L3NwYW4+YDtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck5hdik7XG4gIGZvb3Rlck5hdi5hcHBlbmRDaGlsZChhdXRob3JDb250YWluZXIpO1xuICBhdXRob3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2hMb2dvKTtcbiAgYXV0aG9ySW5mby50ZXh0Q29udGVudCA9IGAgQ29kZWQgYnkgY2FybG9zZnJvbnRlbmQgLSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gO1xuICBhdXRob3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYXV0aG9ySW5mbyk7XG4gIGZvb3Rlck5hdi5hcHBlbmRDaGlsZChtZW50aW9uQ29udGFpbmVyT25lKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5jb25zdCBzaXRlID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaXRlO1xuIiwiaW1wb3J0IHNpdGUgZnJvbSBcIi4vc2l0ZVwiO1xuXG5jb25zdCBpbml0aWFsUGFnZUxvYWRlciA9ICgpID0+IHtcbiAgc2l0ZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkZXI7XG4iLCJpbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgaW5pdGlhbFBhZ2VMb2FkZXIgZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkZXJcIjtcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gXCIuL21lbnVcIjtcblxuaW5pdGlhbFBhZ2VMb2FkZXIoKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUtYnRuXCIpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudS1idG5cIik7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWJ0blwiKTtcblxuY29uc3QgcmVtb3ZlQ29udGVudCA9ICgpID0+IHtcbiAgbWFpbi5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3Qgc2hvd3NIb21lID0gKCkgPT4ge1xuICByZW1vdmVDb250ZW50KCk7XG4gIG1haW4uYXBwZW5kKGNyZWF0ZUhvbWUoKSk7XG59O1xuXG5jb25zdCBzaG93c01lbnUgPSAoKSA9PiB7XG4gIHJlbW92ZUNvbnRlbnQoKTtcbiAgbWFpbi5hcHBlbmQoY3JlYXRlTWVudSgpKTtcbn07XG5cbmNvbnN0IHNob3dzQ29udGFjdCA9ICgpID0+IHtcbiAgcmVtb3ZlQ29udGVudCgpO1xuICBtYWluLmFwcGVuZChjcmVhdGVDb250YWN0KCkpO1xufTtcblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd3NIb21lKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dzTWVudSk7XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93c0NvbnRhY3QpO1xuIiwiY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlcm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHN0YXJ0ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbkNvdXJzZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc3NlcnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdGFydGVyc0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBzdGFydGVyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBtYWluQ291cnNlTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IG1haW5Db3Vyc2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgZGVzc2VydExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBkZXNzZXJ0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGJveGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3RhcnRlck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdGFydGVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHN0YXJ0ZXJUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzdGFydGVyRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBtYWluT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG1haW5Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbWFpblRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG1haW5Gb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGRlc3NlcnRPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZGVzc2VydFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkZXNzZXJ0VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZGVzc2VydEZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYm94ZXMuY2xhc3NMaXN0LmFkZChcImJveGVzXCIpO1xuICBzdGFydGVyc0xvZ28uY2xhc3NMaXN0LmFkZChcInNhbGFkLWxvZ29cIik7XG4gIG1haW5Db3Vyc2VMb2dvLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWxvZ29cIik7XG4gIGRlc3NlcnRMb2dvLmNsYXNzTGlzdC5hZGQoXCJjYWtlLWxvZ29cIik7XG4gIHN0YXJ0ZXJzTG9nby5zcmMgPSBcIi4vaW1nL3NhbGFkLnN2Z1wiO1xuICBzdGFydGVyc0xvZ28uYWx0ID0gXCJBIHNhbGFkIGxvZ29cIjtcbiAgc3RhcnRlcnNUaXRsZS5pbm5lclRleHQgPSBcIlNUQVJURVJTXCI7XG4gIG1haW5Db3Vyc2VMb2dvLnNyYyA9IFwiLi9pbWcvbWVhbC5zdmdcIjtcbiAgbWFpbkNvdXJzZUxvZ28uYWx0ID0gXCJBIG1lYWwgbG9nb1wiO1xuICBtYWluQ291cnNlVGl0bGUuaW5uZXJUZXh0ID0gXCJNQUlOIENPVVJTRVwiO1xuICBkZXNzZXJ0TG9nby5zcmMgPSBcIi4vaW1nL2Nha2UtbG9nby5zdmdcIjtcbiAgZGVzc2VydExvZ28uYWx0ID0gXCJBIGNha2UgbG9nb1wiO1xuICBkZXNzZXJ0VGl0bGUuaW5uZXJUZXh0ID0gXCJERVNTRVJUXCI7XG4gIGhlYWRlckxvZ28uc3JjID0gXCIuL2ltZy9jaGVmLWljb24uc3ZnXCI7XG4gIGhlYWRlckxvZ28uYWx0ID0gXCJBIGNoaWVmIGxvZ29cIjtcbiAgaGVhZGVyTG9nby5jbGFzc0xpc3QuYWRkKFwiY2hlZi1sb2dvXCIpO1xuICBoZWFkZXJtZW51LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItbWVudVwiKTtcbiAgaGVhZGVyVGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlci10aXRsZVwiKTtcbiAgc3RhcnRlcnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0YXJ0ZXJzLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvdXJzZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbmNvdXJzZS1jb250YWluZXJcIik7XG4gIGRlc3NlcnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc3NlcnQtY29udGFpbmVyXCIpO1xuICBoZWFkZXJUaXRsZS5pbm5lclRleHQgPSBcIk9VUiBNRU5VXCI7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuICBoZWFkZXJtZW51LmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuICBoZWFkZXJtZW51LmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJtZW51KTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChib3hlcyk7XG4gIGJveGVzLmFwcGVuZENoaWxkKHN0YXJ0ZXJzQ29udGFpbmVyKTtcbiAgYm94ZXMuYXBwZW5kQ2hpbGQobWFpbkNvdXJzZUNvbnRhaW5lcik7XG4gIGJveGVzLmFwcGVuZENoaWxkKGRlc3NlcnRDb250YWluZXIpO1xuICBzdGFydGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydGVyc0xvZ28pO1xuICBzdGFydGVyT25lLmNsYXNzTGlzdC5hZGQoXCJzdGFydGVyLW9uZVwiKTtcbiAgc3RhcnRlclR3by5jbGFzc0xpc3QuYWRkKFwic3RhcnRlci10d29cIik7XG4gIHN0YXJ0ZXJUaHJlZS5jbGFzc0xpc3QuYWRkKFwic3RhcnRlci10aHJlZVwiKTtcbiAgc3RhcnRlckZvdXIuY2xhc3NMaXN0LmFkZChcInN0YXJ0ZXItZm91clwiKTtcbiAgbWFpbk9uZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1vbmVcIik7XG4gIG1haW5Ud28uY2xhc3NMaXN0LmFkZChcIm1haW4tdHdvXCIpO1xuICBtYWluVGhyZWUuY2xhc3NMaXN0LmFkZChcIm1haW4tdGhyZWVcIik7XG4gIG1haW5Gb3VyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWZvdXJcIik7XG4gIGRlc3NlcnRPbmUuY2xhc3NMaXN0LmFkZChcImRlc3NlcnQtb25lXCIpO1xuICBkZXNzZXJ0VHdvLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0LXR3b1wiKTtcbiAgZGVzc2VydFRocmVlLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0LXRocmVlXCIpO1xuICBkZXNzZXJ0Rm91ci5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydC1mb3VyXCIpO1xuICBzdGFydGVyT25lLmlubmVySFRNTCA9IFwiTWVkaXRlcnJhbmVhbiBzYWxhZFwiO1xuICBzdGFydGVyVHdvLmlubmVySFRNTCA9IFwiQW5kYWx1c2lhbiBnYXpwYWNob1wiO1xuICBzdGFydGVyVGhyZWUuaW5uZXJIVE1MID0gXCJIYW0gYW5kIGNoZWVzZSBzYWludCBqYWNvYnNcIjtcbiAgc3RhcnRlckZvdXIuaW5uZXJIVE1MID0gXCJDYXN0aWxpYW4gc291cFwiO1xuICBtYWluT25lLmlubmVySFRNTCA9IFwiQmVlZiByYWdvdXRcIjtcbiAgbWFpblR3by5pbm5lckhUTUwgPSBcIkJha2VkIG1hY2Fyb25pIHdpdGggc2lybG9pblwiO1xuICBtYWluVGhyZWUuaW5uZXJIVE1MID0gXCJMYW1iIGNob3BzXCI7XG4gIG1haW5Gb3VyLmlubmVySFRNTCA9IFwiRnJpZWQgdHVyYm90IHdpdGggcG90YXRvZXNcIjtcbiAgZGVzc2VydE9uZS50ZXh0Q29udGVudCA9ICdIb21lbWFkZSBjaGVlc2UgYW5kIGJsdWViZXJyeSBwaWUnO1xuICBkZXNzZXJ0VHdvLnRleHRDb250ZW50ID0gJ0Nob2NvbGF0ZSBhbmQgcGlzdGFjaGlvIG1hY2FkYW1pYSBudXQgaWNlIGNyZWFtJztcbiAgZGVzc2VydFRocmVlLnRleHRDb250ZW50ID0gJ0NhdGFsYW4gY3JlYW0nO1xuICBkZXNzZXJ0Rm91ci5pbm5lclRleHQgPSAnRnJlc2ggZnJ1aXQnO1xuICBzdGFydGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydGVyc1RpdGxlKTtcbiAgc3RhcnRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRlck9uZSk7XG4gIHN0YXJ0ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0ZXJUd28pO1xuICBzdGFydGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydGVyVGhyZWUpO1xuICBzdGFydGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydGVyRm91cik7XG4gIG1haW5Db3Vyc2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvdXJzZUxvZ28pO1xuICBtYWluQ291cnNlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5Db3Vyc2VUaXRsZSk7XG4gIG1haW5Db3Vyc2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbk9uZSk7XG4gIG1haW5Db3Vyc2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblR3byk7XG4gIG1haW5Db3Vyc2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRocmVlKTtcbiAgbWFpbkNvdXJzZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluRm91cik7XG4gIGRlc3NlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydExvZ28pO1xuICBkZXNzZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc3NlcnRUaXRsZSk7XG4gIGRlc3NlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydE9uZSk7XG4gIGRlc3NlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydFR3byk7XG4gIGRlc3NlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydFRocmVlKTtcbiAgZGVzc2VydENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0Rm91cik7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcbiJdLCJuYW1lcyI6WyJob21lQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2FrZUNvbnRhaW5lciIsImhpc3RvcnlDb250YWluZXIiLCJoaXN0b3J5VGV4dCIsInNpbmNlVGV4dCIsImNha2VJbWciLCJ3ZWxjb21lVGV4dE9uZSIsIndlbGNvbWVUZXh0VHdvIiwid2VsY29tZVRleHRUaHJlZSIsInNyYyIsImNsYXNzTGlzdCIsImFkZCIsImFsdCIsImFwcGVuZENoaWxkIiwidGV4dENvbnRlbnQiLCJtYWluIiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJsb2dvQ29udGFpbmVyIiwidGl0bGVDb250YWluZXIiLCJsb2dvIiwidGl0bGUiLCJuYXYiLCJob21lQnRuIiwibWVudUJ0biIsImNvbnRhY3RCdG4iLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVIZWFkZXIiLCJmb290ZXIiLCJmb290ZXJOYXYiLCJhdXRob3JDb250YWluZXIiLCJnaExvZ28iLCJhdXRob3JJbmZvIiwibWVudGlvbkNvbnRhaW5lck9uZSIsInRhcmdldCIsImhyZWYiLCJpbm5lckhUTUwiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJjcmVhdGVGb290ZXIiLCJyZW1vdmVDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZCIsImVsZW1lbnQiLCJoZWFkZXJtZW51IiwiaGVhZGVyTG9nbyIsImhlYWRlclRpdGxlIiwic3RhcnRlcnNDb250YWluZXIiLCJtYWluQ291cnNlQ29udGFpbmVyIiwiZGVzc2VydENvbnRhaW5lciIsInN0YXJ0ZXJzTG9nbyIsInN0YXJ0ZXJzVGl0bGUiLCJtYWluQ291cnNlTG9nbyIsIm1haW5Db3Vyc2VUaXRsZSIsImRlc3NlcnRMb2dvIiwiZGVzc2VydFRpdGxlIiwiYm94ZXMiLCJzdGFydGVyT25lIiwic3RhcnRlclR3byIsInN0YXJ0ZXJUaHJlZSIsInN0YXJ0ZXJGb3VyIiwibWFpbk9uZSIsIm1haW5Ud28iLCJtYWluVGhyZWUiLCJtYWluRm91ciIsImRlc3NlcnRPbmUiLCJkZXNzZXJ0VHdvIiwiZGVzc2VydFRocmVlIiwiZGVzc2VydEZvdXIiLCJpbm5lclRleHQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==