let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const projects = document.querySelector('.projects');
const info = document.getElementsByClassName('project-info');
const title = document.getElementsByClassName('project-title');
const body = document.getElementsByClassName('project-body');
const buttons = document.getElementsByClassName('project-buttons');

if (isMobile) {
    for (let i = 0; i < info.length; i++) {
        projects.style.gap = '3em';
        info[i].style.textAlign = 'left';
        info[i].style.backgroundColor = '#f4e4e1';
        info[i].style.border = 'unset';
        info[i].style.opacity = 1;
        info[i].style.height = 'auto';
        info[i].style.padding = '1.5em';
        info[i].style.marginTop = '-0.3em';
        info[i].style.visibility = 'visible';
        info[i].style.position = 'initial';
        info[i].style.alignItems = 'start';
        title[i].style.color = '#2a3853';
        body[i].style.fontSize = '1rem';
        body[i].style.lineHeigth = '1.8';
        body[i].style.color = '#2a2a2a';
        body[i].style.margin = '1.5em 0 2em';
        buttons[i].style.width = '100%';
        buttons[i].style.textAlign = 'center';
        buttons[i].children[0].classList.add('btn', 'btn-main-dark');
        buttons[i].children[0].innerHTML = 'View on GitHub';
        buttons[i].children[1].classList.add('btn', 'btn-secondary-dark');
        buttons[i].children[1].innerHTML = 'View website';
        buttons[i].children[1].style.marginLeft = '0';
        buttons[i].children[1].style.marginTop = '1em';
    }
}
