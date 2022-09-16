const links = [
    {
        label: "Week 1 notes",
        url: "/week1/index.html"
    },
]

ol = document.querySelector('ol.contents-table');

for (let i = 0; i < links.length; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = links[i].label;
    a.setAttribute('href', links[i].url);
    ol.appendChild(li);
    li.appendChild(a);
};