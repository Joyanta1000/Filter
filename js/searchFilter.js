function toFilterLoc() {
    var input, filter, i, txtValue;
    input = document.getElementById("searchLocation");
    filter = input.value.toUpperCase();
    section = document.getElementsByClassName("toFilter");

    for (i = 0; i < section.length; i++) {
        tags = section[i].getElementsByClassName("district");
        for (j = 0; j < tags.length; j++) {

            txtValue = tags[j].textContent || tags[j].innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tags[j].classList.remove("hide");
            } else {
                tags[j].classList.add("hide");
            }

        }
    }
}