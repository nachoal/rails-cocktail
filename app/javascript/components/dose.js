import swal from 'sweetalert';

function alertOnDestroy() {
  const doses = document.querySelectorAll('.destroy_dose');
  if (doses) {
    doses.forEach((dose) => {
      dose.addEventListener('click', (event) => {
        swal('Are you sure you want to do this?', {
          buttons: ['Oh noez!', 'Aww yiss!'],
        });
      });
    });
  }
}

export { alertOnDestroy };
