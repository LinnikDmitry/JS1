let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let consoleStyles = {
    'h1': 'font: 1.5em/1 Arial;',
    'h2': 'font: italic 1.5em/1 Arial; ',
    'bold': 'font: bold 1.5em/1 Arial;'
    
};
function log ( msg, style ) {
    if ( !style || !consoleStyles[ style ] ) {
        style = 'bold';
    }
    console.log ( '%c' + msg, consoleStyles[ style ] );
}
log ( week[0], 'h1' );
log ( week[1], 'h2' );
log ( week[2], 'h1' );
log ( week[3], 'h1' );
log ( week[4], 'h1' );
log ( week[5], 'bold' );
log ( week[6], 'bold' );

