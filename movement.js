// function colour() {
//     let target = document.querySelector('body');
//     if(document.querySelector('#dark_mode').value === 'Dark Mode') {
//         target.style.backgroundColor = 'navy';
//         target.style.color = 'white';
//         document.querySelector('.yellow').style.color = '#fdd835';
        
//         document.querySelector('#dark_mode').value = 'Light Mode';
//     } else {
//         target.style.backgroundColor = '#F1FF03';
//         target.style.color = 'black';
//         document.querySelector('.yellow').style.color = 'navy';
//         document.querySelector('#dark_mode').value = 'Dark Mode';
//     }
// }

function colour() {
        let target = document.querySelector('body');
        if(document.querySelector('#dark_mode').value === 'Dark Mode') {
            target.style.backgroundColor = 'navy';
            target.style.color = 'white';
            let yellowAll = document.querySelectorAll('.yellow');
            for(let i = 0; i < yellowAll.length; i++) {
                yellowAll[i].style.color = "yellow";
            }

            document.querySelector('#dark_mode').value = 'Light Mode';
        } else {
            target.style.backgroundColor = '#F1FF03';
            target.style.color = 'black';
            let yellowAll = document.querySelectorAll('.yellow');
            for(let i = 0; i < yellowAll.length; i++) {
                yellowAll[i].style.color = "navy";
            }
            document.querySelector('#dark_mode').value = 'Dark Mode';
        }
    }