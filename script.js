const elementSelector = id => document.getElementById(id);

elementSelector('bold_text').addEventListener('click', function (e) {
    elementSelector('my_text').classList.toggle('bold')
})

elementSelector('italic_text').addEventListener('click', function (e) {
    elementSelector('my_text').classList.toggle('italic')
})

elementSelector('underline_text').addEventListener('click', function (e) {
    elementSelector('my_text').classList.toggle('underline')
})

elementSelector('left_aligned_text').addEventListener('click', function (e) {
    elementSelector('my_text').style.textAlign = 'left';
})
elementSelector('right_aligned_text').addEventListener('click', function (e) {
    elementSelector('my_text').style.textAlign = 'right';
})
elementSelector('center_aligned_text').addEventListener('click', function (e) {
    elementSelector('my_text').style.textAlign = 'center';
})
elementSelector('justify_aligned_text').addEventListener('click', function (e) {
    elementSelector('my_text').style.textAlign = 'justify';
})

elementSelector('text_transformer').addEventListener('click', function () {
    elementSelector('my_text').classList.toggle('justify_align')
})

elementSelector('text_transformer').addEventListener('click', function () {
    if (elementSelector('my_text').style.textTransform === ''   ||
        elementSelector('my_text').style.textTransform === 'lowercase') {
        elementSelector('my_text').style.textTransform = 'capitalize';
    } else if (elementSelector('my_text').style.textTransform === 'capitalize') {
        elementSelector('my_text').style.textTransform = 'uppercase'
    } else if (elementSelector('my_text').style.textTransform === 'uppercase') {
        elementSelector('my_text').style.textTransform = 'lowercase'
    }
})

elementSelector('color_changer').addEventListener('change', function (e) {
    elementSelector('my_text').style.color = e.target.value
})