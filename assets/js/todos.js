//check of specifing todos' s by clicking 
$('ul').on("click", "li", function() {
        $(this).toggleClass('completed')
    })
    //click on X delete li todo
$('ul').on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    })
    event.stopPropagation()
})

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        // grabbing new ToDo text from inpu
        let todoText = $(this).val()
        $(this).val("")
            //create a new li and add to ul
        $("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`)
        $("input").trigger("reset ")
    }
})

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle()
})