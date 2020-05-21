/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

const domain = 'meet.jit.si';

const options = {
    roomName: 'code2',
    width: 700,
    height: 700,
    // interfaceConfigOverwrite: { 
    //   DEFAULT_REMOTE_DISPLAY_NAME: 'fellow coder',
    //   FILM_STRIP_MAX_HEIGHT: 200,
    //   filmStripOnly: true,
    //   VERTICAL_FILMSTRIP: false // film strip horizontal
    // },
    parentNode: document.querySelector('#meet')
};

const api = new JitsiMeetExternalAPI(domain, options);