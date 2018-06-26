// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid() {

    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    let table = document.getElementById('pixelCanvas');

    table.innerHTML = '';

    let tbody = document.createElement('tbody');

    for (var i = 0; i < height; i++) {

        var tr = document.createElement('tr');

        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    document.getElementById('inputHeight').value = 1;
    document.getElementById('inputWidth').value = 1;

}

//jQuery to change color of pixel when clicked.
$('body').on('click', 'td', function() {

	let color = document.getElementById('colorPicker').value;
  if ($(this).attr('style')) {
    $(this).removeAttr('style');
  } else {
    $(this).css('background-color', color);
  }
});
