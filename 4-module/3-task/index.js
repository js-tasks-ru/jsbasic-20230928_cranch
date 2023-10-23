function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[3].dataset.available) {
      switch (table.rows[i].cells[3].dataset.available) {
        case 'true':
          table.rows[i].classList.add('available');
          break;
        case 'false':
          table.rows[i].classList.add('unavailable');
          break;
      }
    } else {
      table.rows[i].hidden = true;
    }

    switch (table.rows[i].cells[2].innerText) {
      case 'm':
        table.rows[i].classList.add('male');
        break;
      case 'f':
        table.rows[i].classList.add('female');
        break;
    }

    if (Number(table.rows[i].cells[1].innerText) < 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }

  }
}
