const links = [
        {
            label: "Week1 Notes",
            url: "week1/index.html",
        }
        ,
        {
            label: "Week2 Notes",
            url: "week2/index.html",
        }
        ,
        {
            label: "Week3 Notes",
            url: "week3/index.html",
        }
        ,
        {
            label: "Week4 Notes",
            url: "week4/index.html",
        }
        ,
        {
            label: "Week5 Notes",
            url: "week5/index.html",
        }
        ,
        {
            label: "Week6 Notes",
            url: "week6/index.html",
        }
        ,
        {
            label: "Week7 Notes",
            url: "week7/index.html",
        }
        ,
        {
            label: "Week8 Notes",
            url: "week8/index.html",
        }
        ,
        {
            label: "Week9 Notes",
            url: "week9/index.html",
        }
        ,
        {
            label: "Week10 Notes",
            url: "week10/index.html",
        }
        ,
        {
            label: "Week11 Notes",
            url: "week11/index.html",
        }
        ,
        {
            label: "Final Project",
            url: "project/project.html",
        }
        

    ]

    function refreshWeeks() {
        for(var i = 0; i < links.length; i++){

    var weekList = document.getElementById("weeks");
    var liElement = document.createElement("li");
    var linkElement = document.createElement("a");
    linkElement.textContent = links[i].label;
    linkElement.setAttribute('href', links[i].url);
    liElement.appendChild(linkElement);
    weekList.appendChild(liElement);
       }
    }