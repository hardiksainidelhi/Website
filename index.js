const logoDiv = $('#name-logo img')


var profList = [
    'a<br><span class="special">student 📚</span>',
     'an<br>aspiring <span class="special">Data Scientist 📊</span>',
     'an<br><span class="special">Economics enthusiast 💱</span> ',
     'a<br><span class="special">Musician 🥁</span>'
]

var profIndex = 1
setInterval(function(){
    $('#profList').fadeOut(function(){
        if (profIndex != (profList.length-1)){
            this.innerHTML = profList[profIndex]
            profIndex++
        }
        else{
            this.innerHTML = profList[profList.length-1]
            profIndex = 0
        }
    })
    $('#profList').fadeIn()
},3000)

console.log(profList.length)


$('.project').each(function() {
    $(this).on('mouseenter', function() {
        $(this).css({
            'transform': 'scale(1.05)', // Increase size by 10%
            'transition': 'transform 0.3s ease' // Smooth transition effect
        });
    });
    $(this).on('mouseleave', function() {
        $(this).css({
            'transform': 'scale(1)', // Reset size to normal
        });
    });
});

function scrollDiv(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      })
    
}


$(document).ready(function() {
    $('.project').click(function() {
        // Reset background color and hide all descriptions
        $('.project').css('background-color', 'white');
        $('.project-description').css('display', 'none');

        // Get the index of the clicked project
        var projectNumber = $('.project').index($(this));

        // Display the description of the clicked project
        $('.project-description').eq(projectNumber).css('display', 'block');

        // Set background color for the clicked project
        $(this).css('background-color', 'rgba(132, 185, 127, 0.471)');
    });
});


